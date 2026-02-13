
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Footer } from '../layout/Footer';

interface Props {
  onBack: () => void;
}

const FluidMeshMotion = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-[#001b3d]" />
      
      {/* Kyndryl Communication Style Fluid Motion Background */}
      <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="opacity-40">
        <defs>
          <linearGradient id="fluidFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <filter id="dataGlow">
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>

        {[...Array(6)].map((_, i) => (
          <motion.path
            key={i}
            d={`M -200,${150 + i * 120} C 400,${50 + i * 60} 800,${700 - i * 60} 1640,${150 + i * 120}`}
            stroke="url(#fluidFlow)"
            strokeWidth="1.5"
            fill="none"
            animate={{
              d: [
                `M -200,${150 + i * 120} C 400,${50 + i * 60} 800,${700 - i * 60} 1640,${150 + i * 120}`,
                `M -200,${200 + i * 120} C 500,${250 + i * 30} 900,${450 - i * 30} 1640,${200 + i * 120}`,
                `M -200,${150 + i * 120} C 400,${50 + i * 60} 800,${700 - i * 60} 1640,${150 + i * 120}`
              ]
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const CapabilityBlock = ({ title, description, icon: Icon, index }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    viewport={{ once: true }}
    className="group relative p-12 bg-white/[0.03] border border-white/5 hover:border-blue-500/50 transition-all rounded-[2.5rem] overflow-hidden flex flex-col h-full"
  >
    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
       <Icon size={120} strokeWidth={0.5} />
    </div>
    
    <div className="mb-10 w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
      <Icon size={28} />
    </div>

    <div className="space-y-4 relative z-10">
      <h3 className="text-3xl font-black uppercase tracking-tighter text-white leading-none">
        {title}
      </h3>
      <p className="text-white/40 text-lg leading-relaxed font-light group-hover:text-white/60 transition-colors">
        {description}
      </p>
    </div>
    
    <div className="mt-auto pt-10 flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
      Learn more <Icons.ArrowRight size={16} />
    </div>
  </motion.div>
);

export const DataEngineeringPage: React.FC<Props> = ({ onBack }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const capabilities = [
    { title: "Streaming Pipelines", description: "Real-time event orchestration for high-stakes environments, reducing latency to sub-millisecond ranges.", icon: Icons.Zap },
    { title: "Lakehouse Core", description: "Consolidating structured and unstructured data into high-performance, unified storage layers.", icon: Icons.Layers },
    { title: "Quality Auto-Ops", description: "Self-healing data quality protocols that detect and remediate anomalies before they impact delivery.", icon: Icons.ShieldCheck },
    { title: "Observability Mesh", description: "Full-stack data lineage and tracking to provide 100% visibility into complex global ecosystems.", icon: Icons.Activity }
  ];

  return (
    <div className="fixed inset-0 bg-[#001b3d] overflow-hidden z-20 font-sans text-white">
      <FluidMeshMotion />

      {/* Persistent HUD Navigation */}
      <div className="fixed top-0 left-0 w-full h-32 flex items-center justify-between px-16 z-[60] bg-gradient-to-b from-[#001b3d]/90 to-transparent">
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-white/30 font-black uppercase tracking-[0.6em] text-[10px] hover:text-white transition-all group pointer-events-auto"
        >
          <Icons.ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          CORE_SERVICES
        </button>
        
        <div className="flex gap-12 items-center">
          <div className="text-right">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Data_Ingestion</div>
            <div className="text-xl font-bold text-blue-400">SYNC_NOMINAL</div>
          </div>
          <div className="w-[1px] h-10 bg-white/10" />
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">ENGINEERING_V4</div>
        </div>
      </div>

      <motion.div style={{ scaleY }} className="fixed top-0 left-0 w-1.5 bg-blue-600 origin-top z-[70] shadow-[0_0_30px_#3b82f6]" />

      <div ref={scrollRef} className="h-screen overflow-y-auto snap-y snap-mandatory relative z-10 no-scrollbar scroll-smooth">
        
        {/* HERO SECTION */}
        <section className="h-screen w-full snap-start flex flex-col items-center justify-center px-16 relative pt-32">
          <div className="max-w-6xl w-full text-center space-y-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-center gap-6">
                <div className="w-12 h-[1px] bg-blue-500" />
                <span className="text-blue-500 font-black tracking-[0.8em] uppercase text-[11px]">Data Engineering & Operations</span>
                <div className="w-12 h-[1px] bg-blue-500" />
              </div>
              
              <h1 className="text-7xl lg:text-[130px] font-black leading-[0.85] tracking-tighter uppercase italic text-white drop-shadow-2xl">
                Data <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-100 to-white">Intelligence.</span>
              </h1>

              <p className="text-2xl text-white/40 max-w-3xl mx-auto font-light leading-relaxed">
                Reinventing the data lifecycle. We build resilient, high-fidelity architectures that transform signals into global competitive fuel.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-10"
            >
              <button className="px-14 py-6 bg-blue-600 text-white font-black text-[11px] uppercase tracking-[0.5em] hover:bg-white hover:text-blue-600 transition-all shadow-[0_0_60px_rgba(37,99,235,0.4)]">
                Initialize_Pipeline
              </button>
            </motion.div>
          </div>
        </section>

        {/* CAPABILITIES GRID */}
        <section className="min-h-screen w-full snap-start bg-[#001b3d]/80 backdrop-blur-3xl flex items-center justify-center px-16 py-32">
          <div className="container mx-auto">
            <div className="mb-24 space-y-6">
              <h2 className="text-[11px] font-black uppercase tracking-[0.8em] text-blue-500">Our Expertise</h2>
              <h3 className="text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                Engineering at<br />Petabyte Scale.
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((cap, i) => (
                <CapabilityBlock key={i} index={i} {...cap} />
              ))}
            </div>
          </div>
        </section>

        {/* METRICS DASHBOARD */}
        <section className="min-h-screen w-full snap-start flex flex-col justify-center relative overflow-hidden bg-[#001b3d]">
           <div className="absolute inset-0 opacity-10">
             <Icons.Cpu size={800} className="absolute -right-40 -bottom-40 text-blue-900/40 rotate-12" />
           </div>
           
           <div className="container mx-auto text-center space-y-40 relative z-10 pt-48 pb-32 px-12">
              <h2 className="text-9xl font-black tracking-tighter uppercase italic leading-none text-white drop-shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
                The Data Core.
              </h2>

              <div className="grid md:grid-cols-3 gap-24">
                 {[
                   { val: "500TB+", label: "Ingestion Peak", sub: "Daily transactional load" },
                   { val: "10X", label: "Query Speed", sub: "Average latency reduction" },
                   { val: "100%", label: "Data Integrity", sub: "Mission critical validation" }
                 ].map((stat, i) => (
                   <motion.div key={i} whileHover={{ y: -25 }} className="space-y-8">
                     <div className="text-9xl font-black tracking-tighter tabular-nums text-white transition-colors duration-500 group-hover:text-blue-400">{stat.val}</div>
                     <div className="text-[12px] font-black uppercase tracking-[1em] text-blue-500">{stat.label}</div>
                     <p className="text-white/20 text-xs max-w-[240px] mx-auto uppercase tracking-[0.3em] font-light leading-relaxed">{stat.sub}</p>
                   </motion.div>
                 ))}
              </div>
              
              <button className="bg-white text-blue-900 px-24 py-9 font-black text-[14px] uppercase tracking-[1.8em] hover:bg-black hover:text-white transition-all shadow-2xl">
                 Explore Core Architecture
              </button>
           </div>
           
           <div className="mt-auto relative z-10">
              <Footer />
           </div>
        </section>
      </div>

      {/* Decorative Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
        <div className="grid grid-cols-6 h-full border-x border-white">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border-r border-white" />
          ))}
        </div>
      </div>
    </div>
  );
};
