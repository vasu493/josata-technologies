
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Footer } from '../layout/Footer';

interface Props {
  onBack: () => void;
}

const ParticleField = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%", 
            opacity: Math.random() * 0.5 
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20
          }}
        />
      ))}
    </div>
  );
};

const NeuralVFXCore = ({ activeIndex }: { activeIndex: number | null }) => {
  return (
    <div className="relative w-full h-[800px] flex items-center justify-center pointer-events-none scale-110 lg:scale-150 transform-gpu">
      <ParticleField />
      
      {/* Massive Glow Background */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] mix-blend-screen z-0" 
      />

      <svg viewBox="0 0 1000 800" className="w-full h-full overflow-visible z-10 drop-shadow-[0_0_50px_rgba(59,130,246,0.6)]">
        <defs>
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <radialGradient id="brainCore">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#2563eb" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Rotating Geometric Rings */}
        {[300, 340, 380].map((r, i) => (
          <motion.circle
            key={i}
            cx="500" cy="400" r={r}
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray={i === 1 ? "20 40" : "5 15"}
            opacity="0.1"
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Neural Synaptic Mesh */}
        <g opacity="0.4">
          {[...Array(12)].map((_, i) => (
            <motion.path
              key={i}
              d={`M 500,400 Q ${300 + Math.random() * 400},${200 + Math.random() * 400} ${100 + Math.random() * 800},${100 + Math.random() * 600}`}
              stroke="#3b82f6"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 0], opacity: [0, 0.5, 0] }}
              transition={{ 
                duration: 4 + Math.random() * 4, 
                repeat: Infinity, 
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </g>

        {/* Interactive Neural Hubs */}
        <g filter="url(#neonGlow)">
          {[
            { x: 350, y: 250 }, { x: 650, y: 250 },
            { x: 750, y: 400 }, { x: 650, y: 550 },
            { x: 350, y: 550 }, { x: 250, y: 400 }
          ].map((node, i) => (
            <g key={i}>
              <motion.circle
                cx={node.x} cy={node.y} r="6"
                fill={activeIndex === i ? "#ffffff" : "#3b82f6"}
                animate={{ 
                  scale: activeIndex === i ? [1, 2, 1] : 1,
                  opacity: activeIndex === i ? 1 : 0.6
                }}
              />
              <motion.circle
                cx={node.x} cy={node.y} r="25"
                stroke="#60a5fa"
                strokeWidth="1"
                fill="none"
                animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.4 }}
              />
              {/* Energy pulses returning to center */}
              <motion.circle
                r="3"
                fill="#ffffff"
                className="shadow-[0_0_15px_#ffffff]"
              >
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  path={`M ${node.x},${node.y} L 500,400`}
                />
              </motion.circle>
            </g>
          ))}
        </g>

        {/* The "Singularity" Core */}
        <g transform="translate(500, 400)">
          <motion.circle
            r="80"
            fill="url(#brainCore)"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
             <path 
               d="M -50,0 A 50,50 0 0 1 50,0" 
               stroke="white" 
               strokeWidth="1" 
               fill="none" 
               strokeDasharray="5 5" 
               opacity="0.3"
             />
             <path 
               d="M -70,0 A 70,70 0 0 0 70,0" 
               stroke="white" 
               strokeWidth="2" 
               fill="none" 
               strokeDasharray="20 10" 
               opacity="0.2"
             />
          </motion.g>
          <Icons.Zap size={50} className="text-white -translate-x-6 -translate-y-6 drop-shadow-[0_0_20px_#fff]" strokeWidth={1} />
        </g>
      </svg>
    </div>
  );
};

const CapabilityCard = ({ title, desc, icon: Icon, index, activeIndex, setActiveIndex }: any) => {
  const isHovered = activeIndex === index;

  return (
    <motion.div
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(null)}
      className="relative border-b border-white/5 group py-10 cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-6">
          <div className={`p-4 rounded-xl transition-all duration-500 ${isHovered ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'bg-white/5 text-blue-400'}`}>
            <Icon size={24} />
          </div>
          <h3 className={`text-xl font-black uppercase tracking-tighter transition-all ${isHovered ? 'text-white translate-x-2' : 'text-white/40'}`}>
            {title}
          </h3>
        </div>
        <Icons.ChevronRight className={`transition-all ${isHovered ? 'translate-x-2 text-blue-500 scale-125' : 'text-white/10'}`} />
      </div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-white/50 text-base leading-relaxed pl-20 max-w-lg font-light">
              {desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const HUDMetric = ({ label, value }: { label: string, value: string }) => (
  <div className="space-y-1">
    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">{label}</div>
    <div className="text-xl font-bold text-blue-400 tabular-nums">{value}</div>
  </div>
);

export const IntelligentAutomationPage: React.FC<Props> = ({ onBack }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const capabilities = [
    { title: "Cognitive Workers", desc: "AI-driven agents that manage complex end-to-end tasks, learning from human behavior to optimize results.", icon: Icons.BrainCircuit },
    { title: "Process Orchestration", desc: "Harmonizing siloed systems into a single, flowing intelligent ecosystem with zero friction.", icon: Icons.Activity },
    { title: "Autonomous Ops", desc: "Self-healing infrastructure that predicts failures and executes remediation without human intervention.", icon: Icons.Cpu },
    { title: "Smart Engagement", desc: "Natural language processing to automate customer and employee interactions with human-like precision.", icon: Icons.MessageSquare }
  ];

  return (
    <div className="fixed inset-0 bg-[#001b3d] overflow-hidden z-20 font-sans text-white">
      {/* Cinematic Neural Network Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale-[0.5] brightness-[0.2]"
        >
          <source src="https://player.vimeo.com/external/394145749.sd.mp4?s=338421b8b297b47b4e601569477610125574542d&profile_id=164" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#001b3d] via-transparent to-blue-900/20" />
      </div>

      {/* Persistent Nav & Top Bar */}
      <div className="fixed top-0 left-0 w-full h-32 flex items-center justify-between px-16 z-[60] bg-gradient-to-b from-[#001b3d]/80 to-transparent">
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-white/30 font-black uppercase tracking-[0.6em] text-[10px] hover:text-white transition-all group pointer-events-auto"
        >
          <Icons.ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          CORE_HUB
        </button>
        
        <div className="flex gap-12">
           <HUDMetric label="Core_Status" value="OPTIMIZED" />
           <HUDMetric label="System_IQ" value="v4.2.9" />
           <div className="w-[1px] h-10 bg-white/10" />
           <div className="text-right">
             <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Operational_UTC</div>
             <div className="text-xl font-bold text-white tabular-nums">
               {new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
             </div>
           </div>
        </div>
      </div>

      {/* Side Progress Bar */}
      <motion.div style={{ scaleY }} className="fixed top-0 left-0 w-1.5 bg-blue-600 origin-top z-[70] shadow-[0_0_30px_#3b82f6]" />

      <div ref={scrollRef} className="h-screen overflow-y-auto snap-y snap-mandatory relative z-10 no-scrollbar scroll-smooth">
        
        {/* HERO SECTION */}
        <section className="h-screen w-full snap-start flex flex-col lg:flex-row items-center justify-between px-16 relative pt-32">
          <div className="max-w-2xl text-left z-20 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-blue-500" />
                <span className="text-blue-500 font-black tracking-[0.8em] uppercase text-[11px]">Neural Strategy</span>
              </div>
              
              <h1 className="text-5xl lg:text-[72px] font-black leading-[1.05] tracking-tighter uppercase italic text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                Intelligent<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-200 to-white">Automation.</span>
              </h1>

              <p className="text-xl text-white/40 max-w-lg font-light leading-relaxed">
                Engineering the autonomous enterprise. Transform friction into high-fidelity velocity with AI-orchestrated cores.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-8"
            >
              <button className="px-12 py-5 bg-blue-600 text-white font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white hover:text-blue-600 transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)]">
                Deploy IQ_Core
              </button>
              <button className="px-12 py-5 border border-white/10 text-white font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white/5 transition-all">
                Audit Process
              </button>
            </motion.div>
          </div>

          <div className="relative flex-1 h-full flex items-center justify-end overflow-visible">
            <NeuralVFXCore activeIndex={activeIndex} />
          </div>
        </section>

        {/* CORE CAPABILITIES SECTION */}
        <section className="min-h-screen w-full snap-start bg-[#001b3d]/40 backdrop-blur-3xl flex items-center justify-center px-20 py-32 relative">
           <div className="container mx-auto grid lg:grid-cols-2 gap-32 items-start">
              <div className="space-y-16">
                 <div className="space-y-6">
                    <h2 className="text-[11px] font-black uppercase tracking-[0.6em] text-blue-500">Breakthrough Systems</h2>
                    <h3 className="text-6xl font-black tracking-tighter uppercase leading-[0.9] text-white">
                      The Engine <br />of Velocity.
                    </h3>
                 </div>
                 
                 <div className="space-y-2">
                    {capabilities.map((cap, i) => (
                      <CapabilityCard 
                        key={i} 
                        index={i} 
                        activeIndex={activeIndex} 
                        setActiveIndex={setActiveIndex} 
                        {...cap} 
                      />
                    ))}
                 </div>
              </div>

              <div className="relative h-full space-y-12">
                 <motion.div 
                   whileHover={{ scale: 1.02 }}
                   className="aspect-video bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden relative group shadow-2xl"
                 >
                    <img 
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                      alt="Cyber Core"
                    />
                    <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <motion.div 
                         whileHover={{ scale: 1.2 }}
                         className="p-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20"
                       >
                         <Icons.PlayCircle size={60} className="text-white opacity-80 cursor-pointer" />
                       </motion.div>
                    </div>
                 </motion.div>

                 <div className="grid grid-cols-2 gap-8">
                    <div className="bg-white/5 p-10 rounded-3xl border border-white/10 group hover:border-blue-500/50 transition-all">
                       <div className="text-6xl font-black text-blue-500 mb-2 tabular-nums group-hover:scale-110 transition-transform origin-left">98%</div>
                       <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Auto-Remediation</div>
                    </div>
                    <div className="bg-white/5 p-10 rounded-3xl border border-white/10 group hover:border-blue-500/50 transition-all">
                       <div className="text-6xl font-black text-blue-500 mb-2 tabular-nums group-hover:scale-110 transition-transform origin-left">4.2s</div>
                       <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">Process Velocity</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* METRICS & FOOTER */}
        <section className="min-h-screen w-full snap-start flex flex-col justify-center relative overflow-hidden bg-[#001b3d]">
           <div className="absolute inset-0 opacity-20">
             <svg width="100%" height="100%" className="absolute inset-0">
               <pattern id="gridLarge" width="100" height="100" patternUnits="userSpaceOnUse">
                 <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5"/>
               </pattern>
               <rect width="100%" height="100%" fill="url(#gridLarge)" />
             </svg>
           </div>
           
           <div className="container mx-auto text-center space-y-32 relative z-10 pt-48 pb-32 px-12">
              <motion.h2 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="text-9xl font-black tracking-tighter uppercase italic leading-none text-white drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                Systemic Impact.
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-24">
                 {[
                   { val: "40%", label: "Efficiency Gain", sub: "Global validated average" },
                   { val: "2.5X", label: "Cycle Speed", sub: "Faster market delivery" },
                   { val: "100%", label: "Mission Uptime", sub: "Core logic stability" }
                 ].map((stat, i) => (
                   <motion.div 
                     key={i}
                     whileHover={{ y: -20 }}
                     className="space-y-6"
                   >
                     <div className="text-9xl font-black tracking-tighter tabular-nums text-white group-hover:text-blue-400 transition-colors">{stat.val}</div>
                     <div className="text-[11px] font-black uppercase tracking-[1em] text-blue-400">{stat.label}</div>
                     <p className="text-white/20 text-xs max-w-[200px] mx-auto uppercase tracking-[0.2em]">{stat.sub}</p>
                   </motion.div>
                 ))}
              </div>
              
              <button className="bg-white text-blue-600 px-20 py-8 font-black text-[12px] uppercase tracking-[1.5em] hover:bg-black hover:text-white transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                 Initialize Engagement
              </button>
           </div>
           
           <div className="mt-auto relative z-10">
              <Footer />
           </div>
        </section>
      </div>

      {/* Decorative Overlay Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05]">
        <div className="grid grid-cols-6 h-full border-x border-white">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border-r border-white" />
          ))}
        </div>
      </div>
    </div>
  );
};
