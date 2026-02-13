
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Footer } from '../layout/Footer';

interface Props {
  onBack: () => void;
}

const KyndrylFluidBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-[#001b3d]" />
      <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="opacity-40">
        <defs>
          <linearGradient id="fluidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.2" />
          </linearGradient>
          <filter id="blurFilter">
            <feGaussianBlur stdDeviation="40" />
          </filter>
        </defs>

        {/* Animated Fluid Paths */}
        {[...Array(6)].map((_, i) => (
          <motion.path
            key={i}
            d={`M -200,${300 + i * 100} Q 400,${100 + i * 50} 720,${450} T 1640,${300 + i * 100}`}
            stroke="url(#fluidGrad)"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                `M -200,${300 + i * 100} Q 400,${100 + i * 50} 720,${450} T 1640,${300 + i * 100}`,
                `M -200,${400 + i * 80} Q 600,${600 - i * 40} 720,${450} T 1640,${400 + i * 80}`,
                `M -200,${300 + i * 100} Q 400,${100 + i * 50} 720,${450} T 1640,${300 + i * 100}`
              ]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Drifting Orbs */}
        <motion.circle
          cx="20%" cy="30%" r="200"
          fill="#3b82f6" fillOpacity="0.1"
          filter="url(#blurFilter)"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="80%" cy="70%" r="250"
          fill="#1d4ed8" fillOpacity="0.1"
          filter="url(#blurFilter)"
          animate={{
            x: [0, -150, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
};

const TechStackTicker = () => {
  const techs = [
    "AWS", "AZURE", "GOOGLE CLOUD", "KUBERNETES", "TERRAFORM", "PYTHON", "REACT", "TENSORFLOW", 
    "SNOWFLAKE", "DATABRICKS", "KAFKA", "POSTGRESQL", "DOCKER", "JENKINS", "RPA", "SAP HANA"
  ];
  
  return (
    <div className="w-full bg-white/5 border-y border-white/5 py-8 overflow-hidden relative">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1920] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-24 items-center px-12"
        >
          {[...techs, ...techs].map((tech, i) => (
            <span key={i} className="text-[11px] font-black tracking-[0.5em] text-white/20 uppercase hover:text-blue-400 transition-colors">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const PartnerMarquee = () => {
  const partners = [
    "MICROSOFT", "ADOBE", "ORACLE", "NVIDIA", "IBM", "CISCO", "SALESFORCE", "WORKDAY"
  ];

  return (
    <div className="w-full py-20 overflow-hidden relative">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [-1920, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-40 items-center px-20"
        >
          {[...partners, ...partners].map((partner, i) => (
            <div key={i} className="group flex flex-col items-center gap-4">
              <span className="text-4xl font-black italic tracking-tighter text-white/10 group-hover:text-white/60 transition-all duration-500 cursor-default">
                {partner}
              </span>
              <div className="w-0 h-[1px] bg-blue-500 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const OurStoryPage: React.FC<Props> = ({ onBack }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const milestones = [
    { year: "2004", title: "Genesis", desc: "Founded with a mission to bridge the gap between enterprise legacy and digital future." },
    { year: "2010", title: "Global Expansion", desc: "Opened key hubs across EMEA and APAC, scaling our technical workforce to 5,000+ experts." },
    { year: "2018", title: "AI-First Pivot", desc: "Integrated deep learning and predictive analytics into our core delivery framework: Vector." },
    { year: "2024", title: "The Singularity", desc: "Redefining autonomous enterprise operations for the world's Fortune 500." }
  ];

  return (
    <div className="fixed inset-0 bg-[#001b3d] overflow-hidden z-20 font-sans text-white">
      <KyndrylFluidBackground />
      
      {/* HUD Navigation */}
      <div className="fixed top-0 left-0 w-full h-32 flex items-center justify-between px-16 z-[60] bg-gradient-to-b from-[#001b3d]/90 to-transparent">
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-white/30 font-black uppercase tracking-[0.6em] text-[10px] hover:text-white transition-all group pointer-events-auto"
        >
          <Icons.ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          BACK_TO_HOME
        </button>
        
        <div className="flex gap-12 items-center">
          <div className="text-right">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Established</div>
            <div className="text-xl font-bold text-blue-400">MMIV</div>
          </div>
          <div className="w-[1px] h-10 bg-white/10" />
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">History_Explorer_v1.0</div>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div style={{ scaleY }} className="fixed top-0 left-0 w-1.5 bg-blue-600 origin-top z-[70] shadow-[0_0_30px_#3b82f6]" />

      <div ref={scrollRef} className="h-screen overflow-y-auto snap-y snap-mandatory relative z-10 no-scrollbar scroll-smooth">
        
        {/* HERO SECTION */}
        <section className="h-screen w-full snap-start flex flex-col items-center justify-center px-16 relative">
          <div className="max-w-5xl text-center z-20 space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <h2 className="text-blue-500 font-black tracking-[1em] uppercase text-[12px]">Our Foundation</h2>
              <h1 className="text-7xl lg:text-[120px] font-black leading-[0.85] tracking-tighter uppercase italic text-white drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                The Architect <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-100 to-white">of Scale.</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed"
            >
              For two decades, we have been the silent engine behind the world's most complex digital transformations.
            </motion.p>
          </div>

          <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-4 opacity-30"
            >
              <span className="text-[9px] font-black uppercase tracking-[0.5em]">Scroll to Discover</span>
              <Icons.ChevronDown size={20} />
            </motion.div>
          </div>
        </section>

        {/* TECH STACK TICKER SECTION */}
        <section className="snap-start py-20 flex flex-col justify-center">
          <div className="container mx-auto px-16 mb-16">
            <h3 className="text-xs font-black uppercase tracking-[0.6em] text-blue-500 mb-4">Our Tech Stack</h3>
            <p className="text-4xl font-light text-white/60 max-w-3xl leading-tight">
              A deep ecosystem of cutting-edge technologies, orchestrated by <span className="text-white font-bold">Vector Digital</span>.
            </p>
          </div>
          <TechStackTicker />
        </section>

        {/* TIMELINE SECTION */}
        <section className="min-h-screen w-full snap-start bg-[#001b3d]/60 backdrop-blur-3xl flex items-center justify-center px-16 py-32">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {milestones.map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group space-y-8 p-10 bg-white/5 border border-white/5 hover:border-blue-500/50 transition-all rounded-3xl"
                >
                  <div className="text-6xl font-black text-blue-500 group-hover:scale-110 transition-transform origin-left">{m.year}</div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold uppercase tracking-widest text-white">{m.title}</h4>
                    <p className="text-white/40 font-light leading-relaxed text-sm">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERS SECTION */}
        <section className="min-h-screen w-full snap-start flex flex-col justify-center relative overflow-hidden bg-[#001b3d]">
          <div className="container mx-auto px-16 space-y-12">
            <h3 className="text-xs font-black uppercase tracking-[0.6em] text-blue-500">Ecosystem Partners</h3>
            <h2 className="text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Shared Vision. <br />Collective Impact.
            </h2>
          </div>
          
          <PartnerMarquee />

          <div className="container mx-auto px-16 pt-20">
            <div className="grid lg:grid-cols-2 gap-20 items-end">
              <div className="space-y-8">
                <p className="text-2xl text-white/40 font-light leading-relaxed">
                  We partner with the world's technology leaders to deliver integrated, end-to-end solutions that drive real-world business outcomes.
                </p>
                <button className="bg-white text-blue-900 px-16 py-6 font-black text-[12px] uppercase tracking-[1em] hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
                  Explore Partnerships
                </button>
              </div>
              <div className="flex justify-end opacity-10">
                <Icons.Layers size={300} strokeWidth={0.5} />
              </div>
            </div>
          </div>
          
          <div className="mt-auto">
            <Footer />
          </div>
        </section>
      </div>

      {/* Decorative Overlays */}
      <div className="fixed inset-0 pointer-events-none z-[5] opacity-[0.03]">
        <div className="grid grid-cols-6 h-full border-x border-white">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border-r border-white" />
          ))}
        </div>
      </div>
    </div>
  );
};
