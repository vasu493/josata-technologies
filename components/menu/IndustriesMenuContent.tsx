
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
    <div className="bg-[#001b3d] text-white w-full">
      <div className="max-w-[1440px] mx-auto px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {item.dropdown.sections.map((section, idx) => (
          <div key={idx} className="space-y-8">
            <h3 className="text-[14px] font-black tracking-[0.05em] text-white uppercase opacity-90">
              {section.category}
            </h3>
            <ul className="space-y-5">
              {section.links.map((link, lIdx) => (
                <li key={lIdx} className="relative">
                  <button
                    onClick={() => {
                      setActiveLink(link);
                      onSelectFunction?.(link, section.category);
                    }}
                    onMouseEnter={() => setActiveLink(link)}
                    className={`text-[16px] text-left transition-all flex items-center gap-3 group/link ${
                      activeLink === link ? 'text-white font-medium' : 'text-blue-100/40 hover:text-white'
                    }`}
                  >
                    {activeLink === link && (
                      <motion.span 
                        layoutId="activeChevron"
                        className="text-blue-400 font-bold text-[14px]"
                      >
                        ›
                      </motion.span>
                    )}
                    <span className={`${activeLink === link ? '' : 'pl-0 group-hover/link:pl-2'} transition-all duration-300`}>
                      {link}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Visual Indicator Line at bottom if needed, as seen in image chevron */}
      <div className="h-px bg-white/5 w-full" />
    </div>
  );
};
