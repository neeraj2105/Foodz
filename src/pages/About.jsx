import React from 'react';
import { Card } from '@/components/ui/card';
import { Clock, MapPin, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">About FoodDelivery</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Never wonder "Where's my food?" again. We're revolutionizing food delivery with real-time tracking and seamless ordering experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="p-6 text-center">
          <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-muted-foreground">Average delivery time of 25-35 minutes</p>
        </Card>

        <Card className="p-6 text-center">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Live Tracking</h3>
          <p className="text-muted-foreground">Real-time GPS tracking of your order</p>
        </Card>

        <Card className="p-6 text-center">
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">200+ Restaurants</h3>
          <p className="text-muted-foreground">Wide variety of cuisines to choose from</p>
        </Card>

        <Card className="p-6 text-center">
          <Award className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
          <p className="text-muted-foreground">Only the best restaurants and food</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              FoodDelivery was born from a simple frustration: not knowing where your food order is. We've all been there - waiting for food, wondering if it's being prepared, on the way, or stuck in traffic.
            </p>
            <p>
              That's why we created a platform that puts transparency first. With real-time tracking, you can see exactly where your food is at every step of the journey.
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              To make food delivery completely transparent and stress-free. We believe you should never have to wonder about your order status.
            </p>
            <p>
              Every order comes with real-time GPS tracking, estimated delivery times, and instant notifications about your order's progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;