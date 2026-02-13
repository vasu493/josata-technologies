
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../data/constants';
import * as Icons from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#07090d]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Capabilities</h2>
            <p className="text-lg text-white/60">
              We provide end-to-end digital engineering and consulting services designed for high-stakes enterprise environments.
            </p>
          </div>
          <a href="#" className="text-blue-500 font-bold flex items-center gap-2 hover:gap-4 transition-all">
            View all services <Icons.ArrowRight size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-[#0f1117] p-8 border border-white/5 hover:border-blue-500/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-all" />
              <div className="mb-8 text-blue-500 group-hover:scale-110 transition-transform origin-left">
                <Icons.Layers size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
