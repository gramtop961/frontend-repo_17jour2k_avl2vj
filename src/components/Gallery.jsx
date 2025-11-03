import React, { useEffect, useMemo, useState } from 'react';
import { Image as ImageIcon, Plus, Save, Trash2, Shield } from 'lucide-react';

const STORAGE_KEY = 'shivtirth_gallery_v1';

export default function Gallery() {
  const [adminMode, setAdminMode] = useState(false);
  const [images, setImages] = useState([]);
  const [bulkInput, setBulkInput] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setImages(JSON.parse(saved));
    } catch (_) {}
  }, []);

  const saveImages = (arr) => {
    const cleaned = arr.filter((u) => typeof u === 'string' && u.trim().startsWith('http'));
    setImages(cleaned);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
  };

  const addBulk = () => {
    const lines = bulkInput
      .split(/\n|,/) // newline or comma
      .map((s) => s.trim())
      .filter(Boolean);
    if (!lines.length) return;
    const combined = Array.from(new Set([...images, ...lines]));
    saveImages(combined);
    setBulkInput('');
  };

  const removeAt = (idx) => {
    const next = images.filter((_, i) => i !== idx);
    saveImages(next);
  };

  const hasImages = images && images.length > 0;

  return (
    <section id="gallery" className="w-full bg-white px-6 py-20 text-slate-800">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Photo Gallery</h2>
            <p className="mt-2 text-slate-600">Add image links from the official site to showcase real moments from Shivtirth.</p>
          </div>
          <button
            onClick={() => setAdminMode((v) => !v)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
              adminMode ? 'border-teal-500 bg-teal-50 text-teal-700' : 'border-slate-300 bg-white text-slate-700'
            }`}
            aria-pressed={adminMode}
          >
            <Shield className="h-4 w-4" /> {adminMode ? 'Admin Mode: On' : 'Admin Mode: Off'}
          </button>
        </div>

        {adminMode && (
          <div className="mb-8 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <label className="block text-sm font-medium text-slate-700">Paste image URLs (one per line or comma-separated)</label>
            <textarea
              value={bulkInput}
              onChange={(e) => setBulkInput(e.target.value)}
              rows={4}
              className="mt-2 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              placeholder="https://...jpg\nhttps://...png"
            />
            <div className="mt-3 flex items-center gap-2">
              <button
                onClick={addBulk}
                className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-teal-400"
              >
                <Plus className="h-4 w-4" /> Add Images
              </button>
              <button
                onClick={() => saveImages([])}
                className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-red-400"
              >
                <Trash2 className="h-4 w-4" /> Clear All
              </button>
            </div>
          </div>
        )}

        {!hasImages && (
          <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
            <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <ImageIcon className="h-6 w-6" />
            </div>
            <p className="text-sm">No images yet. Enable Admin Mode to add links from the website gallery.</p>
          </div>
        )}

        {hasImages && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {images.map((url, idx) => (
              <figure key={idx} className="group relative overflow-hidden rounded-xl border border-slate-200">
                <img src={url} alt={`Shivtirth ${idx + 1}`} className="h-40 w-full object-cover sm:h-48 md:h-56" loading="lazy" />
                {adminMode && (
                  <button
                    onClick={() => removeAt(idx)}
                    className="absolute right-2 top-2 hidden rounded-full bg-white/90 p-1 text-red-600 shadow group-hover:block"
                    title="Remove"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
