import React, { useEffect, useState } from 'react';
import { CheckCircle, Shield, Save, RefreshCcw } from 'lucide-react';

const STORAGE_KEY = 'shivtirth_rules_v1';

const DEFAULT_RULES = [
  'Respect nature: do not pluck flowers or damage plants.',
  'Keep the premises clean. Use dustbins provided at multiple points.',
  'Alcohol, smoking, and firecrackers are strictly prohibited.',
  'Pets are allowed only in designated areas and must be supervised.',
  'Follow safety instructions for boating and play zones; life jackets where provided are mandatory.',
  'Outdoor cooking or open flames are not permitted.',
  'Photography is welcome. Drone usage may require prior permission.',
  'Children must be accompanied by adults at all times.',
  'Follow staff directions for your safety and that of others.',
  'Opening hours and facility access may vary due to weather or maintenance.'
];

export default function ParkRules() {
  const [adminMode, setAdminMode] = useState(false);
  const [rules, setRules] = useState(DEFAULT_RULES);
  const [input, setInput] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const arr = JSON.parse(saved);
        if (Array.isArray(arr) && arr.length) setRules(arr);
      }
    } catch (_) {}
  }, []);

  const saveRules = (arr) => {
    const cleaned = arr.map((r) => r.trim()).filter(Boolean);
    setRules(cleaned);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
  };

  const onSave = () => {
    const arr = input.split(/\n/).map((s) => s.trim()).filter(Boolean);
    if (arr.length) {
      saveRules(arr);
      setInput('');
    }
  };

  const resetToDefault = () => {
    saveRules(DEFAULT_RULES);
    setInput('');
  };

  return (
    <section id="rules" className="w-full bg-gradient-to-b from-slate-50 to-white px-6 py-20 text-slate-800">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Park Rules & Regulations</h2>
            <p className="mt-2 text-slate-600">Please follow these guidelines to ensure a safe and enjoyable visit for everyone.</p>
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
            <label className="block text-sm font-medium text-slate-700">Edit rules (one per line)</label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={6}
              className="mt-2 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
              placeholder={DEFAULT_RULES.join('\n')}
            />
            <div className="mt-3 flex items-center gap-2">
              <button
                onClick={onSave}
                className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-teal-400"
              >
                <Save className="h-4 w-4" /> Save Rules
              </button>
              <button
                onClick={resetToDefault}
                className="inline-flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-300"
              >
                <RefreshCcw className="h-4 w-4" /> Reset to Default
              </button>
            </div>
          </div>
        )}

        <ul className="grid list-inside grid-cols-1 gap-3 sm:grid-cols-2">
          {rules.map((r, idx) => (
            <li key={idx} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-teal-600" />
              <span className="leading-relaxed text-slate-700">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
