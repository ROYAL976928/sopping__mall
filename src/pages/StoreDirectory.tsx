import React, { useState } from 'react';
import { Search } from 'lucide-react';

const categories = [
  'All',
  'Clothing',
  'Electronics',
  'Food Court',
  'Home & Living',
  'Beauty & Health',
  'Sports & Outdoors',
  'Books & Stationery',
  'Toys & Games',
];

const StoreDirectory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Placeholder store data
  const stores = [
    { id: 1, name: 'Fashion Emporium', category: 'Clothing', floor: '1st Floor', rating: 4.5 },
    { id: 2, name: 'Tech Haven', category: 'Electronics', floor: '2nd Floor', rating: 4.2 },
    { id: 3, name: 'Gourmet Delights', category: 'Food Court', floor: '3rd Floor', rating: 4.8 },
    // Add more store data as needed
  ];

  const filteredStores = stores.filter(store => 
    (selectedCategory === 'All' || store.category === selectedCategory) &&
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Store Directory</h1>
      
      <div className="mb-8 flex flex-wrap items-center">
        <div className="relative mr-4 mb-4">
          <input
            type="text"
            placeholder="Search stores"
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <div className="flex flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full mr-2 mb-2 ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStores.map((store) => (
          <div key={store.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{store.name}</h3>
            <p className="text-gray-600 mb-1">Category: {store.category}</p>
            <p className="text-gray-600 mb-1">Location: {store.floor}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400 mr-1">★</span>
              <span>{store.rating.toFixed(1)}</span>
            </div>
            <a href="#" className="mt-4 inline-block text-indigo-600 hover:underline">View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreDirectory;