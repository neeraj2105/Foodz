
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CheckCircle, Clock, MapPin, Phone } from 'lucide-react';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderId = location.state?.orderId || 'Unknown';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <CheckCircle className="w-16 h-16 text-delivery-green mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-foreground mb-2">Order Confirmed!</h1>
        <p className="text-muted-foreground">
          Thank you for your order. We're preparing your delicious meal now.
        </p>
      </div>

      <Card className="p-8 mb-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold mb-2">Order #{orderId}</h2>
          <p className="text-muted-foreground">
            Estimated delivery time: <span className="font-semibold text-primary">25-35 minutes</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-delivery-orange rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-1">Preparing</h3>
            <p className="text-sm text-muted-foreground">Your order is being prepared</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-delivery-blue rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-1">On the Way</h3>
            <p className="text-sm text-muted-foreground">Driver will pick up your order</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-delivery-green rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-1">Delivered</h3>
            <p className="text-sm text-muted-foreground">Enjoy your meal!</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">What's Next?</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <p className="font-medium">Track your order</p>
              <p className="text-sm text-muted-foreground">Monitor real-time progress on the main dashboard</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <p className="font-medium">Get notifications</p>
              <p className="text-sm text-muted-foreground">Receive updates when your order status changes</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div>
              <p className="font-medium">Rate your experience</p>
              <p className="text-sm text-muted-foreground">Help us improve by rating your order after delivery</p>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button 
          onClick={() => navigate('/')}
          className="w-full"
        >
          Track Your Order
        </Button>
        <Button 
          variant="outline"
          onClick={() => navigate('/menu')}
          className="w-full"
        >
          Order Again
        </Button>
      </div>

      <Card className="p-6 mt-6 bg-gradient-to-br from-primary/10 to-delivery-light">
        <div className="text-center">
          <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
          <p className="text-muted-foreground mb-4">
            Our customer support team is available 24/7 to assist you with any questions or concerns.
          </p>
          <Button variant="outline">
            <Phone className="w-4 h-4 mr-2" />
            Contact Support
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default OrderSuccess;
