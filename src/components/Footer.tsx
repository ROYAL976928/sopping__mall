import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">MallMaster is your one-stop destination for an unparalleled shopping experience.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/stores">Store Directory</a></li>
              <li><a href="/map">Mall Map</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/returns">Returns & Exchanges</a></li>
              <li><a href="/gift-cards">Gift Cards</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-indigo-400"><Facebook size={24} /></a>
              <a href="#" className="text-white hover:text-indigo-400"><Twitter size={24} /></a>
              <a href="#" className="text-white hover:text-indigo-400"><Instagram size={24} /></a>
              <a href="#" className="text-white hover:text-indigo-400"><Mail size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          &copy; 2024 MallMaster. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;