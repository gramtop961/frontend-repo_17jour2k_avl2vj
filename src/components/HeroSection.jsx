import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Map, Trees } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability (don't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs backdrop-blur">
          <Trees className="h-4 w-4" />
          <span>Nature. Oceanic calm. Togetherness.</span>
        </div>
        <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
          Shivtirth
          <span className="block text-teal-300">A Nature Escape for Everyone</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-200 sm:text-base">
          A scenic destination for picnics, school trips, retreats, and family getaways. Breathe deeper, wander wider, and feel the joy of open spaces.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#highlights"
            className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-5 py-2.5 font-medium text-slate-900 shadow-lg shadow-teal-500/30 transition hover:bg-teal-300"
          >
            <Map className="h-4 w-4" /> Explore Highlights
          </a>
          <a
            href="#founder"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Rocket className="h-4 w-4" /> Founder's Thought
          </a>
        </div>
      </div>
    </section>
  );
}
