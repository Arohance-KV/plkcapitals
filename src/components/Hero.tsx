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

    const textColor = isLight ? 'text-[#0E293C]' : 'text-plk-white';
    const subTextColor = isLight ? 'text-[#0E293C]/80' : 'text-plk-white';
    const dividerColor = isLight ? 'bg-[#0E293C]/20' : 'bg-plk-white';

    return (
        <section ref={containerRef} className="pt-40 pb-20 w-full opacity-0 min-h-screen flex flex-col justify-center">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-12">
                <div className="flex flex-col items-start relative z-10 max-w-4xl w-full">

                    {/* Text Content */}
                    <h1
                        style={{ lineHeight: 1.2 }}
                        className={`text-5xl md:text-6xl font-montserrat font-medium uppercase ${textColor} mb-12 tracking-[0.01em]`}
                    >
                        Helping your money <br />
                        stay aligned with <br />
                        your life<span className="text-plk-lima">.</span>
                    </h1>
                    <p className={`${subTextColor} text-xl md:text-2xl font-sans font-light max-w-2xl leading-relaxed`}>
                        Thoughtful financial guidance for individuals, families, and business owners built on clarity, independence, and long-term thinking.
                    </p>
                </div>

            </div>

            {/* Divider Line */}
            <div className={`h-[1px] w-full ${dividerColor} mt-24`}></div>
        </section >
    );
};
