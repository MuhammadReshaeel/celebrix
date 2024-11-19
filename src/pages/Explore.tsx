import React, { useState } from 'react';
import { allCelebrities } from '../data/mockData';
import CelebrityCard from '../components/CelebrityCard';
import { Search, SlidersHorizontal } from 'lucide-react';

const Explore = () => {
  const [showFilters, setShowFilters] = useState(false);
  const categories = Array.from(new Set(allCelebrities.map(celeb => celeb.category)));
  const priceRanges = ['Under $100', '$100-$300', '$300-$500', '$500+'];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span>Filters</span>
          </button>

          <div className="w-full md:w-2/3 mb-4 md:mb-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search celebrities..."
                className="w-full bg-gray-800 border-none rounded-lg py-3 pl-12 pr-4 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            {/* Categories Filter */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-600 text-emerald-500 focus:ring-emerald-500" />
                    <span className="text-gray-300">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Price Range</h3>
              <div className="space-y-2">
                {priceRanges.map((range, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-600 text-emerald-500 focus:ring-emerald-500" />
                    <span className="text-gray-300">{range}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Rating</h3>
              <div className="space-y-2">
                {[4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-600 text-emerald-500 focus:ring-emerald-500" />
                    <span className="text-gray-300">{rating}+ Stars</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Celebrity Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {allCelebrities.map((celebrity) => (
                <CelebrityCard key={celebrity.id} celebrity={celebrity} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;