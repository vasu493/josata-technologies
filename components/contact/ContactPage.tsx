
import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Footer } from '../layout/Footer';

interface Props {
  onBack: () => void;
}

const ConnectionVFX = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-10">
      <svg width="100%" height="100%" className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={i}
            cx={`${Math.random() * 100}%`}
            cy={`${Math.random() * 100}%`}
            r="1"
            fill="#3b82f6"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0], scale: [1, 2, 1] }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export const ContactPage: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="fixed inset-0 bg-[#001b3d] overflow-hidden z-20 font-sans text-white">
      <ConnectionVFX />
      
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-12 z-[60] bg-gradient-to-b from-[#001b3d] to-transparent">
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-white/40 font-bold uppercase tracking-[0.2em] text-[10px] hover:text-white transition-all group pointer-events-auto"
        >
          <Icons.ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
        
        <div className="flex items-center gap-6">
           <div className="text-right hidden sm:block">
              <span className="block text-[8px] font-black tracking-[0.3em] text-white/20 uppercase mb-0.5">Inquiry Department</span>
              <span className="text-blue-400 font-bold text-xs tracking-tight uppercase">Global Support Open</span>
           </div>
        </div>
      </div>

      <div className="h-screen overflow-y-auto no-scrollbar relative z-10 pt-24">
        <section className="min-h-[85vh] flex flex-col lg:flex-row items-center px-8 lg:px-24 py-12">
          
          {/* Left Area - Professional Context */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                 <div className="w-8 h-[1px] bg-blue-500" />
                 <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em]">Get in Touch</span>
              </div>
              <h1 className="text-5xl md:text-[72px] font-black leading-tight tracking-tighter uppercase">
                Contact <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white italic font-light">Us.</span>
              </h1>
              <p className="text-lg text-white/50 max-w-md font-light leading-relaxed">
                We are ready to help you navigate your digital transformation journey. Reach out to discuss your next project or inquire about our services.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/5 pt-12"
            >
              <div className="space-y-3">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Main Office</h4>
                <p className="text-sm text-white/40 leading-relaxed font-light">
                  1200 Innovation Drive,<br />
                  Singapore 049315
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Email & Phone</h4>
                <p className="text-sm text-white/40 leading-relaxed font-light">
                  contact@josata.com<br />
                  +1 (800) 555-0199
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Area - Clean Professional Form */}
          <div className="w-full lg:w-[55%] flex justify-end mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-lg bg-white/[0.02] border border-white/5 backdrop-blur-3xl p-8 lg:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
                <Icons.Mail size={120} strokeWidth={0.5} />
              </div>
              
              <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-6">
                  <div className="relative group">
                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2 block">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-base font-light focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-white/10"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2 block">Work Email</label>
                      <input 
                        type="email" 
                        placeholder="jane@company.com" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-base font-light focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-white/10"
                      />
                    </div>
                    <div className="relative group">
                      <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2 block">Company</label>
                      <input 
                        type="text" 
                        placeholder="Organization Name" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-base font-light focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-white/10"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2 block">Subject</label>
                    <select className="w-full bg-[#001b3d] border border-white/10 rounded-lg px-4 py-3 text-base font-light focus:outline-none focus:border-blue-500/50 transition-all text-white/50 appearance-none">
                      <option value="">Select an option</option>
                      <option value="consulting">Digital Consulting</option>
                      <option value="engineering">Software Engineering</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="career">Careers</option>
                    </select>
                    <div className="absolute right-4 bottom-3.5 pointer-events-none opacity-20">
                      <Icons.ChevronDown size={18} />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2 block">How can we help?</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your project or inquiry..." 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-base font-light focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-white/10 resize-none"
                    />
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl flex items-center justify-center gap-3 group">
                  Send Message <Icons.ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};
