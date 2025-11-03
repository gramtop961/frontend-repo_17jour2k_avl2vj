import React from 'react';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import FoundersThought from './components/FoundersThought';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <HeroSection />
      <Highlights />
      <FoundersThought />
      <Footer />
    </div>
  );
}

export default App;
