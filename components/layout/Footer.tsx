
import React from 'react';
import * as Icons from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001b3d] text-white py-24 border-t border-white/5 font-sans relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footerGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerGrid)" />
        </svg>
      </div>

      <div className="container mx-auto px-12 max-w-[1440px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <a href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-1">
              JOSATA <span className="text-blue-400">TECHNOLOGIES</span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm font-light">
              We are a global leader in next-generation digital services and consulting, enabling clients in more than 30 countries to navigate their digital transformation journey.
            </p>
          </div>

          {/* Industry Links */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Industries</h4>
            <ul className="space-y-4 text-white/50 text-xs font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Banking & Finance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Retail & CPG</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Public Sector</a></li>
            </ul>
          </div>

          {/* Service Links */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Services</h4>
            <ul className="space-y-4 text-white/50 text-xs font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Digital Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Excellence</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI & Data Science</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cyber Security</a></li>
            </ul>
          </div>

          {/* About Links */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Company</h4>
            <ul className="space-y-4 text-white/50 text-xs font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-white/5 mb-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold text-white/30 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <span>© 2024 JOSATA TECHNOLOGIES. ALL RIGHTS RESERVED.</span>
          </div>
          
          <div className="flex items-center gap-6 text-white/20">
             <Icons.Globe size={16} />
             <span className="text-[10px] font-bold tracking-widest uppercase">Global Presence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
