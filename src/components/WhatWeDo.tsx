import React, { useRef } from 'react';
import { useReveal, useStagger } from '../hooks/useGsap';

interface WhatWeDoProps {
    variant?: 'default' | 'light';
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ variant = 'default' }) => {
    const isLight = variant === 'light';
    const containerRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);

    // Reveal section
    useReveal(containerRef, { threshold: 0.1 });
    // Stagger cards
    useStagger(gridRef, ".what-we-do-card", { y: 40, stagger: 0.2, delay: 0.2 });

    // Micro-interactions
    // useHover removed in favor of CSS transition

    // Styles
    const sectionBg = isLight ? 'bg-[#F7F2EF]' : 'bg-plk-navy';
    const textColor = isLight ? 'text-[#152E4D]' : 'text-white';
    const subTextColor = isLight ? 'text-[#152E4D]/80' : 'text-plk-grey';
    const cardBg = isLight ? 'bg-white' : 'bg-[#112240]';
    const cardBorder = isLight ? 'border-[#152E4D]/10' : 'border-white/5';
    const dividerColor = isLight ? 'bg-[#152E4D]/20' : 'bg-[#979797] opacity-50';
    const buttonText = 'text-plk-lima'; // Always Lima as requested

    return (
        <section ref={containerRef} className={`${sectionBg} py-20 relative opacity-0`} id="solutions">
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className={`text-4xl md:text-5xl  ${textColor} max-w-2xl mx-auto mb-8`}>
                        WHAT WE DO
                    </h2>
                </div>

                {/* Cards Grid */}
                <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
                    {/* Card 1: Wealth Management */}
                    <div ref={card1Ref} className={`what-we-do-card ${cardBg} p-10 md:p-14 rounded-sm border ${cardBorder} flex flex-col h-full transform-gpu transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg origin-center`}>
                        <h3 className={`text-3xl ${textColor} mb-2`}>
                            Wealth Management for <br /> Individuals & Families
                        </h3>
                        {/* Small Divider */}
                        <div className={`h-[1px] w-18 ${isLight ? 'bg-[#152E4D]' : 'bg-plk-lima'} mb-6`}></div>

                        <p className={`${subTextColor} font-light text-lg mb-8 leading-relaxed`}>
                            Long term planning, asset allocation and ongoing guidance aligned with your lifestyle and future goals.
                        </p>
                        <div className="mt-auto">
                            <a href="/wealth-management" className={`${buttonText} text-lg hover:opacity-80 transition-opacity duration-300 flex items-center gap-2`}>
                                Learn More <span className="text-xl">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Card 2: Liquidity Management */}
                    <div ref={card2Ref} className={`what-we-do-card ${cardBg} p-10 md:p-14 rounded-sm border ${cardBorder} flex flex-col h-full transform-gpu transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg origin-center`}>
                        <h3 className={`text-3xl ${textColor} mb-2`}>
                            Liquidity Management for <br /> Businesses & Corporate
                        </h3>
                        {/* Small Divider */}
                        <div className={`h-[1px] w-18 ${isLight ? 'bg-[#152E4D]' : 'bg-plk-lima'} mb-6`}></div>

                        <p className={`${subTextColor} font-light text-lg mb-8 leading-relaxed`}>
                            Thoughtful structuring of surplus capital aligned with business needs, timelines, safety and flexibility.
                        </p>
                        <div className="mt-auto">
                            <a href="/liquidity-management" className={`${buttonText} text-lg hover:opacity-80 transition-opacity duration-300 flex items-center gap-2`}>
                                Learn More <span className="text-xl">→</span>
                            </a>
                        </div>
                    </div>
                </div>



            </div>
            {/* Divider Line */}
            <div className={`h-[1px] w-full ${dividerColor} mt-20`}></div>
        </section>
    );
};
