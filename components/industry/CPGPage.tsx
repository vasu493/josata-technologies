
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Footer } from '../layout/Footer';

interface Props {
  onBack: () => void;
}

const CollisionBurstVFX = () => {
  const [burstKey, setBurstKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBurstKey(prev => prev + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center pointer-events-none overflow-visible group scale-75 lg:scale-110">
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-blue-400 rounded-full blur-[150px] mix-blend-screen"
      />

      <svg viewBox="0 0 800 800" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="cpgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="cpgGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
          <filter id="hyperGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <AnimatePresence>
          <motion.circle
            key={`ring-${burstKey}`}
            cx="400" cy="400"
            initial={{ r: 0, opacity: 0 }}
            animate={{ 
              r: [0, 180, 320], 
              opacity: [0, 0.6, 0],
              strokeWidth: [40, 0]
            }}
            transition={{ duration: 1.5, delay: 3, ease: "easeOut" }}
            fill="none"
            stroke="white"
            className="mix-blend-overlay"
          />
        </AnimatePresence>

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
            <motion.g
              animate={{ 
                x: [260, 0, 260],
                rotate: [0, 720, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: obj.delay }}
            >
              <path
                d="M 0 -45 L 40 -15 L 40 15 L 0 45 L -40 15 L -40 -15 Z"
                fill={obj.color}
                stroke="white"
                strokeWidth="1"
                strokeOpacity="0.4"
                className="mix-blend-screen"
                filter="url(#hyperGlow)"
              />
              <path d="M 0 -45 L 0 45 M -40 -15 L 40 15 M -40 15 L 40 -15" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
            </motion.g>
          </motion.g>
        ))}

        <AnimatePresence>
          {[...Array(40)].map((_, i) => (
            <motion.circle
              key={`${burstKey}-${i}`}
              r={Math.random() * 2 + 1}
              fill="white"
              initial={{ x: 400, y: 400, opacity: 0 }}
              animate={{
                x: 400 + (Math.cos(i * 9) * (200 + Math.random() * 250)),
                y: 400 + (Math.sin(i * 9) * (200 + Math.random() * 250)),
                opacity: [0, 1, 0],
                scale: [1.5, 0]
              }}
              transition={{ duration: 1.4, delay: 3 + (Math.random() * 0.1), ease: "easeOut" }}
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
    { title: "Predictive Demand", desc: "Using AI to anticipate market shifts before they impact the shelf, enabling zero-friction supply chains." },
    { title: "Autonomous Logistics", desc: "Unified transport layers that manage inventory flow with sub-second decision precision." },
    { title: "Unified Commerce", desc: "Closing the gap between digital discovery and physical acquisition through 1:1 engagement." },
    { title: "Circular Economy", desc: "Blockchain-powered sustainability ledgers for radical transparency in product lifecycles." }
  ];

  return (
    <div className="fixed inset-0 bg-[#001b3d] overflow-hidden z-20 font-sans text-white">
      <div className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-16 z-[60] bg-gradient-to-b from-[#001b3d] to-transparent">
        <button 
          onClick={onBack} 
          className="flex items-center gap-3 text-white/30 font-black uppercase tracking-[0.5em] text-[10px] hover:text-white transition-all group pointer-events-auto"
        >
          <LucideIcons.ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> 
          INDEX_RETURN
        </button>
        <div className="flex items-center gap-8">
          <div className="text-right hidden md:block">
            <span className="block text-[8px] font-black tracking-[0.4em] text-white/20 uppercase mb-1">Status</span>
            <span className="text-blue-400 font-bold text-sm tracking-tighter uppercase">CPG_CORE_NOMINAL</span>
          </div>
          <button className="bg-white text-black px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-500 hover:text-white transition-all pointer-events-auto shadow-2xl">
            Contact Expert
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar relative z-10 scroll-smooth pt-24">
        <section className="h-screen w-full snap-start flex flex-col lg:flex-row items-center justify-center px-16 lg:px-24 gap-12 lg:gap-20">
          <div className="w-full lg:w-[45%] space-y-12">
            <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
                <span className="text-blue-400 font-black tracking-[0.8em] uppercase text-[11px]">Industrial Intelligence</span>
              </div>
              <h1 className="text-6xl lg:text-[110px] font-black leading-[0.85] tracking-tighter uppercase italic text-white mb-10">
                CONSUMER <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-200">PACKAGED.</span><br />
                <span className="font-light text-white/20">GOODS.</span>
              </h1>
              <p className="text-2xl text-white/40 leading-relaxed font-light max-w-xl mb-12">
                Engineering the foundations of <span className="text-white font-bold">modern retail</span> through high-fidelity digital cores and autonomous logistics.
              </p>
              <div className="flex flex-wrap gap-8">
                <button className="bg-white text-black px-12 py-5 font-black text-[11px] tracking-[0.5em] uppercase hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-4 group/btn">
                   Launch Strategy <LucideIcons.ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
          <div className="w-full lg:w-[55%] h-full flex items-center justify-center relative">
            <CollisionBurstVFX />
          </div>
        </section>

        <section className="min-h-screen w-full snap-start bg-[#001b3d] border-t border-white/5 flex flex-col justify-center px-16 lg:px-24 py-32 relative">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-32 items-end mb-40">
              <div className="space-y-8">
                <h2 className="text-[11px] font-black uppercase tracking-[1em] text-blue-400">Autonomous Ecosystem</h2>
                <h3 className="text-7xl font-black text-white tracking-tighter leading-none uppercase italic">
                  Velocity <br />at Scale.
                </h3>
              </div>
              <p className="text-2xl text-white/30 font-light leading-relaxed max-w-xl pb-4">
                We re-platform legacy CPG operations into intelligent, flowing networks that respond to signals in sub-second real-time.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {capabilities.map((cap, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-12 bg-white/[0.03] border border-white/5 hover:bg-blue-500/10 hover:border-blue-400/30 transition-all duration-500 flex flex-col h-[480px] rounded-3xl"
                >
                  <div className="mb-14 w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <LucideIcons.Box size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-white uppercase tracking-tight mb-6 group-hover:text-blue-400 transition-colors">
                    {cap.title}
                  </h4>
                  <p className="text-white/40 text-base leading-relaxed font-light mb-12">
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

        <Footer />
      </div>

      <motion.div 
        style={{ scaleY }} 
        className="fixed top-0 left-0 w-1.5 bg-blue-500 origin-top z-[70] shadow-[0_0_20px_#3b82f6]" 
      />
    </div>
  );
};
