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
            <div className="max-w-4xl mx-auto px-4 md:px-12 text-center space-y-12">
                <SplitText
                    id="line-1"
                    className={`text-2xl md:text-3xl font-montserrat font-medium ${textColor} leading-relaxed`}
                    text="Money decisions are rarely just about numbers."
                />

                <SplitText
                    id="line-2"
                    className={`text-2xl md:text-3xl font-montserrat font-medium ${textColor} leading-relaxed`}
                    text="They are shaped by responsibilities, future commitments, cash flows, and uncertainty."
                />

                <SplitText
                    id="line-3"
                    className={`text-2xl md:text-3xl font-montserrat font-medium ${textColor} leading-relaxed`}
                    text="Our role is to bring structure and clarity so your wealth quietly supports your life, allowing you to focus on other important things."
                />
            </div>

            {/* Divider Line */}
            <div className={`h-[1px] w-full max-w-4xl mx-auto ${dividerColor} mt-20`}></div>
        </section>
    );
};
