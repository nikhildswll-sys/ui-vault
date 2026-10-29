import React from 'react';
import { Search, Sun, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenSearch }) {
  return (
    <header className="sticky top-0 z-50 bg-[#f8fafc]/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
      {/* Left: Brand Logo & Links */}
      <div className="flex items-center gap-8">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <span className="font-black text-sm tracking-tighter">UI</span>
          </div>
          <span className="font-extrabold text-lg tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            UI-Vault
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-600">
          <a href="#components" className="hover:text-blue-600 transition-colors">Components</a>
          <a href="#templates" className="hover:text-blue-600 transition-colors">Templates</a>
          <a href="#showcase" className="hover:text-blue-600 transition-colors">Showcase</a>
          <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#docs" className="hover:text-blue-600 transition-colors">Docs</a>
        </nav>
      </div>

      {/* Right: Search, Sun, Sign In, Get Started */}
      <div className="flex items-center gap-3">
        {/* Search Bar Input with Cmd+K */}
        <div 
          onClick={onOpenSearch}
          className="hidden md:flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-full px-3.5 py-1.5 text-xs text-slate-400 cursor-pointer shadow-xs transition-colors w-56 lg:w-64"
        >
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <span className="truncate flex-1 text-slate-400">Search components, templates...</span>
          <kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-500">
            ⌘ K
          </kbd>
        </div>

        {/* Theme Sun Icon */}
        <button className="p-2 rounded-full hover:bg-white text-slate-600 hover:text-slate-900 transition-colors cursor-pointer border border-transparent hover:border-slate-200">
          <Sun className="w-4 h-4" />
        </button>

        {/* Sign In Link */}
        <a href="#signin" className="hidden sm:inline-block text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors px-2">
          Sign In
        </a>

        {/* Get Started Button */}
        <a 
          href="#components" 
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs transition-all shadow-sm active:scale-95"
        >
          <span>Get Started</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}
