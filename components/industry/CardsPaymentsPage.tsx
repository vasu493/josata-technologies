
import React, { useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Footer } from '../layout/Footer';

interface Props {
  onBack: () => void;
}

const GlassCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden group ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 p-10">
      {children}
    </div>
  </motion.div>
);

const BackgroundBlobs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        x: [0, 100, -50, 0],
        y: [0, -50, 50, 0],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px]"
    />
    <motion.div
      animate={{
        x: [0, -100, 50, 0],
        y: [0, 100, -50, 0],
        scale: [1, 0.8, 1.1, 1],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"
    />
    <motion.div
      animate={{
        x: [0, 50, -100, 0],
        y: [0, 50, 100, 0],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px]"
    />
  </div>
);

export const CardsPaymentsPage: React.FC<Props> = ({ onBack }) => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const features = [
    {
      title: "Real-time Issuance",
      desc: "Instant virtual card provisioning with advanced spend controls and dynamic CVV protection.",
      icon: <Icons.CreditCard size={32} />
    },
    {
      title: "Global Rails",
      desc: "Cross-border settlement architecture supporting 150+ currencies with sub-second latency.",
      icon: <Icons.Globe size={32} />
    },
    {
      title: "Fraud Sentinel",
      desc: "AI-driven behavioral biometrics and transaction pattern analysis for zero-day threat detection.",
      icon: <Icons.ShieldCheck size={32} />
    },
    {
      title: "Omnichannel API",
      desc: "Unified payment interface for web, mobile, and IoT devices with seamless POS integration.",
      icon: <Icons.Cpu size={32} />
    }
  ];

  return (
    <div className="fixed inset-0 bg-[#05070a] overflow-hidden z-20 font-sans text-white">
      <BackgroundBlobs />
      
      {/* Navigation */}
      <div className="fixed top-24 left-16 z-50">
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-white/40 font-bold uppercase tracking-[0.4em] text-[10px] hover:text-white transition-all group"
        >
          <Icons.ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          Hub
        </button>
      </div>

      <div className="h-screen overflow-y-auto no-scrollbar relative z-10 pb-20">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
          <div className="max-w-5xl w-full text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-[0.3em] text-cyan-400"
            >
              The Future of Money Movement
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-[100px] font-bold leading-[0.9] tracking-tighter"
            >
              Cards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Payments.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Architecting the next generation of frictionless, secure, and hyper-scalable global payment ecosystems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-10"
            >
              <button className="px-12 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.4em] rounded-full hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                Launch System
              </button>
            </motion.div>
          </div>

          {/* Floating Glass Credit Card Visual */}
          <div className="mt-32 relative perspective-1000">
            <motion.div
              animate={{
                rotateY: [0, 10, -10, 0],
                rotateX: [0, 5, -5, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="w-[450px] h-[280px] backdrop-blur-3xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 opacity-30" />
              <div className="flex justify-between items-start relative z-10">
                <div className="w-14 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg opacity-80" />
                <div className="text-xl font-black italic tracking-tighter opacity-40">JOSATA PLATINUM</div>
              </div>
              <div className="space-y-4 relative z-10">
                <div className="text-3xl font-medium tracking-[0.2em] font-mono">•••• •••• •••• 8842</div>
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <div className="text-[8px] uppercase tracking-widest opacity-40">Card Holder</div>
                    <div className="text-sm font-bold uppercase tracking-widest">Global Enterprise</div>
                  </div>
                  <Icons.Wifi className="rotate-90 opacity-40" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <GlassCard key={i} delay={i * 0.1}>
                <div className="flex gap-8 items-start">
                  <div className="p-4 rounded-2xl bg-white/5 text-cyan-400 shadow-inner">
                    {f.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold tracking-tight">{f.title}</h3>
                    <p className="text-white/40 leading-relaxed font-light text-lg">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Global Network Section */}
        <section className="py-32 relative px-6">
          <GlassCard className="max-w-7xl mx-auto text-center !p-20">
            <h2 className="text-5xl font-bold mb-8 tracking-tighter">Unified Payment Intelligence</h2>
            <p className="text-xl text-white/50 max-w-3xl mx-auto mb-16 leading-relaxed">
              Our platform processes billions of signals daily, optimizing routing across the global financial network to ensure maximum authorization rates and minimum fees.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { val: "99.99%", label: "Uptime" },
                { val: "150+", label: "Currencies" },
                { val: "0.2ms", label: "Latency" },
                { val: "256-bit", label: "Encryption" }
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-4xl font-black text-cyan-400">{stat.val}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">{stat.label}</div>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        <Footer />
      </div>

      {/* Progress Bar */}
      <motion.div
        style={{ scaleY }}
        className="fixed top-0 left-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-400 to-blue-500 origin-top z-50 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
      />
    </div>
  );
};
