import React from 'react';
import { motion } from 'framer-motion';

type ShapeConfig = {
  angle: number;
  color: string;
};

const shapes: ShapeConfig[] = [
  { angle: 20, color: "#6d5dfc" },
  { angle: 70, color: "#9b59b6" },
  { angle: 140, color: "#ff3b3b" },
  { angle: 200, color: "#3498db" },
  { angle: 250, color: "#e84393" },
  { angle: 310, color: "#a29bfe" },
];

export const KineticShapeVoid: React.FC = () => {
  return (
    <div className="relative w-full h-[450px] flex items-center justify-center pointer-events-none scale-75 lg:scale-100 overflow-hidden">
      {/* Central Core */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-32 h-32 rounded-full bg-white z-10 shadow-[0_0_60px_rgba(255,255,255,0.7)] flex items-center justify-center"
      >
        <div className="absolute inset-0 rounded-full border border-white/20 animate-ping" />
      </motion.div>

      {/* Radial Burst Shapes */}
      {shapes.map((s, i) => (
        <div
          key={i}
          className="absolute"
          style={{ transform: `rotate(${s.angle}deg)` }}
        >
          <motion.div
            initial={{ x: -600, opacity: 0, scale: 0.4 }}
            animate={{
              x: [-600, 0, 0, 750],
              opacity: [0, 1, 1, 0],
              scale: [0.4, 1.05, 1, 0.3],
              rotate: [0, 0, 0, 90]
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1],
              times: [0, 0.3, 0.6, 1]
            }}
            className="w-28 h-28 opacity-0"
            style={{ background: s.color }}
          />
        </div>
      ))}

      {/* Subtle Background Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[200, 350, 500].map((size, i) => (
          <div
            key={i}
            className="absolute border border-white/5 rounded-full"
            style={{ width: size, height: size }}
          />
        ))}
      </div>
    </div>
  );
};
