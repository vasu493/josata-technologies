
import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#05070a]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block px-4 py-1 bg-blue-600/10 text-blue-500 text-xs font-bold rounded-full mb-6 uppercase tracking-widest">
              Who We Are
            </div>
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Driving Global Transformation Across <span className="text-blue-500">30+ Countries</span>
            </h2>
            <div className="space-y-6 text-white/60 leading-relaxed text-lg">
              <p>
                JOSATA Technologies is a global leader in next-generation digital services and consulting. We enable clients in more than 30 countries to navigate their digital transformation journey.
              </p>
              <p>
                With over two decades of experience in managing the systems and workings of global enterprises, we expertly steer our clients through their digital journey.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
              <div>
                <h4 className="text-3xl font-bold text-white mb-2">250+</h4>
                <p className="text-xs uppercase text-white/40 tracking-wider">Enterprise Clients</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-2">15k+</h4>
                <p className="text-xs uppercase text-white/40 tracking-wider">Tech Experts</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-2">32</h4>
                <p className="text-xs uppercase text-white/40 tracking-wider">Global Offices</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-blue-500/20 rounded-2xl z-0" />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
              alt="Our Team"
              className="rounded-xl shadow-2xl relative z-10 w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-10 -left-10 bg-blue-600 p-8 rounded-xl shadow-2xl z-20 max-w-[240px]">
              <p className="text-white font-bold leading-tight">
                "Innovation is not just a destination, it's our core engine of growth."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
