'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';

const AboutHeader = memo(function AboutHeader() {
  return (
    <motion.div
      className="text-center mb-12 md:mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <p className="text-sm md:text-base uppercase tracking-wider text-muted mb-4">
        Get to Know Me
      </p>
      <h2
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] leading-[0.95] uppercase text-white"
        style={{
          fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
          fontWeight: 800,
        }}
      >
        Turning Ideas Into{' '}
        <span className="text-rainbow-gradient">
          Reality
        </span>
      </h2>
      <p
        className="text-lg sm:text-xl md:text-2xl mt-4 max-w-2xl mx-auto"
        style={{
          fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
          color: 'rgba(255,255,255,0.7)',
        }}
      >
        Developer by day, problem solver by nature. Let&apos;s build something amazing together.
      </p>
    </motion.div>
  );
});

export default AboutHeader;
