
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowRight, Cpu, Globe, Zap, BarChart3, Layers, ArrowLeft } from 'lucide-react';
import { Footer } from '../layout/Footer';

// --- Types ---
interface CapabilityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

interface Props {
  onBack: () => void;
}

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 20 }
  }
};

// --- Components ---

const CapabilityCard: React.FC<CapabilityCardProps> = ({ title, description, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative p-8 bg-white border-l-4 overflow-hidden cursor-pointer group shadow-sm transition-shadow hover:shadow-2xl"
      // Custom hover logic for the border color
      style={{ borderLeftColor: isHovered ? '#CC0000' : '#e2e8f0', transition: 'border-color 0.3s' }}
    >
      {/* Background visual element that slides in */}
      <motion.div 
        className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-16 -mt-16 z-0"
        animate={{ scale: isHovered ? 1.5 : 1 }}
        transition={{ duration: 0.5 }}
      />
      
      <div className="relative z-10">
        <div className="mb-6 p-3 bg-gray-50 w-fit rounded-lg text-red-700">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          {description}
        </p>
        
        <motion.div 
          className="mt-6 flex items-center text-red-700 font-semibold text-sm"
          animate={{ x: isHovered ? 5 : 0 }}
        >
          Learn more <ArrowRight className="ml-2 w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const AIServicesPage: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="fixed inset-0 bg-[#001b3d] overflow-y-auto z-40 font-sans text-white no-scrollbar pt-20">
      
      {/* Local Page Navigation / Breadcrumb Header */}
      <nav className="flex justify-between items-center px-12 py-6 border-b border-white/10 sticky top-0 bg-[#001b3d]/95 backdrop-blur-md z-50">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-red-500 font-black uppercase tracking-[0.4em] text-[10px] hover:gap-4 transition-all"
        >
          <ArrowLeft size={16} /> Hub Return
        </button>
        <div className="text-2xl font-bold tracking-tighter text-white">JOSATA <span className="text-blue-400 font-black">DIGITAL</span></div>
        <div className="hidden md:flex space-x-8 text-[11px] font-black uppercase tracking-widest text-white/40">
          {['Capabilities', 'Case Studies', 'Insights'].map((item) => (
            <a key={item} href="#" className="hover:text-red-500 transition-colors">{item}</a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center space-x-2 mb-6">
              <span className="h-0.5 w-12 bg-red-600 block"></span>
              <span className="text-red-600 font-bold uppercase tracking-widest text-xs">Vector Digital // AI Labs</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white tracking-tighter">
              Bridge strategy <br />
              and <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">technology.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-white/50 mb-10 max-w-lg leading-relaxed font-light">
              We help you build and scale cutting-edge technology solutions to transform your business into a digital platform.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-red-700 text-white font-bold text-sm tracking-wide hover:bg-red-800 transition-colors shadow-lg shadow-red-700/30">
                OUR CAPABILITIES
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold text-sm tracking-wide hover:bg-white/10 transition-colors">
                VIEW CASE STUDIES
              </button>
            </motion.div>
          </motion.div>

          {/* Interactive Graphic / Staggered Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Abstract Background Blotches */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl opacity-50"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              <CapabilityCard 
                title="Enterprise AI" 
                description="Modernize your tech strategy and architecture with LLM integration." 
                icon={<Cpu className="w-6 h-6"/>}
                delay={0}
              />
              <div className="sm:mt-12">
                <CapabilityCard 
                  title="Advanced Analytics" 
                  description="Transform data into a continual source of value with ML." 
                  icon={<BarChart3 className="w-6 h-6"/>}
                  delay={0.1}
                />
              </div>
              <CapabilityCard 
                title="GenAI Design" 
                description="Launch new intelligent products and experiences at speed." 
                icon={<Zap className="w-6 h-6"/>}
                delay={0.2}
              />
              <div className="sm:mt-12">
                <CapabilityCard 
                  title="Cognitive Growth" 
                  description="Accelerate growth with data-driven predictive sales." 
                  icon={<Globe className="w-6 h-6"/>}
                  delay={0.3}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      {/* Statistics Section */}
      <section className="bg-black/20 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { val: "2.5x", label: "Faster Market Delivery" },
              { val: "40%", label: "Operational Efficiency Gain" },
              { val: "100+", label: "GenAI Implementations" },
              { val: "Top 5", label: "Global AI Partner" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
              >
                <div className="text-4xl font-black text-white tracking-tighter">{stat.val}</div>
                <div className="text-[10px] font-bold text-red-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
