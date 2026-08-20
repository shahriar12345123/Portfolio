import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 border-t border-white/10 py-12 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
            SR
          </div>
          <div>
            <div className="font-heading font-bold text-white text-sm">
              © 2026 Shahriar Bin Rifat. All rights reserved.
            </div>
            <div className="text-[11px] text-gray-500">
              Built with React, Tailwind CSS, Supabase, Firebase, and Vite.
            </div>
          </div>
        </div>

        {/* Quick Links & Scroll to top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-xs font-medium">
            <a href="#hero" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-gray-900 border border-white/10 text-gray-300 hover:text-white hover:border-blue-500/50 transition-all hover:-translate-y-0.5"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
