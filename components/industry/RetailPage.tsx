
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Footer } from '../layout/Footer';

interface Props {
  onBack: () => void;
}

const WorldMapBackground = () => {
  const pins = [
    { x: '15%', y: '38%' }, { x: '48%', y: '32%' }, 
    { x: '52%', y: '35%' }, { x: '82%', y: '35%' },
    { x: '78%', y: '45%' }, { x: '60%', y: '48%' }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />
      
      <div 
        className="absolute top-1/2 left-[30%] -translate-y-1/2 -translate-x-1/2 w-[70%] h-[70%] bg-no-repeat bg-contain opacity-20 brightness-125 grayscale-0"
        style={{ 
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')`,
          filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.4))'
        }}
      />
      
      {pins.map((pin, i) => (
        <div key={i} className="absolute" style={{ left: `calc(${pin.x} + 5%)`, top: pin.y }}>
          <motion.div 
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 3 + i, repeat: Infinity }}
            className="w-3 h-3 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.9)]"
          >
            <div className="w-1 h-1 bg-blue-500 rounded-full" />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ColumnIQGraphic = ({ activeIndex, setActiveIndex }: any) => {
  const pillars = [
    { label: "Omnichannel", value: 85 },
    { label: "Supply Chain", value: 65 },
    { label: "Personalization", value: 92 },
    { label: "Inventory", value: 78 },
    { label: "Loyalty", value: 88 },
    { label: "Checkout", value: 70 }
  ];

  return (
    <div className="relative w-full h-[380px] flex items-end justify-center gap-3 lg:gap-4 overflow-visible max-w-sm">
      {/* Background Grid Lines */}
      <div className="absolute inset-x-0 bottom-0 h-full border-b border-white/10 -z-10 flex flex-col justify-between pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-full h-px bg-white/20" />
        ))}
      </div>

      {pillars.map((p, i) => (
        <div 
          key={i} 
          className="relative group cursor-pointer h-full flex flex-col justify-end"
          onMouseEnter={() => setActiveIndex(i)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: `${p.value}%` }}
            transition={{ duration: 1.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`w-7 lg:w-9 relative overflow-hidden transition-all duration-500 ${activeIndex === i ? 'shadow-[0_0_40px_rgba(59,130,246,0.6)]' : ''}`}
          >
            {/* Main Bar Body */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-600 to-blue-400"
              style={{ backgroundColor: activeIndex === i ? '#ffffff' : undefined }}
            />
            {/* Inner Scanning Line */}
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-full h-1/2 bg-white/20 blur-xl pointer-events-none"
            />
            
            {/* Top Glow Cap */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white shadow-[0_0_10px_#fff]" />
          </motion.div>

          <AnimatePresence>
            {activeIndex === i && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-center"
              >
                <div className="text-xl font-black text-white">{p.value}%</div>
                <div className="text-[6px] font-black uppercase tracking-widest text-blue-400">IQ_SYNC</div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-4 text-center">
            <span className={`text-[7px] font-black uppercase tracking-widest transition-all duration-500 ${activeIndex === i ? 'text-white' : 'text-white/20'}`}>
              {p.label.substring(0, 4)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export const RetailPage: React.FC<Props> = ({ onBack }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const solutionList = [
    "Omnichannel Core", "Supply Chain AI", "Personalization Engine", 
    "Inventory Intelligence", "Loyalty Mesh", "Frictionless Checkout"
  ];

  return (
    <div className="fixed inset-0 bg-[#000408] overflow-hidden z-20 font-sans">
      {/* TOP NAVIGATION BACK BUTTON */}
      <div className="fixed top-8 left-12 z-50 pointer-events-none">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-white/40 font-bold uppercase tracking-[0.2em] text-[10px] hover:text-white transition-all pointer-events-auto"
        >
          <LucideIcons.ArrowLeft size={14} /> Back
        </button>
      </div>

      <div ref={scrollRef} className="h-screen overflow-y-scroll snap-y snap-mandatory relative z-10 no-scrollbar scroll-smooth">
        
        {/* HERO SECTION */}
        <section className="h-screen w-full snap-start flex flex-col justify-center px-16 relative overflow-hidden">
          <WorldMapBackground />
          
          <div className="grid lg:grid-cols-2 h-full items-center relative z-20 max-w-[1440px] mx-auto w-full">
            {/* Left Column: Heading */}
            <div className="space-y-4 pl-0">
               <h3 className="text-white text-[15px] font-medium tracking-wide opacity-90 uppercase">
                 Retail & Consumer Goods Solutions Across
               </h3>
               <h1 className="text-8xl lg:text-[105px] font-black text-white leading-none tracking-tight uppercase">
                 GLOBAL<br /><span className="text-blue-500">MARKETS</span>
               </h1>
            </div>

            {/* Right Column: Column Chart + Solutions List SIDE BY SIDE */}
            <div className="relative h-full flex items-center justify-end">
               <div className="flex flex-row items-center gap-12 lg:gap-20">
                  <div className="flex-shrink-0">
                     <ColumnIQGraphic activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                  </div>
                  
                  <div className="text-right">
                    <h4 className="text-white font-bold text-[13px] uppercase mb-6 border-b border-white/20 pb-2 inline-block tracking-[0.3em]">
                      CAPABILITIES
                    </h4>
                    <div className="flex flex-col gap-2">
                      {solutionList.map((item, idx) => (
                        <motion.div 
                          key={idx}
                          onMouseEnter={() => setActiveIndex(idx)}
                          onMouseLeave={() => setActiveIndex(null)}
                          className="flex items-center justify-end gap-3 group cursor-pointer"
                        >
                           <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${activeIndex === idx ? 'text-white' : 'text-white/40'}`}>
                             {item}
                           </span>
                           <div className={`w-1.5 h-1.5 rounded-full transition-all ${activeIndex === idx ? 'bg-blue-500 scale-150' : 'bg-white/10'}`} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className="min-h-screen w-full snap-start bg-white flex flex-col">
           {/* Section Selector Buttons */}
           <div className="flex justify-center gap-6 pt-16 mb-20">
              <button className="bg-[#f3f4f6] text-slate-800 px-8 py-3.5 font-semibold text-[13px] rounded-sm shadow-sm border border-slate-200 uppercase tracking-widest">
                Consumer Strategy
              </button>
              <button className="bg-blue-600 text-white px-8 py-3.5 font-semibold text-[13px] rounded-sm shadow-md border border-blue-700 uppercase tracking-widest">
                Digital Retail
              </button>
           </div>

           <div className="max-w-[1440px] mx-auto w-full px-16 pb-32">
              <div className="grid lg:grid-cols-2 gap-24 items-start">
                 <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" 
                      className="w-full h-[450px] object-cover rounded shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                      alt="Modern Retail"
                    />
                    <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply" />
                 </div>
                 <div className="space-y-8">
                    <div className="space-y-4">
                       <h2 className="text-6xl font-black text-[#1a1a1a] tracking-tight uppercase">Overview</h2>
                       <div className="w-24 h-1.5 bg-blue-600" />
                    </div>
                    <p className="text-2xl leading-relaxed text-slate-600 font-light pr-10">
                      Our retail practice engineers frictionless shopper experiences by unifying physical storefronts with digital intelligence. We turn supply chain data into a competitive advantage.
                    </p>
                    <div className="grid grid-cols-2 gap-10 pt-10 border-t border-slate-100">
                       <div className="space-y-3">
                          <h4 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-tight">Connected Flow</h4>
                          <p className="text-sm text-slate-500">Real-time inventory synchronization across global logistics nodes.</p>
                       </div>
                       <div className="space-y-3">
                          <h4 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-tight">Hyper-Personal</h4>
                          <p className="text-sm text-slate-500">AI-driven engagement that anticipates consumer needs before they arise.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="mt-auto">
              <Footer />
           </div>
        </section>
      </div>

      {/* SIDE PROGRESS BAR */}
      <motion.div 
        style={{ scaleY }} 
        className="fixed top-0 left-0 w-1 bg-blue-600 origin-top z-[70] shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
      />
    </div>
  );
};
