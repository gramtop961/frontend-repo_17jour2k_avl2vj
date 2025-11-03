import React from 'react';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Gallery from './components/Gallery';
import ParkRules from './components/ParkRules';
import FoundersThought from './components/FoundersThought';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <HeroSection />
      <Highlights />
      <Gallery />
      <ParkRules />
      <FoundersThought />
      <Footer />
    </div>
  );
}

export default App;
