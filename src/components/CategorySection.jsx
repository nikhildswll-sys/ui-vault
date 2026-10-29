import React from 'react';
import { ArrowRight, Search, Home, LayoutGrid, Bell, User } from 'lucide-react';

export default function CategorySection({ onSelectCategory }) {
  const categories = [
    {
      id: 'buttons',
      title: 'Buttons & CTAs',
      subtitle: 'Modern, interactive buttons',
      count: '120+ Components',
      preview: (
        <div className="h-28 flex items-center justify-center p-3">
          <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold text-xs shadow-md shadow-blue-500/25 flex items-center gap-1.5 transition-transform group-hover:scale-105">
            <span>Get Started</span>
            <span>→</span>
          </button>
        </div>
      )
    },
    {
      id: 'cards',
      title: 'Bento & Feature Cards',
      subtitle: 'Beautiful cards and stats',
      count: '80+ Components',
      preview: (
        <div className="h-28 flex items-center justify-center p-3">
          <div className="w-full max-w-[190px] p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="flex justify-between items-center mb-1">
              <span className="w-8 h-1.5 rounded-full bg-slate-200" />
              <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">+12.8%</span>
            </div>
            <div className="h-7 flex items-end gap-1 pt-1">
              {[30, 45, 60, 40, 75, 90, 100].map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} className="flex-1 bg-purple-400 rounded-xs" />
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'bulletins',
      title: 'Bulletins & Steppers',
      subtitle: 'Roadmaps and indicators',
      count: '60+ Components',
      preview: (
        <div className="h-28 flex items-center justify-center p-3">
          <div className="flex flex-col gap-1.5 text-[11px] font-semibold text-slate-700">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px] font-bold">1</span>
              <span>Sign Up</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px] font-bold">2</span>
              <span>Verify</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px] font-bold">3</span>
              <span>Launch</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'inputs',
      title: 'Inputs & Micro-UI',
      subtitle: 'Search bars, modals & more',
      count: '90+ Components',
      preview: (
        <div className="h-28 flex items-center justify-center p-3">
          <div className="w-full max-w-[190px] space-y-1.5">
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg p-1 px-2 text-[10px] text-slate-400 shadow-2xs">
              <Search className="w-3 h-3 text-slate-400" />
              <span>Search...</span>
            </div>
            <div className="flex items-center gap-1.5 text-[9px] text-slate-500 pl-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span>Command Palette</span>
            </div>
            <div className="flex items-center gap-1.5 text-[9px] text-slate-500 pl-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>OTP Input</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'navbars',
      title: 'Navigation & Docks',
      subtitle: 'Modern navbars and menus',
      count: '70+ Components',
      preview: (
        <div className="h-28 flex items-center justify-center p-3">
          <div className="p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600"><Home className="w-3.5 h-3.5" /></span>
            <span className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700"><LayoutGrid className="w-3.5 h-3.5" /></span>
            <span className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700"><Bell className="w-3.5 h-3.5" /></span>
            <span className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700"><User className="w-3.5 h-3.5" /></span>
          </div>
        </div>
      )
    },
    {
      id: 'pro',
      title: 'Pro Templates',
      subtitle: 'Complete production sites',
      count: '50+ Templates',
      preview: (
        <div className="h-28 flex items-center justify-center p-3">
          <div className="w-full max-w-[190px] h-20 rounded-xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 text-center p-2 flex flex-col justify-center items-center text-white shadow-xs">
            <span className="text-[10px] font-bold tracking-tight">Build Your Next Big Idea</span>
            <span className="w-10 h-0.5 bg-blue-500 rounded-full mt-1.5" />
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="components" className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
            <span className="text-purple-600 text-base">🧊</span>
            <span>BROWSE BY CATEGORY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Everything you need to build modern websites
          </h2>
        </div>

        <a 
          href="#all"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          <span>View All Components</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 6 Category Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="group p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-500 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            {/* Visual Mini Preview Container */}
            <div className="bg-slate-50/70 rounded-xl mb-3 overflow-hidden border border-slate-100 group-hover:bg-blue-50/20 transition-colors">
              {cat.preview}
            </div>

            {/* Info */}
            <div>
              <h3 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {cat.title}
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                {cat.subtitle}
              </p>
              <div className="mt-2.5">
                <span className="inline-block text-[10px] font-bold text-blue-600 bg-blue-50/80 px-2 py-0.5 rounded-full">
                  {cat.count}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
