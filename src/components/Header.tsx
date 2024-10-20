import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Map, User, Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-indigo-600">MallMaster</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/stores" className="flex items-center"><ShoppingBag className="mr-1" size={18} /> Stores</Link></li>
            <li><Link to="/map" className="flex items-center"><Map className="mr-1" size={18} /> Mall Map</Link></li>
            <li><Link to="/virtual-tour" className="flex items-center">Virtual Tour</Link></li>
            <li><Link to="/account" className="flex items-center"><User className="mr-1" size={18} /> Account</Link></li>
          </ul>
        </nav>
        <div className="relative">
          <input
            type="text"
            placeholder="Search stores or products"
            className="pl-8 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          />
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>
    </header>
  );
};

export default Header;