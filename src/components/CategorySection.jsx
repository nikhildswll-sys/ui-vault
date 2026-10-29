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
        <div className="w-full h-full flex items-center justify-center relative">
          <div className="relative">
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-60 blur-md" />
            <button className="relative px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-600 text-white font-bold text-[11px] shadow-sm flex items-center gap-1.5 transition-transform group-hover:scale-105">
              <span>Get Started</span>
              <span className="text-xs">→</span>
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'cards',
      title: 'Bento & Feature Cards',
      subtitle: 'Beautiful cards and stats',
      count: '80+ Components',
      preview: (
        <div className="w-full h-full flex items-center justify-center p-2">
          <div className="w-full max-w-[170px] bg-white rounded-xl border border-slate-200/90 p-2 shadow-2xs">
            <div className="flex justify-between items-center mb-1.5">
              <span className="w-7 h-1.5 rounded-full bg-slate-200" />
              <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded">+12.8%</span>
            </div>
            <div className="h-8 flex items-end gap-1.5 pt-1">
              {[35, 55, 40, 80, 65, 95, 70].map((h, i) => (
                <span 
                  key={i} 
                  style={{ height: `${h}%` }} 
                  className="flex-1 bg-purple-300 rounded-xs" 
                />
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
        <div className="w-full h-full flex items-center justify-center p-2">
          <div className="relative flex flex-col gap-2 text-[10px] font-semibold text-slate-800">
            {/* Connecting vertical line */}
            <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-blue-200 -z-0" />
            
            <div className="flex items-center gap-2 z-10">
              <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px] font-bold shadow-2xs">1</span>
              <span>Sign Up</span>
            </div>
            <div className="flex items-center gap-2 z-10">
              <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px] font-bold shadow-2xs">2</span>
              <span>Verify</span>
            </div>
            <div className="flex items-center gap-2 z-10">
              <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px] font-bold shadow-2xs">3</span>
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
        <div className="w-full h-full flex items-center justify-center p-2">
          <div className="w-full max-w-[170px] space-y-1.5">
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg py-1 px-2 text-[9px] text-slate-400 shadow-2xs">
              <Search className="w-3 h-3 text-slate-400" />
              <span>Search...</span>
            </div>
            <div className="space-y-1 pl-1">
              <div className="flex items-center gap-1.5 text-[8.5px] text-slate-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full border border-purple-500 bg-purple-100" />
                <span>Command Palette</span>
              </div>
              <div className="flex items-center gap-1.5 text-[8.5px] text-slate-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full border border-blue-500 bg-blue-100" />
                <span>OTP Input</span>
              </div>
              <div className="flex items-center gap-1.5 text-[8.5px] text-slate-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full border border-indigo-500 bg-indigo-100" />
                <span>Form Inputs</span>
              </div>
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
        <div className="w-full h-full flex items-center justify-center p-2">
          <div className="px-2.5 py-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center">
              <Home className="w-3.5 h-3.5" />
            </span>
            <span className="text-slate-400 hover:text-slate-700">
              <LayoutGrid className="w-3.5 h-3.5" />
            </span>
            <span className="text-slate-400 hover:text-slate-700 relative">
              <Bell className="w-3.5 h-3.5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500 border border-white text-[6px] text-white flex items-center justify-center font-bold">1</span>
            </span>
            <span className="text-slate-400 hover:text-slate-700">
              <User className="w-3.5 h-3.5" />
            </span>
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
        <div className="w-full h-full flex items-center justify-center p-2">
          <div className="w-full max-w-[170px] h-24 rounded-xl bg-gradient-to-b from-[#0a0f24] to-[#11183c] border border-indigo-950 p-2 flex flex-col justify-between text-white relative overflow-hidden shadow-2xs">
            <div className="flex items-center justify-between opacity-50 text-[7px]">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>•••</span>
            </div>
            <div className="text-center z-10 my-auto">
              <p className="text-[9px] font-extrabold tracking-tight leading-tight">
                Build Your<br />Next Big Idea
              </p>
            </div>
            {/* Glowing Mountain Peaks */}
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-blue-600/40 via-purple-600/20 to-transparent flex items-end">
              <svg className="w-full h-8 text-blue-500/60" viewBox="0 0 100 40" fill="currentColor" preserveAspectRatio="none">
                <polygon points="0,40 25,15 45,30 65,10 85,25 100,40" />
              </svg>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="components" className="py-10 px-6 sm:px-10 lg:px-12 max-w-[1340px] mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
            {/* Isometric 3D Cube Icon */}
            <svg className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
              <line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
            <span>BROWSE BY CATEGORY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Everything you need to build modern websites
          </h2>
        </div>

        <a 
          href="#components"
          className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors shrink-0"
        >
          <span>View All Components</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 6 Category Cards in one single row on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory && onSelectCategory(cat)}
            className="group p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            {/* Visual Container */}
            <div className="h-28 bg-[#f8fafc] rounded-xl mb-3 overflow-hidden border border-slate-100 flex items-center justify-center">
              {cat.preview}
            </div>

            {/* Title & Specs */}
            <div className="space-y-1">
              <h3 className="text-xs font-extrabold text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">
                {cat.title}
              </h3>
              <p className="text-[11px] text-slate-500 leading-tight">
                {cat.subtitle}
              </p>
              <div className="pt-1">
                <span className="text-[11px] font-bold text-blue-600">
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
