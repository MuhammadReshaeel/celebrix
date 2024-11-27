import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Explore from './pages/Explore';
import CelebrityProfile from './pages/CelebrityProfile';
import Login from './pages/Login';
import Register from './pages/Register';
import BecomeCreator from './pages/BecomeCreator';
import PrivateRoute from './components/PrivateRoute';
import About from './pages/AboutUs';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<CategoryPage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/become-creator" element={<BecomeCreator />} />
          <Route path="/celebrity/:id" element={
            <PrivateRoute>
              <CelebrityProfile />
            </PrivateRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;