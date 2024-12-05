import React from 'react';
import { Search } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect Room,{' '}
            <span className="text-indigo-600">Hassle-Free</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience seamless room rentals with advanced search, real-time availability,
            and secure booking. Perfect for both tenants and landlords.
          </p>
          <div className="max-w-2xl mx-auto bg-white rounded-full shadow-lg p-2 flex items-center">
            <Search className="w-6 h-6 text-gray-400 ml-4" />
            <input
              type="text"
              placeholder="Enter location or property type..."
              className="flex-1 px-4 py-2 focus:outline-none"
            />
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}