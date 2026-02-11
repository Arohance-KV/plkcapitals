import React, { useEffect, useRef } from 'react';
import { gsap } from '@/src/lib/gsap';

const Developments: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.dev-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#1a1a1a] text-[#f5f5f0] pt-40 pb-24 px-6 md:px-24"
    >
    </div>
  );
};

export default Developments;
