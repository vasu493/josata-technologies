import React from 'react';
import { motion } from 'framer-motion';
import { NavItem } from '../../types';

interface Props {
  item: NavItem;
}

export const StandardMenuContent: React.FC<Props> = ({ item }) => {
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
                  <a href="#" className="text-[14px] text-blue-100/50 hover:text-white transition-all flex items-center group/link">
                   <span className="w-0 overflow-hidden group-hover/link:w-3 transition-all duration-300 text-blue-400 font-bold">›</span>{link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
