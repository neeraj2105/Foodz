
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search, Star, Clock, Utensils, Truck, Shield } from 'lucide-react';
import DeliveryMap from '@/components/DeliveryMap';
import OrderSummary from '@/components/OrderSummary';
import DeliveryStatus from '@/components/DeliveryStatus';
import { foodItems } from '@/data/menuData';
import { useCart } from '@/contexts/CartContext';
import heroImage from '@/assets/delivery-hero.jpg';

const Index = () => {
  const [currentStatus, setCurrentStatus] = useState('preparing');
  const [estimatedTime, setEstimatedTime] = useState(25);
  const [featuredItems] = useState(foodItems.slice(0, 8));
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Simulate real-time status updates
  useEffect(() => {
    const statusTimeline = [
      { status: 'preparing', time: 25, delay: 0 },
      { status: 'out_for_delivery', time: 15, delay: 8000 },
      { status: 'delivered', time: 0, delay: 25000 }
    ];

    statusTimeline.forEach(({ status, time, delay }) => {
      setTimeout(() => {
        setCurrentStatus(status);
        setEstimatedTime(time);
      }, delay);
    });
  }, []);

  const mockOrder = {
    orderNumber: "FD2024-7891",
    restaurant: {
      name: "Mario's Italian Kitchen",
      rating: 4.8,
      address: "123 Foodie Street, Downtown",
      phone: "+1 (555) 123-4567"
    },
    items: [
      { name: "Margherita Pizza", quantity: 1, price: 18.99 },
      { name: "Caesar Salad", quantity: 1, price: 12.50 },
      { name: "Garlic Bread", quantity: 2, price: 7.99 }
    ],
    total: 39.48,
    orderTime: "2:15 PM",
    estimatedDelivery: "3:00 PM"
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-delivery-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold text-foreground leading-tight">
                  Never wonder <span className="text-primary">"Where's my food?"</span> again
                </h1>
                <p className="text-xl text-muted-foreground">
                  Track your food orders in real-time from restaurant to your doorstep — live on the map.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-delivery-green rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Tracking</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-delivery-blue rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Real-time ETA</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-delivery-orange rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">200+ Restaurants</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" onClick={() => navigate('/menu')}>
                  <Utensils className="w-5 h-5 mr-2" />
                  Browse Menu
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate('/about')}>
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Food Delivery Tracker App" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose FoodDelivery?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the future of food delivery with our advanced tracking technology and seamless ordering process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-muted-foreground">
                Watch your order journey from kitchen to doorstep with live GPS tracking and updates.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-delivery-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Average delivery time of 25-35 minutes with accurate ETA calculations.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-delivery-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-muted-foreground">
                Multiple payment options including card, PayPal, and cash on delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Items</h2>
            <p className="text-muted-foreground">
              Discover our most popular dishes from top-rated restaurants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{item.name}</h3>
                    <div className="flex items-center gap-1 text-delivery-orange">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm">{item.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      ₹{item.price}
                    </span>
                    <Button 
                      size="sm"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" onClick={() => navigate('/menu')}>
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Live Demo</h2>
            <p className="text-muted-foreground">
              Watch a real-time order simulation to see how our tracking works
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Live Tracking</h3>
                <DeliveryMap orderStatus={currentStatus} estimatedTime={estimatedTime} />
              </Card>
              
              <DeliveryStatus currentStatus={currentStatus} />
            </div>
            
            <div className="space-y-6">
              <OrderSummary {...mockOrder} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
