
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavItem } from '../../types';

interface Props {
  item: NavItem;
  onSelectFunction?: (funcName: string, category: string) => void;
}

export const IndustriesMenuContent: React.FC<Props> = ({ item, onSelectFunction }) => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  if (!item.dropdown || !item.dropdown.sections) return null;

  return (
    <div className="max-w-[1440px] mx-auto px-10 py-20 flex gap-20 relative z-10 text-white">
      {/* Left Panel: Title & Description (Added to match your provided layout) */}
      <div className="w-1/4 flex-shrink-0">
        <h2 className="text-5xl font-bold mb-4 tracking-tight">{item.dropdown.title}</h2>
        <div className="w-12 h-1.5 mb-8 bg-blue-500" />
        <p className="text-blue-100/60 leading-relaxed text-base font-light">
          {item.dropdown.description}
        </p>
      </div>

      {/* Right Panel: Scrollable/Grid Sections */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 overflow-y-auto max-h-[60vh] pr-4 custom-scrollbar">
        {item.dropdown.sections.map((section, idx) => (
          <div key={idx} className="space-y-6">
            <h3 className="text-[13px] font-bold tracking-widest text-blue-200 uppercase">
              {section.category}
            </h3>
            <ul className="space-y-4">
              {section.links.map((link, lIdx) => (
                <li key={lIdx} className="relative">
                  <button
                    onClick={() => {
                      setActiveLink(link);
                      onSelectFunction?.(link, section.category);
                    }}
                    onMouseEnter={() => setActiveLink(link)}
                    onMouseLeave={() => setActiveLink(null)}
                    className={`text-[15px] text-left transition-all flex items-center gap-2 group/link ${
                      activeLink === link ? 'text-white font-medium' : 'text-blue-100/40 hover:text-white'
                    }`}
                  >
                    <div className="relative flex items-center">
                      <motion.span 
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ 
                          width: activeLink === link ? 'auto' : 0,
                          opacity: activeLink === link ? 1 : 0 
                        }}
                        className="text-blue-400 font-bold text-[18px] leading-none overflow-hidden"
                      >
                        ›
                      </motion.span>
                    </div>
                    <span className={`${activeLink === link ? 'translate-x-1' : 'translate-x-0'} transition-transform duration-300`}>
                      {link}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
