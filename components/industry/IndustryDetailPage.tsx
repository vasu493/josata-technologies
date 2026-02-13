
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { INDUSTRY_FUNCTION_MAP, DEFAULT_FUNCTION_CONTENT } from '../../data/industryData';
import { Footer } from '../layout/Footer';

interface Props {
  industry: string;
  func: string;
  onBack: () => void;
}

const IconRenderer = ({ name, size = 24, className = "" }: { name: string, size?: number, className?: string }) => {
  const IconComponent = (LucideIcons as any)[name] || LucideIcons.Box;
  return <IconComponent size={size} className={className} />;
};

const LiveSystemHUD = ({ func }: { func: string }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-8 text-[9px] font-black tracking-[0.5em] text-cyan-500/60 uppercase">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_#22d3ee]" />
        <span>{func.replace(/ /g, '_')}_CORE_SYNC</span>
      </div>
      <div className="w-[1px] h-3 bg-white/10" />
      <span className="text-white/40 tabular-nums">{time.toLocaleTimeString('en-US', { hour12: false })}</span>
    </div>
  );
};

const BackgroundVisual = ({ videoUrl }: { videoUrl?: string }) => {
  const hubs = useMemo(() => [
    { x: 15, y: 35, name: 'SF' }, { x: 22, y: 38, name: 'NYC' },
    { x: 48, y: 32, name: 'LDN' }, { x: 52, y: 45, name: 'DXB' },
    { x: 65, y: 48, name: 'BLR' }, { x: 82, y: 35, name: 'TKY' },
    { x: 85, y: 72, name: 'SYD' }, { x: 32, y: 65, name: 'SAO' }
  ], []);

  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    const triggerBurst = () => {
      const count = Math.floor(Math.random() * 2) + 2;
      const shuffled = [...hubs.keys()].sort(() => 0.5 - Math.random());
      setActiveIndices(shuffled.slice(0, count));
      setTimeout(() => setActiveIndices([]), 2000);
    };
    const interval = setInterval(triggerBurst, 4500);
    return () => clearInterval(interval);
  }, [hubs]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#000408]">
      {videoUrl ? (
        <div className="absolute inset-0 opacity-40 grayscale">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      ) : (
        <motion.div 
          animate={{ x: '-50%' }}
          transition={{ duration: 250, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 h-full min-w-[200%] flex items-center opacity-30 grayscale brightness-125"
        >
          {[0, 1].map((set) => (
            <div key={set} className="relative h-full w-1/2 flex items-center flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
                className="h-full w-full object-cover mix-blend-screen"
                alt="Topology"
              />
              {hubs.map((hub, idx) => (
                <div key={idx} className="absolute" style={{ left: `${hub.x}%`, top: `${hub.y}%` }}>
                  <AnimatePresence>
                    {activeIndices.includes(idx) && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: [0, 1, 0.8, 1], scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2 }}
                      >
                        <motion.div 
                          animate={{ scale: 4, opacity: 0 }}
                          transition={{ duration: 1.5 }}
                          className="absolute w-8 h-8 rounded-full border border-cyan-500/50 -translate-x-1/2 -translate-y-1/2" 
                        />
                        <LucideIcons.MapPin size={20} className="text-cyan-400 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
    </div>
  );
};

const SectorGraphic = ({ color, activeIndex, setActiveIndex }: any) => {
  const segments = [
    { labelTop: "CORE", labelBottom: "SYSTEMS", color: color, startAngle: 180, endAngle: 215 },
    { labelTop: "DIGITAL", labelBottom: "EDGE", color: "#64748b", startAngle: 215, endAngle: 250 },
    { labelTop: "CLOUD", labelBottom: "FABRIC", color: color, startAngle: 250, endAngle: 285 },
    { labelTop: "AI", labelBottom: "LOGIC", color: "#94a3b8", startAngle: 285, endAngle: 320 },
    { labelTop: "SECURE", labelBottom: "MESH", color: color, startAngle: 320, endAngle: 355 },
    { labelTop: "DATA", labelBottom: "STREAM", color: "#cbd5e1", startAngle: 355, endAngle: 390 },
  ];

  const centerX = 650;
  const centerY = 300;
  const radius = 240;
  const innerRadius = 90;

  return (
    <div className="relative w-full h-[700px] flex items-center justify-center overflow-visible will-change-transform">
      <svg viewBox="0 0 1000 600" className="w-full h-full overflow-visible">
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.path
              key={activeIndex}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              d={`M 350,${150 + activeIndex * 60} C 450,${150 + activeIndex * 60} 550,${centerY + Math.sin(((segments[activeIndex].startAngle + segments[activeIndex].endAngle) / 2) * Math.PI / 180) * (radius/2)} ${centerX + Math.cos(((segments[activeIndex].startAngle + segments[activeIndex].endAngle) / 2) * Math.PI / 180) * (radius/2)},${centerY + Math.sin(((segments[activeIndex].startAngle + segments[activeIndex].endAngle) / 2) * Math.PI / 180) * (radius/2)}`}
              stroke={color}
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 4"
              className="drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
            />
          )}
        </AnimatePresence>

        <g transform={`translate(${centerX}, ${centerY})`}>
          {segments.map((seg, i) => {
            const isHovered = activeIndex === i;
            const midAngle = (seg.startAngle + seg.endAngle) / 2;
            const midRad = (midAngle * Math.PI) / 180;
            const offsetX = isHovered ? Math.cos(midRad) * 25 : 0;
            const offsetY = isHovered ? Math.sin(midRad) * 25 : 0;

            const startRad = (seg.startAngle * Math.PI) / 180;
            const endRad = (seg.endAngle * Math.PI) / 180;
            const x1 = radius * Math.cos(startRad);
            const y1 = radius * Math.sin(startRad);
            const x2 = radius * Math.cos(endRad);
            const y2 = radius * Math.sin(endRad);
            const x3 = innerRadius * Math.cos(endRad);
            const y3 = innerRadius * Math.sin(endRad);
            const x4 = innerRadius * Math.cos(startRad);
            const y4 = innerRadius * Math.sin(startRad);

            const path = `M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 0 0 ${x4} ${y4} Z`;
            const labelRadius = (radius + innerRadius) / 2;

            return (
              <g 
                key={i} 
                className="cursor-pointer"
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <motion.path
                  d={path}
                  fill={isHovered ? color : seg.color}
                  animate={{ x: offsetX, y: offsetY, scale: isHovered ? 1.05 : 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                />
                <motion.g animate={{ x: offsetX, y: offsetY }}>
                  <text
                    x={labelRadius * Math.cos(midRad)}
                    y={labelRadius * Math.sin(midRad) - 6}
                    fill={isHovered ? "white" : "rgba(0,0,0,0.7)"}
                    fontSize="10"
                    fontWeight="900"
                    textAnchor="middle"
                    className="pointer-events-none select-none tracking-tight uppercase"
                  >
                    {seg.labelTop}
                  </text>
                  <text
                    x={labelRadius * Math.cos(midRad)}
                    y={labelRadius * Math.sin(midRad) + 10}
                    fill={isHovered ? "white" : "rgba(0,0,0,0.7)"}
                    fontSize="10"
                    fontWeight="900"
                    textAnchor="middle"
                    className="pointer-events-none select-none tracking-tight uppercase"
                  >
                    {seg.labelBottom}
                  </text>
                </motion.g>
              </g>
            );
          })}

          <circle cx="0" cy="0" r="45" fill={color} />
          <motion.circle 
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.05, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            cx="0" cy="0" r="60" fill={color}
          />
          <text 
            x="0" y="5" textAnchor="middle" fill="white" fontSize="12" fontWeight="900" className="tracking-widest uppercase"
          >
            HUB
          </text>
        </g>

        <foreignObject x="50" y="100" width="300" height="500">
          <div className="flex flex-col gap-10">
             <h4 className="text-white/20 font-black text-[10px] tracking-[1em] uppercase">Architecture_Pillars</h4>
             <div className="flex flex-col gap-8">
                {segments.map((seg, i) => (
                  <motion.div 
                    key={i} 
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    animate={{ 
                        x: activeIndex === i ? 20 : 0, 
                        opacity: activeIndex === null || activeIndex === i ? 1 : 0.2 
                    }}
                    className="flex items-center gap-6 group cursor-pointer"
                  >
                    <div className={`w-12 h-[1px] transition-all duration-500 ${activeIndex === i ? 'bg-cyan-500 w-20' : 'bg-white/10'}`} style={{ backgroundColor: activeIndex === i ? color : undefined }} />
                    <div className="flex flex-col">
                        <span className={`text-[13px] font-black tracking-[0.3em] uppercase transition-colors ${activeIndex === i ? 'text-white' : 'text-white/40'}`}>
                            {seg.labelTop} {seg.labelBottom}
                        </span>
                        <AnimatePresence>
                          {activeIndex === i && (
                            <motion.span 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-[9px] font-bold uppercase tracking-widest mt-1"
                                style={{ color: color }}
                            >
                                Node_Active_Intelligence
                            </motion.span>
                          )}
                        </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export const IndustryDetailPage: React.FC<Props> = ({ industry, func, onBack }) => {
  const content = INDUSTRY_FUNCTION_MAP[func] || DEFAULT_FUNCTION_CONTENT;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollTop, clientHeight } = scrollRef.current;
    setActiveSlide(Math.round(scrollTop / clientHeight));
  };

  return (
    <div className="fixed inset-0 bg-[#000408] overflow-hidden z-20 font-sans">
      <BackgroundVisual videoUrl={content.videoUrl} />

      <div className="fixed right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-12">
        {[0, 1, 2, 3, 4].map((i) => (
          <button 
            key={i}
            onClick={() => scrollRef.current?.scrollTo({ top: i * window.innerHeight, behavior: 'smooth' })}
            className={`w-2 transition-all duration-700 rounded-full group relative ${activeSlide === i ? 'h-16 bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]' : 'h-2 bg-white/10 hover:bg-white/40'}`}
          >
             <div className={`absolute inset-0 rounded-full transition-colors ${activeSlide === i ? '' : ''}`} style={{ backgroundColor: activeSlide === i ? content.accentColor : undefined }} />
            <span className="absolute right-full mr-8 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-[0.5em] text-white/20 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
              {['Vision', 'Reach', 'Ecosystem', 'Performance', 'Perspectives'][i]}
            </span>
          </button>
        ))}
      </div>

      <div className="fixed top-24 left-16 z-50 flex items-center justify-between w-[calc(100%-128px)] pointer-events-none">
        <button 
          onClick={onBack} 
          className="flex items-center gap-3 text-white/20 font-black uppercase tracking-[1em] text-[10px] hover:text-white transition-all group pointer-events-auto"
        >
          <LucideIcons.ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> 
          HUB_RETURN
        </button>
        <LiveSystemHUD func={func} />
      </div>

      <div 
        ref={scrollRef} 
        onScroll={handleScroll}
        className="h-screen overflow-y-scroll snap-y snap-mandatory relative z-10 no-scrollbar scroll-smooth"
      >
        <section className="h-screen w-full snap-start flex flex-col lg:flex-row items-center justify-between px-20 relative pt-20">
          <div className="max-w-2xl text-left z-20 flex flex-col gap-12">
            <h3 className="text-white/20 text-[11px] font-black tracking-[1em] uppercase">
                {industry} // {func.toUpperCase()}
            </h3>
            <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
                <h1 className="text-7xl md:text-[100px] font-extralight text-white leading-[0.85] tracking-tight uppercase">
                    SYSTEMIC<br />
                    <span className="font-black" style={{ color: content.accentColor }}>SCALE.</span>
                </h1>
                <p className="mt-12 text-white/40 text-lg leading-relaxed max-w-md font-light">
                    {content.description}
                </p>
                <div className="mt-12 flex items-center gap-4 text-white group cursor-pointer hover:opacity-100 transition-all" style={{ color: content.accentColor }}>
                    <span className="text-[10px] font-black uppercase tracking-[0.6em]">Initialize_Engagement</span>
                    <LucideIcons.ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
            </motion.div>
          </div>

          <div className="relative flex-1 h-full flex items-center justify-end overflow-visible">
            <SectorGraphic 
              color={content.accentColor} 
              activeIndex={activeIndex} 
              setActiveIndex={setActiveIndex} 
            />
          </div>
        </section>

        <section className="h-screen w-full snap-start flex items-center justify-center bg-black/60 backdrop-blur-xl px-20">
          <div className="container mx-auto grid lg:grid-cols-2 gap-40 items-center">
            <div className="space-y-16 text-left">
              <h2 className="text-7xl font-black text-white uppercase tracking-tighter leading-tight">Universal<br /><span style={{ color: content.accentColor }}>Footprint.</span></h2>
              <p className="text-white/30 text-2xl font-light leading-relaxed max-w-2xl">
                Operating critical digital foundations in {content.outcomes[0]?.metric || 'global'} territories, providing seamless cross-border integration for complex enterprise portfolios.
              </p>
              <div className="grid grid-cols-2 gap-16">
                {content.outcomes.map((o, idx) => (
                  <div key={idx} className="border-l border-white/10 pl-10 space-y-4">
                    <span className="text-white text-6xl font-black tabular-nums tracking-tighter">{o.metric}</span>
                    <p className="text-[11px] uppercase tracking-[0.5em] font-bold opacity-30" style={{ color: content.accentColor }}>{o.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center opacity-10">
              <LucideIcons.Globe size={550} strokeWidth={0.3} style={{ color: content.accentColor }} className="animate-[spin_180s_linear_infinite]" />
            </div>
          </div>
        </section>

        <section className="h-screen w-full snap-start flex items-center justify-center bg-white/5 px-20">
           <div className="container mx-auto">
              <div className="grid md:grid-cols-3 gap-1 bg-white/5 p-px">
                 {content.solutions.slice(0, 6).map((sol, i) => (
                    <div key={i} className="bg-[#000408] p-16 hover:bg-white/[0.04] transition-all border-r border-white/5 last:border-0 group relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                          <IconRenderer name={sol.icon} size={150} />
                       </div>
                       <div className="mb-10 opacity-40 group-hover:opacity-100 transition-all transform group-hover:scale-110" style={{ color: content.accentColor }}>
                          <IconRenderer name={sol.icon} size={32} />
                       </div>
                       <h3 className="text-2xl font-bold text-white uppercase mb-6 tracking-widest">{sol.title}</h3>
                       <p className="text-white/40 text-base leading-relaxed font-light">{sol.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        <section className="h-screen w-full snap-start flex items-center justify-center px-20">
           <div className="container mx-auto text-center space-y-32">
              <h2 className="text-8xl font-black text-white uppercase tracking-tighter">Strategic <span style={{ color: content.accentColor }}>Impact.</span></h2>
              <div className="flex flex-wrap justify-center gap-40">
                 {content.outcomes.map((o, i) => (
                    <div key={i} className="space-y-6 group">
                       <div className="text-9xl font-black text-white transition-all group-hover:scale-105 tabular-nums">{o.metric}</div>
                       <div className="text-[13px] font-black uppercase tracking-[1em]" style={{ color: content.accentColor }}>{o.label}</div>
                       <p className="text-white/20 text-[10px] max-w-[280px] leading-relaxed mx-auto uppercase tracking-[0.4em]">{o.context}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        <section className="min-h-screen w-full snap-start flex flex-col justify-center px-20 relative overflow-hidden">
           <div className="container mx-auto grid lg:grid-cols-2 gap-40 relative z-10 pt-48 pb-32">
              <div className="space-y-20">
                 <h3 className="text-6xl font-black text-white uppercase tracking-tighter leading-tight">Market<br />Intelligence.</h3>
                 <div className="space-y-12">
                    {content.perspectives.map((p, i) => (
                      <div key={i} className="border-b border-white/10 pb-10 flex justify-between items-center group cursor-pointer">
                         <div className="space-y-3">
                            <span className="text-[10px] font-black uppercase tracking-[0.6em] block" style={{ color: content.accentColor }}>{p.category} // {p.date}</span>
                            <p className="text-white/60 font-bold uppercase tracking-tight group-hover:text-white transition-colors text-xl">{p.title}</p>
                         </div>
                         <LucideIcons.ExternalLink size={20} className="text-white/10 group-hover:text-white transition-all" />
                      </div>
                    ))}
                 </div>
              </div>
              <div className="flex flex-col justify-center gap-16 border-l border-white/10 pl-32">
                 <p className="text-white/20 text-3xl font-light leading-relaxed italic border-l-2 pl-8" style={{ borderColor: content.accentColor }}>
                    "Engineering the foundations of modern global commerce with hyper-scale precision and speed."
                 </p>
                 <button 
                   className="bg-white text-black px-16 py-6 font-black text-[11px] uppercase tracking-[1em] self-start hover:text-white transition-all shadow-2xl"
                   style={{ '--hover-bg': content.accentColor } as any}
                   onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = content.accentColor)}
                   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
                 >
                    ENGAGE_TRANSFORMATION
                 </button>
              </div>
           </div>
           
           <div className="mt-auto relative z-10">
              <Footer />
           </div>
        </section>
      </div>

      <div className="fixed bottom-12 left-16 z-50 flex items-center gap-10 text-[10px] font-black tracking-[1.5em] text-white/10 uppercase">
         <div className="w-24 h-[1px] bg-white/10" />
         SYSTEMS_STATUS: ACTIVE
      </div>

      <motion.div 
         style={{ scaleY, backgroundColor: content.accentColor }}
         className="fixed top-0 left-0 w-1 origin-top z-50 shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
      />
    </div>
  );
};
