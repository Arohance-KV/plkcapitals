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

    // Section 2: "What This Is About" Animation
    useEffect(() => {
        const el = section2Ref.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            });

            // Elements
            const line1Words = el.querySelectorAll('#lm-s2-line1 .split-word');
            const line2Words = el.querySelectorAll('#lm-s2-line2 .split-word');
            const line3Words = el.querySelectorAll('#lm-s2-line3 .split-word');

            const animConfig = {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1.5,
                ease: "power3.out",
                stagger: 0.05
            };

            tl.to(line1Words, animConfig)
                .to(line2Words, { ...animConfig, stagger: 0.03 }, ">0.5")
                .to(line3Words, { ...animConfig, stagger: 0.03 }, ">0.5");

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
                        delay: i * 0.1
                    }
                );
            });
        }, section3Ref);
        return () => ctx.revert();
    }, []);

    return (
        <main className="flex-grow bg-[#F7F2EF] text-[#0B1B2F] overflow-hidden pb-20">
            {/* 1. Hero */}
            <section ref={section1Ref} className="w-full bg-plk-navy pt-52 pb-24 px-6 md:px-12 mb-0 opacity-0">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight max-w-4xl">
                        Liquidity Management for Businesses
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed">
                        Helping business owners manage surplus capital thoughtfully — while preserving safety, flexibility, and clarity.
                    </p>
                </div>
            </section>

            {/* 2. What This Is About */}
            <section ref={section2Ref} className="w-full bg-white py-32 mb-32">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <div className="text-sm font-semibold tracking-widest text-[#0B1B2F] uppercase mb-12 opacity-60">
                        WHAT THIS IS ABOUT
                    </div>

                    <div className="space-y-12">
                        <SplitText
                            id="lm-s2-line1"
                            className="text-2xl md:text-3xl text-[#0B1B2F] leading-relaxed block"
                            text="Business capital has a different role than personal wealth."
                        />
                        <SplitText
                            id="lm-s2-line2"
                            className="text-xl md:text-2xl font-light text-[#594D46] leading-relaxed block"
                            text="It needs to remain available, stable, and aligned with business cycles not locked away or exposed unnecessarily."
                        />
                        <SplitText
                            id="lm-s2-line3"
                            className="text-xl md:text-2xl font-light text-[#594D46] leading-relaxed block"
                            text="Our role is to help structure surplus capital decisions so funds are managed efficiently, while the business remains the priority."
                        />
                    </div>
                </div>
            </section>

            {/* 3. How We Work With You */}
            <section ref={section3Ref} className="max-w-4xl mx-auto px-6 md:px-12 mb-32">
                <div className="text-sm font-semibold tracking-widest text-[#0B1B2F] uppercase mb-16 opacity-60">
                    HOW WE WORK WITH YOU
                </div>

                <div className="space-y-24">

                    {/* Step 1 */}
                    <div className="work-section">
                        <h3 className="text-2xl md:text-3xl text-[#0B1B2F] mb-6">We Begin by Understanding the Business</h3>
                        <p className="text-lg text-[#594D46] font-light mb-6">Every engagement starts with understanding how your business operates. We spend time discussing:</p>
                        <ul className="space-y-3 text-lg text-[#594D46] font-light list-disc pl-5 mb-6">
                            <li>Cash-flow patterns and seasonality</li>
                            <li>Working capital requirements</li>
                            <li>Expected commitments and timelines</li>
                            <li>How surplus funds are currently held</li>
                        </ul>
                        <p className="text-lg text-[#0B1B2F] font-medium">This helps us clearly separate core operating capital from surplus funds.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="work-section">
                        <h3 className="text-2xl md:text-3xl  text-[#0B1B2F] mb-6">Surplus Funds Are Aligned With Commitment Timelines</h3>
                        <p className="text-lg text-[#594D46] font-light mb-6">Rather than treating surplus funds as one pool, we focus on when the money is actually required. Surplus capital is aligned based on:</p>
                        <ul className="space-y-3 text-lg text-[#594D46] font-light list-disc pl-5 mb-6">
                            <li>Near-term commitments</li>
                            <li>Medium-term business needs</li>
                            <li>Longer-term surplus</li>
                        </ul>
                        <p className="text-lg text-[#594D46] font-light mb-4">This approach helps:</p>
                        <ul className="space-y-3 text-lg text-[#594D46] font-light list-disc pl-5 mb-6">
                            <li>Keep funds available when required</li>
                            <li>Improve efficiency on idle capital</li>
                            <li>Maintain safety and flexibility</li>
                        </ul>
                        <p className="text-lg text-[#0B1B2F] font-medium">The focus is on matching money to timelines, not chasing higher returns.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="work-section">
                        <h3 className="text-2xl md:text-3xl text-[#0B1B2F] mb-6">Liquidity Is Structured Thoughtfully</h3>
                        <p className="text-lg text-[#594D46] font-light mb-6">Once timelines are clear, surplus capital is structured accordingly. This helps ensure:</p>
                        <ul className="space-y-3 text-lg text-[#594D46] font-light list-disc pl-5 mb-6">
                            <li>Core business liquidity remains untouched</li>
                            <li>Surplus funds work more efficiently</li>
                            <li>Money remains available when needed — without lock-ins or exit restrictions</li>
                            <li>Costs are kept efficient to avoid unnecessary leakages</li>
                        </ul>
                        <p className="text-lg text-[#0B1B2F] font-medium">The intent is to achieve effective returns on surplus capital, without compromising business continuity.</p>
                    </div>

                    {/* Step 4 */}
                    <div className="work-section">
                        <h3 className="text-2xl md:text-3xl  text-[#0B1B2F] mb-6">Ongoing Guidance as Business Needs Change</h3>
                        <p className="text-lg text-[#594D46] font-light mb-6">Businesses evolve, and liquidity needs change over time. We:</p>
                        <ul className="space-y-3 text-lg text-[#594D46] font-light list-disc pl-5 mb-6">
                            <li>Review liquidity structures periodically</li>
                            <li>Adjust as cash flows, commitments, or plans change</li>
                            <li>Provide clarity during uncertain business environments</li>
                        </ul>
                        <p className="text-lg text-[#0B1B2F] font-medium">This ensures liquidity decisions continue to support the business, rather than distract from it.</p>
                    </div>

                </div>
            </section>

            {/* 4. Natural Next Step */}
            <section ref={section4Ref} className="w-full bg-[#FAF9F6] py-32">
                <div className="max-w-4xl mx-auto px-6 md:px-12 text-left">
                    <div className="text-sm font-semibold tracking-widest text-[#0B1B2F] uppercase mb-8 opacity-60">
                        NATURAL NEXT STEP
                    </div>

                    <h2 className="text-3xl md:text-4xl  text-[#0B1B2F] mb-12 leading-tight opacity-0 translate-y-4 lm-next-step">
                        Let’s review how your surplus capital is currently structured.
                    </h2>

                    <div className="opacity-0 translate-y-4 lm-next-step">
                        <a href="/contact" className="inline-block bg-[#0B1B2F] text-white text-lg px-8 py-4 rounded-sm hover:bg-[#152E4D] transition-colors duration-300">
                            Schedule a Conversation
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
};
