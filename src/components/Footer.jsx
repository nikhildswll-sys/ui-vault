import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/70 py-12 px-4 sm:px-8 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-xs">
            <span className="font-black text-xs">UI</span>
          </div>
          <span className="font-extrabold text-sm tracking-tight text-slate-900">
            UI-Vault
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-xs text-slate-500">
            Figma is for designers. UI-Vault is for builders.
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-medium text-slate-500">
          <a href="#components" className="hover:text-blue-600 transition-colors">Components</a>
          <a href="#templates" className="hover:text-blue-600 transition-colors">Templates</a>
          <a href="#showcase" className="hover:text-blue-600 transition-colors">Showcase</a>
          <a href="https://github.com/nikhildswll-sys/ui-vault" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
        </div>

        <div className="text-xs text-slate-400">
          © {new Date().getFullYear()} UI-Vault. Pure Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
