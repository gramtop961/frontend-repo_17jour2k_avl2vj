import React from 'react';
import { Leaf, Boat, Camera, Utensils, Trees, Mountain } from 'lucide-react';

const items = [
  {
    icon: Leaf,
    title: 'Nature Trails',
    desc: 'Stroll through lush green pathways, serene water bodies, and shaded picnic lawns designed for calm and connection.'
  },
  {
    icon: Boat,
    title: 'Boating & Play Zones',
    desc: 'Family-friendly boating and open play areas perfect for school trips and weekend escapes.'
  },
  {
    icon: Camera,
    title: 'Photo Spots',
    desc: 'Scenic vistas and themed corners that make every moment share-worthy.'
  },
  {
    icon: Utensils,
    title: 'Food & Refreshments',
    desc: 'Wholesome local eats and beverages to keep your day energized and delightful.'
  },
  {
    icon: Trees,
    title: 'Picnic Lawns',
    desc: 'Well-maintained spaces for families and groups to relax, play, and create memories.'
  },
  {
    icon: Mountain,
    title: 'Day Retreats',
    desc: 'Perfect for corporate offsites, school outings, and peaceful personal getaways.'
  }
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative w-full bg-white px-6 py-20 text-slate-800">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Highlights at Shivtirth</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Inspired by authentic experiences and resources around Shivtirth, curated for comfort, joy, and togetherness.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
