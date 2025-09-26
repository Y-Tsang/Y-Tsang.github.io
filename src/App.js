import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation, Footer } from './components/layout';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Vision from './pages/Vision';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-gray-600 mb-8">Page not found</p>
                <a 
                  href="/" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Home
                </a>
              </div>
            </div>
          } />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;