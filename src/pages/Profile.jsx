import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { User, Edit, Save, X } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || ''
  });

  const handleSave = () => {
    // In a real app, you'd update the user data here
    console.log('Saving user data:', editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      address: user?.address || ''
    });
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center gap-3 mb-8">
        <User className="w-8 h-8 text-primary" />
        <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)}>
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" onClick={handleCancel}>
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            {isEditing ? (
              <Input
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              />
            ) : (
              <p className="text-foreground">{user?.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            {isEditing ? (
              <Input
                type="email"
                value={editData.email}
                onChange={(e) => setEditData({ ...editData, email: e.target.value })}
              />
            ) : (
              <p className="text-foreground">{user?.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            {isEditing ? (
              <Input
                type="tel"
                value={editData.phone}
                onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
              />
            ) : (
              <p className="text-foreground">{user?.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Address</label>
            {isEditing ? (
              <Input
                value={editData.address}
                onChange={(e) => setEditData({ ...editData, address: e.target.value })}
              />
            ) : (
              <p className="text-foreground">{user?.address}</p>
            )}
          </div>
        </div>
      </Card>

      <Card className="p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Order History</h2>
        <div className="text-center py-8">
          <p className="text-muted-foreground">No orders yet. Start ordering to see your history!</p>
          <Button className="mt-4">Browse Menu</Button>
        </div>
      </Card>
    </div>
  );
};

export default Profile;