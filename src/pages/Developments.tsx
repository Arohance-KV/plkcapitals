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
      {/* <div className="max-w-7xl mx-auto">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className="text-stone-500 uppercase tracking-[0.4em] text-xs font-medium mb-6">The Collection</h1>
            <h2 className="text-5xl md:text-8xl serif italic font-light">Global Portfolio</h2>
          </div>
          <p className="text-stone-400 font-light max-w-xs text-sm tracking-wide">
            A selection of residential masterpieces from the Amalfi Coast to the Californian desert.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {PROPERTIES.map((prop) => (
            <Link 
              key={prop.id} 
              to={`/developments/${prop.id}`}
              className="dev-card group block"
            >
              <div className="aspect-[4/5] overflow-hidden bg-stone-900 mb-8 relative">
                <img 
                  src={prop.image} 
                  alt={prop.name} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute top-8 right-8 text-white text-[10px] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  View Experience
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl serif italic mb-2">{prop.name}</h3>
                  <p className="text-stone-500 text-xs tracking-widest uppercase">{prop.location}</p>
                </div>
                <div className="text-stone-400 text-xs tracking-widest uppercase pt-2">
                  {prop.price}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Developments;
