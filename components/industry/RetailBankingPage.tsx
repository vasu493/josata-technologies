
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Footer } from '../layout/Footer';

interface Props {
  onBack: () => void;
}

const WorldMapBackground = () => {
  const pins = [
    { x: '12%', y: '42%' }, { x: '30%', y: '32%' }, 
    { x: '38%', y: '58%' }, { x: '42%', y: '68%' },
    { x: '51%', y: '47%' }, { x: '37%', y: '37%' }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />
      
      {/* World Map Texture */}
      <div 
        className="absolute top-1/2 left-[30%] -translate-y-1/2 -translate-x-1/2 w-[70%] h-[70%] bg-no-repeat bg-contain opacity-30 brightness-150 grayscale-0"
        style={{ 
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')`,
          filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))'
        }}
      />
      
      {pins.map((pin, i) => (
        <div key={i} className="absolute" style={{ left: `calc(${pin.x} + 5%)`, top: pin.y }}>
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2 + i, repeat: Infinity }}
            className="w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.8)]"
          >
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const SectorGraphic = ({ activeIndex, setActiveIndex }: any) => {
  const segments = [
    { label: "Digital Banking", color: "#facc15", startAngle: 180, endAngle: 215 },
    { label: "Core Banking", color: "#e2e8f0", startAngle: 215, endAngle: 250 },
    { label: "Infra Solutions", color: "#f97316", startAngle: 250, endAngle: 285 },
    { label: "Payment Solutions", color: "#f1f5f9", startAngle: 285, endAngle: 320 },
    { label: "Enterprise Solutions", color: "#fb923c", startAngle: 320, endAngle: 355 },
    { label: "Emerging Tech", color: "#cbd5e1", startAngle: 355, endAngle: 390 },
  ];

  const centerX = 800;
  const centerY = 300;
  const radius = 260;
  const innerRadius = 75;

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-visible">
      <svg viewBox="0 0 1000 600" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
        {/* Arcs for the Solutions List */}
        {[...Array(6)].map((_, i) => (
           <circle 
             key={i} 
             cx={centerX} 
             cy={centerY} 
             r={radius + 20 + (i * 15)} 
             fill="none" 
             stroke="white" 
             strokeWidth="0.5" 
             strokeDasharray="1 5" 
             className="opacity-20"
           />
        ))}

        <g transform={`translate(${centerX}, ${centerY})`}>
          {segments.map((seg, i) => {
            const isHovered = activeIndex === i;
            const midAngle = (seg.startAngle + seg.endAngle) / 2;
            const midRad = (midAngle * Math.PI) / 180;
            const startRad = (seg.startAngle * Math.PI) / 180;
            const endRad = (seg.endAngle * Math.PI) / 180;
            
            const path = `M ${radius * Math.cos(startRad)} ${radius * Math.sin(startRad)} A ${radius} ${radius} 0 0 1 ${radius * Math.cos(endRad)} ${radius * Math.sin(endRad)} L ${innerRadius * Math.cos(endRad)} ${innerRadius * Math.sin(endRad)} A ${innerRadius} ${innerRadius} 0 0 0 ${innerRadius * Math.cos(startRad)} ${innerRadius * Math.sin(startRad)} Z`;

            return (
              <g key={i} className="cursor-pointer" onMouseEnter={() => setActiveIndex(i)} onMouseLeave={() => setActiveIndex(null)}>
                <motion.path 
                  d={path} 
                  fill={seg.color} 
                  animate={{ scale: isHovered ? 1.05 : 1, opacity: activeIndex !== null && !isHovered ? 0.6 : 1 }} 
                  className="stroke-black/10 transition-opacity"
                />
                <text 
                  x={(radius - 40) * Math.cos(midRad)} 
                  y={(radius - 40) * Math.sin(midRad)} 
                  fill="#1a1a1a" 
                  fontSize="9" 
                  fontWeight="800" 
                  textAnchor="middle"
                  className="uppercase tracking-tighter select-none pointer-events-none opacity-80"
                >
                  {seg.label.split(' ')[0]}
                </text>
                <text 
                  x={(radius - 40) * Math.cos(midRad)} 
                  y={(radius - 40) * Math.sin(midRad) + 10} 
                  fill="#1a1a1a" 
                  fontSize="9" 
                  fontWeight="800" 
                  textAnchor="middle"
                  className="uppercase tracking-tighter select-none pointer-events-none opacity-80"
                >
                  {seg.label.split(' ')[1]}
                </text>
              </g>
            );
          })}
          
          {/* Solid Red Hub */}
          <circle cx="0" cy="0" r="42" fill="#cc0000" className="shadow-xl" />
        </g>
      </svg>
    </div>
  );
};

