import React from 'react';
import { Star, Video, Gift, TrendingUp, Search } from 'lucide-react';
import HowItWorks from '../components/HowItWorks';
import { featuredCelebrities } from '../data/mockData';
import { trendingCelebrities } from '../data/mockData';
import CelebrityCard from '../components/CelebrityCard';
import TrendingCreators from '../components/TrendingCreators';
import FeaturedTalent from '../components/FaeturedTalent';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptLTIxIDEyYzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6IiBzdHJva2U9IiMwZjE2MmIiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
              Get Personalized Videos from Your Favorite Stars
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Book personalized video shoutouts from celebrities, influencers, and creators
            </p>
            <div className="relative max-w-2xl mx-auto">
              <div className="flex items-center bg-gray-800 rounded-lg p-2">
                <Search className="w-6 h-6 text-gray-400 ml-2" />
                <input
                  type="text"
                  placeholder="Search for your favorite celebrity..."
                  className="w-full bg-transparent border-none focus:ring-0 text-gray-100 placeholder-gray-400 px-4 py-2"
                />
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md transition duration-200">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-xl">
              <div className="p-3 bg-emerald-900/30 rounded-full mb-4">
                <Video className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Videos</h3>
              <p className="text-gray-400">Get custom video messages for any occasion</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-xl">
              <div className="p-3 bg-emerald-900/30 rounded-full mb-4">
                <Gift className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Perfect Gifts</h3>
              <p className="text-gray-400">Surprise your loved ones with unique celebrity messages</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-xl">
              <div className="p-3 bg-emerald-900/30 rounded-full mb-4">
                <Star className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Experience</h3>
              <p className="text-gray-400">High-quality videos delivered within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Featured Talent */}
      <FeaturedTalent celebrities={featuredCelebrities}/>

      {/* Trending Celebrities */}
      <TrendingCreators celebrities={trendingCelebrities}/>

      {/* <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Trending Stars</h2>
            <div className="flex items-center text-emerald-400">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span>Most Popular</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingCelebrities.map((celebrity) => (
              <CelebrityCard key={celebrity.id} celebrity={celebrity} />
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Home;