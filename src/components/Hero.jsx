import React, { useState } from 'react';
import { Copy, Check, Play, ArrowRight, Zap, Code2, Globe } from 'lucide-react';

const SAMPLE_COMPONENTS = [
  {
    id: 'glow-btn',
    name: 'Glow Button',
    htmlCode: `<button class="relative px-6 py-3 rounded-full group">
  <span class="absolute inset-0 bg-gradient-to-r from-purple-500
  to-blue-500 opacity-90 blur-lg group-hover:opacity-100
  transition"></span>
  <span class="relative text-white font-medium">Get Started -></span>
</button>`,
    jsxCode: `export function GlowButton() {
  return (
    <button className="relative px-6 py-3 rounded-full group">
      <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-90 blur-lg group-hover:opacity-100 transition" />
      <span className="relative text-white font-medium">Get Started -&gt;</span>
    </button>
  );
}`
  },
  {
    id: 'badge',
    name: 'Live Badge',
    htmlCode: `<div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
  <span>Systems 100% Operational</span>
</div>`,
    jsxCode: `export function LiveBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
      <span>Systems 100% Operational</span>
    </div>
  );
}`
  },
  {
    id: 'chart',
    name: 'Stats Sparkline',
    htmlCode: `<div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
  <span class="text-xs text-slate-400 font-bold">MONTHLY REVENUE</span>
  <div class="text-2xl font-black text-slate-900 mt-1">$48,200</div>
</div>`,
    jsxCode: `export function StatsCard() {
  return (
    <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
      <span className="text-xs text-slate-400 font-bold">MONTHLY REVENUE</span>
      <div className="text-2xl font-black text-slate-900 mt-1">$48,200</div>
    </div>
  );
}`
  },
  {
    id: 'dark-card',
    name: 'Dark Card',
    htmlCode: `<div class="p-5 bg-slate-950 text-white rounded-2xl border border-slate-800">
  <h4 class="font-bold text-sm">Titanium Cloud</h4>
  <p class="text-xs text-slate-400 mt-1">High-concurrency cluster</p>
</div>`,
    jsxCode: `export function DarkCard() {
  return (
    <div className="p-5 bg-slate-950 text-white rounded-2xl border border-slate-800">
      <h4 className="font-bold text-sm">Titanium Cloud</h4>
      <p className="text-xs text-slate-400 mt-1">High-concurrency cluster</p>
    </div>
  );
}`
  }
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('preview');
  const [selectedCompIndex, setSelectedCompIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentComp = SAMPLE_COMPONENTS[selectedCompIndex];

  const handleCopy = () => {
    const textToCopy = activeTab === 'react' ? currentComp.jsxCode : currentComp.htmlCode;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 lg:pt-16 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Headlines & CTAs */}
        <div className="lg:col-span-6 space-y-6">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 text-slate-700 text-xs font-semibold shadow-2xs">
            <span className="text-blue-600 font-bold">⚡ 500+ Components</span>
            <span className="text-slate-300">•</span>
            <span>50+ Templates</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">100% Free to Start</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-slate-900 leading-[1.12]">
            Figma is for designers.<br />
            <span className="text-blue-600">UI-Vault</span> is for builders.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
            Copy-paste modern UI components and production-ready website templates built with pure Tailwind CSS. No Figma. No dependencies. Just clean code that ships.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#components"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              <span>Browse Components</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button 
              onClick={() => alert('Demo video walkthrough')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 shadow-xs transition-all cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 text-[10px]">
                ▶
              </div>
              <span>Watch Video</span>
            </button>
          </div>

          {/* Social Proof Avatars */}
          <div className="flex items-center gap-3.5 pt-4">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-white shadow-xs" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" alt="Developer" />
              <img className="w-8 h-8 rounded-full border-2 border-white shadow-xs" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" alt="Developer" />
              <img className="w-8 h-8 rounded-full border-2 border-white shadow-xs" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces" alt="Developer" />
              <img className="w-8 h-8 rounded-full border-2 border-white shadow-xs" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces" alt="Developer" />
            </div>
            <div className="text-xs">
              <p className="font-bold text-slate-900">Trusted by 10,000+ developers</p>
              <p className="text-slate-500 text-[11px]">Indie hackers, freelancers & students</p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Code & Live Showcase Window */}
        <div className="lg:col-span-6 relative">
          
          {/* Main Floating Card Window */}
          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.06),0_20px_45px_rgba(0,0,0,0.04)] overflow-hidden">
            
            {/* Window Topbar */}
            <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between gap-4">
              {/* Traffic Light Dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>

              {/* Tabs Switcher */}
              <div className="flex items-center bg-slate-100 p-0.5 rounded-lg text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                    activeTab === 'preview'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Preview
                </button>
                <button
                  onClick={() => setActiveTab('html')}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                    activeTab === 'html'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  HTML
                </button>
                <button
                  onClick={() => setActiveTab('react')}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                    activeTab === 'react'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  React JSX
                </button>
              </div>

              {/* Copy Code Button */}
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all cursor-pointer shadow-2xs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>

            {/* Split Window Body: Preview Canvas & Code + Thumbnail Drawer */}
            <div className="grid grid-cols-12 divide-x divide-slate-100">
              
              {/* Left/Center Canvas: Live Preview & Line Code */}
              <div className="col-span-10 p-6 flex flex-col justify-between">
                
                {/* Visual Preview Area with Glowing Aura */}
                <div className="min-h-[140px] flex items-center justify-center relative p-6">
                  {selectedCompIndex === 0 && (
                    <div className="relative group cursor-pointer">
                      {/* Colorful Glowing Aura behind Button */}
                      <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-75 blur-xl group-hover:opacity-100 transition duration-300"></span>
                      <button className="relative px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-sm shadow-md transition-transform duration-200 active:scale-95 flex items-center gap-2 cursor-pointer">
                        <span>Get Started</span>
                        <span>→</span>
                      </button>
                    </div>
                  )}

                  {selectedCompIndex === 1 && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span>Systems 100% Operational</span>
                    </div>
                  )}

                  {selectedCompIndex === 2 && (
                    <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm text-center">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">MONTHLY REVENUE</span>
                      <div className="text-2xl font-black text-slate-900">$48,200</div>
                    </div>
                  )}

                  {selectedCompIndex === 3 && (
                    <div className="p-4 bg-slate-950 text-white rounded-2xl border border-slate-800 text-center">
                      <h4 className="font-bold text-xs">Titanium Cloud</h4>
                      <p className="text-[10px] text-slate-400">High-concurrency cluster</p>
                    </div>
                  )}
                </div>

                {/* Line Numbered Code Box */}
                <div className="mt-4 pt-4 border-t border-slate-100 font-mono text-[11px] leading-relaxed text-slate-700 overflow-x-auto">
                  <div className="flex gap-3 text-slate-400">
                    <span className="select-none text-slate-300">1</span>
                    <span className="text-slate-600">&lt;button class="relative px-6 py-3 rounded-full group"&gt;</span>
                  </div>
                  <div className="flex gap-3 text-slate-400">
                    <span className="select-none text-slate-300">2</span>
                    <span className="text-purple-600">&nbsp;&nbsp;&lt;span class="absolute inset-0 bg-gradient-to-r from-purple-500</span>
                  </div>
                  <div className="flex gap-3 text-slate-400">
                    <span className="select-none text-slate-300">3</span>
                    <span className="text-blue-600">&nbsp;&nbsp;to-blue-500 opacity-90 blur-lg group-hover:opacity-100</span>
                  </div>
                  <div className="flex gap-3 text-slate-400">
                    <span className="select-none text-slate-300">4</span>
                    <span className="text-slate-600">&nbsp;&nbsp;transition"&gt;&lt;/span&gt;</span>
                  </div>
                  <div className="flex gap-3 text-slate-400">
                    <span className="select-none text-slate-300">5</span>
                    <span className="text-slate-900 font-semibold">&nbsp;&nbsp;&lt;span class="relative text-white font-medium"&gt;Get Started -&gt;&lt;/span&gt;</span>
                  </div>
                  <div className="flex gap-3 text-slate-400">
                    <span className="select-none text-slate-300">6</span>
                    <span className="text-slate-600">&lt;/button&gt;</span>
                  </div>
                </div>

              </div>

              {/* Right Sidebar Thumbnail Switcher */}
              <div className="col-span-2 p-3 bg-slate-50/50 flex flex-col gap-2.5 justify-center">
                {SAMPLE_COMPONENTS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedCompIndex(idx)}
                    className={`h-11 rounded-xl border flex items-center justify-center p-1 transition-all cursor-pointer ${
                      selectedCompIndex === idx
                        ? 'bg-white border-blue-500 shadow-xs ring-2 ring-blue-500/20'
                        : 'bg-white/80 hover:bg-white border-slate-200/80 opacity-70 hover:opacity-100'
                    }`}
                  >
                    {idx === 0 && <span className="w-5 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />}
                    {idx === 1 && <span className="w-2 h-2 rounded-full bg-emerald-500" />}
                    {idx === 2 && <span className="w-4 h-2 bg-purple-400 rounded-xs" />}
                    {idx === 3 && <span className="w-5 h-2 bg-slate-950 rounded-xs" />}
                  </button>
                ))}
              </div>

            </div>

            {/* Window Bottom Badge Bar */}
            <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-500 font-medium">
              <span className="flex items-center gap-1.5"><span className="text-blue-500">🌊</span> Tailwind CSS</span>
              <span className="flex items-center gap-1.5"><span className="text-cyan-500">⚛</span> React JSX</span>
              <span className="flex items-center gap-1.5"><span className="text-orange-500">📄</span> HTML</span>
              <span className="flex items-center gap-1.5"><Zap className="w-3 h-3 text-amber-500 fill-amber-500" /> Zero Dependencies</span>
            </div>

          </div>

          {/* Hand-drawn doodle arrow */}
          <div className="hidden sm:flex items-center gap-2 absolute -bottom-8 right-6 text-slate-500 select-none">
            <svg className="w-8 h-8 text-slate-400 -rotate-12" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 40 Q 25 15 40 25 M 32 18 L 40 25 L 34 32" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-handwriting text-lg text-slate-600 font-bold -rotate-3">
              Copy. Paste. Ship.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
