
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Footer } from '../layout/Footer';

interface Props {
  onBack: () => void;
}

const GlobalFlightNetworkVFX = ({ activeIndex }: { activeIndex: number | null }) => {
  // Hub locations on a 2D projection of the globe
  const hubs = [
    { x: 300, y: 300, id: 'LHR', label: 'London' },
    { x: 220, y: 320, id: 'JFK', label: 'New York' },
    { x: 700, y: 350, id: 'HND', label: 'Tokyo' },
    { x: 450, y: 380, id: 'DXB', label: 'Dubai' },
    { x: 620, y: 550, id: 'SIN', label: 'Singapore' },
    { x: 280, y: 580, id: 'GRU', label: 'Sao Paulo' },
  ];

  return (
    <div className="relative w-full h-[800px] flex items-center justify-center pointer-events-none scale-110 lg:scale-150 transform-gpu overflow-visible">
      {/* Massive Energy Glow */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] bg-blue-500 rounded-full blur-[160px] opacity-20 z-0" 
      />

      <svg viewBox="0 0 1000 800" className="w-full h-full overflow-visible z-10 drop-shadow-[0_0_80px_rgba(59,130,246,0.6)]">
        <defs>
          <filter id="vfxGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <radialGradient id="globeGrad">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="85%" stopColor="#1e3a8a" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#001b3d" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* The "Globe" Sphere Background */}
        <motion.circle
          cx="500" cy="400" r="300"
          fill="url(#globeGrad)"
          className="opacity-50"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Rotating Longitude/Latitude Lines */}
        <motion.g
          animate={{ rotateY: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '500px 400px', perspective: '1000px' }}
        >
          {[...Array(12)].map((_, i) => (
            <ellipse
              key={`lat-${i}`}
              cx="500" cy="400" rx="300" ry={300 * Math.sin((i * 15) * Math.PI / 180)}
              stroke="white" strokeWidth="0.2" fill="none" opacity="0.1"
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <ellipse
              key={`long-${i}`}
              cx="500" cy="400" rx={300 * Math.sin((i * 15) * Math.PI / 180)} ry="300"
              stroke="white" strokeWidth="0.2" fill="none" opacity="0.1"
            />
          ))}
        </motion.g>

        {/* Global Connecting Flight Arcs */}
        <g opacity="0.6" filter="url(#vfxGlow)">
          {hubs.map((hub, i) => 
            hubs.map((target, j) => {
              if (i === j) return null;
              // Only draw a few connections for visual clarity
              if ((i + j) % 3 !== 0) return null;
              
              return (
                <g key={`arc-${i}-${j}`}>
                  <motion.path
                    d={`M ${hub.x},${hub.y} Q 500,${200 - (i*10)} ${target.x},${target.y}`}
                    stroke="#60a5fa"
                    strokeWidth="0.5"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 0.4, 0] }}
                    transition={{ 
                      duration: 4 + Math.random() * 4, 
                      repeat: Infinity, 
                      delay: Math.random() * 5,
                      ease: "easeInOut"
                    }}
                  />
                  {/* Moving Flight Pulse */}
                  <motion.circle r="2" fill="white">
                    <animateMotion
                      dur={`${3 + Math.random() * 3}s`}
                      repeatCount="indefinite"
                      path={`M ${hub.x},${hub.y} Q 500,${200 - (i*10)} ${target.x},${target.y}`}
                    />
                  </motion.circle>
                </g>
              );
            })
          )}
        </g>

        {/* Hub Nodes */}
        {hubs.map((hub, i) => (
          <g key={hub.id}>
            <motion.circle
              cx={hub.x} cy={hub.y} r="6"
              fill={activeIndex === i ? "#ffffff" : "#3b82f6"}
              animate={{ 
                scale: activeIndex === i ? [1, 2, 1] : 1,
                opacity: activeIndex === i ? 1 : 0.6
              }}
            />
            <motion.circle
              cx={hub.x} cy={hub.y} r="25"
              stroke="#60a5fa" strokeWidth="1" fill="none"
              animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.4 }}
            />
            <text 
              x={hub.x} y={hub.y + 35} fill="white" fontSize="10" 
              className="uppercase tracking-[0.3em] font-black opacity-30" 
              textAnchor="middle"
            >
              {hub.id}
            </text>
          </g>
        ))}

        {/* Central Core Branding */}
        <g transform="translate(500, 400)">
          <motion.circle
            r="80" fill="rgba(30, 58, 138, 0.3)"
            stroke="white" strokeWidth="0.5" strokeDasharray="5 5"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <Icons.Plane size={48} className="text-white -translate-x-6 -translate-y-6 drop-shadow-[0_0_15px_#fff]" strokeWidth={1} />
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
      className="relative border-b border-white/5 group py-10 cursor-pointer transition-all hover:bg-white/[0.03]"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-6">
          <div className={`p-4 rounded-full transition-all duration-500 ${isHovered ? 'bg-blue-600 text-white shadow-[0_0_30px_rgba(59,130,246,0.6)]' : 'bg-white/5 text-blue-400'}`}>
            <Icon size={24} />
          </div>
          <h3 className={`text-xl font-black uppercase tracking-tighter transition-all ${isHovered ? 'text-white translate-x-2' : 'text-white/40'}`}>
            {title}
          </h3>
        </div>
        <Icons.ChevronRight className={`transition-all ${isHovered ? 'translate-x-2 text-blue-400 scale-125' : 'text-white/10'}`} />
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

