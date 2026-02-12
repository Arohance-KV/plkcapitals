import React, { useRef, useEffect } from 'react';
import { useReveal, useStagger } from '../hooks/useGsap';
import { SplitText } from '../components/SplitText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const LiquidityManagement: React.FC = () => {
    const section1Ref = useRef<HTMLElement>(null);
    const section2Ref = useRef<HTMLElement>(null);
    const section3Ref = useRef<HTMLElement>(null);
    const section4Ref = useRef<HTMLElement>(null);

    // Section 1 Reveal
    useReveal(section1Ref, { threshold: 0.1 });
    useStagger(section1Ref, "h1, p", { y: 30, stagger: 0.2, delay: 0.1 });

    // Section 4 Reveal
    useReveal(section4Ref, { threshold: 0.2 });
    useStagger(section4Ref, ".lm-next-step", { y: 20, stagger: 0.1, delay: 0.1 });

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
            gsap.to(el.querySelectorAll('#lm-s2-line1 .split-word'), {
                ...animConfig,
                scrollTrigger: {
                    trigger: '#lm-s2-line1',
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            // Line 2
            gsap.to(el.querySelectorAll('#lm-s2-line2 .split-word'), {
                ...animConfig,
                duration: 1.2,
                scrollTrigger: {
                    trigger: '#lm-s2-line2',
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            // Line 3
            gsap.to(el.querySelectorAll('#lm-s2-line3 .split-word'), {
                ...animConfig,
                duration: 1.2,
                scrollTrigger: {
                    trigger: '#lm-s2-line3',
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
            gsap.to(el.querySelectorAll('#lm-next-step-header .split-word'), {
                opacity: 1, y: 0, filter: "blur(0px)",
                duration: 1.5, stagger: 0.05, ease: "power3.out",
                scrollTrigger: {
                    trigger: '#lm-next-step-header',
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });

            gsap.to(el.querySelectorAll('.lm-next-step-btn'), {
                opacity: 1, y: 0,
                duration: 1, ease: "power3.out", delay: 0.5,
                scrollTrigger: {
                    trigger: '#lm-next-step-header',
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
                        Liquidity Management for Businesses and Corporate<span className="text-plk-lima">.</span>
                    </h1>
                    <p className="text-2xl md:text-2xl text-plk-white font-sans font-light max-w-3xl leading-relaxed">
                        Helping business owners manage surplus capital thoughtfully while preserving safety, flexibility, and clarity.
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
                            id="lm-s2-line1"
                            className="text-lg md:text-2xl text-plk-navy font-sans font-light leading-relaxed block"
                            text="Business capital has a different role than personal wealth."
                        />
                        <SplitText
                            id="lm-s2-line2"
                            className="text-lg md:text-2xl font-sans font-light text-plk-navy leading-relaxed block"
                            text="It needs to remain available, stable, and aligned with business cycles not locked away or exposed unnecessarily."
                        />
                        <SplitText
                            id="lm-s2-line3"
                            className="text-lg md:text-2xl font-sans font-light text-plk-navy leading-relaxed block"
                            text="Our role is to help structure surplus capital decisions so funds are managed efficiently, while the business remains the priority."
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

                    <p className="text-xl md:text-2xl text-plk-navy font-sans font-light mb-16 leading-relaxed">
                        A practical approach to managing surplus cash without compromising flexibility or continuity.
                    </p>

                    <div className="space-y-24">

                        {/* Phase 1 */}
                        <div className="work-section">
                            <h3 className="text-2xl md:text-3xl text-plk-navy mb-6 font-montserrat font-medium">Phase 1: Understanding How Your Business Uses Cash</h3>
                            <p className="text-2xl md:text-2xl text-plk-navy font-sans font-light mb-6 ">We start by understanding how money moves through your business:</p>
                            <ul className="space-y-3 text-2xl md:text-2xl text-plk-navy font-sans font-light list-disc pl-5 mb-6 ">
                                <li>Cash-flow patterns and seasonality</li>
                                <li>Working capital requirements</li>
                                <li>Expected commitments and timelines</li>
                                <li>How surplus funds are currently held</li>
                            </ul>
                            <p className="text-2xl md:text-2xl text-plk-navy font-sans font-light">This allows us to clearly separate operating capital from true surplus funds.</p>
                        </div>

                        {/* Phase 2 */}
                        <div className="work-section">
                            <h3 className="text-2xl md:text-3xl text-plk-navy mb-6 font-montserrat font-medium">Phase 2: Aligning Surplus Funds With Timelines</h3>
                            <p className="text-2xl md:text-2xl text-plk-navy font-sans font-light mb-6 ">Rather than treating surplus cash as one pool, we focus on when the money is actually needed.</p>
                            <ul className="space-y-3 text-2xl md:text-2xl text-plk-navy font-sans font-light list-disc pl-5 mb-6 ">
                                <li>Near-term commitments</li>
                                <li>Medium-term business needs</li>
                                <li>Longer-term surplus</li>
                            </ul>
                            <p className="text-2xl md:text-2xl text-plk-navy font-sans font-light">This keeps money available when required, improves efficiency on idle capital, and maintains safety and flexibility.</p>
                        </div>

                        {/* Phase 3 */}
                        <div className="work-section">
                            <h3 className="text-2xl md:text-3xl text-plk-navy mb-6 font-montserrat font-medium">Phase 3: Structuring Liquidity Thoughtfully</h3>
                            <ul className="space-y-3 text-2xl md:text-2xl text-plk-navy font-sans font-light list-disc pl-5 mb-6 ">
                                <li>Core business liquidity remains untouched</li>
                                <li>Surplus funds work more efficiently</li>
                                <li>Money remains available when needed without lock-ins or exit restrictions</li>
                                <li>Costs are kept efficient to avoid unnecessary leakages</li>
                            </ul>
                            <p className="text-2xl md:text-2xl text-plk-navy font-sans font-light">The objective is effective returns on surplus capital, without compromising business continuity.</p>
                        </div>

                        {/* Phase 4 */}
                        <div className="work-section">
                            <h3 className="text-2xl md:text-3xl text-plk-navy mb-6 font-montserrat font-medium">Phase 4: Ongoing Guidance as Business Needs Change</h3>
                            <p className="text-2xl md:text-2xl text-plk-navy font-sans font-light mb-6 ">Businesses evolve, and liquidity needs change over time.</p>
                            <ul className="space-y-3 text-2xl md:text-2xl text-plk-navy font-sans font-light list-disc pl-5 mb-6 ">
                                <li>Review liquidity structures periodically</li>
                                <li>Adjust as cash flows, commitments, or plans change</li>
                                <li>Provide clarity during uncertain business environments</li>
                            </ul>
                            <p className="text-2xl md:text-2xl text-plk-navy font-sans font-light">This ensures liquidity decisions continue to support the business, rather than distract from it.</p>
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
                        id="lm-next-step-header"
                        className="text-2xl md:text-2xl lg:text-4xl text-plk-navy font-montserrat font-medium italic mb-8 leading-tight block"
                        text="Let’s review how your surplus capital is currently structured."
                        style={{ lineHeight: 1.6 }}
                    />

                    <div className="opacity-0 translate-y-4 lm-next-step-btn">
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
