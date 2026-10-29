import React, { useState } from 'react';
import { Copy, Check, Play, ArrowRight, Zap, Code2 } from 'lucide-react';

const SAMPLES = [
  {
    id: 'glow',
    name: 'Glow Button',
    html: `<button class="relative px-6 py-3 rounded-full group">
  <span class="absolute inset-0 bg-gradient-to-r from-purple-500
  to-blue-500 opacity-90 blur-lg group-hover:opacity-100
  transition"></span>
  <span class="relative text-white font-medium">Get Started -></span>
</button>`,
    jsx: `export function GlowButton() {
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
    name: 'Status Badge',
    html: `<div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
  <span>Systems 100% Operational</span>
</div>`,
    jsx: `export function LiveBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
      <span>Systems 100% Operational</span>
    </div>
  );
}`
  },
  {
    id: 'sparkline',
    name: 'Sparkline Card',
    html: `<div class="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
  <span class="text-[10px] text-slate-400 font-bold uppercase">Revenue</span>
  <svg class="w-full h-8 text-purple-500" viewBox="0 0 100 30">
    <path fill="none" stroke="currentColor" stroke-width="2" d="M0,25 Q25,5 50,20 T100,5" />
  </svg>
</div>`,
    jsx: `export function SparklineCard() {
  return (
    <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
      <span className="text-[10px] text-slate-400 font-bold uppercase">Revenue</span>
      {/* Sparkline chart SVG */}
    </div>
  );
}`
  },
  {
    id: 'terminal',
    name: 'Dark Action',
    html: `<div class="p-3 bg-slate-950 text-white rounded-xl border border-slate-800 flex items-center justify-between">
  <span class="text-xs font-mono text-emerald-400">$ ready</span>
  <button class="px-2 py-0.5 rounded bg-slate-800 text-[10px]">Run</button>
