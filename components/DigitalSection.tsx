
import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import * as Icons from 'lucide-react';

// Fix: Use React.FC to properly handle standard props like 'key' in JSX elements
const CapabilityCard: React.FC<{ index: number, title: string, description: string, icon: any }> = ({ index, title, description, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="group relative bg-[#0a0f1a] border border-white/5 p-10 hover:border-blue-500/50 transition-all duration-500 h-full flex flex-col"
  >
    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
      <Icon size={40} strokeWidth={1} />
    </div>
    <div className="mb-6 flex items-center gap-3">
      <span className="text-[10px] font-black text-blue-500 tracking-[0.3em] uppercase">0{index + 1}</span>
      <div className="w-8 h-[1px] bg-blue-500/30 group-hover:w-12 transition-all" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight">
      {title}
    </h3>
    <p className="text-white/40 group-hover:text-white/60 transition-colors leading-relaxed text-sm">
      {description}
    </p>
    <div className="mt-auto pt-8 flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
      Learn More <Icons.ChevronRight size={12} />
    </div>
  </motion.div>
);

export const DigitalSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  const lineScale = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.75, 0.85], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.25, 0.4], [0.95, 1]);

  const capabilities = [
    { title: "Digital Strategy", description: "Design your digital North Star and the roadmap to get there.", icon: Icons.Compass },
    { title: "Advanced Analytics", description: "Transform data into a competitive advantage with AI and machine learning.", icon: Icons.BarChart3 },
    { title: "Enterprise Technology", description: "Build a flexible, modern tech stack that powers innovation.", icon: Icons.Cpu },
    { title: "Product & Experience", description: "Create digital products your customers love and your employees value.", icon: Icons.Fingerprint },
    { title: "Innovation", description: "Harness emerging tech to redefine your industry and create new value.", icon: Icons.Zap },
    { title: "Modern Delivery", description: "Adopt agile and DevOps to move at the speed of the digital leaders.", icon: Icons.Rocket }
  ];

  return (
    <section id="digital" className="relative min-h-screen bg-[#05070a] py-32 overflow-hidden flex flex-col">
      {/* Background Motion Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="dotPatternDigital" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.5" fill="white" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPatternDigital)" />
        </svg>

        {/* Dynamic Vector Lines */}
        <motion.svg 
          viewBox="0 0 1440 800" 
          className="absolute top-0 right-0 w-full h-full opacity-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
        >
          <motion.path
            d="M 1440 200 Q 1000 400 0 100"
            stroke="#3b82f6"
            strokeWidth="0.5"
            fill="none"
            style={{ pathLength: lineScale }}
          />
          <motion.path
            d="M 1440 600 Q 720 300 0 700"
            stroke="#6366f1"
            strokeWidth="0.5"
            fill="none"
            style={{ pathLength: lineScale }}
          />
        </motion.svg>
      </div>

      <div className="container mx-auto px-8 relative z-10 flex flex-col">
        {/* Header Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-32">
          <motion.div 
            style={{ opacity, scale }}
            className="lg:col-span-9"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-blue-500" />
              <span className="text-blue-500 font-black tracking-[0.5em] uppercase text-[10px]">Vector Digital</span>
            </div>
            
            <h2 className="text-7xl md:text-9xl font-black leading-[0.85] text-white tracking-tighter mb-10">
              突破的。<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-white">INTEGRATED</span><br />
              <span className="font-light italic text-white/90">DIGITAL.</span>
            </h2>

            <p className="text-2xl text-white/50 leading-relaxed max-w-3xl font-light">
              Vector is JOSATA's integrated digital delivery platform. We integrate strategy, design, and engineering to help you achieve breakthrough results through the power of digital.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 hidden lg:block"
          >
            <div className="border-l border-white/10 pl-8 py-4">
              <h4 className="text-5xl font-black text-white mb-2">95%</h4>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-tight">
                of digital leaders say integration is the key to velocity.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16 flex items-center justify-between"
          >
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/60">Integrated Capabilities</h3>
            <div className="h-[1px] flex-1 mx-10 bg-white/5" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {capabilities.map((cap, idx) => (
              <CapabilityCard 
                key={idx}
                index={idx}
                title={cap.title}
                description={cap.description}
                icon={cap.icon}
              />
            ))}
          </div>
        </div>

        {/* Footer Link Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-16"
        >
          <div className="mb-8 md:mb-0">
            <h4 className="text-3xl font-bold text-white mb-2">Ready for a breakthrough?</h4>
            <p className="text-white/40">Explore how Vector can transform your enterprise core.</p>
          </div>
          <button className="bg-white text-black px-12 py-5 font-bold text-xs tracking-[0.3em] uppercase rounded-sm hover:bg-blue-50 transition-all flex items-center gap-4 group">
            Discover Vector <Icons.ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        {/* Fix: mismatched tag div -> motion.div */}
        </motion.div>
      </div>
    </section>
  );
};
