import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Menu, 
  ShoppingCart, 
  User, 
  LogOut,
  Phone,
  Info,
  MapPin,
  Mail,
  Shield,
  FileText,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const { itemCount } = useCart();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-card border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">FD</span>
              </div>
              <Link to="/" className="text-xl font-bold text-foreground hover:text-primary">
                FoodDelivery
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                  isActive('/') ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-accent'
                }`}
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
              <Link
                to="/menu"
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                  isActive('/menu') ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-accent'
                }`}
              >
                <Menu className="w-4 h-4" />
                Menu
              </Link>
              <Link
                to="/about"
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                  isActive('/about') ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-accent'
                }`}
              >
                <Info className="w-4 h-4" />
                About
              </Link>
              <Link
                to="/contact"
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                  isActive('/contact') ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-accent'
                }`}
              >
                <Phone className="w-4 h-4" />
                Contact
              </Link>
            </nav>
            
            <div className="flex items-center gap-3">
              <Link to="/cart" className="relative">
                <Button variant="ghost" size="sm">
                  <ShoppingCart className="w-4 h-4" />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Button>
              </Link>
              
              <Link to="/profile">
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4" />
                </Button>
              </Link>
              
              <Button variant="ghost" size="sm" onClick={logout}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">FD</span>
                </div>
                <span className="text-xl font-bold text-foreground">FoodDelivery</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Never wonder "Where's my food?" again. Track your food orders in real-time from restaurant to your doorstep.
              </p>
              <div className="flex gap-3">
                <Button variant="ghost" size="sm">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Instagram className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/menu" className="block text-muted-foreground hover:text-primary text-sm">
                  Our Menu
                </Link>
                <Link to="/about" className="block text-muted-foreground hover:text-primary text-sm">
                  About Us
                </Link>
                <Link to="/contact" className="block text-muted-foreground hover:text-primary text-sm">
                  Contact
                </Link>
                <Link to="/profile" className="block text-muted-foreground hover:text-primary text-sm">
                  My Profile
                </Link>
              </div>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Support</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary text-sm">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Terms of Service
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary text-sm">
                  <Shield className="w-4 h-4 inline mr-2" />
                  Privacy Policy
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary text-sm">
                  <Info className="w-4 h-4 inline mr-2" />
                  FAQs
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary text-sm">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Customer Support
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>123 Food Street, City, State 12345</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Mail className="w-4 h-4" />
                  <span>support@fooddelivery.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 FoodDelivery. All rights reserved. Built with React, Tailwind CSS, and integrated with delivery APIs.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;