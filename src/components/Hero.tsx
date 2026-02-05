import React, { useRef } from 'react';
import { useReveal, useStagger } from '../hooks/useGsap';
import logo from '../assets/logo.png';
import heroVideo from '../assets/plk-hero.mp4';

interface HeroProps {
    variant?: 'default' | 'light';
}

export const Hero: React.FC<HeroProps> = ({ variant = 'default' }) => {
    const isLight = variant === 'light';
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    // Stagger text elements
    useStagger(textRef, "h1, p", { y: 30, duration: 1, stagger: 0.2, delay: 0.5 });

    // Reveal the whole container slightly
    useReveal(containerRef, { y: 20, duration: 1.2, delay: 0.2 });

    const textColor = isLight ? 'text-[#0E293C]' : 'text-white';
    const subTextColor = isLight ? 'text-[#0E293C]/80' : 'text-white/80';
    const dividerColor = isLight ? 'bg-[#0E293C]/20' : 'bg-white/20';

    return (
        <section ref={containerRef} className="px-4 md:px-12 pt-40 pb-20 w-full opacity-0 min-h-screen flex flex-col justify-center">
            <div className="flex flex-col items-start relative z-10 max-w-4xl w-full">

                {/* Text Content */}
                <div ref={textRef} className="flex-1">
                    <h1 className={`text-5xl md:text-7xl ${textColor} leading-[1.1] mb-12 tracking-tight`}>
                        Helping your money <br />
                        stay aligned with <br />
                        your life.
                    </h1>
                    <p className={`${subTextColor} text-xl md:text-2xl font-light max-w-2xl leading-relaxed`}>
                        Thoughtful financial guidance for individuals, families, and business owners built on clarity, independence, and long-term thinking.
                    </p>
                </div>

            </div>

            {/* Divider Line */}
            <div className={`h-[1px] w-full ${dividerColor} mt-24`}></div>
        </section>
    );
};