</div>`,
    jsx: `export function DarkAction() {
  return (
    <div className="p-3 bg-slate-950 text-white rounded-xl border border-slate-800 flex items-center justify-between">
      <span className="text-xs font-mono text-emerald-400">$ ready</span>
      <button className="px-2 py-0.5 rounded bg-slate-800 text-[10px]">Run</button>
    </div>
  );
}`
  }
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('preview');
  const [selectedSample, setSelectedSample] = useState(0);
  const [copied, setCopied] = useState(false);

  const sample = SAMPLES[selectedSample];

  const handleCopy = () => {
    const text = activeTab === 'react' ? sample.jsx : sample.html;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-6 pb-14 px-6 sm:px-10 lg:px-12 max-w-[1340px] mx-auto">
      {/* Background radial highlight glow */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[400px] bg-gradient-to-bl from-blue-100/50 via-indigo-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Headlines & CTA */}
        <div className="lg:col-span-6 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200/70 text-slate-700 text-xs font-semibold shadow-2xs">
            <span className="text-blue-600 font-bold">⚡ 500+ Components</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">50+ Templates</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">100% Free to Start</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-slate-950 leading-[1.12]">
            Figma is for designers.<br />
            <span className="text-blue-600">UI-Vault</span> is for builders.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
            Copy-paste modern UI components and production-ready website templates built with pure Tailwind CSS. No Figma. No dependencies. Just clean code that ships.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <a
              href="#components"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs active:scale-95"
            >
              <span>Browse Components</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button 
              type="button"
              onClick={() => alert('UI-Vault: Watch Video Tutorial')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm border border-slate-200/90 shadow-2xs transition-all cursor-pointer"
            >
              <span className="text-slate-900 text-xs">▶</span>
              <span>Watch Video</span>
            </button>
          </div>

          {/* Social Proof Avatars */}
          <div className="flex items-center gap-3.5 pt-3">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-2xs" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" alt="Developer" />
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-2xs" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" alt="Developer" />
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-2xs" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces" alt="Developer" />
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-2xs" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces" alt="Developer" />
            </div>
            <div className="text-xs">
              <p className="font-bold text-slate-900 text-[13px]">Trusted by 10,000+ developers</p>
              <p className="text-slate-500 text-[11px]">Indie hackers, freelancers &amp; students</p>
            </div>
          </div>
        </div>

        {/* Right Column: Mac Window Card */}
        <div className="lg:col-span-6 relative">
          
          {/* Main Floating Card Window */}
          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.07)] overflow-hidden">
            
            {/* Topbar of Mac Window */}
            <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between gap-4 bg-white">
              {/* Traffic light dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>

              {/* Tabs */}
              <div className="flex items-center bg-slate-100/80 p-0.5 rounded-lg text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                    activeTab === 'preview'
                      ? 'bg-slate-950 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  Preview
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('html')}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                    activeTab === 'html'
                      ? 'bg-slate-950 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  HTML
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('react')}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                    activeTab === 'react'
                      ? 'bg-slate-950 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  React JSX
                </button>
              </div>

              {/* Copy Code Button */}
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all cursor-pointer shadow-2xs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>

            {/* Window Content: Canvas + Sidebar Thumbnails */}
            <div className="p-6">
              <div className="grid grid-cols-12 gap-5 items-stretch">
                
                {/* Main Canvas with Glowing Button */}
                <div className="col-span-9 flex flex-col justify-between">
                  <div className="h-40 flex items-center justify-center relative">
                    {/* Glowing Button */}
                    <div className="relative group cursor-pointer">
                      {/* Big Aura Blur */}
                      <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-75 blur-xl group-hover:opacity-95 transition-opacity duration-300" />
                      <button className="relative px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-sm shadow-md transition-transform duration-200 active:scale-95 flex items-center gap-2 cursor-pointer">
                        <span>Get Started</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>

                  {/* Code Snippet (Lines 1 to 6) matching screenshot */}
                  <div className="pt-3 border-t border-slate-100 font-mono text-[11px] leading-relaxed select-text overflow-x-auto">
                    <div className="flex gap-4">
                      <span className="text-slate-300 select-none w-3">1</span>
                      <span className="text-slate-700">&lt;<span className="text-pink-600 font-semibold">button</span> <span className="text-slate-500">class</span>=<span className="text-cyan-600">"relative px-6 py-3 rounded-full group"</span>&gt;</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-slate-300 select-none w-3">2</span>
                      <span className="text-slate-700">&nbsp;&nbsp;&lt;<span className="text-pink-600 font-semibold">span</span> <span className="text-slate-500">class</span>=<span className="text-cyan-600">"absolute inset-0 bg-gradient-to-r from-purple-500</span></span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-slate-300 select-none w-3">3</span>
                      <span className="text-cyan-600">&nbsp;&nbsp;to-blue-500 opacity-90 blur-lg group-hover:opacity-100</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-slate-300 select-none w-3">4</span>
                      <span className="text-slate-700">&nbsp;&nbsp;<span className="text-cyan-600">transition"</span>&gt;&lt;/<span className="text-pink-600 font-semibold">span</span>&gt;</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-slate-300 select-none w-3">5</span>
                      <span className="text-slate-700">&nbsp;&nbsp;&lt;<span className="text-pink-600 font-semibold">span</span> <span className="text-slate-500">class</span>=<span className="text-cyan-600">"relative text-white font-medium"</span>&gt;Get Started -&gt;&lt;/<span className="text-pink-600 font-semibold">span</span>&gt;</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-slate-300 select-none w-3">6</span>
                      <span className="text-slate-700">&lt;/<span className="text-pink-600 font-semibold">button</span>&gt;</span>
                    </div>
                  </div>
                </div>

                {/* Right Thumbnails Switcher */}
                <div className="col-span-3 flex flex-col gap-2.5 justify-center border-l border-slate-100 pl-4">
                  {/* Item 1 (Active) */}
                  <div 
                    onClick={() => setSelectedSample(0)}
                    className="p-2 rounded-xl border-2 border-blue-500 bg-blue-50/20 cursor-pointer shadow-2xs hover:bg-blue-50/40 transition-colors"
                  >
                    <div className="h-6 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-[7px] text-white font-bold">
                      Get Started →
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div 
                    onClick={() => setSelectedSample(1)}
                    className="p-2 rounded-xl border border-slate-200/80 bg-white cursor-pointer hover:border-slate-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="w-12 h-1 bg-slate-200 rounded-full" />
                  </div>

                  {/* Item 3 */}
                  <div 
                    onClick={() => setSelectedSample(2)}
                    className="p-2 rounded-xl border border-slate-200/80 bg-white cursor-pointer hover:border-slate-300 transition-colors"
                  >
                    <div className="w-full h-5 flex items-end">
                      <svg className="w-full h-4 text-purple-400" viewBox="0 0 40 15" fill="none">
                        <path d="M0 12 Q10 2, 20 8 T40 4" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div 
                    onClick={() => setSelectedSample(3)}
                    className="p-2 rounded-xl border border-slate-200/80 bg-slate-950 cursor-pointer hover:bg-slate-900 transition-colors"
                  >
                    <div className="flex items-center justify-between text-[7px] text-slate-400 font-mono">
                      <span>$ dev</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Row under Mac Window */}
          <div className="mt-4 flex items-center justify-between gap-4">
            {/* Tech Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
              {/* Tailwind CSS */}
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
                </svg>
                <span>Tailwind CSS</span>
              </div>

              {/* React JSX */}
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-sky-500 animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="2"/>
                  <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)"/>
                  <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"/>
                  <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"/>
                </svg>
                <span>React JSX</span>
              </div>

              {/* HTML */}
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded bg-orange-600 text-white text-[8px] font-black flex items-center justify-center">5</span>
                <span>HTML</span>
              </div>

              {/* Zero Dependencies */}
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Zero Dependencies</span>
              </div>
            </div>

            {/* Cursive Doodle */}
            <div className="hidden sm:flex items-center gap-1.5 text-slate-700 font-handwriting text-lg rotate-[-2deg]">
              <span className="text-xl">⤷</span>
              <span>Copy. Paste. Ship.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
