import React, { useState } from 'react';
import { Map, ZoomIn, ZoomOut } from 'lucide-react';

const MallMap: React.FC = () => {
  const [floor, setFloor] = useState(1);
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.5));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Interactive Mall Map</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <label htmlFor="floor-select" className="mr-2">Floor:</label>
            <select
              id="floor-select"
              value={floor}
              onChange={(e) => setFloor(Number(e.target.value))}
              className="border rounded px-2 py-1"
            >
              <option value={1}>1st Floor</option>
              <option value={2}>2nd Floor</option>
              <option value={3}>3rd Floor</option>
            </select>
          </div>
          <div className="flex items-center">
            <button onClick={handleZoomOut} className="mr-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <ZoomOut size={20} />
            </button>
            <button onClick={handleZoomIn} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <ZoomIn size={20} />
            </button>
          </div>
        </div>
        
        <div className="relative w-full h-[600px] border border-gray-300 rounded overflow-hidden">
          {/* Placeholder for the actual map */}
          <div
            className="absolute inset-0 bg-gray-100 flex items-center justify-center"
            style={{ transform: `scale(${zoom})`, transition: 'transform 0.3s ease-out' }}
          >
            <Map size={100} className="text-gray-400" />
            <p className="absolute text-2xl font-bold text-gray-500">Floor {floor}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 mr-2"></div>
              <span>Clothing</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 mr-2"></div>
              <span>Electronics</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 mr-2"></div>
              <span>Food Court</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-500 mr-2"></div>
              <span>Services</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MallMap;