'use client';

import { motion } from 'framer-motion';

interface KineticMarqueeProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export function KineticMarquee({ items, speed = 35, reverse = false, className }: KineticMarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className ?? ''}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        style={{ willChange: 'transform' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center shrink-0 px-4 font-stat text-sm tracking-[0.25em] uppercase text-muted-foreground"
          >
            {item}
            <span className="mx-4 text-secondary/50 not-italic">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
