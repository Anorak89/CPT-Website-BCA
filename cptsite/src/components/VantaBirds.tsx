// src/components/VantaBirds.tsx
'use client';
import { useEffect, useRef } from 'react';

export default function VantaBirds() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return;

    // window.THREE and window.VANTA.BIRDS are guaranteed by our <Script> tags
    const effect = (window as any).VANTA.BIRDS({
      el: ref.current,
      backgroundColor: 0x0,
      birdSize: 1.5,
      speedLimit: 4.0,
      separation: 50.0,
      alignment: 50.0,
      cohesion: 50.0,
    });

    return () => effect?.destroy?.();
  }, []);

  return <div ref={ref} className="w-full h-screen" />;
}
