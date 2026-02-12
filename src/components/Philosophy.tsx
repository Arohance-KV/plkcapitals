import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from './SplitText';

gsap.registerPlugin(ScrollTrigger);

interface PhilosophyProps {
    variant?: 'default' | 'light';
}

export const Philosophy: React.FC<PhilosophyProps> = ({ variant = 'default' }) => {
    const isLight = variant === 'light';
    const sectionRef = useRef<HTMLElement>(null);

    const textColor = isLight ? 'text-[#152E4D]' : 'text-plk-white';
    const dividerColor = isLight ? 'bg-[#152E4D]/20' : 'bg-[#979797] opacity-50';

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            // Line 1
            gsap.to(section.querySelectorAll('#line-1 .split-word'), {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1.5,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '#line-1',
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            // Line 2
            gsap.to(section.querySelectorAll('#line-2 .split-word'), {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1.5,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '#line-2',
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            // Line 3
            gsap.to(section.querySelectorAll('#line-3 .split-word'), {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1.5,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '#line-3',
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={`w-full py-20 ${isLight ? 'bg-plk-white' : ''}`}>
            <div className="max-w-4xl mx-auto px-4 md:px-12 text-center space-y-[1.6rem]">
                <SplitText
                    id="line-1"
                    className={`text-2xl md:text-2xl font-sans font-light  ${textColor} leading-[1.6rem]`}
                    text="Money decisions are rarely just about numbers"
                    prefix={
                        <svg viewBox="0 0 290 290" className="inline-block mr-2 text-plk-lima w-6 h-6 md:w-8 md:h-8 align-top -translate-y-2">
                            <path d="M22.12 145v97.65h97.65V145H70.95c0-26.92 21.9-48.82 48.82-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65zm245.76-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65v97.65h97.65V145h-48.82c-.01-26.92 21.89-48.82 48.82-48.82z" fill="currentColor" />
                        </svg>
                    }
                />
                <SplitText
                    id="line-2"
                    className={`text-2xl md:text-2xl font-sans font-light ${textColor} leading-[1.6rem]`}
                    text="They are shaped by responsibilities, future commitments, cash flows, and uncertainty."
                />

                <SplitText
                    id="line-3"
                    className={`text-2xl md:text-2xl font-sans font-light ${textColor} leading-[1.6rem]`}
                    text="Our role is to bring structure and clarity so your wealth quietly supports your life, allowing you to focus on other important things."
                    suffix={
                        <svg viewBox="0 0 290 290" className="inline-block ml-2 text-plk-lima w-6 h-6 md:w-8 md:h-8 align-top translate-y-2">
                            <path d="M267.88 145V47.35h-97.65V145h48.82c0 26.92-21.9 48.82-48.82 48.82v48.82c53.93.01 97.65-43.71 97.65-97.64zM22.12 193.82v48.82c53.93 0 97.65-43.72 97.65-97.65V47.35H22.12V145h48.82c.01 26.92-21.89 48.82-48.82 48.82z" fill="currentColor" />
                        </svg>
                    }
                />
            </div>

            {/* Divider Line */}
            <div className={`h-[1px] w-full max-w-4xl mx-auto ${dividerColor} mt-20`}></div>
        </section>
    );
};