export const RetailBankingPage: React.FC<Props> = ({ onBack }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const solutionList = [
    "GBS Product", "RPA Services", "KIOSK Product", 
    "iSMART BI Product", "Application Services", "Data Morphix Platform"
  ];

  return (
    <div className="fixed inset-0 bg-[#001b3d] overflow-hidden z-20 font-sans">
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
          
          <div className="grid lg:grid-cols-2 h-full items-center relative z-20">
            <div className="space-y-4 pl-10">
               <h3 className="text-white text-[15px] font-medium tracking-wide opacity-90 uppercase">
                 Customer-Centric Banking Solutions Served To
               </h3>
               <h1 className="text-8xl lg:text-[105px] font-black text-white leading-none tracking-tight uppercase">
                 30+ COUNTRIES
               </h1>
            </div>

            <div className="relative h-full flex flex-col items-center justify-center">
               <div className="w-full h-full flex items-center justify-end pr-10">
                  <SectorGraphic activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
               </div>
               
               {/* Solutions List beneath graphic area */}
               <div className="absolute right-32 bottom-24 text-right">
                  <h4 className="text-white font-bold text-[15px] uppercase mb-4 border-b border-white/20 pb-2 inline-block">
                    OUR SOLUTIONS
                  </h4>
                  <div className="flex flex-col gap-1.5">
                    {solutionList.map((item, idx) => (
                      <motion.div 
                        key={idx}
                        onMouseEnter={() => setActiveIndex(idx)}
                        onMouseLeave={() => setActiveIndex(null)}
                        className="flex items-center justify-end gap-3 group cursor-pointer"
                      >
                         <span className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${activeIndex === idx ? 'text-white' : 'text-white/50'}`}>
                           {item}
                         </span>
                         <div className={`w-1.5 h-1.5 rounded-full transition-all ${activeIndex === idx ? 'bg-white scale-125' : 'bg-white/20'}`} />
                      </motion.div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* TRANSITION & OVERVIEW */}
        <section className="min-h-screen w-full snap-start bg-white flex flex-col">
           {/* Section Selector Buttons as seen in image */}
           <div className="flex justify-center gap-6 pt-16 mb-20">
              <button className="bg-[#f3f4f6] text-slate-800 px-8 py-3.5 font-semibold text-[13px] rounded-sm shadow-sm border border-slate-200">
                Product Engineering & Development
              </button>
              <button className="bg-[#cc0000] text-white px-8 py-3.5 font-semibold text-[13px] rounded-sm shadow-md border border-red-700">
                Banking
              </button>
           </div>

           <div className="max-w-[1440px] mx-auto w-full px-16 pb-32">
              <div className="grid lg:grid-cols-2 gap-24 items-start">
                 <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200" 
                      className="w-full h-[450px] object-cover rounded shadow-2xl"
                      alt="Strategy"
                    />
                    <div className="absolute inset-0 bg-red-600/5 mix-blend-multiply" />
                 </div>
                 <div className="space-y-8">
                    <div className="space-y-4">
                       <h2 className="text-6xl font-black text-[#1a1a1a] tracking-tight">Overview</h2>
                       <div className="w-24 h-1.5 bg-[#cc0000]" />
                    </div>
                    <p className="text-2xl leading-relaxed text-slate-600 font-light pr-10">
                      Our banking practice delivers high-performance core platforms and customer-focused digital ecosystems for the world's leading financial institutions.
                    </p>
                    <div className="grid grid-cols-2 gap-10 pt-10 border-t border-slate-100">
                       <div className="space-y-3">
                          <h4 className="text-lg font-bold text-[#1a1a1a]">Digital Core</h4>
                          <p className="text-sm text-slate-500">Robust architectures designed for 24/7 mission-critical throughput.</p>
                       </div>
                       <div className="space-y-3">
                          <h4 className="text-lg font-bold text-[#1a1a1a]">Seamless UX</h4>
                          <p className="text-sm text-slate-500">Intuitive cross-platform journeys that build customer loyalty.</p>
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

      <motion.div 
        style={{ scaleY }} 
        className="fixed top-0 left-0 w-1 bg-[#cc0000] origin-top z-[70]" 
      />
    </div>
  );
};
