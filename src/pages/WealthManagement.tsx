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
            const line1Words = el.querySelectorAll('#wm-s2-line1 .split-word');
            const line2Words = el.querySelectorAll('#wm-s2-line2 .split-word');
            const line3Words = el.querySelectorAll('#wm-s2-line3 .split-word');

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
                        Wealth Management for Individuals & Families
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed">
                        Helping your money stay aligned with your life — as priorities change and time moves on.
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
                            id="wm-s2-line1"
                            className="text-2xl md:text-3xl text-[#0B1B2F] leading-relaxed block"
                            text="Money decisions are rarely just about numbers."
                        />
                        <SplitText
                            id="wm-s2-line2"
                            className="text-xl md:text-2xl font-light text-[#594D46] leading-relaxed block"
                            text="They are shaped by responsibilities, future commitments, cash flows, and how comfortable you are with uncertainty."
                        />
                        <SplitText
                            id="wm-s2-line3"
                            className="text-xl md:text-2xl font-light text-[#594D46] leading-relaxed block"
                            text="Our role is to help bring structure to these decisions so your wealth supports your life, rather than becoming a source of stress or constant second-guessing, allowing you to focus on other important things."
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
                        <h3 className="text-2xl md:text-3xl  text-[#0B1B2F] mb-6">We Begin by Understanding You</h3>
                        <p className="text-lg text-[#594D46] font-light mb-6">Every engagement starts with a conversation. We spend time understanding:</p>
                        <ul className="space-y-3 text-lg text-[#594D46] font-light list-disc pl-5 mb-6">
                            <li>Your goals and future objectives</li>
                            <li>Your cash-flow situation and commitments</li>
                            <li>Past experiences that shape how you think about money</li>
                        </ul>
                        <p className="text-lg text-[#0B1B2F] font-medium">This helps us form a clear picture before discussing allocations or portfolios.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="work-section">
                        <h3 className="text-2xl md:text-3xl text-[#0B1B2F] mb-6">Risk Is Discussed and Agreed Upon</h3>
                        <p className="text-lg text-[#594D46] font-light mb-6">Risk is personal, and it shows up differently for everyone.</p>
                        <p className="text-lg text-[#594D46] font-light mb-6">We discuss your comfort with risk how much fluctuation feels acceptable, what would cause discomfort, and how you prefer your portfolio to behave during uncertain phases.</p>
                        <p className="text-lg text-[#0B1B2F] font-medium">Based on these conversations, we agree on a risk level that feels right for you.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="work-section">
                        <h3 className="text-2xl md:text-3xl text-[#0B1B2F] mb-6">Portfolios Are Built Around That Risk Level</h3>
                        <p className="text-lg text-[#594D46] font-light mb-6">Once risk comfort is clear, we construct the portfolio accordingly. This helps ensure that:</p>
                        <ul className="space-y-3 text-lg text-[#594D46] font-light list-disc pl-5 mb-6">
                            <li>The portfolio behaves in line with your expectations</li>
                            <li>Market movements do not come as a surprise</li>
                            <li>Decisions remain steady during uncertain periods</li>
                            <li>Costs are kept efficient to avoid unnecessary leakages over time</li>
                        </ul>
                        <p className="text-lg text-[#0B1B2F] font-medium">Being clear about risk and costs upfront helps avoid uncomfortable surprises later.</p>
                    </div>

                    {/* Step 4 */}
                    <div className="work-section">
                        <h3 className="text-2xl md:text-3xl text-[#0B1B2F] mb-6">Asset Allocation Reflects Your Objectives</h3>
                        <p className="text-lg text-[#594D46] font-light mb-6">Asset allocation is built around:</p>
                        <ul className="space-y-3 text-lg text-[#594D46] font-light list-disc pl-5 mb-6">
                            <li>Your time horizon</li>
                            <li>Growth versus stability needs</li>
                            <li>Future commitments</li>
                        </ul>
                        <p className="text-lg text-[#0B1B2F] font-medium">It forms the foundation of the portfolio and remains aligned with what you are trying to achieve over the long term.</p>
                    </div>

                </div>
            </section>

            {/* 4. Natural Next Step */}
            <section ref={section4Ref} className="w-full bg-[#FAF9F6] py-32">
                <div className="max-w-4xl mx-auto px-6 md:px-12 text-left">
                    <div className="text-sm font-semibold tracking-widest text-[#0B1B2F] uppercase mb-8 opacity-60">
                        NATURAL NEXT STEP
                    </div>

                    <h2 className="text-3xl md:text-4xl text-[#0B1B2F] mb-12 leading-tight opacity-0 translate-y-4 wm-next-step">
                        Let's review your current portfolio and see how it fits into your life today.
                    </h2>

                    <div className="opacity-0 translate-y-4 wm-next-step">
                        <a href="/contact" className="inline-block bg-[#0B1B2F] text-white text-lg px-8 py-4 rounded-sm hover:bg-[#152E4D] transition-colors duration-300">
                            Schedule a Conversation
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
};
