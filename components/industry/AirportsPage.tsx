
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Footer } from '../layout/Footer';

interface Props {
  onBack: () => void;
}

const RadarOverlay = () => (
  <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-30">
    {/* Scanning Radar Line */}
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vmax] h-[150vmax] origin-center"
    >
      <div className="w-1/2 h-full bg-gradient-to-r from-cyan-500/20 to-transparent" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)' }} />
    </motion.div>
    
    {/* Grid Lines */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
  </div>
);

const CapabilityAccordion = ({ title, desc, icon: Icon, index, activeIndex, setActiveIndex }: any) => {
  const isOpen = activeIndex === index;

  return (
    <div className="border-b border-white/10 group">
      <button
        onClick={() => setActiveIndex(isOpen ? null : index)}
        className="w-full py-14 px-8 flex items-center justify-between text-left transition-all hover:bg-white/[0.03]"
      >
        <div className="flex items-center gap-12">
          <span className="text-cyan-500/30 font-black text-xl tabular-nums">0{index + 1}</span>
          <div className={`p-5 rounded-full transition-all duration-700 ${isOpen ? 'bg-cyan-600 text-white shadow-[0_0_40px_rgba(34,211,238,0.4)]' : 'bg-white/5 text-cyan-400'}`}>
            <Icon size={28} />
          </div>
          <span className={`text-4xl font-black uppercase tracking-tighter transition-all ${isOpen ? 'text-white' : 'text-white/40'}`}>
            {title}
          </span>
        </div>
        <Icons.Plus className={`transition-all duration-500 ${isOpen ? 'rotate-45 text-cyan-400' : 'text-white/10'}`} size={32} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-black/40"
          >
            <div className="px-40 pb-20 pt-4">
              <p className="text-white/60 text-2xl leading-relaxed font-light max-w-4xl">
                {desc}
              </p>
              <div className="mt-12 flex items-center gap-8">
                 <button className="px-12 py-5 bg-white text-black font-black text-[11px] uppercase tracking-[0.5em] hover:bg-cyan-500 hover:text-white transition-all">
                   Strategy_Audit
                 </button>
                 <button className="px-12 py-5 border border-white/20 text-white font-black text-[11px] uppercase tracking-[0.5em] hover:bg-white/10 transition-all">
                   System Specs
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const AirportsPage: React.FC<Props> = ({ onBack }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const capabilities = [
    { title: "Smart Terminal Ops", desc: "Automating the passenger journey with biometrics, AI-driven flow prediction, and unified cloud-native command centers. We eliminate friction to maximize terminal velocity.", icon: Icons.Users },
    { title: "Autonomous Airside", desc: "Deploying private 5G networks and edge computing to orchestrate autonomous ground support, baggage robotics, and precision tarmac logistics.", icon: Icons.Cpu },
    { title: "Sustainable Infrastructure", desc: "Engineering the net-zero airport. We integrate renewable microgrids, hydrogen logistics, and smart energy management into the existing facility core.", icon: Icons.Zap },
    { title: "Asset Intelligence", desc: "A full digital twin of your airport infrastructure, providing sub-second visibility into every system, from HVAC to runway lighting.", icon: Icons.Layers }
  ];

  return (
    <div className="fixed inset-0 bg-[#001b3d] overflow-hidden z-20 font-sans text-white">
      {/* Background Video Layer - Targets your downloaded file */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale-[0.3] brightness-[0.25]"
        >
          {/* Main source: your file */}
          <source src="./airport-bg.mp4" type="video/mp4" />
          {/* Fallback source: high quality airport stock */}
          <source src="https://player.vimeo.com/external/429447477.sd.mp4?s=1d436159676774e14f16b801594833a689b9d7e5&profile_id=164" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#001b3d] via-transparent to-[#001b3d] opacity-90" />
        <RadarOverlay />
      </div>

      {/* Top HUD Navigation Bar */}
      <div className="fixed top-0 left-0 w-full h-32 flex items-center justify-between px-16 z-[60] bg-gradient-to-b from-[#001b3d]/90 to-transparent">
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-white/30 font-black uppercase tracking-[0.6em] text-[10px] hover:text-white transition-all group pointer-events-auto"
        >
          <Icons.ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          AVIATION_INDEX
        </button>
        
        <div className="flex gap-16 items-center">
          <div className="text-right">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Operational_Status</div>
            <div className="text-xl font-bold text-cyan-400 uppercase tracking-tight">System_Active</div>
          </div>
          <div className="w-[1px] h-10 bg-white/10" />
          <div className="text-right">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Network_Core</div>
            <div className="text-xl font-bold text-white tabular-nums">SYNC_V4.2</div>
          </div>
        </div>
      </div>

      <motion.div style={{ scaleY }} className="fixed top-0 left-0 w-1.5 bg-cyan-600 origin-top z-[70] shadow-[0_0_30px_#22d3ee]" />

      <div ref={scrollRef} className="h-screen overflow-y-auto snap-y snap-mandatory relative z-10 no-scrollbar scroll-smooth">
        
        {/* HERO SECTION */}
        <section className="h-screen w-full snap-start flex flex-col items-center justify-center px-16 relative pt-32">
          <div className="max-w-6xl w-full text-left space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-[2px] bg-cyan-500" />
                <span className="text-cyan-500 font-black tracking-[1em] uppercase text-[12px]">Advanced Infrastructure</span>
              </div>
              
              <h1 className="text-7xl lg:text-[120px] font-black leading-[0.85] tracking-tighter uppercase italic text-white drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]">
                Airports<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-500">Intelligence.</span>
              </h1>

              <p className="text-3xl text-white/40 max-w-2xl font-light leading-relaxed">
                Engineering the high-velocity airport of the future. We bridge the gap between heavy physical assets and autonomous digital ecosystems.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-12"
            >
              <button className="px-16 py-7 bg-cyan-600 text-white font-black text-[12px] uppercase tracking-[0.6em] hover:bg-white hover:text-cyan-600 transition-all shadow-[0_0_60px_rgba(34,211,238,0.4)]">
                Initialize_Engagement
              </button>
              <button className="px-16 py-7 border border-white/20 text-white font-black text-[12px] uppercase tracking-[0.6em] hover:bg-white/10 transition-all">
                Case Studies
              </button>
            </motion.div>
          </div>
          
          <div className="absolute bottom-16 right-16 opacity-20">
             <Icons.Plane size={300} strokeWidth={0.5} className="rotate-45" />
          </div>
        </section>

        {/* ROADMAP SECTION (ACCORDION) */}
        <section className="min-h-screen w-full snap-start bg-[#001b3d]/90 backdrop-blur-3xl flex flex-col justify-center px-16 py-40 relative">
           <div className="container mx-auto">
              <div className="mb-32 space-y-8">
                <h2 className="text-[12px] font-black uppercase tracking-[1em] text-cyan-500">Modernization Roadmap</h2>
                <h3 className="text-7xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-none">
                  Predictive <br />Infrastructure.
                </h3>
              </div>
              
              <div className="w-full">
                 {capabilities.map((cap, i) => (
                   <CapabilityAccordion 
                     key={i} 
                     index={i} 
                     activeIndex={activeIndex} 
                     setActiveIndex={setActiveIndex} 
                     {...cap} 
                   />
                 ))}
              </div>
           </div>
        </section>

        {/* PERFORMANCE SECTION */}
        <section className="min-h-screen w-full snap-start flex flex-col justify-center relative overflow-hidden bg-[#001b3d]">
           {/* Moving Grid Pattern */}
           <div className="absolute inset-0 opacity-10 flex items-center justify-center">
             <Icons.Network size={1200} className="text-cyan-900/40 rotate-12" strokeWidth={0.5} />
           </div>
           
           <div className="container mx-auto text-center space-y-48 relative z-10 pt-48 pb-32 px-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="space-y-10"
              >
                 <h2 className="text-9xl lg:text-[180px] font-black tracking-tighter uppercase italic leading-none text-white drop-shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
                   Global Core.
                 </h2>
                 <p className="text-3xl text-white/30 max-w-4xl mx-auto font-light leading-relaxed">
                   Powering mission-critical aviation infrastructure with sub-second decision logic and autonomous self-healing capabilities.
                 </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-32">
                 {[
                   { val: "100%", label: "Uptime Guaranteed", sub: "For mission critical cores" },
                   { val: "30%", label: "OpEx Reduction", sub: "Annualized infrastructure savings" },
                   { val: "15M+", label: "PAX Throughput", sub: "Managed daily globally" }
                 ].map((stat, i) => (
                   <motion.div key={i} whileHover={{ y: -30 }} className="space-y-10 group">
                     <div className="text-[120px] font-black tracking-tighter tabular-nums text-white group-hover:text-cyan-400 transition-colors duration-700 leading-none">{stat.val}</div>
                     <div className="text-[14px] font-black uppercase tracking-[1.2em] text-cyan-500">{stat.label}</div>
                     <p className="text-white/20 text-sm max-w-[280px] mx-auto uppercase tracking-[0.4em] font-light leading-relaxed">{stat.sub}</p>
                   </motion.div>
                 ))}
              </div>
              
              <button className="bg-white text-blue-900 px-32 py-10 font-black text-[16px] uppercase tracking-[2.5em] hover:bg-black hover:text-white transition-all shadow-2xl">
                 ENGAGE
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
