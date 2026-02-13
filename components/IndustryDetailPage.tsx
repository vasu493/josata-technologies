
import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { INDUSTRY_FUNCTION_MAP, DEFAULT_FUNCTION_CONTENT } from '../industryData';

interface Props {
  industry: string;
  func: string;
  onBack: () => void;
}

export const IndustryDetailPage: React.FC<Props> = ({ industry, func, onBack }) => {
  const content = INDUSTRY_FUNCTION_MAP[func] || DEFAULT_FUNCTION_CONTENT;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-[#05070a] pt-32 pb-20 relative overflow-hidden"
    >
      {/* Background Graphic Engine - Unique to Visual Type */}
      <div className="absolute inset-0 pointer-events-none">
        {content.visualType === 'grid' && (
           <div className="absolute inset-0 opacity-20 bg-dots" />
        )}
        {content.visualType === 'orbit' && (
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full"
           >
             <div className="absolute top-0 left-1/2 w-4 h-4 bg-blue-500 rounded-full blur-sm" />
           </motion.div>
        )}
        <svg width="100%" height="100%" className="absolute inset-0 opacity-10">
          <motion.path 
            d="M 0 500 Q 720 200 1440 500" 
            stroke={content.accentColor} 
            strokeWidth="1"
            fill="none"
            animate={{ d: ["M 0 500 Q 720 200 1440 500", "M 0 500 Q 720 800 1440 500", "M 0 500 Q 720 200 1440 500"] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-10 relative z-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-white/40 font-black uppercase tracking-[0.4em] text-[10px] mb-12 hover:text-white transition-colors group"
        >
          <Icons.ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          Return to Hub
        </button>

        <div className="max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: 48 }} 
              className="h-[2px]" 
              style={{ backgroundColor: content.accentColor }} 
            />
            <span className="text-[11px] font-black uppercase tracking-[0.5em]" style={{ color: content.accentColor }}>
              {industry}
            </span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
            {func.toUpperCase()}<span style={{ color: content.accentColor }}>.</span>
          </h1>

          <h2 className="text-3xl font-light text-white mb-10 tracking-tight">
            {content.title}
          </h2>

          <p className="text-2xl text-white/50 leading-relaxed font-light mb-20 max-w-4xl">
            {content.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-1 bg-white/5">
          {/* Fix: Replace non-existent 'highlights' with 'solutions' from type IndustryFunctionContent */}
          {content.solutions.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="bg-[#05070a] p-12 hover:bg-white/5 transition-all group border-r border-white/5 last:border-0"
            >
              <div className="mb-8">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-30">Strategic Pillar</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/40 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Data Panel */}
        <div className="mt-32 p-20 bg-[#001b3d] border border-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center">
           <div className="absolute top-0 right-0 p-10 opacity-5">
              <Icons.Activity size={300} strokeWidth={0.5} />
           </div>
           <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-400 mb-6 block">Transformation Engine</span>
           <h4 className="text-5xl font-black text-white tracking-tighter mb-8">OPTIMIZING FOR BREAKTHROUGH</h4>
           <div className="flex gap-16">
              <div className="text-center">
                 <div className="text-5xl font-black mb-2">40%</div>
                 <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Efficiency Gain</div>
              </div>
              <div className="text-center">
                 <div className="text-5xl font-black mb-2">2.5X</div>
                 <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Faster To Market</div>
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};
