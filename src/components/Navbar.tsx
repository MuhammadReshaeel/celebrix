import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, Heart, LogOut } from 'lucide-react';
import { useAuth } from '../store/authStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                Zuromi
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/explore" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Browse
              </Link>
              <Link to="/categories" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Categories
              </Link>
              <Link to="/business" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Business
              </Link>
              <Link to="/become-creator" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Become a Creator
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <div className="flex items-center space-x-2">
                {user ? (
                  <>
                    <Link to="/favorites" className="p-2 text-gray-300 hover:text-white rounded-full hover:bg-gray-800">
                      <Heart className="w-6 h-6" />
                    </Link>
                    <Link to="/profile" className="p-2 text-gray-300 hover:text-white rounded-full hover:bg-gray-800">
                      <User className="w-6 h-6" />
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="p-2 text-gray-300 hover:text-white rounded-full hover:bg-gray-800"
                    >
                      <LogOut className="w-6 h-6" />
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition duration-200 flex items-center"
                  >
                    <User className="w-5 h-5 mr-2" />
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/explore" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Browse
            </Link>
            <Link to="/categories" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Categories
            </Link>
            <Link to="/business" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Business
            </Link>
            <Link to="/become-creator" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Become a Creator
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            {user ? (
              <>
                <Link to="/favorites" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Favorites
                </Link>
                <Link to="/profile" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-300 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;