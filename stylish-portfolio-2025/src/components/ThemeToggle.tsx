'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-muted rounded-full p-1 hover:bg-muted/80 transition-colors duration-200"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Track */}
      <motion.div
        className="absolute inset-1 bg-background rounded-full shadow-sm"
        animate={{
          x: isDark ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />

      {/* Icons */}
      <div className="relative w-full h-full flex items-center justify-between px-1 text-xs">
        <motion.span
          animate={{
            opacity: isDark ? 0.5 : 1,
            scale: isDark ? 0.8 : 1
          }}
          transition={{ duration: 0.2 }}
        >
          ☀️
        </motion.span>
        <motion.span
          animate={{
            opacity: isDark ? 1 : 0.5,
            scale: isDark ? 1 : 0.8
          }}
          transition={{ duration: 0.2 }}
        >
          🌙
        </motion.span>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
