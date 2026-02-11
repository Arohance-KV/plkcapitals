import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from './SplitText';
import { useReveal, useStagger } from '../hooks/useGsap';
import menuIcon from '../assets/icons/menu.png';
import chartIcon from '../assets/icons/chart.png';
import walletCheckIcon from '../assets/icons/wallet-check.png';
import judgeIcon from '../assets/icons/judge.png';

gsap.registerPlugin(ScrollTrigger);
import legacyIcon from '../assets/icons/legacy.svg';

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

    useEffect(() => {
        const section = quoteRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            gsap.to(section.querySelectorAll('.split-word'), {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1.5,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }, quoteRef);

        return () => ctx.revert();
    }, []);

    const sectionBg = 'bg-plk-white';
    const textColor = 'text-plk-navy';
    const subTextColor = 'text-plk-navy';
    const borderColor = 'border-plk-navy';
    const separatorColor = 'via-plk-navy';

    const imageClass = 'w-12 h-12 filter brightness-0 invert-[.08] sepia-[.34] saturate-[3018%] hue-rotate-[193deg] brightness-96 contrast-92';

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
            icon: legacyIcon
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
                    <p className={`${subTextColor} font-sans font-light text-2xl`}>
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
                <div ref={quoteRef} className="text-center mt-20 max-w-4xl mx-auto">
                    <SplitText
                        id="footer-quote"
                        className={`text-2xl md:text-2xl font-sans font-light ${textColor} leading-[1.6rem]`}
                        text="While life stages differ, our role remains the same providing clarity, discipline, and steady guidance through changing needs."
                        prefix={
                            <svg viewBox="0 0 290 290" className="inline-block mr-2 text-plk-lima w-6 h-6 md:w-8 md:h-8 align-top -translate-y-2">
                                <path d="M22.12 145v97.65h97.65V145H70.95c0-26.92 21.9-48.82 48.82-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65zm245.76-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65v97.65h97.65V145h-48.82c-.01-26.92 21.89-48.82 48.82-48.82z" fill="currentColor" />
                            </svg>
                        }
                        suffix={
                            <svg viewBox="0 0 290 290" className="inline-block ml-2 text-plk-lima w-6 h-6 md:w-8 md:h-8 align-top translate-y-2">
                                <path d="M267.88 145V47.35h-97.65V145h48.82c0 26.92-21.9 48.82-48.82 48.82v48.82c53.93.01 97.65-43.71 97.65-97.64zM22.12 193.82v48.82c53.93 0 97.65-43.72 97.65-97.65V47.35H22.12V145h48.82c.01 26.92-21.89 48.82-48.82 48.82z" fill="currentColor" />
                            </svg>
                        }
                    />
                </div>

            </div>
        </section>
    );
};
