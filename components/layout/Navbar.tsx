
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../../data/constants';
import * as Icons from 'lucide-react';
import { DigitalMenuContent } from '../navigation/DigitalMenuContent';
import { StandardMenuContent } from '../navigation/StandardMenuContent';
import { IndustriesMenuContent } from '../navigation/IndustriesMenuContent';

interface Props {
  onVibeChange?: (vibe: string) => void;
}

export const Navbar: React.FC<Props> = ({ onVibeChange }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [sideMenuView, setSideMenuView] = useState<'main' | string>('main');

  const currentItem = activeMenu ? NAV_ITEMS.find(i => i.label === activeMenu) : null;

  const handleSideMenuClose = () => {
    setIsSideMenuOpen(false);
    setTimeout(() => setSideMenuView('main'), 300);
  };

  const handleFunctionSelect = (funcName: string, category: string) => {
    if (onVibeChange) {
      onVibeChange(`${category}:${funcName}`);
      setActiveMenu(null);
      handleSideMenuClose();
    }
  };

  const renderSideMenuContent = () => {
    if (sideMenuView === 'main') {
      return (
        <motion.div
          key="main"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <nav className="space-y-4 mb-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="group">
                <button 
                  onClick={() => item.dropdown ? setSideMenuView(item.label) : handleSideMenuClose()}
                  className="text-[17px] font-semibold text-[#001b3d] hover:text-blue-600 transition-colors flex items-center justify-between w-full text-left"
                >
                  {item.label}
                  {item.dropdown && (
                    <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[5px] border-l-black border-b-[3px] border-b-transparent ml-2 opacity-80" />
                  )}
                </button>
              </div>
            ))}
          </nav>
          <div className="w-full h-px bg-slate-100 mb-6" />
          <nav className="space-y-3.5 mb-8">
            {['OFFICES', 'ALUMNI', 'MEDIA CENTER', 'SUBSCRIBE', 'CONTACT'].map((item) => (
              <div key={item}>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); onVibeChange?.('contact'); }}
                  className="text-[11px] font-bold tracking-[0.15em] text-[#001b3d] hover:text-blue-600 transition-colors flex items-center gap-2 uppercase"
                >
                  {item}
                </a>
              </div>
            ))}
          </nav>
        </motion.div>
      );
    }

    const activeNavItem = NAV_ITEMS.find(n => n.label === sideMenuView);
    return (
      <motion.div
        key="sub"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <button onClick={() => setSideMenuView('main')} className="flex items-center gap-2 text-black font-bold mb-5 hover:gap-3 transition-all uppercase tracking-widest text-[9px]">
          <Icons.ArrowLeft size={12} /> Back
        </button>
        <h3 className="text-xl font-bold text-[#001b3d] mb-6 pb-2 border-b border-slate-50">{sideMenuView}</h3>
        <div className="space-y-6 overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar">
          {activeNavItem?.dropdown?.sections.map((section, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">{section.category}</h4>
              <ul className="space-y-1.5">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <button 
                      onClick={() => handleFunctionSelect(link, section.category)}
                      className="text-[14px] text-[#001b3d] hover:text-blue-600 transition-colors block text-left w-full"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-white border-b border-slate-100 h-20 relative z-50 shadow-sm px-8">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between">
          <div className="flex items-center gap-6 h-full">
            <button 
              onClick={() => setIsSideMenuOpen(true)} 
              className="flex flex-col gap-1 w-6 group px-1 h-20 justify-center" 
              aria-label="Open Menu"
            >
              <div className="w-full h-[1.5px] bg-black transition-all group-hover:w-3/4" />
              <div className="w-full h-[1.5px] bg-black" />
              <div className="w-full h-[1.5px] bg-black transition-all group-hover:w-3/4" />
            </button>

            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onVibeChange?.('home'); }} 
              onMouseEnter={() => onVibeChange?.('home')}
              className="text-xl md:text-2xl font-bold tracking-tighter text-[#001b3d] flex items-center gap-1 whitespace-nowrap cursor-pointer"
            >
              JOSATA <span className="text-blue-600">TECHNOLOGIES</span>
            </a>

            <nav className="hidden xl:flex items-center gap-8 h-full ml-10">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                  className="relative h-full flex items-center cursor-pointer group px-4"
                >
                  <span className={`text-[14px] font-semibold transition-colors relative z-10 ${
                    activeMenu === item.label ? 'text-[#001b3d]' : 'text-slate-700'
                  }`}>
                    {item.label}
                  </span>
                  <AnimatePresence>
                    {activeMenu === item.label && (
                      <div className="absolute inset-0 flex flex-col items-center justify-end pointer-events-none">
                        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ width: 0 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="h-[3px] bg-[#001b3d] mb-2" />
                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }} className="absolute -bottom-1">
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8L0 0H12L6 8Z" fill="#001b3d" /></svg>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-slate-700 hover:text-blue-600 transition-colors"><Icons.Search size={20} /></button>
            <button 
              onMouseEnter={() => onVibeChange?.('contact')}
              onClick={() => onVibeChange?.('contact')}
              className="bg-[#001b3d] text-white px-6 py-2 rounded text-[13px] font-bold uppercase tracking-wider shadow-sm hover:bg-slate-800 transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeMenu && currentItem?.dropdown && (
          <motion.div
            key="mega-menu"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
            className="absolute top-20 left-0 w-full min-h-[500px] shadow-2xl z-40 overflow-hidden bg-[#001b3d] text-white"
          >
            {activeMenu === 'Digital' ? (
              <DigitalMenuContent item={currentItem} />
            ) : activeMenu === 'Industries' ? (
              <IndustriesMenuContent item={currentItem} onSelectFunction={handleFunctionSelect} />
            ) : (
              <StandardMenuContent item={currentItem} onSelectFunction={handleFunctionSelect} />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSideMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleSideMenuClose} className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[100]" />
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 35, stiffness: 300 }} className="fixed top-0 left-0 h-full w-full max-w-[320px] bg-white z-[101] shadow-2xl flex flex-col px-8 py-8">
              <div className="flex items-center justify-between mb-10">
                <span className="text-lg font-bold tracking-tight text-[#001b3d]">JOSATA <span className="text-blue-600">COMPANY</span></span>
                <button onClick={handleSideMenuClose} className="text-slate-400 hover:text-black transition-colors"><Icons.X size={20} /></button>
              </div>
              <div className="flex-1 overflow-y-auto"><AnimatePresence mode="wait">{renderSideMenuContent()}</AnimatePresence></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