export const AirlinesPage: React.FC<Props> = ({ onBack }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const capabilities = [
    { title: "Next-Gen PSS", desc: "Cloud-native Passenger Service Systems that scale with demand, offering sub-second latency for booking and check-in.", icon: Icons.Users },
    { title: "Smart Fueling", desc: "AI-driven fuel optimization algorithms reducing carbon footprint and operational costs by up to 15%.", icon: Icons.Zap },
    { title: "Ops Orchestration", desc: "Real-time crew and ground ops management powered by predictive logistics and machine learning.", icon: Icons.Workflow },
    { title: "Customer IQ", desc: "Hyper-personalized traveler experiences using real-time data to anticipate needs across the journey.", icon: Icons.Compass }
  ];

  return (
    <div className="fixed inset-0 bg-[#001b3d] overflow-hidden z-20 font-sans text-white">
      {/* Cinematic Airport/Airline Stock Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale-[0.2] brightness-[0.2]"
        >
          {/* Direct cinematic airport terminal walkthrough video */}
          <source src="https://player.vimeo.com/external/517728795.sd.mp4?s=12735165842823611130a08e6f66300f89069d2a&profile_id=164" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#001b3d] via-[#001b3d]/40 to-[#001b3d]" />
      </div>

      {/* Top HUD Navigation Bar */}
      <div className="fixed top-0 left-0 w-full h-32 flex items-center justify-between px-16 z-[60] bg-gradient-to-b from-[#001b3d]/90 to-transparent">
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-white/30 font-black uppercase tracking-[0.6em] text-[10px] hover:text-white transition-all group pointer-events-auto"
        >
          <Icons.ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          AVIATION_HUB
        </button>
        
        <div className="flex gap-12">
           <HUDMetric label="Network_Sync" value="100.0%" />
           <HUDMetric label="Airspace_IQ" value="v9.1.5" />
           <div className="w-[1px] h-10 bg-white/10" />
           <div className="text-right">
             <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">System_UTC</div>
             <div className="text-xl font-bold text-white tabular-nums">
               {new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
             </div>
           </div>
        </div>
      </div>

      {/* Vertical Progress Bar */}
      <motion.div style={{ scaleY }} className="fixed top-0 left-0 w-1.5 bg-blue-600 origin-top z-[70] shadow-[0_0_30px_#3b82f6]" />

      <div ref={scrollRef} className="h-screen overflow-y-auto snap-y snap-mandatory relative z-10 no-scrollbar scroll-smooth">
        
        {/* HERO SECTION */}
        <section className="h-screen w-full snap-start flex flex-col lg:flex-row items-center justify-between px-16 relative pt-32">
          <div className="max-w-2xl text-left z-20 space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-blue-500" />
                <span className="text-blue-500 font-black tracking-[0.8em] uppercase text-[11px]">Travel & Infrastructure</span>
              </div>
              
              <h1 className="text-5xl lg:text-[64px] font-black leading-[1.05] tracking-tighter uppercase italic text-white drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                Airlines<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-100 to-white">Intelligence.</span>
              </h1>

              <p className="text-xl text-white/40 max-w-lg font-light leading-relaxed">
                Architecting global frictionless mobility. Transform legacy aviation cores into high-velocity digital networks.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-8"
            >
              <button className="px-12 py-5 bg-blue-600 text-white font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white hover:text-blue-600 transition-all shadow-[0_0_50px_rgba(37,99,235,0.4)]">
                Initialize_PSS
              </button>
              <button className="px-12 py-5 border border-white/10 text-white font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white/5 transition-all">
                Audit Network
              </button>
            </motion.div>
          </div>

          <div className="relative flex-1 h-full flex items-center justify-end overflow-visible">
            <GlobalFlightNetworkVFX activeIndex={activeIndex} />
          </div>
        </section>

        {/* CAPABILITIES SECTION */}
        <section className="min-h-screen w-full snap-start bg-[#001b3d]/60 backdrop-blur-3xl flex items-center justify-center px-20 py-32 relative">
           <div className="container mx-auto grid lg:grid-cols-2 gap-32 items-start">
              <div className="space-y-16">
                 <div className="space-y-6">
                    <h2 className="text-[11px] font-black uppercase tracking-[0.6em] text-blue-500">Connecting Worlds</h2>
                    <h3 className="text-6xl font-black tracking-tighter uppercase leading-[0.9] text-white">
                      The Engine <br />of Global Flow.
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
                   className="aspect-video bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden relative group shadow-2xl"
                 >
                    <img 
                      src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=1200" 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                      alt="Airline Tech"
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
                       <div className="text-6xl font-black text-blue-500 mb-2 tabular-nums group-hover:scale-110 transition-transform origin-left">35%</div>
                       <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">OpEx Reduction</div>
                    </div>
                    <div className="bg-white/5 p-10 rounded-3xl border border-white/10 group hover:border-blue-500/50 transition-all">
                       <div className="text-6xl font-black text-blue-500 mb-2 tabular-nums group-hover:scale-110 transition-transform origin-left">100%</div>
                       <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">System Uptime</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* METRICS & FOOTER */}
        <section className="min-h-screen w-full snap-start flex flex-col justify-center relative overflow-hidden bg-[#001b3d]">
           <div className="absolute inset-0 opacity-10">
             <Icons.Globe size={800} className="absolute -right-40 -bottom-40 text-blue-900/40 rotate-12" />
           </div>
           
           <div className="container mx-auto text-center space-y-32 relative z-10 pt-48 pb-32 px-12">
              <motion.h2 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="text-9xl font-black tracking-tighter uppercase italic leading-none text-white drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
              >
                Infinite Scale.
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-24">
                 {[
                   { val: "2.5x", label: "Booking Speed", sub: "Optimized conversion" },
                   { val: "15M+", label: "Monthly Pax", sub: "Global throughput" },
                   { val: "40+", label: "Carrier Nodes", sub: "Aviation ecosystem" }
                 ].map((stat, i) => (
                   <motion.div key={i} whileHover={{ y: -20 }} className="space-y-6">
                     <div className="text-9xl font-black tracking-tighter tabular-nums text-white group-hover:text-blue-400 transition-colors">{stat.val}</div>
                     <div className="text-[11px] font-black uppercase tracking-[1em] text-blue-500">{stat.label}</div>
                     <p className="text-white/20 text-xs max-w-[200px] mx-auto uppercase tracking-[0.2em]">{stat.sub}</p>
                   </motion.div>
                 ))}
              </div>
              
              <button className="bg-white text-blue-900 px-20 py-8 font-black text-[12px] uppercase tracking-[1.5em] hover:bg-black hover:text-white transition-all shadow-[0_0_60px_rgba(255,255,255,0.15)]">
                 Initialize Engagement
              </button>
           </div>
           
           <div className="mt-auto relative z-10">
              <Footer />
           </div>
        </section>
      </div>

      {/* Decorative Grid Overlay */}
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
