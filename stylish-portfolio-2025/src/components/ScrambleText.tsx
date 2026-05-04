'use client';

import { useEffect, useState, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?#@&%';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function ScrambleText({ text, className, delay = 0, speed = 32 }: ScrambleTextProps) {
  const [output, setOutput] = useState(text);
  const iterRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    iterRef.current = 0;

    timeoutRef.current = setTimeout(() => {
      setOutput(
        text
          .split('')
          .map((c) => (c === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]))
          .join('')
      );

      intervalRef.current = setInterval(() => {
        iterRef.current += 0.35;
        setOutput(
          text
            .split('')
            .map((char, idx) => {
              if (char === ' ') return ' ';
              if (idx < Math.floor(iterRef.current)) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('')
        );

        if (iterRef.current >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setOutput(text);
        }
      }, speed);
    }, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, delay, speed]);

  return <span className={className}>{output}</span>;
}
