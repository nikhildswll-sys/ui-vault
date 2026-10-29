import React from 'react';
import { ArrowRight } from 'lucide-react';

const TEMPLATES = [
  {
    id: 'saasly',
    name: 'SaaSly',
    categoryTitle: 'AI SaaS Landing',
    specs: '7 sections • Responsive',
    price: '₹299',
    badge: 'PRO',
    preview: (
      <div className="relative w-full h-44 bg-gradient-to-b from-slate-50 via-white to-blue-50/40 p-3.5 flex flex-col justify-between overflow-hidden select-none">
        {/* Mock Top Nav */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-[9px] font-black text-slate-900 tracking-tight">SaaSly</span>
          </div>
          <div className="flex items-center gap-2 text-[8px] font-medium text-slate-500">
            <span>Product</span>
            <span>Pricing</span>
            <span>Blog</span>
          </div>
          <div className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[7.5px] font-bold">
            Get Started
          </div>
        </div>

        {/* Mock Hero Content */}
        <div className="text-center my-auto px-1 z-10">
          <h4 className="text-xs font-black text-slate-900 tracking-tight leading-snug">
            Turn Ideas Into <br />Powerful Products
          </h4>
          <p className="text-[7.5px] text-slate-500 mt-1 max-w-[190px] mx-auto line-clamp-2 leading-relaxed">
            The complete toolkit for modern SaaS businesses. Launch faster, grow smarter.
          </p>
        </div>

        {/* 3D decorative shapes */}
        <div className="absolute -bottom-4 -left-3 w-16 h-16 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-2xl rotate-12 opacity-85 shadow-md" />
        <div className="absolute -bottom-6 -right-3 w-20 h-20 bg-gradient-to-bl from-purple-500 via-indigo-600 to-blue-600 rounded-3xl -rotate-12 opacity-90 shadow-xl" />
        <div className="absolute -bottom-2 right-12 w-8 h-8 bg-gradient-to-t from-pink-500 to-rose-400 rounded-xl rotate-45 opacity-70" />
      </div>
    )
  },
  {
    id: 'nexora',
    name: 'Nexora',
    categoryTitle: 'Crypto DEX',
    specs: '7 pages • Web3 template',
    price: '₹299',
    badge: 'PRO',
    preview: (
      <div className="relative w-full h-44 bg-[#070b18] text-white p-3.5 flex flex-col justify-between overflow-hidden select-none">
        {/* Mock Top Nav */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
            <span className="text-[9px] font-black text-white tracking-tight">Nexora</span>
          </div>
          <div className="flex items-center gap-2 text-[8px] font-medium text-slate-400">
            <span>Trade</span>
            <span>Earn</span>
            <span>Docs</span>
          </div>
          <div className="px-2 py-0.5 rounded-full bg-blue-600 border border-blue-400/40 text-white text-[7.5px] font-bold">
            Connect Wallet
          </div>
        </div>

        {/* Mock Hero Content */}
        <div className="text-left my-auto px-1 z-10 max-w-[155px]">
          <h4 className="text-xs font-black text-white tracking-tight leading-snug">
            The Future <br />of DeFi Trading
          </h4>
          <p className="text-[7.5px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
            Trade, earn and build on the next generation decentralized exchange.
          </p>
        </div>

        {/* Glowing 3D Orbs / Polyhedrons */}
        <div className="absolute right-2 top-8 w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 opacity-90 blur-xs shadow-[0_0_25px_#06b6d4]" />
        <div className="absolute -right-3 -bottom-3 w-20 h-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-2xl rotate-45 opacity-85 shadow-2xl" />
        <div className="absolute right-12 bottom-3 w-8 h-8 rounded-full bg-cyan-400/40 blur-sm" />
      </div>
    )
  },
  {
    id: 'fitlab',
    name: 'FitLab',
    categoryTitle: 'Gym Studio',
    specs: '6 sections • Responsive',
    price: '₹249',
    badge: 'PRO',
    preview: (
      <div className="relative w-full h-44 bg-[#08080a] text-white p-3.5 flex flex-col justify-between overflow-hidden select-none">
        {/* Mock Top Nav */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2 z-10">
          <div className="flex items-center gap-1">
            <span className="text-[9px] font-black text-rose-500 tracking-wider">FIT<span className="text-white">LAB</span></span>
          </div>
          <div className="flex items-center gap-2 text-[8px] font-medium text-zinc-400">
            <span>Programs</span>
            <span>Coaches</span>
            <span>Pricing</span>
          </div>
          <div className="px-2 py-0.5 rounded-full bg-rose-600 text-white text-[7.5px] font-bold">
            Join Now
          </div>
        </div>

        {/* Mock Hero Content */}
        <div className="text-left my-auto px-1 z-10 max-w-[155px]">
          <h4 className="text-xs font-black text-rose-500 tracking-wider uppercase leading-none">
            STRONGER <br /><span className="text-white">EVERYDAY</span>
          </h4>
          <p className="text-[7.5px] text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
            Premium fitness &amp; health template for modern gyms.
          </p>
        </div>

        {/* Athlete graphic effect */}
        <div className="absolute right-0 bottom-0 top-6 w-32 bg-gradient-to-l from-zinc-800/80 to-transparent flex items-end justify-center pointer-events-none">
          <div className="w-24 h-32 opacity-75 bg-gradient-to-t from-zinc-900 via-zinc-700 to-transparent rounded-t-full filter blur-[1px] transform translate-y-2">
            <div className="w-12 h-12 mx-auto rounded-full bg-zinc-600/50 mt-1" />
            <div className="w-20 h-16 mx-auto bg-zinc-500/30 rounded-t-2xl mt-1" />
          </div>
        </div>
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-rose-600/20 rounded-full blur-xl" />
      </div>
    )
  },
  {
    id: 'devtools',
    name: 'DevTools',
    categoryTitle: 'Developer DevTools',
    specs: '8 sections • SaaS template',
    price: '₹299',
    badge: 'PRO',
    preview: (
      <div className="relative w-full h-44 bg-[#0a0e17] text-white p-3.5 flex flex-col justify-between overflow-hidden select-none">
        {/* Mock Top Nav */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded bg-emerald-500" />
            <span className="text-[9px] font-bold text-white tracking-tight">DevTools</span>
          </div>
          <div className="flex items-center gap-2 text-[8px] font-medium text-slate-400">
            <span>Features</span>
            <span>Pricing</span>
            <span>Docs</span>
          </div>
          <div className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-white text-[7.5px] font-bold">
            Get Started
          </div>
        </div>

        {/* Mock Hero Content */}
        <div className="text-center my-auto px-1 z-10">
          <h4 className="text-xs font-black text-white tracking-tight leading-snug">
            Powerful Tools <br />for Modern Developers
          </h4>
          <p className="text-[7.5px] text-slate-400 mt-1 max-w-[190px] mx-auto line-clamp-2 leading-relaxed">
            Build faster with a suite of developer tools designed for productivity.
          </p>
        </div>

        {/* Mini Terminal / Command Bar */}
        <div className="w-full bg-[#131924] border border-slate-800 rounded-lg p-1.5 flex items-center justify-between text-[8px] font-mono text-slate-400 shadow-inner">
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400 font-bold">$</span>
            <span className="text-slate-300">npx create-devtools-app</span>
          </div>
          <span className="text-[7px] text-slate-500">v2.4.0</span>
        </div>
      </div>
    )
  }
];

export default function ProTemplatesSection({ onSelectTemplate }) {
  return (
    <section id="templates" className="py-10 px-6 sm:px-10 lg:px-12 max-w-[1340px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-xs">👑</span>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-500">
              PRO TEMPLATES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Launch your next project in minutes
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
            Complete multi-page website templates, built with Tailwind CSS and ready for production.
          </p>
        </div>

        <a 
          href="#templates"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs transition-all shadow-2xs shrink-0 self-start sm:self-auto"
        >
          <span>View All Templates</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
        </a>
      </div>

      {/* Grid of 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {TEMPLATES.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectTemplate && onSelectTemplate(item)}
            className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col cursor-pointer"
          >
            {/* Visual Container */}
            <div className="border-b border-slate-100 overflow-hidden relative">
              {item.preview}
            </div>

            {/* Meta Row */}
            <div className="p-4 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 font-black text-[9px] tracking-wider uppercase">
                  {item.badge}
                </span>
                <div>
                  <h3 className="font-extrabold text-xs text-slate-950 group-hover:text-blue-600 transition-colors">
                    {item.categoryTitle}
                  </h3>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    {item.specs}
                  </p>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="font-black text-xs text-slate-950">
                  {item.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
