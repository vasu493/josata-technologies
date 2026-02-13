
import React from 'react';
import { NavItem } from '../../types';
import { motion } from 'framer-motion';

interface Props {
  item: NavItem;
  onSelectFunction?: (funcName: string, category: string) => void;
}

export const StandardMenuContent: React.FC<Props> = ({ item, onSelectFunction }) => {
  if (!item.dropdown) return null;

  return (
    <div className="max-w-[1440px] mx-auto px-10 py-20 flex gap-20 relative z-10 text-white">
      <div className="w-1/4 flex-shrink-0">
        <h2 className="text-5xl font-bold mb-4 tracking-tight">{item.dropdown.title}</h2>
        <div className="w-12 h-1.5 mb-8 bg-blue-500" />
        <p className="text-blue-100/60 leading-relaxed text-base font-light">{item.dropdown.description}</p>
      </div>
      <div className={`flex-1 grid gap-x-12 gap-y-12 ${item.dropdown.sections.length > 5 ? 'grid-cols-3' : 'grid-cols-2'}`}>
        {item.dropdown.sections.map((section, idx) => (
          <div key={idx} className="space-y-5">
            <h3 className="text-[13px] font-bold mb-3 tracking-widest uppercase text-blue-200">{section.category}</h3>
            <ul className="space-y-4">
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <button 
                    onClick={() => onSelectFunction?.(link, section.category)}
                    className="text-[14px] text-blue-100/50 hover:text-white transition-all flex items-center group/link relative text-left"
                  >
                    <motion.span 
                      className="inline-block mr-0 w-0 overflow-hidden text-blue-400 font-bold group-hover/link:w-4 group-hover/link:mr-2 transition-all duration-300"
                    >
                      ›
                    </motion.span>
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">
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
