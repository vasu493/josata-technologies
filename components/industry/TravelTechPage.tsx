
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Footer } from '../layout/Footer';

interface Props {
  onBack: () => void;
}

const DigitalPathVFX = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-40">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {[...Array(6)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${-200 + (i * 300)},${200 + (i * 120)} Q ${720},${450} ${1800},${100 + (i * 80)}`}
            stroke="#3b82f6"
            strokeWidth="0.8"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.6, 0] }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3
            }}
            filter="url(#glow)"
          />
        ))}
      </svg>
    </div>
  );
};

const InsightPanel = ({ title, linkText, delay = 0 }: { title: string, linkText: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay }}
    className="py-14 border-b border-white/10 group cursor-pointer"
  >
    <h3 className="text-xl md:text-2xl font-light text-white leading-[1.3] mb-6 group-hover:text-blue-400 transition-colors">
      {title}
    </h3>
    <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-white transition-colors">
      {linkText} <Icons.ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
    </div>
  </motion.div>
);

export const TravelTechPage: React.FC<Props> = ({ onBack }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="fixed inset-0 bg-[#05070a] overflow-hidden z-20 font-sans text-white">
      {/* Background Section - High Fidelity Motion */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.15, x: '-2%' }}
          animate={{ scale: 1, x: '0%' }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=90&w=2400" 
            alt="Futuristic Travel Tech"
            className="w-full h-full object-cover grayscale-[0.5] brightness-[0.35]"
          />
        </motion.div>
        
        {/* Dynamic Flight Path VFX */}
        <DigitalPathVFX />
        
        {/* Layered Overlays for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070a]/90 via-[#05070a]/30 to-[#05070a]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05070a]" />
      </div>

      {/* Navigation Header */}
      <div className="fixed top-0 left-0 w-full h-32 flex items-center justify-between px-16 z-[60]">
        <button
          onClick={onBack}
          className="flex items-center gap-4 text-white/40 font-black uppercase tracking-[0.5em] text-[10px] hover:text-white transition-all group pointer-events-auto"
        >
          <Icons.ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Core / Industries
        </button>
        
        <div className="flex items-center gap-10">
           <div className="text-right">
              <span className="block text-[8px] font-black tracking-[0.4em] text-white/20 uppercase mb-1">Status</span>
              <span className="text-blue-400 font-bold text-sm tracking-tighter">OPERATIONAL_V.4</span>
           </div>
        </div>
      </div>

      <motion.div style={{ scaleY }} className="fixed top-0 left-0 w-1 bg-blue-600 origin-top z-[70]" />

      <div ref={scrollRef} className="h-screen overflow-y-auto relative z-10 no-scrollbar pb-32">
        <section className="min-h-screen flex flex-col lg:flex-row items-stretch">
          
          {/* Left Content Area - Minimal Title & Value Prop */}
          <div className="w-full lg:w-[60%] px-16 lg:px-24 flex flex-col justify-center py-40 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-[1px] bg-blue-500" />
                   <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.6em]">Services</span>
                </div>
                <h1 className="text-6xl md:text-[90px] font-extralight text-white leading-[0.9] tracking-tighter uppercase">
                  Travel <br /><span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Technology.</span>
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-white/40 max-w-xl font-light leading-relaxed">
                Transform your applications to enable business agility and innovation at scale. We bridge the gap between legacy infrastructure and futuristic traveler experiences.
              </p>

              <div className="flex gap-10 pt-4">
                 <button className="px-12 py-5 bg-white text-black font-black text-[10px] uppercase tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-all">
                    Initialize Transformation
                 </button>
              </div>
            </motion.div>
          </div>

          {/* Right Insights Column - Inspired by the reference image */}
          <div className="w-full lg:w-[40%] bg-black/50 backdrop-blur-2xl border-l border-white/5 flex flex-col justify-center px-12 lg:px-20 min-h-screen">
            <div className="mb-12">
              <span className="text-blue-500 font-black uppercase tracking-[0.6em] text-[10px]">Strategic Pillars</span>
            </div>
            
            <div className="flex flex-col">
              <InsightPanel 
                title="Enable business agility and innovation at scale through AI orchestration" 
                linkText="Read the report" 
                delay={0.2}
              />
              <InsightPanel 
                title="Navigate SAP transformation challenges and accelerate time-to-value" 
                linkText="Learn more" 
                delay={0.4}
              />
              <InsightPanel 
                title="Are you at the digital readiness tipping point for 2025?" 
                linkText="Read the report" 
                delay={0.6}
              />
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16 grid grid-cols-2 gap-12"
            >
               <div className="space-y-2">
                  <div className="text-5xl font-black text-white tracking-tighter tabular-nums">15ms</div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">Global Latency</div>
               </div>
               <div className="space-y-2">
                  <div className="text-5xl font-black text-white tracking-tighter tabular-nums">40%</div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">Conversion Lift</div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Minimal Capabilities Section */}
        <section className="py-40 bg-[#05070a]/80 px-16 lg:px-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-24">
            {[
              { title: "Intelligent Booking", desc: "AI-driven demand forecasting and dynamic pricing cores for global distribution." },
              { title: "Autonomous Logistics", desc: "Full-stack visibility across multi-modal transport networks with real-time telemetry." },
              { title: "Guest Biometrics", desc: "Sub-second verification and localized edge logic for frictionless hospitality." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6 group"
              >
                <div className="w-10 h-0.5 bg-white/10 group-hover:w-full transition-all duration-700" />
                <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-500">{feature.title}</h4>
                <p className="text-lg text-white/30 font-light leading-relaxed group-hover:text-white/60 transition-colors">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </div>

      {/* High-End Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]">
        <div className="grid grid-cols-6 h-full border-x border-white">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border-r border-white" />
          ))}
        </div>
      </div>
    </div>
  );
};
