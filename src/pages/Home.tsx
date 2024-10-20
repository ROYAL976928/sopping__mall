import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to MallMaster</h1>
        <p className="text-xl mb-6">Discover a world of shopping, dining, and entertainment.</p>
        <a href="/stores" className="bg-indigo-600 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-indigo-700 transition duration-300">
          Explore Stores <ArrowRight className="ml-2" size={18} />
        </a>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Promotions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder for promotion cards */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Summer Sale</h3>
              <p className="text-gray-600 mb-4">Up to 50% off on selected items</p>
              <a href="#" className="text-indigo-600 hover:underline">Learn more</a>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Placeholder for event cards */}
          {[1, 2].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Fashion Show</h3>
              <p className="text-gray-600 mb-2">Date: June 15, 2024</p>
              <p className="text-gray-600 mb-4">Join us for an exciting showcase of the latest fashion trends!</p>
              <a href="#" className="text-indigo-600 hover:underline">Learn more</a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Top Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Placeholder for brand logos */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
              <span className="text-xl font-semibold text-gray-400">Brand {i}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;