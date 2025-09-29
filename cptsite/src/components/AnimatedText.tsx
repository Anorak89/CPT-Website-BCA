'use client';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function AnimatedText() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const options = {
      strings: [
        'BCA Competitive Programming Team',
        'Code. Compete. Collaborate.',
        'USACO • ACSL • Codeforces',
        'Beginner to Advanced – All Welcome',
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current!, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="inline-block text-center">
      <span
        ref={typedRef}
        className="text-4xl md:text-6xl font-bold text-white blurry"
      ></span>
    </div>
  );
}
