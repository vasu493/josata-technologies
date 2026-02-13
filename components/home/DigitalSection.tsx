
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as Icons from 'lucide-react';

const CapabilityCard: React.FC<{ index: number, title: string, description: string, icon: any }> = ({ index, title, description, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="group relative bg-[#002654] border border-white/5 p-8 hover:border-blue-400/50 transition-all duration-500 h-full flex flex-col rounded-xl"
  >
    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
      <Icon size={40} strokeWidth={1} />
    </div>
    <div className="mb-6 flex items-center gap-3">
      <span className="text-[10px] font-black text-blue-400 tracking-[0.3em] uppercase">0{index + 1}</span>
      <div className="w-8 h-[1px] bg-blue-400/30 group-hover:w-12 transition-all" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors uppercase tracking-tight">
      {title}
    </h3>
    <p className="text-white/40 group-hover:text-white/60 transition-colors leading-relaxed text-sm">
      {description}
    </p>
    <div className="mt-auto pt-6 flex items-center gap-2 text-[10px] font-bold text-blue-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
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
    <section id="digital" className="relative min-h-screen bg-[#001b3d] py-32 overflow-hidden flex flex-col">
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="dotPatternDigital" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.5" fill="white" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPatternDigital)" />
        </svg>

        <motion.svg 
          viewBox="0 0 1440 800" 
          className="absolute top-0 right-0 w-full h-full opacity-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
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
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            style={{ opacity, scale }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-blue-400" />
              <span className="text-blue-400 font-black tracking-[0.5em] uppercase text-[10px]">Vector Digital</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black leading-[1.1] text-white tracking-tighter uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">INTEGRATED</span><br />
              <span className="font-light italic text-white/80">DIGITAL ARCHITECTURE.</span>
            </h2>

            <p className="text-xl text-white/50 leading-relaxed max-w-xl font-light">
              Vector is JOSATA's integrated digital delivery platform. We integrate strategy, design, and engineering to achieve breakthrough results at enterprise velocity.
            </p>

            <div className="flex items-center gap-12 pt-4">
              <div className="border-l-2 border-blue-500/30 pl-6">
                <h4 className="text-4xl font-black text-white mb-1">95%</h4>
                <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 leading-tight">
                  Integration Accuracy Rate
                </p>
              </div>
              <div className="border-l-2 border-blue-500/30 pl-6">
                <h4 className="text-4xl font-black text-white mb-1">2.4x</h4>
                <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 leading-tight">
                  Average Delivery Speed
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 border border-blue-500/20 rounded-3xl z-0" />
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" 
              alt="Digital Integration"
              className="relative z-10 w-full h-[550px] object-cover rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.6)] grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-xl shadow-2xl z-20 max-w-[200px]">
              <p className="text-white text-[10px] font-black uppercase tracking-widest leading-tight">
                "Orchestrating the next-gen digital core."
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-12 flex items-center justify-between"
          >
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/40">Core Capabilities</h3>
            <div className="h-[1px] flex-1 mx-10 bg-white/5" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-16"
        >
          <div className="mb-8 md:mb-0">
            <h4 className="text-2xl font-bold text-white mb-2">Ready to evolve?</h4>
            <p className="text-white/40">Explore our enterprise framework.</p>
          </div>
          <button className="bg-white text-black px-12 py-5 font-bold text-xs tracking-[0.3em] uppercase rounded-full hover:bg-blue-50 transition-all flex items-center gap-4 group">
            Discover Vector <Icons.ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
