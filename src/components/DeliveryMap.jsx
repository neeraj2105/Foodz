
import React, { useState, useEffect } from 'react';
import { MapPin, Truck, Clock, CheckCircle2 } from 'lucide-react';

const DeliveryMap = ({ orderStatus, estimatedTime }) => {
  const [deliveryProgress, setDeliveryProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDeliveryProgress((prev) => {
        if (orderStatus === 'preparing') return Math.min(prev + 0.5, 25);
        if (orderStatus === 'out_for_delivery') return Math.min(prev + 1, 85);
        if (orderStatus === 'delivered') return 100;
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [orderStatus]);

  return (
    <div className="relative bg-delivery-light rounded-xl p-4 h-96 overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-delivery-bg to-delivery-dark opacity-20" />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6">
        {orderStatus === 'preparing' && <Clock size={48} className="text-yellow-500" />}
        {orderStatus === 'out_for_delivery' && <Truck size={48} className="text-blue-500" />}
        {orderStatus === 'delivered' && <CheckCircle2 size={48} className="text-green-500" />}

        <p className="text-xl font-semibold">
          {orderStatus === 'preparing' && 'Your food is being prepared'}
          {orderStatus === 'out_for_delivery' && 'Your order is on the way'}
          {orderStatus === 'delivered' && 'Order delivered'}
        </p>

        <div className="w-full bg-gray-300 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${deliveryProgress}%` }}
          />
        </div>

        <p className="text-sm text-gray-600">Estimated Time: {estimatedTime} minutes</p>
      </div>
    </div>
  );
};

export default DeliveryMap;
