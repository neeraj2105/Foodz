
import React from 'react';
import { CheckCircle2, Clock, Truck, ChefHat } from 'lucide-react';
import { Card } from '@/components/ui/card';

const DeliveryStatus = ({ currentStatus }) => {
  const getSteps = () => {
    return [
      {
        id: 'confirmed',
        title: 'Order Confirmed',
        description: 'Restaurant has received your order',
        icon: CheckCircle2,
        status: 'completed',
        time: '2:15 PM'
      },
      {
        id: 'preparing',
        title: 'Preparing Your Food',
        description: 'Chef is working on your delicious meal',
        icon: ChefHat,
        status: currentStatus === 'preparing' ? 'current' : 'completed',
        time: '2:25 PM'
      },
      {
        id: 'out_for_delivery',
        title: 'Out for Delivery',
        description: 'Delivery partner is on the way',
        icon: Truck,
        status: currentStatus === 'out_for_delivery' ? 'current' : currentStatus === 'delivered' ? 'completed' : 'pending',
        time: '2:45 PM'
      },
      {
        id: 'delivered',
        title: 'Delivered',
        description: 'Order delivered to your doorstep',
        icon: Clock,
        status: currentStatus === 'delivered' ? 'current' : 'pending',
        time: '3:00 PM'
      }
    ];
  };

  const steps = getSteps();

  return (
    <div className="space-y-4">
      {steps.map((step) => {
        const Icon = step.icon;
        return (
          <Card key={step.id} className="flex items-center p-4 space-x-4 shadow-sm">
            <Icon className={`w-6 h-6 ${step.status === 'completed' ? 'text-green-500' : step.status === 'current' ? 'text-blue-500' : 'text-gray-400'}`} />
            <div>
              <h4 className="font-semibold">{step.title}</h4>
              <p className="text-sm text-gray-500">{step.description}</p>
              <p className="text-xs text-gray-400">{step.time}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default DeliveryStatus;
