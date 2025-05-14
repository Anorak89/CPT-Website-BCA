// src/components/useVanta.tsx
'use client';
import { useEffect, useRef, useState } from 'react';

export function useVanta() {
  const ref = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && ref.current && !vantaEffect) {
      Promise.all([
        import('three'),
        import('vanta/dist/vanta.net.min') // ⬅️ Changed from birds to net
      ]).then(([THREE, VANTA]) => {
        const effect = VANTA.default({
          el: ref.current!,
          THREE,
          color: 0x3fd3ff,
          color1: 0x3fd3ff,        // And/or this
          color2: 0x3fd3ff,               // Blue lines
          backgroundColor: 0x15253c,    // Dark background
          points: 10.0,                 // Fewer points = less clutter
          maxDistance: 20.0,            // Connection range
          spacing: 15.0,                // Grid spacing
        });
        setVantaEffect(effect);
      }).catch(console.error);
    }

    return () => {
      vantaEffect?.destroy();
    };
  }, [vantaEffect]);

  return ref;
}
