
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Footer } from '../layout/Footer';

interface Props {
  onBack: () => void;
}

const WealthNodesVFX = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-30">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={i}
            cx={`${10 + Math.random() * 80}%`}
            cy={`${10 + Math.random() * 80}%`}
            r="1.5"
            fill="#ef4444"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            filter="url(#nodeGlow)"
          />
        ))}
        <motion.path
          d="M 100,100 L 400,300 L 800,100"
          stroke="#ef4444"
          strokeWidth="0.5"
          fill="none"
          opacity="0.1"
          animate={{
            d: [
              "M 100,100 L 400,300 L 800,100",
              "M 200,400 L 600,200 L 900,500",
              "M 100,100 L 400,300 L 800,100"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
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
    <h3 className="text-xl md:text-2xl font-light text-white leading-[1.3] mb-6 group-hover:text-red-500 transition-colors">
      {title}
    </h3>
    <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-white transition-colors">
      {linkText} <Icons.ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
    </div>
  </motion.div>
);

export const AssetWealthPage: React.FC<Props> = ({ onBack }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="fixed inset-0 bg-[#05070a] overflow-hidden z-20 font-sans text-white">
      {/* Background Section - High Fidelity Motion */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.15, y: '-2%' }}
          animate={{ scale: 1, y: '0%' }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=90&w=2400" 
            alt="Wealth Management Core"
            className="w-full h-full object-cover grayscale-[0.6] brightness-[0.3]"
          />
        </motion.div>
        
        {/* Subtle Wealth Node VFX */}
        <WealthNodesVFX />
        
        {/* Layered Overlays for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070a]/90 via-[#05070a]/20 to-[#05070a]/90" />
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
              <span className="block text-[8px] font-black tracking-[0.4em] text-white/20 uppercase mb-1">Portfolio_Status</span>
              <span className="text-red-500 font-bold text-sm tracking-tighter italic uppercase">Asset_Secured_V.7</span>
           </div>
        </div>
      </div>

      <motion.div style={{ scaleY }} className="fixed top-0 left-0 w-1 bg-red-600 origin-top z-[70]" />

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
                   <div className="w-10 h-[1px] bg-red-600" />
                   <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.6em]">Transformation</span>
                </div>
                <h1 className="text-6xl md:text-[80px] font-extralight text-white leading-[0.9] tracking-tighter uppercase">
                  Asset & Wealth <br /><span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">Management.</span>
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-white/40 max-w-xl font-light leading-relaxed">
                Empowering the world's leading financial institutions with AI-driven intelligence, secure lifecycle management, and frictionless client experiences.
              </p>

              <div className="flex gap-10 pt-4">
                 <button className="px-12 py-5 bg-white text-black font-black text-[10px] uppercase tracking-[0.4em] hover:bg-red-600 hover:text-white transition-all">
                    Initiate Advisory
                 </button>
              </div>
            </motion.div>
          </div>

          {/* Right Insights Column */}
          <div className="w-full lg:w-[40%] bg-black/50 backdrop-blur-2xl border-l border-white/5 flex flex-col justify-center px-12 lg:px-20 min-h-screen">
            <div className="mb-12">
              <span className="text-red-600 font-black uppercase tracking-[0.6em] text-[10px]">Strategic Insights</span>
            </div>
            
            <div className="flex flex-col">
              <InsightPanel 
                title="Hyper-personalize the investor buying and ownership experience at global scale" 
                linkText="Read the report" 
                delay={0.2}
              />
              <InsightPanel 
                title="Modernize portfolio management with advanced cloud-native architectures" 
                linkText="Learn more" 
                delay={0.4}
              />
              <InsightPanel 
                title="Are you at the readiness tipping point for private market digital assets?" 
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
                  <div className="text-5xl font-black text-white tracking-tighter tabular-nums">$2.5T+</div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">Assets Powered</div>
               </div>
               <div className="space-y-2">
                  <div className="text-5xl font-black text-white tracking-tighter tabular-nums">35%</div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">OpEx Reduction</div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Minimal Capabilities Section */}
        <section className="py-40 bg-[#05070a]/80 px-16 lg:px-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-24">
            {[
              { title: "Lifecycle Management", desc: "Seamless onboarding and client portal experiences powered by unified data layers." },
              { title: "Portfolio Analytics", desc: "AI-powered risk and return modeling with sub-second processing of market signals." },
              { title: "Compliance Automator", desc: "Real-time regulatory and KYC orchestration for mission-critical risk management." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6 group"
              >
                <div className="w-10 h-0.5 bg-white/10 group-hover:w-full transition-all duration-700" />
                <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-red-600">{feature.title}</h4>
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
