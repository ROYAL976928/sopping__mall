import React, { useState } from 'react';
import { User, ShoppingBag, Heart, Settings } from 'lucide-react';

const UserAccount: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" id="phone" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Update Profile
              </button>
            </form>
          </div>
        );
      case 'orders':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
            <div className="space-y-4">
              {/* Placeholder for order history */}
              {[1, 2, 3].map((order) => (
                <div key={order} className="border rounded-md p-4">
                  <p className="font-semibold">Order #{order}</p>
                  <p className="text-sm text-gray-600">Date: May {order}, 2024</p>
                  <p className="text-sm text-gray-600">Status: Delivered</p>
                  <a href="#" className="text-indigo-600 hover:underline text-sm">View Details</a>
                </div>
              ))}
            </div>
          </div>
        );
      case 'wishlist':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">My Wishlist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Placeholder for wishlist items */}
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="border rounded-md p-4 flex items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-md mr-4"></div>
                  <div>
                    <p className="font-semibold">Product {item}</p>
                    <p className="text-sm text-gray-600">$99.99</p>
                    <button className="text-indigo-600 hover:underline text-sm">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'settings':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Change Password</h3>
                <form>
                  <div className="mb-2">
                    <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                    <input type="password" id="current-password" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                    <input type="password" id="new-password" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                    <input type="password" id="confirm-password" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                    Change Password
                  </button>
                </form>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Notification Preferences</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Email notifications</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>SMS notifications</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Push notifications</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Account</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex border-b mb-6">
          <button
            className={`mr-4 py-2 ${activeTab === 'profile' ? 'border-b-2 border-indigo-600' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User className="inline-block mr-1" size={18} /> Profile
          </button>
          <button
            className={`mr-4 py-2 ${activeTab === 'orders' ? 'border-b-2 border-indigo-600' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <ShoppingBag className="inline-block mr-1" size={18} /> Orders
          </button>
          <button
            className={`mr-4 py-2 ${activeTab === 'wishlist' ? 'border-b-2 border-indigo-600' : ''}`}
            onClick={() => setActiveTab('wishlist')}
          >
            <Heart className="inline-block mr-1" size={18} /> Wishlist
          </button>
          <button
            className={`py-2 ${activeTab === 'settings' ? 'border-b-2 border-indigo-600' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings className="inline-block mr-1" size={18} /> Settings
          </button>
        </div>
        
        {renderTabContent()}
      </div>
    </div>
  );
};

export default UserAccount;