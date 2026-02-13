
import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { KineticShapeVoid } from './KineticShapeVoid';
import { NavItem } from '../../types';

interface Props {
  item: NavItem;
}

export const DigitalMenuContent: React.FC<Props> = ({ item }) => {
  if (!item.dropdown) return null;

  return (
    <div className="max-w-[1440px] mx-auto px-10 py-16 flex flex-col md:flex-row items-center gap-8 lg:gap-16 h-full relative">
      <div className="w-full md:w-1/3 z-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-8">
             <div className="w-12 h-[2px] bg-blue-500" />
             <span className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-500">Vector Framework</span>
          </div>
          <h2 className="text-7xl lg:text-9xl font-black mb-8 tracking-tighter text-white">
            DIGITAL<span className="text-blue-600">.</span>
          </h2>
          <p className="text-2xl text-white/50 leading-tight font-light mb-12 max-w-sm">
            We integrate <span className="font-bold text-white">strategy, design</span> and <span className="font-bold text-white">engineering</span> to help you achieve breakthrough results.
          </p>
          <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 cursor-pointer group hover:text-white transition-colors">
            Experience Our Impact 
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Icons.ArrowRight size={18} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 flex justify-center items-center h-full relative overflow-hidden">
        <KineticShapeVoid />
      </div>

      <div className="w-full md:w-1/4 h-full border-l border-white/10 pl-16 py-4 space-y-16 z-20">
         {item.dropdown.sections.slice(0, 2).map((section, idx) => (
           <div key={idx} className="relative">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-8 flex items-center gap-3">
                <span className="w-4 h-[1px] bg-blue-500/30" />
                {section.category}
              </h3>
              <ul className="space-y-5">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href="#" className="text-[15px] text-white/30 hover:text-white transition-all flex items-center gap-3 group/link">
                      <span className="h-[1px] w-0 bg-blue-500 group-hover/link:w-3 transition-all duration-300" />
                      {link}
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
