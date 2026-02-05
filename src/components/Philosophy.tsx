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
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%", // Start earlier to give time for the sequence
                    toggleActions: "play none none reverse"
                }
            });

            // Select words by their container ID to ensure correct grouping
            const line1Words = section.querySelectorAll('#line-1 .split-word');
            const line2Words = section.querySelectorAll('#line-2 .split-word');
            const line3Words = section.querySelectorAll('#line-3 .split-word');

            // Animation configuration
            const animConfig = {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 2, // Slow duration from previous step
                ease: "power3.out",
                stagger: 0.2 // Slow stagger from previous step
            };

            // STRICT SEQUENCE
            tl.to(line1Words, animConfig)
                .to(line2Words, animConfig, ">") // ">" means start immediately after previous finishes
                .to(line3Words, animConfig, ">");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={`w-full py-20 ${isLight ? 'bg-[#F7F2EF]' : ''}`}>
            <div className="max-w-4xl mx-auto px-4 md:px-12 text-center space-y-12">
                <SplitText
                    id="line-1"
                    className={`text-2xl md:text-3xl font-thin ${textColor} leading-relaxed`}
                    text="Money decisions are rarely just about numbers."
                />

                <SplitText
                    id="line-2"
                    className={`text-2xl md:text-3xl font-thin ${textColor} leading-relaxed`}
                    text="They are shaped by responsibilities, future commitments, cash flows, and uncertainty."
                />

                <SplitText
                    id="line-3"
                    className={`text-2xl md:text-3xl font-thin ${textColor} leading-relaxed`}
                    text="Our role is to bring structure and clarity so your wealth quietly supports your life, allowing you to focus on other important things."
                />
            </div>

            {/* Divider Line */}
            <div className={`h-[1px] w-full max-w-4xl mx-auto ${dividerColor} mt-20`}></div>
        </section>
    );
};
