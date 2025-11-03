import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sunset, Map, Trees } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-[#0b0b10] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4TYZSovGytNgAJ2x/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability (don't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,149,0,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs backdrop-blur">
          <Trees className="h-4 w-4 text-amber-300" />
          <span className="text-slate-100">Calm • Nature • Sunset</span>
        </div>
        <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
          Shivtirth
          <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-rose-300 bg-clip-text text-transparent">Where the Sun Meets Stillness</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-200 sm:text-base">
          Unplug by the glow of a warm horizon. Wander slow paths, share quiet picnics, and feel time stretch with the fading light.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#highlights"
            className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-2.5 font-medium text-slate-900 shadow-lg shadow-amber-500/20 transition hover:bg-amber-200"
          >
            <Map className="h-4 w-4" /> Explore Highlights
          </a>
          <a
            href="#founder"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Sunset className="h-4 w-4" /> Founder's Thought
          </a>
        </div>
      </div>
    </section>
  );
}
