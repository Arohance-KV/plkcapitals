import React, { useRef, useEffect } from 'react';
import { useReveal, useStagger } from '../hooks/useGsap';
import { SplitText } from '../components/SplitText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const WealthManagement: React.FC = () => {
    const section1Ref = useRef<HTMLElement>(null);
    const section2Ref = useRef<HTMLElement>(null);
    const section3Ref = useRef<HTMLElement>(null);
    const section4Ref = useRef<HTMLElement>(null);

    // Section 1 Reveal
    useReveal(section1Ref, { threshold: 0.1 });
    useStagger(section1Ref, "h1, p", { y: 30, stagger: 0.2, delay: 0.1 });

    // Section 4 Reveal
    useReveal(section4Ref, { threshold: 0.2 });
    useStagger(section4Ref, ".wm-next-step", { y: 20, stagger: 0.1, delay: 0.1 });

    // Section 2: "What This Is About" Animation - Independent Triggers
    useEffect(() => {
        const el = section2Ref.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            const animConfig = {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1.5,
                ease: "power3.out",
                stagger: 0.05
            };

            // Line 1
            gsap.to(el.querySelectorAll('#wm-s2-line1 .split-word'), {
                ...animConfig,
                scrollTrigger: {
                    trigger: '#wm-s2-line1',
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            // Line 2
            gsap.to(el.querySelectorAll('#wm-s2-line2 .split-word'), {
                ...animConfig,
                duration: 1.2, // Slightly faster for body text
                scrollTrigger: {
                    trigger: '#wm-s2-line2',
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            // Line 3
            gsap.to(el.querySelectorAll('#wm-s2-line3 .split-word'), {
                ...animConfig,
                duration: 1.2,
                scrollTrigger: {
                    trigger: '#wm-s2-line3',
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

        }, section2Ref);
        return () => ctx.revert();
    }, []);


    // Section 3: "How We Work" Animation
    useEffect(() => {
        const el = section3Ref.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            const sections = el.querySelectorAll('.work-section');

            sections.forEach((section, i) => {
                gsap.fromTo(section,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        },
                        delay: 0.1
                    }
                );
            });
        }, section3Ref);
        return () => ctx.revert();
    }, []);

    // Section 4: "Natural Next Step" Animation
    useEffect(() => {
        const el = section4Ref.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            gsap.to(el.querySelectorAll('#wm-next-step-header .split-word'), {
                opacity: 1, y: 0, filter: "blur(0px)",
                duration: 1.5, stagger: 0.05, ease: "power3.out",
                scrollTrigger: {
                    trigger: '#wm-next-step-header',
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });

            gsap.to(el.querySelectorAll('.wm-next-step-btn'), {
                opacity: 1, y: 0,
                duration: 1, ease: "power3.out", delay: 0.5,
                scrollTrigger: {
                    trigger: '#wm-next-step-header',
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });

        }, section4Ref);

        return () => ctx.revert();
    }, []);

    return (
        <main className="flex-grow bg-[#F7F2EF] text-[#0B1B2F] overflow-hidden pb-0">

            {/* 1. Hero */}
            <section ref={section1Ref} className="w-full bg-plk-navy pt-52 pb-24 px-6 md:px-12 mb-0 opacity-0">
                <div className="max-w-6xl mx-auto">
                    <h1 style={{ lineHeight: 1.2 }} className="text-5xl md:text-6xl text-plk-white font-montserrat font-medium uppercase mb-12 tracking-[0.01em] max-w-5xl">
                        Wealth Management for Individuals & Families<span className="text-plk-lima">.</span>
                    </h1>
                    <p className="text-2xl md:text-2xl text-plk-white font-sans font-light max-w-3xl leading-relaxed">
                        Helping your money stay aligned with your life as priorities change and time moves on.
                    </p>
                </div>
            </section>

            {/* 2. What This Is About */}
            <section ref={section2Ref} className="w-full bg-plk-white py-32">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <div className="text-2xl font-semibold tracking-widest text-plk-navy/80 font-montserrat font-medium uppercase mb-6">
                        WHAT THIS IS ABOUT
                    </div>

                    <div className="space-y-12">
                        <SplitText
                            id="wm-s2-line1"
                            className="text-lg md:text-2xl text-plk-navy font-sans font-light leading-relaxed block"
                            text="Every family’s financial life is shaped by responsibilities, future commitments, and how comfortable you are with ups and downs along the way."
                        />
                        <SplitText
                            id="wm-s2-line2"
                            className="text-lg md:text-2xl text-plk-navy font-sans font-light leading-relaxed block"
                            text="We begin by understanding these clearly, then structure portfolios that fit your life today and adapt as it evolves."
                        />
                        <SplitText
                            id="wm-s2-line3"
                            className="text-lg md:text-2xl text-plk-navy font-sans font-light leading-relaxed block"
                            text="The aim is simple: your money should work quietly in the background, so you can focus on what matters more."
                        />
                    </div>
                </div>
            </section>

            {/* 3. How We Work With You */}
            <section ref={section3Ref} className="w-full bg-plk-white py-32">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <div className="text-2xl font-semibold tracking-widest text-plk-navy/80 font-montserrat font-medium uppercase mb-6">
                        HOW WE WORK WITH YOU
                    </div>

                    <p className="text-2xl text-plk-navy font-light mb-16 leading-relaxed">
                        A thoughtful process designed to reduce uncertainty, not add complexity.
                    </p>

                    <div className="space-y-24">

                        {/* Phase 1 */}
                        <div className="work-section">
                            <h3 className="text-2xl md:text-3xl text-plk-navy mb-6 font-montserrat font-medium">Phase 1: Understanding What Matters To You</h3>
                            <ul className="space-y-3 text-2xl text-plk-navy list-disc pl-5 mb-6 font-sans font-light">
                                <li>Your goals and future objectives</li>
                                <li>Your cash-flow situation and commitments</li>
                                <li>Past experiences that shape how you think about money</li>
                            </ul>
                        </div>

                        {/* Phase 2 */}
                        <div className="work-section">
                            <h3 className="text-2xl md:text-3xl text-plk-navy mb-6 font-montserrat font-medium">Phase 2: Agreeing On Comfortable Risk Level</h3>
                            <p className="text-2xl text-plk-navy font-sans font-light mb-6 ">Risk feels different for everyone.</p>
                            <p className="text-2xl text-plk-navy font-light mb-6 ">We talk through how much fluctuation feels acceptable, what causes discomfort, and how you want your portfolio to behave during uncertain periods</p>
                            <p className="text-2xl text-plk-navy font-sans font-light">Together, we agree on a risk level that feels right for you.</p>
                        </div>

                        {/* Phase 3 */}
                        <div className="work-section">
                            <h3 className="text-2xl md:text-3xl text-plk-navy mb-6 font-montserrat font-medium">Phase 3: Structuring The Portfolio Around That Clarity</h3>
                            <ul className="space-y-3 text-2xl text-plk-navy font-sans font-light list-disc pl-5 mb-6 ">
                                <li>The portfolio behaves in line with your expectations</li>
                                <li>Market movements do not come as a surprise</li>
                                <li>Costs are kept efficient to avoid unnecessary leakages over time</li>
                            </ul>
                            <p className="text-2xl text-plk-navy font-sans font-light">Asset allocation is built around your time horizon, responsibilities, and long-term objectives and reviewed regularly.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. Natural Next Step */}
            <section ref={section4Ref} className="w-full bg-plk-white py-32">
                <div className="max-w-4xl mx-auto px-6 md:px-12 text-left">
                    <div className="text-2xl font-semibold tracking-widest text-plk-navy/80 font-montserrat font-medium uppercase mb-6">
                        NATURAL NEXT STEP
                    </div>
                    <SplitText
                        id="wm-next-step-header"
                        className="text-2xl md:text-2xl lg:text-4xl text-plk-navy-80 font-montserrat font-medium italic mb-8 leading-tight block"
                        text="Let's review your current portfolio and see how it fits into your life today."
                        style={{ lineHeight: 1.6 }}
                    />

                    <div className="opacity-0 translate-y-4 wm-next-step-btn">
                        <div className="mt-8">
                            <a href="/contact" className="inline-block bg-plk-lima font-sans font-medium text-plk-navy text-base px-6 py-3 md:text-lg md:px-8 md:py-4 rounded-full hover:bg-[#152E4D] hover:text-white transition-colors duration-300">
                                Schedule a Conversation
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};
