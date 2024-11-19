import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { allCelebrities } from '../data/mockData';
import { Star, Clock, Globe, Tag, MessageCircle } from 'lucide-react';

const CelebrityProfile = () => {
  const { id } = useParams();
  const [messageType, setMessageType] = useState('personal');
  const celebrity = allCelebrities.find(c => c.id === Number(id));

  if (!celebrity) {
    return <div>Celebrity not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Celebrity Info */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="relative h-96">
                <img
                  src={celebrity.image}
                  alt={celebrity.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 p-6">
                  <h1 className="text-3xl font-bold mb-2">{celebrity.name}</h1>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-300">{celebrity.category}</span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="ml-1">{celebrity.rating}</span>
                      <span className="text-gray-400 ml-1">({celebrity.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-6">{celebrity.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Clock className="w-5 h-5 text-emerald-400" />
                    <span>{celebrity.responseTime}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Globe className="w-5 h-5 text-emerald-400" />
                    <span>{celebrity.languages?.join(', ')}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                    <span>{celebrity.reviews} Reviews</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {celebrity.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="flex items-center space-x-1 bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      <Tag className="w-4 h-4" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl p-6 sticky top-4">
              <div className="text-2xl font-bold text-emerald-400 mb-4">
                ${celebrity.price}
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex space-x-2">
                  <button
                    className={`flex-1 py-2 px-4 rounded-md ${
                      messageType === 'personal'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-700 text-gray-300'
                    }`}
                    onClick={() => setMessageType('personal')}
                  >
                    Personal
                  </button>
                  <button
                    className={`flex-1 py-2 px-4 rounded-md ${
                      messageType === 'business'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-700 text-gray-300'
                    }`}
                    onClick={() => setMessageType('business')}
                  >
                    Business
                  </button>
                </div>

                <textarea
                  placeholder="What would you like them to say?"
                  className="w-full h-32 bg-gray-700 border-none rounded-md p-3 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500"
                />

                <input
                  type="text"
                  placeholder="To whom? (Optional)"
                  className="w-full bg-gray-700 border-none rounded-md p-3 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500"
                />

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-md transition duration-200 font-semibold">
                  Book Now
                </button>
              </div>

              <div className="text-sm text-gray-400">
                <p className="mb-2">✓ Response time: {celebrity.responseTime}</p>
                <p className="mb-2">✓ 100% satisfaction guarantee</p>
                <p>✓ Free re-do if not satisfied</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CelebrityProfile;