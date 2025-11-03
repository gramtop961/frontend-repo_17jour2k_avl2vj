import React, { useEffect, useMemo, useState } from 'react';
import { Quote, Edit3, Save, Image as ImageIcon, Shield } from 'lucide-react';

const DEFAULT_QUOTE = `“Shivtirth began as a simple dream — a place where families, friends, and travelers could find peace in the heart of nature. I wanted to create an environment where people could set aside their screens, step away from the noise, and rediscover the happiness that comes from togetherness and open spaces. Every corner of Shivtirth has been shaped with care, not to impress, but to invite you to relax, explore, and feel at home under the sky.” - Dr. Abhivilas Nakhate, Founder, Shivtirth`;

const STORAGE_KEY = 'shivtirth_founder_content_v1';

export default function FoundersThought() {
  const [adminMode, setAdminMode] = useState(false);
  const [quote, setQuote] = useState(DEFAULT_QUOTE);
  const [imageUrl, setImageUrl] = useState('');

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.quote) setQuote(parsed.quote);
        if (parsed.imageUrl) setImageUrl(parsed.imageUrl);
      }
    } catch (_) {
      // Ignore parsing issues
    }
  }, []);

  const saveContent = () => {
    const data = { quote, imageUrl };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const displayImage = useMemo(() => {
    return imageUrl?.trim()
      ? imageUrl
      : 'https://images.unsplash.com/photo-1520697222862-85cb8d34d6ab?q=80&w=1200&auto=format&fit=crop';
  }, [imageUrl]);

  return (
    <section id="founder" className="relative w-full bg-gradient-to-b from-teal-50 to-white px-6 py-20 text-slate-800">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold sm:text-4xl">Founder's Thought</h2>
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

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                <Quote className="h-5 w-5" />
              </div>
              <p className="whitespace-pre-line text-[15px] leading-relaxed text-slate-700">
                {quote}
              </p>
            </div>

            {adminMode && (
              <div className="mt-6 space-y-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <label className="block text-sm font-medium text-slate-700">Quote</label>
                <textarea
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  rows={6}
                  className="w-full rounded-lg border border-slate-300 bg-white p-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                />
                <label className="mt-4 block text-sm font-medium text-slate-700">Founder Image URL (optional)</label>
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <input
                      type="url"
                      placeholder="https://..."
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white p-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                    />
                  </div>
                  <button
                    onClick={saveContent}
                    className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-teal-400"
                  >
                    <Save className="h-4 w-4" /> Save
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <img
                src={displayImage}
                alt="Founder"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs text-slate-700">
                <ImageIcon className="h-3.5 w-3.5" /> Founder Portrait
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
