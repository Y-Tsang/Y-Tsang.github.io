import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Navigation, Footer, PageShell } from './components/layout';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Showcase from './pages/Showcase';
import Vision from './pages/Vision';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="*" element={
            <PageShell className="flex min-h-[calc(100vh-8rem)] items-center justify-center py-16" animationClassName="text-center">
              <h1 className="mb-4 text-4xl font-semibold text-gray-900">404</h1>
              <p className="mb-8 text-gray-600">Page not found</p>
              <Link
                to="/"
                className="inline-flex rounded-lg bg-blue-800 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-900"
              >
                Home
              </Link>
            </PageShell>
          } />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;