import React, { useState } from 'react';
import { Cube } from 'lucide-react';

const VirtualTour: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState('Main Entrance');

  const locations = [
    'Main Entrance',
    'Central Atrium',
    'Food Court',
    'Cinema',
    'Department Store',
    'Rooftop Garden'
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">360° Virtual Tour</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="location-select" className="block text-sm font-medium text-gray-700 mb-2">
            Select Location:
          </label>
          <select
            id="location-select"
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        
        <div className="relative w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
          {/* Placeholder for 360° view */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Cube size={100} className="text-gray-400" />
            <p className="absolute text-xl font-semibold text-gray-600">{currentLocation}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">How to Navigate</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use your mouse to click and drag the view</li>
            <li>On mobile, touch and swipe to look around</li>
            <li>Click on hotspots to move to different areas</li>
            <li>Use the dropdown menu to jump to specific locations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;