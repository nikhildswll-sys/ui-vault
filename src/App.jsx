import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProTemplatesSection from './components/ProTemplatesSection';
import Footer from './components/Footer';
import { Search, X, Sparkles, ExternalLink } from 'lucide-react';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xl text-xs font-semibold flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar onOpenSearch={() => setSearchOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <CategorySection onSelectCategory={(cat) => showToast(`Opening ${cat.title}...`)} />
        <ProTemplatesSection onSelectTemplate={(tmpl) => showToast(`Selected template: ${tmpl.categoryTitle} (${tmpl.price})`)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center px-4 py-3.5 border-b border-slate-100 gap-3">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search buttons, cards, docks, steppers, templates..."
                className="flex-1 text-sm bg-transparent outline-none text-slate-800 placeholder-slate-400"
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 max-h-72 overflow-y-auto divide-y divide-slate-100 text-xs">
              <div 
                onClick={() => { setSearchOpen(false); showToast('Loaded Glowing Button!'); }} 
                className="p-2.5 rounded-lg hover:bg-slate-50 cursor-pointer flex items-center justify-between"
              >
                <div>
                  <span className="font-semibold text-slate-800">Glowing Animated Button</span>
                  <p className="text-[10px] text-slate-400">Buttons & CTAs • Pure Tailwind CSS</p>
                </div>
                <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Component</span>
              </div>

              <div 
                onClick={() => { setSearchOpen(false); showToast('Loaded SaaSly Template!'); }} 
                className="p-2.5 rounded-lg hover:bg-slate-50 cursor-pointer flex items-center justify-between"
              >
                <div>
                  <span className="font-semibold text-slate-800">SaaSly - AI SaaS Landing</span>
                  <p className="text-[10px] text-slate-400">Pro Templates • 7 sections</p>
                </div>
                <span className="text-[10px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded">₹299</span>
              </div>

              <div 
                onClick={() => { setSearchOpen(false); showToast('Loaded Floating Dock!'); }} 
                className="p-2.5 rounded-lg hover:bg-slate-50 cursor-pointer flex items-center justify-between"
              >
                <div>
                  <span className="font-semibold text-slate-800">macOS Floating Navigation Dock</span>
                  <p className="text-[10px] text-slate-400">Navigation & Docks • Micro-interactions</p>
                </div>
                <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Component</span>
              </div>
            </div>

            <div className="bg-slate-50 px-4 py-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>Press <kbd className="font-mono bg-white border border-slate-200 px-1 rounded">ESC</kbd> to exit</span>
              <span>UI-Vault Builder Suite</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
