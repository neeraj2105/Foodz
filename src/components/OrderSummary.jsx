import React from 'react';
import { Clock, MapPin, Phone, Star } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const OrderSummary = ({
  orderNumber,
  restaurant,
  items,
  total,
  orderTime,
  estimatedDelivery
}) => {
  return (
    <Card className="p-6 space-y-6">
      {/* Header */}
      <div className="border-b pb-4">
        <h2 className="text-xl font-semibold mb-2">Order #{orderNumber}</h2>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Ordered at {orderTime}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            ETA: {estimatedDelivery}
          </span>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg">{restaurant.name}</h3>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-4 h-4 fill-delivery-orange text-delivery-orange" />
              <span className="text-sm font-medium">{restaurant.rating}</span>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Phone className="w-4 h-4 mr-2" />
            Call
          </Button>
        </div>

        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{restaurant.address}</span>
        </div>
      </div>

      {/* Order Items */}
      <div className="space-y-3">
        <h4 className="font-medium">Your Order</h4>
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
              <div className="flex-1">
                <span className="font-medium">{item.quantity}x</span>
                <span className="ml-2">{item.name}</span>
              </div>
              <span className="font-medium">₹{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Total */}
      <div className="border-t pt-4">
        <div className="flex justify-between items-center text-lg font-semibold">
          <span>Total</span>
          <span className="text-primary">₹{total}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <Button variant="outline">
          Order Again
        </Button>
        <Button>
          Track Order
        </Button>
      </div>
    </Card>
  );
};

export default OrderSummary;