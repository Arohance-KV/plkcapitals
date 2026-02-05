import React, { useRef } from 'react';
import { useReveal, useStagger } from '../hooks/useGsap';
import menuIcon from '../assets/icons/menu.png';
import chartIcon from '../assets/icons/chart.png';
import walletCheckIcon from '../assets/icons/wallet-check.png';
import judgeIcon from '../assets/icons/judge.png';

interface HowWeWorkProps {
    variant?: 'default' | 'light';
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ variant = 'default' }) => {
    const isLight = variant === 'light';
    const containerRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const quoteRef = useRef<HTMLDivElement>(null);

    // Reveal animations
    useReveal(containerRef, { threshold: 0.1 });
    useStagger(headerRef, "h2, p", { y: 20, delay: 0.1 });
    useStagger(gridRef, ".card-item", { y: 30, stagger: 0.1, delay: 0.2 });
    useReveal(quoteRef, { y: 20, delay: 0.5 });

    // Styles
    const sectionBg = isLight ? 'bg-[#F7F2EF]' : 'bg-plk-navy';
    const textColor = isLight ? 'text-[#152E4D]' : 'text-white';
    const subTextColor = isLight ? 'text-[#152E4D]/80' : 'text-plk-grey';
    const borderColor = isLight ? 'border-black' : 'border-white/10';
    const separatorColor = isLight ? 'via-black' : 'via-white';
    const imageClass = isLight ? 'w-12 h-12 filter invert' : 'w-12 h-12';

    const workItems = [
        {
            title: "Business Owners & Entrepreneurs",
            desc: "Managing personal wealth alongside business cycles, surplus cash, and long-term family goals—while balancing growth with capital protection.",
            icon: menuIcon
        },
        {
            title: "Professionals & Senior Executives",
            desc: "Building wealth alongside demanding careers, making thoughtful investment decisions despite limited time and market noise.",
            icon: chartIcon
        },
        {
            title: "Wealth Accumulators",
            desc: "Looking to grow wealth steadily with structure, discipline, and risk awareness—without chasing short-term trends.",
            icon: walletCheckIcon
        },
        {
            title: "Wealth Preservers",
            desc: "Shifting focus from aggressive growth to capital protection and sensible risk management—so important family and life commitments remain secure.",
            icon: judgeIcon
        },
        {
            title: "Retirees & Legacy Planners",
            desc: "Prioritising regular cash flows, capital stability, and peace of mind—while planning for intergenerational wealth transfer and purposeful giving.",
            icon: menuIcon // Reusing icon
        }
    ];

    // Split items for staggered layout
    const leftColumnItems = workItems.filter((_, i) => i % 2 === 0);
    const rightColumnItems = workItems.filter((_, i) => i % 2 !== 0);

    return (
        <section id="who-we-work-with" ref={containerRef} className={`${sectionBg} py-24`}>
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                {/* Header */}
                <div ref={headerRef} className="text-center mb-20">
                    <h2 className={`text-4xl md:text-5xl ${textColor} mb-6`}>
                        Who We Work With
                    </h2>
                    <p className={`${subTextColor} font-light text-lg`}>
                        Tailored guidance for every stage of your financial journey
                    </p>
                </div>

                {/* Staggered Grid Content */}
                <div ref={gridRef} className="flex flex-col md:flex-row relative">

                    {/* Vertical Divider (Desktop Only) */}
                    <div className={`hidden md:block absolute left-1/2 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent ${separatorColor} to-transparent opacity-20 -translate-x-1/2 z-10`}></div>

                    {/* Left Column (Indices 0, 2, 4) */}
                    <div className={`w-full md:w-1/2`}>
                        {leftColumnItems.map((item, index) => (
                            <div key={index} className={`card-item p-8 md:p-16 relative border-b ${borderColor} ${index === leftColumnItems.length - 1 ? 'md:border-b-0' : ''}`}>
                                <div className="mb-8">
                                    <img src={item.icon} alt="Icon" className={imageClass} />
                                </div>
                                <h3 className={`text-2xl ${textColor} mb-6`}>{item.title}</h3>
                                <p className={`${subTextColor} font-light text-lg leading-relaxed`}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Column (Indices 1, 3) */}
                    <div className={`w-full md:w-1/2 md:mt-24`}>
                        {rightColumnItems.map((item, index) => (
                            <div key={index} className={`card-item p-8 md:p-16 relative border-b ${index === rightColumnItems.length - 1 ? 'border-b-0' : ''} ${borderColor}`}>
                                <div className="mb-8">
                                    <img src={item.icon} alt="Icon" className={imageClass} />
                                </div>
                                <h3 className={`text-2xl ${textColor} mb-6`}>{item.title}</h3>
                                <p className={`${subTextColor} font-light text-lg leading-relaxed`}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Footer Quote */}
                <div ref={quoteRef} className="text-center mt-20 max-w-4xl mx-auto opacity-0">
                    <p className={`text-2xl md:text-3xl ${textColor} leading-normal`}>
                        While life stages differ, our role remains the same providing clarity, discipline, and steady guidance through changing needs.
                    </p>
                </div>

            </div>
        </section>
    );
};
