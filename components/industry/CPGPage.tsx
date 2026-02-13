
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Footer } from '../layout/Footer';

interface Props {
  onBack: () => void;
}

/**
 * Collision Burst VFX
 * Features 3 faceted "rolling" shapes that converge, collide, and burst in a loop.
 */
const CollisionBurstVFX = () => {
  const [burstKey, setBurstKey] = useState(0);

  // Trigger a "burst" every 6 seconds to sync with the main collision animation
  useEffect(() => {
    const timer = setInterval(() => {
      setBurstKey(prev => prev + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center pointer-events-none overflow-visible group scale-75 lg:scale-100">
      {/* Background Deep Glow */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] mix-blend-screen"
      />

      <svg viewBox="0 0 800 800" className="w-full h-full overflow-visible drop-shadow-[0_0_50px_rgba(59,130,246,0.2)]">
        <defs>
          <linearGradient id="cpgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="cpgGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
          </linearGradient>
          <filter id="hyperGlow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Orbit Paths (Subtle) */}
        {[300, 320].map((r, i) => (
          <circle key={i} cx="400" cy="400" r={r} fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.05" />
        ))}

        {/* Collision Point Flash */}
        <AnimatePresence>
          <motion.circle
            key={burstKey}
            cx="400" cy="400"
            initial={{ r: 0, opacity: 0 }}
            animate={{ 
              r: [0, 150, 250], 
              opacity: [0, 0.8, 0],
              strokeWidth: [40, 0]
            }}
            transition={{ duration: 1.5, delay: 3, ease: "easeOut" }}
            fill="none"
            stroke="white"
            className="mix-blend-overlay"
          />
        </AnimatePresence>

        {/* Rolling Polyhedrons (3 pieces) */}
        {[
          { angle: 0, color: "url(#cpgGrad1)", delay: 0 },
          { angle: 120, color: "url(#cpgGrad2)", delay: 0.2 },
          { angle: 240, color: "url(#cpgGrad1)", delay: 0.4 }
        ].map((obj, i) => (
          <motion.g
            key={i}
            initial={{ rotate: obj.angle }}
            animate={{ rotate: obj.angle + 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: '400px 400px' }}
          >
            {/* The Shape itself "rolls" in and out of the center */}
            <motion.g
              animate={{ 
                x: [280, 0, 280],
                rotate: [0, 720, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: obj.delay }}
            >
              {/* Faceted Geometry Piece */}
              <path
                d="M 0 -40 L 35 -15 L 35 15 L 0 40 L -35 15 L -35 -15 Z"
                fill={obj.color}
                stroke="white"
                strokeWidth="1"
                strokeOpacity="0.3"
                className="mix-blend-screen"
                filter="url(#hyperGlow)"
              />
              <path d="M 0 -40 L 0 40 M -35 -15 L 35 15 M -35 15 L 35 -15" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
            </motion.g>
          </motion.g>
        ))}

        {/* Burst Particles - Triggered at collision */}
        <AnimatePresence>
          {[...Array(30)].map((_, i) => (
            <motion.circle
              key={`${burstKey}-${i}`}
              r={Math.random() * 2 + 1}
              fill="white"
              initial={{ x: 400, y: 400, opacity: 0 }}
              animate={{
                x: 400 + (Math.cos(i * 12) * (150 + Math.random() * 200)),
                y: 400 + (Math.sin(i * 12) * (150 + Math.random() * 200)),
                opacity: [0, 1, 0],
                scale: [1, 0]
              }}
              transition={{ duration: 1.2, delay: 3 + (Math.random() * 0.2), ease: "easeOut" }}
            />
          ))}
        </AnimatePresence>
      </svg>
    </div>
  );
};

export const CPGPage: React.FC<Props> = ({ onBack }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const capabilities = [
    { title: "Smart Inventory", desc: "Predictive replenishment engines that eliminate out-of-stock events while reducing carrying costs." },
    { title: "Direct Hubs", desc: "Bypassing distribution friction with hyper-local delivery nodes and unified digital logistics." },
    { title: "Consumer IQ", desc: "Deep behavioral modeling that anticipates demand patterns before seasonal shifts occur." },
    { title: "Eco-Tracing", desc: "Blockchain-validated sustainability metrics that build radical brand trust and ESG compliance." }
  ];

  return (
    <div className="fixed inset-0 bg-[#000408] overflow-hidden z-20 font-sans text-white">
      {/* HUD Navigation Overlay */}
      <div className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-16 z-[60] bg-gradient-to-b from-[#000408] to-transparent">
        <button 
          onClick={onBack} 
          className="flex items-center gap-3 text-white/30 font-black uppercase tracking-[0.5em] text-[10px] hover:text-white transition-all group pointer-events-auto"
        >
          <LucideIcons.ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> 
          CORE_INDEX
        </button>
        <div className="flex items-center gap-10">
          <div className="text-right hidden md:block">
            <span className="block text-[8px] font-black tracking-[0.4em] text-white/20 uppercase mb-1">Global_Sync</span>
            <span className="text-blue-500 font-bold text-sm tracking-tighter">CPG_ENGINE_NOMINAL</span>
          </div>
          <div className="w-[1px] h-10 bg-white/10 hidden md:block" />
          <button className="bg-white text-black px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all pointer-events-auto shadow-2xl">
            Contact Expert
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar relative z-10 scroll-smooth pt-24">
        
        {/* HERO SECTION */}
        <section className="h-screen w-full snap-start flex flex-col lg:flex-row items-center justify-center px-16 lg:px-24 gap-12 lg:gap-20">
          {/* Left Text Content */}
          <div className="w-full lg:w-[45%] space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-blue-600 shadow-[0_0_10px_#2563eb]" />
                <span className="text-blue-500 font-black tracking-[0.8em] uppercase text-[11px]">Industrial Intelligence</span>
              </div>
              
              <h1 className="text-6xl lg:text-[110px] font-black leading-[0.85] tracking-tighter uppercase italic text-white mb-10">
                CONSUMER <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-200 to-white">PACKAGED.</span><br />
                <span className="font-light text-white/20">GOODS.</span>
              </h1>

              <p className="text-2xl text-white/40 leading-relaxed font-light max-w-xl mb-12">
                Unifying <span className="text-white font-bold">predictive demand</span> with <span className="text-white font-bold">autonomous logistics</span> to engineer the high-velocity brands of 2025.
              </p>

              <div className="flex flex-wrap gap-10">
                <button className="bg-white text-black px-14 py-6 font-black text-[11px] tracking-[0.5em] uppercase hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_60px_rgba(255,255,255,0.1)] flex items-center gap-4 group/btn">
                   Launch Strategy <LucideIcons.ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
                <div className="flex items-center gap-4 cursor-pointer group/vid">
                   <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/vid:border-blue-500 group-hover/vid:bg-blue-500 transition-all">
                      <LucideIcons.Play size={16} className="text-white ml-1" />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-hover/vid:text-white transition-colors">Play_Reel</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Element - Collision Burst */}
          <div className="w-full lg:w-[55%] h-full flex items-center justify-center relative">
            <CollisionBurstVFX />
          </div>
        </section>

        {/* OVERVIEW SECTION - DARK MODE */}
        <section className="min-h-screen w-full snap-start bg-[#05070a] border-t border-white/5 flex flex-col justify-center px-16 lg:px-24 py-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-blue-500 to-transparent opacity-40" />
          
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-32 items-end mb-40">
              <div className="space-y-8">
                <h2 className="text-[11px] font-black uppercase tracking-[1em] text-blue-500">Autonomous Ecosystem</h2>
                <h3 className="text-7xl font-black text-white tracking-tighter leading-none uppercase italic">
                  Digital <br />Resilience.
                </h3>
              </div>
              <p className="text-2xl text-white/30 font-light leading-relaxed max-w-xl pb-4">
                We re-platform legacy CPG operations into high-fidelity digital cores, enabling real-time response to market volatility.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
              {capabilities.map((cap, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="group p-12 bg-white/[0.02] border border-white/5 hover:bg-blue-600/10 hover:border-blue-500/30 transition-all duration-500 flex flex-col h-[450px] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                     <LucideIcons.Layers size={100} strokeWidth={0.5} />
                  </div>
                  <div className="mb-14 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <LucideIcons.Cpu size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-white uppercase tracking-tight mb-6 group-hover:text-blue-400 transition-colors">
                    {cap.title}
                  </h4>
                  <p className="text-white/40 text-base leading-relaxed font-light mb-12 group-hover:text-white/70 transition-colors">
                    {cap.desc}
                  </p>
                  <div className="mt-auto flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.4em] text-white/20 group-hover:text-blue-400 transition-colors">
                    Explore Node <LucideIcons.Plus size={12} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PERFORMANCE IMPACT SECTION */}
        <section className="h-screen w-full snap-start bg-[#000408] flex items-center justify-center px-16 lg:px-24 border-t border-white/5 relative overflow-hidden">
           <div className="absolute inset-0 opacity-5">
             <LucideIcons.Globe size={1000} className="absolute -right-1/4 -bottom-1/4 rotate-12" strokeWidth={0.2} />
           </div>

           <div className="container mx-auto grid lg:grid-cols-2 gap-40 items-center relative z-10">
              <div className="space-y-16">
                 <h2 className="text-8xl font-black text-white uppercase tracking-tighter leading-none italic">Infinite<br /><span className="text-blue-500">Velocity.</span></h2>
                 <p className="text-2xl text-white/30 font-light leading-relaxed max-w-2xl">
                    Our CPG frameworks drive measurable margin uplift across global supply chains. We build the foundations for sustainable, AI-orchestrated growth.
                 </p>
                 <div className="grid grid-cols-2 gap-20 pt-10 border-t border-white/10">
                    <div>
                       <div className="text-7xl font-black text-white tracking-tighter mb-4 tabular-nums">40%</div>
                       <div className="text-[11px] font-black uppercase tracking-[0.6em] text-blue-500">Efficiency Gain</div>
                    </div>
                    <div>
                       <div className="text-7xl font-black text-white tracking-tighter mb-4 tabular-nums">1.2B</div>
                       <div className="text-[11px] font-black uppercase tracking-[0.6em] text-blue-500">Signals Processed</div>
                    </div>
                 </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="relative"
              >
                 <div className="absolute inset-0 bg-blue-500/10 rounded-[4rem] blur-3xl" />
                 <img 
                   src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
                   className="relative z-10 w-full h-[600px] object-cover rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                   alt="Logistics High Tech"
                 />
                 <div className="absolute -bottom-10 -right-10 bg-blue-600 p-12 rounded-[2rem] shadow-2xl z-20 max-w-[300px]">
                   <p className="text-white font-black uppercase tracking-widest text-[11px] leading-relaxed">
                     "Modern CPG is no longer about moving products; it's about moving intelligence."
                   </p>
                 </div>
              </motion.div>
           </div>
        </section>

        <Footer />
      </div>

      {/* Corporate Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
        <div className="grid grid-cols-6 h-full border-x border-white">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border-r border-white" />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div 
        style={{ scaleY }} 
        className="fixed top-0 left-0 w-1 bg-blue-600 origin-top z-[70] shadow-[0_0_20px_rgba(37,99,235,0.8)]" 
      />
    </div>
  );
};
