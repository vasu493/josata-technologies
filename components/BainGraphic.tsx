
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Define Props interface to accept 'vibe' prop from parent components
interface Props {
  vibe?: string;
}

export const BainGraphic: React.FC<Props> = ({ vibe }) => {
  const { scrollYProgress } = useScroll();
  const rotateSpring = useSpring(useTransform(scrollYProgress, [0, 1], [0, 180]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      <motion.svg
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -right-1/4 -top-1/4 w-[150%] h-[150%]"
        style={{ rotate: rotateSpring }}
      >
        <motion.path
          d="M100 500 Q 250 100 500 500 T 900 500"
          stroke="url(#gradient1)"
          strokeWidth="2"
          animate={{
            d: [
              "M100 500 Q 250 100 500 500 T 900 500",
              "M100 500 Q 250 900 500 500 T 900 500",
              "M100 500 Q 250 100 500 500 T 900 500"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M500 100 Q 900 250 500 500 T 500 900"
          stroke="url(#gradient2)"
          strokeWidth="1"
          animate={{
            d: [
              "M500 100 Q 900 250 500 500 T 500 900",
              "M500 100 Q 100 250 500 500 T 500 900",
              "M500 100 Q 900 250 500 500 T 500 900"
            ]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0" y1="500" x2="1000" y2="500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#1e40af" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="500" y1="0" x2="500" y2="1000" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#4338ca" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};
