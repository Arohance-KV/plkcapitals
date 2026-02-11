import React, { useRef } from 'react';
import { useReveal, useStagger, useHover } from '../hooks/useGsap';

interface AboutUsProps {
    variant?: 'default' | 'light';
}

export const AboutUs: React.FC<AboutUsProps> = ({ variant = 'default' }) => {
    const isLight = variant === 'light';
    const topSectionRef = useRef<HTMLDivElement>(null);
    const bottomSectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const btn1Ref = useRef<HTMLAnchorElement>(null);
    const btn2Ref = useRef<HTMLButtonElement>(null);

    // Reveal top section content
    useStagger(topSectionRef, "h2, p, button", { y: 20, delay: 0.1 });

    // Reveal bottom grid content
    useReveal(bottomSectionRef, { threshold: 0.2 });
    useStagger(contentRef, "span, h3, p, button", { y: 30, stagger: 0.15, delay: 0.2 });

    // Micro-interactions
    useHover(btn1Ref, { scale: 1.05 });
    useHover(btn2Ref, { scale: 1.05 });

    const textColor = isLight ? 'text-[#0E293C]' : 'text-white';
    const subTextColor = isLight ? 'text-plk-white' : 'text-plk-white';

    return (
        <section className="py-24">
            {/* Top Section */}
            <div ref={topSectionRef} className="max-w-7xl mx-auto px-4 md:px-12 text-left mb-20">
                <h2 className={`text-3xl md:text-4xl lg:text-6xl font-montserrat font-medium ${textColor} mb-6 leading-tight`}>
                    Financial Peace Of Mind<span className="text-plk-lima">.</span>
                </h2>
                <p className={`text-2xl md:text-2xl ${subTextColor} font-sans font-light mb-12`}>
                    Something worth building patiently over time.
                </p>
                <div className="flex justify-start">
                    <div className="reveal-item">
                        <a href="/contact" className="inline-block bg-plk-lima font-sans font-medium text-plk-navy text-base px-6 py-3 md:text-lg md:px-8 md:py-4 rounded-full hover:bg-[#152E4D] hover:text-white transition-colors duration-300">
                            Schedule a Conversation
                        </a>
                    </div>
                </div>
                <p className={`text-2xl md:text-2xl ${subTextColor} font-sans font-light mt-8`}>
                    Many of our clients begin with a simple conversation before deciding anything further.
                </p>
            </div>
        </section>
    );
};
