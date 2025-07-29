
import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MapPin, CreditCard, Truck, Clock, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [deliveryAddress, setDeliveryAddress] = useState({
    street: user?.address || '',
    city: '',
    state: '',
    zipCode: '',
    instructions: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const deliveryFee = 319;
  const tax = Math.round(total * 0.08);
  const finalTotal = total + deliveryFee + tax;

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Save order to localStorage
    const order = {
      id: Date.now().toString(),
      items,
      total: finalTotal,
      address: deliveryAddress,
      paymentMethod,
      status: 'preparing',
      orderTime: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 30 * 60000).toISOString()
    };
    
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    clearCart();
    navigate('/order-success', { state: { orderId: order.id } });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">Checkout</h1>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Forms */}
        <div className="space-y-6">
          {/* Delivery Address */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Delivery Address</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Street Address</label>
                <Input
                  value={deliveryAddress.street}
                  onChange={(e) => setDeliveryAddress({...deliveryAddress, street: e.target.value})}
                  placeholder="123 Main Street"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">City</label>
                  <Input
                    value={deliveryAddress.city}
                    onChange={(e) => setDeliveryAddress({...deliveryAddress, city: e.target.value})}
                    placeholder="New York"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">State</label>
                  <Input
                    value={deliveryAddress.state}
                    onChange={(e) => setDeliveryAddress({...deliveryAddress, state: e.target.value})}
                    placeholder="NY"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">ZIP Code</label>
                <Input
                  value={deliveryAddress.zipCode}
                  onChange={(e) => setDeliveryAddress({...deliveryAddress, zipCode: e.target.value})}
                  placeholder="10001"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Delivery Instructions</label>
                <Input
                  value={deliveryAddress.instructions}
                  onChange={(e) => setDeliveryAddress({...deliveryAddress, instructions: e.target.value})}
                  placeholder="Ring doorbell, leave at door, etc."
                />
              </div>
            </div>
          </Card>

          {/* Payment Method */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Payment Method</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button
                  variant={paymentMethod === 'card' ? 'default' : 'outline'}
                  onClick={() => setPaymentMethod('card')}
                  className="flex-1"
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Credit Card
                </Button>
                <Button
                  variant={paymentMethod === 'paypal' ? 'default' : 'outline'}
                  onClick={() => setPaymentMethod('paypal')}
                  className="flex-1"
                >
                  PayPal
                </Button>
                <Button
                  variant={paymentMethod === 'cash' ? 'default' : 'outline'}
                  onClick={() => setPaymentMethod('cash')}
                  className="flex-1"
                >
                  <DollarSign className="w-4 h-4 mr-2" />
                  Cash
                </Button>
              </div>
              
              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Card Number</label>
                    <Input
                      value={cardDetails.cardNumber}
                      onChange={(e) => setCardDetails({...cardDetails, cardNumber: e.target.value})}
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Expiry Date</label>
                      <Input
                        value={cardDetails.expiryDate}
                        onChange={(e) => setCardDetails({...cardDetails, expiryDate: e.target.value})}
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">CVV</label>
                      <Input
                        value={cardDetails.cvv}
                        onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                        placeholder="123"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                    <Input
                      value={cardDetails.cardholderName}
                      onChange={(e) => setCardDetails({...cardDetails, cardholderName: e.target.value})}
                      placeholder="John Doe"
                    />
                  </div>
                </div>
              )}
              
              {paymentMethod === 'cash' && (
                <div className="p-4 bg-delivery-light rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    You will pay cash upon delivery. Please have the exact amount ready.
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Right Column - Order Summary */}
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex-1">
                    <span className="font-medium">{item.quantity}x {item.name}</span>
                  </div>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t mt-4 pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee:</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>₹{tax}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t">
                <span>Total:</span>
                <span className="text-primary">₹{finalTotal}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Estimated Delivery</h3>
            </div>
            <p className="text-2xl font-bold text-primary">25-35 minutes</p>
            <p className="text-sm text-muted-foreground">From order confirmation</p>
          </Card>

          <Button 
            onClick={handlePlaceOrder}
            disabled={isProcessing}
            className="w-full"
            size="lg"
          >
            {isProcessing ? 'Processing...' : `Place Order - ₹${finalTotal}`}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
