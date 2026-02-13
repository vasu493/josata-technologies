
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Footer } from '../layout/Footer';

interface Props {
  onBack: () => void;
}

const WorldMapBackground = () => {
  // Global OTA/Travel Hubs: SF, London, Dubai, Singapore, Tokyo, Sydney
  const pins = [
    { x: '12%', y: '42%' }, { x: '48%', y: '32%' }, 
    { x: '60%', y: '48%' }, { x: '75%', y: '55%' },
    { x: '82%', y: '35%' }, { x: '85%', y: '72%' }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />
      <div 
        className="absolute top-1/2 left-[30%] -translate-y-1/2 -translate-x-1/2 w-[75%] h-[75%] bg-no-repeat bg-contain opacity-25 brightness-150 grayscale-0"
        style={{ 
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')`,
          filter: 'drop-shadow(0 0 30px rgba(34, 211, 238, 0.3))'
        }}
      />
      {pins.map((pin, i) => (
        <div key={i} className="absolute" style={{ left: `calc(${pin.x} + 5%)`, top: pin.y }}>
          <motion.div 
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 3 + i, repeat: Infinity }}
            className="w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          >
            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

/**
 * Organic Growth VFX - Inspired by the liquid "Grow Up" Dribbble animation.
 * Features morphing blobbier shapes, soft gradients, and rhythmic "breathing" motion.
 */
const OrganicGrowthVFX = ({ activeIndex }: { activeIndex: number | null }) => {
  return (
    <div className="relative w-full h-[550px] flex items-center justify-center pointer-events-none overflow-visible">
      <svg viewBox="0 0 800 800" className="w-full h-full overflow-visible drop-shadow-[0_0_50px_rgba(34,211,238,0.2)]">
        <defs>
          <filter id="liquidGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="20" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <linearGradient id="growthGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          <linearGradient id="growthGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>

        {/* Pulsing Core Glow */}
        <motion.circle
          cx="400" cy="400" r="120"
          fill="url(#growthGrad1)"
          className="opacity-30 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Morphing Blob Layers */}
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={i}
            d={`M 400,400 m -150,0 a 150,150 0 1,0 300,0 a 150,150 0 1,0 -300,0`}
            fill={i % 2 === 0 ? "url(#growthGrad1)" : "url(#growthGrad2)"}
            className="mix-blend-screen"
            filter="url(#liquidGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.2, 1],
              opacity: activeIndex === i ? 0.9 : 0.4,
              d: [
                "M 400,400 C 450,250 650,250 700,400 C 650,550 450,550 400,400 C 350,550 150,550 100,400 C 150,250 350,250 400,400",
                "M 400,400 C 480,280 620,320 680,420 C 620,580 480,520 400,400 C 320,520 180,580 120,420 C 180,320 320,280 400,400",
                "M 400,400 C 450,250 650,250 700,400 C 650,550 450,550 400,400 C 350,550 150,550 100,400 C 150,250 350,250 400,400"
              ]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{ transformOrigin: '400px 400px', rotate: i * 72 }}
          />
        ))}

        {/* Small rising particles */}
        {[...Array(15)].map((_, i) => (
          <motion.circle
            key={`p-${i}`}
            r={2 + Math.random() * 2}
            fill="#ffffff"
            className="opacity-40"
            initial={{ x: 400, y: 400, opacity: 0 }}
            animate={{ 
              x: 400 + (Math.random() - 0.5) * 400,
              y: 400 + (Math.random() - 0.5) * 400 - 200,
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 10
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export const OTAPage: React.FC<Props> = ({ onBack }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const capabilityList = [
    "Meta-Search Core", "Inventory Mesh", "Loyalty Orchestration", 
    "Predictive Pricing", "Direct API Fabric", "Dynamic Bundling"
  ];

  return (
    <div className="fixed inset-0 bg-[#000408] overflow-hidden z-20 font-sans">
      {/* Fixed Back Button */}
      <div className="fixed top-8 left-12 z-50 pointer-events-none">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-white/40 font-bold uppercase tracking-[0.2em] text-[10px] hover:text-white transition-all pointer-events-auto group"
        >
          <LucideIcons.ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back
        </button>
      </div>

      <div ref={scrollRef} className="h-screen overflow-y-scroll snap-y snap-mandatory relative z-10 no-scrollbar scroll-smooth">
        
        {/* HERO SECTION - REPLICATING BANKING STYLE */}
        <section className="h-screen w-full snap-start flex flex-col justify-center px-16 relative overflow-hidden">
          <WorldMapBackground />
          
          <div className="grid lg:grid-cols-2 h-full items-center relative z-20 max-w-[1440px] mx-auto w-full">
            {/* Left Column: Heading */}
            <div className="space-y-4 pl-0">
               <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-white text-[15px] font-medium tracking-wide opacity-90 uppercase"
               >
                 Global Distribution Solutions Across
               </motion.h3>
               <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-8xl lg:text-[105px] font-black text-white leading-none tracking-tight uppercase italic"
               >
                 ONLINE <br /><span className="text-cyan-500">TRAVEL</span>
               </motion.h1>
            </div>

            {/* Right Column: Growth VFX + Capabilities List SIDE BY SIDE */}
            <div className="relative h-full flex items-center justify-end">
               <div className="flex flex-row items-center gap-10 lg:gap-16">
                  {/* The Cinematic "Grow Up" Organic VFX */}
                  <div className="flex-shrink-0 w-[450px]">
                     <OrganicGrowthVFX activeIndex={activeIndex} />
                  </div>
                  
                  {/* Capabilities Side List */}
                  <div className="text-right">
                    <h4 className="text-white font-bold text-[13px] uppercase mb-6 border-b border-white/20 pb-2 inline-block tracking-[0.3em]">
                      OTA CAPABILITIES
                    </h4>
                    <div className="flex flex-col gap-2.5">
                      {capabilityList.map((item, idx) => (
                        <motion.div 
                          key={idx}
                          onMouseEnter={() => setActiveIndex(idx)}
                          onMouseLeave={() => setActiveIndex(null)}
                          className="flex items-center justify-end gap-3 group cursor-pointer"
                        >
                           <span className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${activeIndex === idx ? 'text-white' : 'text-white/40'}`}>
                             {item}
                           </span>
                           <div className={`w-1.5 h-1.5 rounded-full transition-all ${activeIndex === idx ? 'bg-cyan-500 scale-150 shadow-[0_0_10px_#06b6d4]' : 'bg-white/10'}`} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION - REPLICATING BANKING STYLE */}
        <section className="min-h-screen w-full snap-start bg-white flex flex-col">
           {/* Section Selector Buttons */}
           <div className="flex justify-center gap-6 pt-16 mb-20">
              <button className="bg-[#f3f4f6] text-slate-800 px-8 py-3.5 font-semibold text-[13px] rounded-sm shadow-sm border border-slate-200 uppercase tracking-widest">
                Distribution Strategy
              </button>
              <button className="bg-cyan-600 text-white px-8 py-3.5 font-semibold text-[13px] rounded-sm shadow-md border border-cyan-700 uppercase tracking-widest">
                Digital OTA Platforms
              </button>
           </div>

           <div className="max-w-[1440px] mx-auto w-full px-16 pb-32">
              <div className="grid lg:grid-cols-2 gap-24 items-start">
                 <div className="relative overflow-hidden rounded shadow-2xl group">
                    <img 
                      src="https://images.unsplash.com/photo-1506012733851-bb078553c742?auto=format&fit=crop&q=80&w=1200" 
                      className="w-full h-[450px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                      alt="Modern Travel Tech"
                    />
                    <div className="absolute inset-0 bg-cyan-600/10 mix-blend-multiply" />
                 </div>
                 <div className="space-y-8">
                    <div className="space-y-4">
                       <h2 className="text-6xl font-black text-[#1a1a1a] tracking-tight uppercase italic">Overview</h2>
                       <div className="w-24 h-1.5 bg-cyan-600" />
                    </div>
                    <p className="text-2xl leading-relaxed text-slate-600 font-light pr-10">
                      Our travel practice reimagines global distribution by unifying fragmented inventory into high-velocity digital intelligence. We power the next generation of 1:1 guest engagement.
                    </p>
                    <div className="grid grid-cols-2 gap-10 pt-10 border-t border-slate-100">
                       <div className="space-y-3">
                          <h4 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-tight">Smart Search</h4>
                          <p className="text-sm text-slate-500">Sub-50ms latency search cores capable of aggregate millisecond responses.</p>
                       </div>
                       <div className="space-y-3">
                          <h4 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-tight">Inventory Mesh</h4>
                          <p className="text-sm text-slate-500">Real-time parity and inventory synchronization across 1M+ global nodes.</p>
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
        className="fixed top-0 left-0 w-1 bg-cyan-500 origin-top z-[70] shadow-[0_0_15px_rgba(34,211,238,0.5)]" 
      />
    </div>
  );
};
