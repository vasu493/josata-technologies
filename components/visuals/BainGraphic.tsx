
import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

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
        <defs>
          <linearGradient id="gradient1" x1="0" y1="500" x2="1000" y2="500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#1e40af" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};
