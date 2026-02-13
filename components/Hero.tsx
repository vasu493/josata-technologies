
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { HERO_SLIDES } from '../constants';

const MeshBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-[#001b3d]" />
      <svg width="100%" height="100%" className="opacity-30">
        <defs>
          <pattern id="dotPatternHero" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" opacity="0.6" />
          </pattern>
        </defs>
        <motion.rect 
          width="100%" 
          height="100%" 
          fill="url(#dotPatternHero)"
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={i}
            d={`M${-100 + i * 200} ${400 + i * 50} C ${200 + i * 100} ${300 - i * 50}, ${600 + i * 100} ${700 + i * 50}, 1200 ${500 - i * 50}`}
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            opacity={0.05 + i * 0.02}
            animate={{ 
              d: [
                `M${-100 + i * 200} ${400 + i * 50} C ${200 + i * 100} ${300 - i * 50}, ${600 + i * 100} ${700 + i * 50}, 1200 ${500 - i * 50}`,
                `M${-100 + i * 200} ${450 + i * 50} C ${250 + i * 100} ${350 - i * 50}, ${550 + i * 100} ${650 + i * 50}, 1200 ${550 - i * 50}`,
                `M${-100 + i * 200} ${400 + i * 50} C ${200 + i * 100} ${300 - i * 50}, ${600 + i * 100} ${700 + i * 50}, 1200 ${500 - i * 50}`
              ]
            }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
};

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const yOffset = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityScroll = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[750px] w-full bg-[#001b3d] overflow-hidden pt-20">
      <MeshBackground />
      
      <div className="container mx-auto px-0 h-full relative z-10">
        <div className="grid lg:grid-cols-2 h-full items-start pt-10">
          
          {/* Left Side: Masked Panning Image - Size decreased to h-[60%] */}
          <div className="relative h-full flex items-start justify-start overflow-visible group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 100, scale: 1.05 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-[130%] h-[60%] mask-wave overflow-hidden relative shadow-[0_0_80px_rgba(0,0,0,0.5)] bg-blue-900/20"
              >
                <motion.img 
                  initial={{ scale: 1.2, x: -30 }}
                  animate={{ scale: 1.2, x: 30 }}
                  transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    ease: "linear" 
                  }}
                  src={HERO_SLIDES[currentSlide].image} 
                  alt="Enterprise Visual"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#001b3d]/40 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Typography - Shifted up with negative margin or alignment */}
          <motion.div 
            style={{ y: yOffset, opacity: opacityScroll }}
            className="px-12 lg:px-24 flex flex-col justify-start pt-10 h-full relative z-20"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-cyan-400 font-bold tracking-[0.4em] uppercase mb-4 text-xs"
                >
                  {HERO_SLIDES[currentSlide].subtitle}
                </motion.p>
                <h1 className="text-white text-4xl md:text-6xl lg:text-7xl leading-[1.1] serif-font font-light mb-8 max-w-4xl tracking-tight">
                  <span className="opacity-60">{HERO_SLIDES[currentSlide].title.split(' ').slice(0, -2).join(' ')}</span><br />
                  <span className="font-bold">{HERO_SLIDES[currentSlide].title.split(' ').slice(-2).join(' ')}</span> <br />
                  <span className="font-bold text-cyan-500/80">{HERO_SLIDES[currentSlide].highlight}</span>
                </h1>
                
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "white", color: "#001b3d" }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-4 font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 rounded-sm"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Slanted Bottom Navigation Tabs */}
      <div className="absolute bottom-0 left-0 w-full z-40 bg-[#001b3d] border-t border-white/10 shadow-2xl">
        <div className="grid grid-cols-4 w-full">
          {HERO_SLIDES.map((slide, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentSlide(i)}
              className="relative py-8 px-10 text-left transition-all duration-500 group border-r border-white/5 hover:bg-white/5"
            >
              <div className="flex items-center gap-5">
                <span className={`text-sm font-black transition-colors ${currentSlide === i ? 'text-cyan-400' : 'text-white/20'}`}>
                  0{i + 1}
                </span>
                <p className={`text-[12px] font-bold uppercase tracking-[0.15em] transition-all leading-tight ${
                  currentSlide === i ? 'text-white' : 'text-white/30 group-hover:text-white/60'
                }`}>
                  {slide.navTitle}
                </p>
              </div>

              {/* Progress bar line */}
              <div className="absolute bottom-0 left-0 h-[4px] w-full bg-white/5" />
              {currentSlide === i && (
                <motion.div 
                  layoutId="activeBarHero"
                  className="absolute bottom-0 left-0 h-[4px] w-full bg-cyan-400 z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 8, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
