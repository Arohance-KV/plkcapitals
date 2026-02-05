import React, { useRef } from 'react';
import { useReveal, useStagger } from '../hooks/useGsap';

export const AboutHero: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    useReveal(containerRef);
    useStagger(containerRef, "h1, p, .reveal-item", { y: 30, stagger: 0.2, delay: 0.1 });

    return (
        <section ref={containerRef} className="w-full bg-plk-navy pt-40 pb-20 md:pt-48 md:pb-32 px-4 md:px-12 opacity-0">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 md:mb-12 max-w-5xl">
                    Independent, Fee-Only Advice,
                    Built Around Your Long Term
                    <br />
                    Peace Of Mind
                </h1>

                <p className="text-white/80 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                    We act as a fiduciary advisor always in our clients’ best interest.
                </p>

                <div className="mt-8 reveal-item">
                    <a href="/contact" className="inline-block bg-white text-[#0b1b2f] text-lg px-8 py-4 rounded-sm hover:bg-[#152E4D] hover:text-white transition-colors duration-300">
                        Schedule a Conversation
                    </a>
                </div>
            </div>
        </section>
    );
};
