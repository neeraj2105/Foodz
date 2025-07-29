import React, { useState, useMemo } from 'react';
import { Search, Filter, Star, Clock, Leaf, Flame, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { foodItems, categories } from '@/data/menuData';
import { useCart } from '@/contexts/CartContext';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [showVegetarianOnly, setShowVegetarianOnly] = useState(false);
  const [showSpicyOnly, setShowSpicyOnly] = useState(false);
  const [sortBy, setSortBy] = useState('name');

  const { addToCart, items: cartItems } = useCart();

  const filteredItems = useMemo(() => {
    let filtered = foodItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
      const matchesVeg = !showVegetarianOnly || item.isVegetarian;
      const matchesSpicy = !showSpicyOnly || item.isSpicy;

      return matchesSearch && matchesCategory && matchesPrice && matchesVeg && matchesSpicy;
    });

    // Sort items
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, priceRange, showVegetarianOnly, showSpicyOnly, sortBy]);

  const getCartQuantity = (itemId) => {
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      description: item.description
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Our Menu</h1>
        <p className="text-muted-foreground">Discover our delicious selection of food items</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search for food items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 items-center">
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-md bg-background"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-md bg-background"
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
            <option value="rating">Sort by Rating</option>
          </select>

          {/* Filter Buttons */}
          <Button
            variant={showVegetarianOnly ? "default" : "outline"}
            size="sm"
            onClick={() => setShowVegetarianOnly(!showVegetarianOnly)}
          >
            <Leaf className="w-4 h-4 mr-1" />
            Vegetarian
          </Button>

          <Button
            variant={showSpicyOnly ? "default" : "outline"}
            size="sm"
            onClick={() => setShowSpicyOnly(!showSpicyOnly)}
          >
            <Flame className="w-4 h-4 mr-1" />
            Spicy
          </Button>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing {filteredItems.length} of {foodItems.length} items
        </p>
      </div>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => {
          const cartQuantity = getCartQuantity(item.id);
          
          return (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-100 relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 flex gap-1">
                  {item.isVegetarian && (
                    <div className="bg-delivery-green text-white p-1 rounded-full">
                      <Leaf className="w-3 h-3" />
                    </div>
                  )}
                  {item.isSpicy && (
                    <div className="bg-delivery-orange text-white p-1 rounded-full">
                      <Flame className="w-3 h-3" />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <div className="flex items-center gap-1 text-delivery-orange">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm">{item.rating}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{item.preparationTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    ₹{item.price}
                  </span>
                  
                  {cartQuantity > 0 ? (
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          // You'd implement quantity decrease here
                        }}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="px-2 py-1 bg-primary text-primary-foreground rounded text-sm">
                        {cartQuantity}
                      </span>
                      <Button
                        size="sm"
                        onClick={() => handleAddToCart(item)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(item)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No items found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Menu;