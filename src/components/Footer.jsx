import React from 'react';
import { MapPin, Phone, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 px-6 py-12 text-slate-200">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold text-white">Shivtirth</h3>
          <p className="mt-2 text-sm text-slate-400">
            A peaceful nature destination crafted for families, friends, and travelers.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Maharashtra, India</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91-00000 00000</li>
            <li className="flex items-center gap-2"><Globe className="h-4 w-4" /> www.shivtirth.com</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Plan Your Visit</h4>
          <p className="mt-3 text-sm text-slate-400">Open all days. Group bookings available for schools, colleges, and corporate teams.</p>
          <a
            href="#highlights"
            className="mt-4 inline-block rounded-full bg-teal-400 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-teal-300"
          >
            Explore Highlights
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Shivtirth. All rights reserved.
      </div>
    </footer>
  );
}
