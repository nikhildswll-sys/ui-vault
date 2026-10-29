import React from 'react';
import { Search, Sun, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenSearch }) {
  return (
    <header className="w-full bg-[#f8fafc] px-6 sm:px-10 lg:px-12 py-4">
      <div className="max-w-[1340px] mx-auto flex items-center justify-between gap-4">
        {/* Left: Brand Logo & Navigation */}
        <div className="flex items-center gap-10">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-xs">
              <span className="font-black text-sm tracking-tighter">UI</span>
            </div>
            <span className="font-extrabold text-lg tracking-tight text-slate-950 group-hover:text-blue-600 transition-colors">
              UI-Vault
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-slate-600">
            <a href="#components" className="hover:text-slate-950 transition-colors">Components</a>
            <a href="#templates" className="hover:text-slate-950 transition-colors">Templates</a>
            <a href="#showcase" className="hover:text-slate-950 transition-colors">Showcase</a>
            <a href="#pricing" className="hover:text-slate-950 transition-colors">Pricing</a>
            <a href="#docs" className="hover:text-slate-950 transition-colors">Docs</a>
          </nav>
        </div>

        {/* Right: Search, Sun, Sign In, Get Started */}
        <div className="flex items-center gap-4">
          {/* Search Bar Input with Cmd+K */}
          <div 
            onClick={onOpenSearch}
            className="hidden md:flex items-center gap-2.5 bg-slate-100 hover:bg-slate-200/70 border border-slate-200/60 rounded-xl px-3.5 py-2 text-xs text-slate-400 cursor-pointer transition-all w-60 lg:w-72"
          >
            <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate flex-1 text-slate-400 text-[12px]">Search components, templates...</span>
            <kbd className="px-1.5 py-0.5 rounded-md bg-white border border-slate-200/90 text-[10px] font-mono text-slate-500 shadow-2xs">
              ⌘ K
            </kbd>
          </div>

          {/* Theme Sun Icon */}
          <button 
            type="button"
            aria-label="Toggle theme"
            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <Sun className="w-4 h-4" />
          </button>

          {/* Sign In Link */}
          <a href="#signin" className="hidden sm:inline-block text-[13px] font-semibold text-slate-700 hover:text-slate-950 transition-colors px-1">
            Sign In
          </a>

          {/* Get Started Button */}
          <a 
            href="#components" 
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs transition-all shadow-xs active:scale-95"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
