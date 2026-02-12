import { AboutHero } from '../components/AboutHero';
import { SplitText } from '../components/SplitText';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getLenis } from '../hooks/useLenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImg from '../assets/aboutUs1.png';
import { WhatWeDo } from '../components/WhatWeDo';
import { HowWeWork } from '../components/HowWeWork';
import { useReveal, useStagger } from '../hooks/useGsap';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const section1Ref = useRef<HTMLElement>(null);
  const startRef = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);
  const section4Ref = useRef<HTMLElement>(null);
  const chatRef = useRef<HTMLElement>(null);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // slight delay to ensure content is rendered/measured
      setTimeout(() => {
        const lenis = getLenis();
        const target = document.querySelector(location.hash) as HTMLElement;
        if (target && lenis) {
          ScrollTrigger.refresh();
          lenis.scrollTo(target, {
            offset: 0,
            duration: 1.5,
            lock: true,
            force: true
          });
        } else if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  useReveal(section1Ref, { threshold: 0.1 });
  useStagger(section1Ref, ".md\\:w-1\\/3, .md\\:w-2\\/3 > *", { y: 30, stagger: 0.2, delay: 0.2 });

  // Simple reveal for Chat section
  useReveal(chatRef, { threshold: 0.2 });
  useStagger(chatRef, ".reveal-item", { y: 20, stagger: 0.1, delay: 0.2 });

  // Animation for "How We Think"
  useEffect(() => {
    const el = section4Ref.current;
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
      const introWords = el.querySelectorAll('#think-intro .split-word');
      const subheader = el.querySelector('#think-subheader');
      const items = el.querySelectorAll('.think-item');

      const animConfig = {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.03
      };

      // Sequence
      tl.to(introWords, { ...animConfig, duration: 1.5, stagger: 0.05 })
        .to(subheader, { opacity: 1, duration: 1 }, ">0.3")
        .to(items, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power2.out" }, ">0.2");

    }, section4Ref);

    return () => ctx.revert();
  }, []);

  // Animation for "Our Belief" - Refactored to Independent Triggers
  useEffect(() => {
    const el = startRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Step 1
      gsap.to(el.querySelectorAll('#belief-step-1 .split-word'), {
        opacity: 1, y: 0, filter: "blur(0px)",
        duration: 1.5, stagger: 0.08, ease: "power3.out",
        scrollTrigger: {
          trigger: '#belief-step-1',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Step 2
      gsap.to(el.querySelectorAll('#belief-step-2 .split-word'), {
        opacity: 1, y: 0, filter: "blur(0px)",
        duration: 1, stagger: 0.03, ease: "power3.out",
        scrollTrigger: {
          trigger: '#belief-step-2',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Step 3 (Refactored to "What we offer" card)
      // Header
      gsap.to(el.querySelectorAll('#belief-offer-header .split-word'), {
        opacity: 1, y: 0, filter: "blur(0px)",
        duration: 1.2, stagger: 0.05, ease: "power3.out",
        scrollTrigger: {
          trigger: '#belief-offer-header',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Items
      gsap.to(el.querySelectorAll('.belief-offer-item'), {
        opacity: 1, x: 0,
        duration: 0.8, stagger: 0.1, ease: "power2.out",
        scrollTrigger: {
          trigger: '.belief-offer-item',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Step 4
      gsap.to(el.querySelectorAll('#belief-step-4 .split-word'), {
        opacity: 1, y: 0, filter: "blur(0px)",
        duration: 1, stagger: 0.03, ease: "power3.out",
        scrollTrigger: {
          trigger: '#belief-step-4',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

    }, startRef);

    return () => ctx.revert();
  }, []);

  // Animation for "About Quote"
  useEffect(() => {
    const el = section1Ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const animConfig = {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.5,
        stagger: 0.08,
        ease: "power3.out"
      };

      // Line 1
      gsap.to(el.querySelectorAll('#about-quote-1 .split-word'), {
        ...animConfig,
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
          toggleActions: "play none none reverse"
        }
      });

      // Line 2
      gsap.to(el.querySelectorAll('#about-quote-2 .split-word'), {
        ...animConfig,
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
          toggleActions: "play none none reverse"
        }
      });

    }, section1Ref);

    return () => ctx.revert();
  }, []);

  // Animation for "Fee Only" - Refactored to Independent Triggers
  useEffect(() => {
    const el = section3Ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const animConfig = {
        opacity: 1, y: 0, filter: "blur(0px)",
        duration: 1, ease: "power3.out", stagger: 0.03
      };

      // Anchor
      gsap.to(el.querySelectorAll('#fee-anchor .split-word'), {
        ...animConfig, duration: 1.5, stagger: 0.05,
        scrollTrigger: {
          trigger: '#fee-anchor',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Body
      gsap.to(el.querySelectorAll('#fee-body .split-word'), {
        ...animConfig, duration: 1.2,
        scrollTrigger: {
          trigger: '#fee-body',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Statement
      gsap.to(el.querySelectorAll('#fee-statement .split-word'), {
        ...animConfig, duration: 1.2,
        scrollTrigger: {
          trigger: '#fee-statement',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Practice Header
      gsap.to(el.querySelector('#fee-practice-header'), {
        opacity: 1, y: 0, duration: 1,
        scrollTrigger: {
          trigger: '#fee-practice-header',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Practice Items
      gsap.to(el.querySelectorAll('.fee-practice-item'), {
        opacity: 1, x: 0, duration: 0.8, stagger: 0.1,
        scrollTrigger: {
          trigger: '.fee-practice-item',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Last Item
      gsap.to(el.querySelectorAll('#fee-last-item .split-word'), {
        ...animConfig, duration: 1.2,
        scrollTrigger: {
          trigger: '#fee-last-item',
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });

    }, section3Ref);

    return () => ctx.revert();
  }, []);

  // Animation for "Let's Chat" Header
  useEffect(() => {
    const el = chatRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el.querySelectorAll('#chat-header .split-word'), {
        opacity: 1, y: 0, filter: "blur(0px)",
        duration: 1.5, stagger: 0.05, ease: "power3.out",
        scrollTrigger: {
          trigger: '#chat-header',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    }, chatRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="flex-grow bg-plk-white text-[#0B1B2F] overflow-hidden">

      <AboutHero />

      <div className="pt-20"></div> {/* Spacer for visual separation */}

      {/* Section 1: Profile & Quote */}
      <section ref={section1Ref} className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-24 md:mb-32 px-6 md:px-12 opacity-0">
        {/* Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="relative group max-w-[280px] md:max-w-none">
            <img src={profileImg} alt="Mehul Jain" className="w-full rounded-lg shadow-sm relative z-10" />
            <div className="absolute -inset-2 border border-[#0B1B2F]/5 rounded-lg -z-0 translate-x-1 translate-y-1"></div>
          </div>
        </div>

        {/* Quote */}
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start space-y-8 relative">

          {/* Decorative Quotes using SplitText */}
          <div className="flex flex-col space-y-8 md:space-y-12">
            <SplitText
              id="about-quote-1"
              className="text-xl md:text-4xl leading-relaxed text-plk-navy font-sans font-light text-center md:text-left"
              text="Clients trust us with decisions that affect their families, their businesses, and their future."
              style={{ lineHeight: 1.6 }}
              prefix={
                <svg viewBox="0 0 290 290" className="inline-block mr-2 text-plk-lima w-6 h-6 md:w-8 md:h-8 align-top -translate-y-2">
                  <path d="M22.12 145v97.65h97.65V145H70.95c0-26.92 21.9-48.82 48.82-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65zm245.76-48.82V47.35c-53.93 0-97.65 43.72-97.65 97.65v97.65h97.65V145h-48.82c-.01-26.92 21.89-48.82 48.82-48.82z" fill="currentColor" />
                </svg>
              }
            />
            <SplitText
              id="about-quote-2"
              className="text-xl md:text-4xl leading-relaxed text-plk-navy font-sans font-light text-center md:text-left"
              text="Our responsibility is to act in their best interest clearly, independently, and without conflict."
              style={{ lineHeight: 1.6 }}
              suffix={
                <svg viewBox="0 0 290 290" className="inline-block ml-2 text-plk-lima w-6 h-6 md:w-8 md:h-8 align-top translate-y-2">
                  <path d="M267.88 145V47.35h-97.65V145h48.82c0 26.92-21.9 48.82-48.82 48.82v48.82c53.93.01 97.65-43.71 97.65-97.64zM22.12 193.82v48.82c53.93 0 97.65-43.72 97.65-97.65V47.35H22.12V145h48.82c.01 26.92-21.89 48.82-48.82 48.82z" fill="currentColor" />
                </svg>
              }
            />
          </div>

          <div className="w-16 h-[1px] bg-[#0B1B2F]/20 md:hidden"></div>

          <div className="text-plk-navy font-montserrat font-medium tracking-wide text-sm md:text-base uppercase">
            <span className="font-semibold text-plk-navy">Mehul Jain, CFA — Founder</span>
          </div>
        </div>
      </section>

      {/* Section 2: Our Belief (Refactored) */}
      <section ref={startRef} className="w-full bg-plk-white py-32 mb-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-5xl flex flex-col items-start text-left space-y-6 md:space-y-8">

            {/* Main Anchor */}
            <div className="space-y-4">
              <div className="text-2xl font-semibold tracking-widest text-plk-navy/80 font-montserrat font-medium uppercase mb-6">Our Belief</div>
              <SplitText
                id="belief-step-1"
                className="text-2xl md:text-2xl lg:text-4xl text-plk-navy font-montserrat font-medium italic"
                text="We believe wealth management works best when advice is independent and aligned with the client."
                prefix={<span className="text-plk-navy font-montserrat">“</span>}
                suffix={<span className="text-plk-navy font-montserrat">”</span>}
                style={{ lineHeight: 1.6 }}
              />
            </div>

            {/* anchor*/}
            <div className="w-full">
              <SplitText
                id="belief-step-2"
                className="text-lg md:text-2xl text-plk-navy font-sans font-light leading-relaxed"
                text="Money decisions are deeply personal. They affect families, responsibilities, and peace of mind not just returns."
              />
            </div>

            {/* Three Principles - Refactored to match Fee-Only style */}
            <SplitText
              id="belief-offer-header"
              className="text-xl md:text-2xl font-medium text-plk-navy font-montserrat"
              text="What we offer:"
            />
            <div className="w-full bg-plk-white p-6 md:p-8 rounded-sm border-l-4 border-[#0B1B2F]/20 shadow-sm mt-6">
              <ul className="space-y-4">
                {[
                  "Clarity over complexity",
                  "Discipline over excitement",
                  "Guidance through all market conditions"
                ].map((item, i) => (
                  <li key={i} className="belief-offer-item flex items-center space-x-3 opacity-0 -translate-x-4">
                    <span className="w-1.5 h-1.5 bg-[#0B1B2F] rounded-full"></span>
                    <span className="text-2xl text-plk-navy font-sans font-light">{item}</span>
                  </li>
                ))}

                {/* Footer Item inside Card */}
                <li className="pt-4 mt-4 border-t border-[#0B1B2F]/10">
                  <SplitText
                    id="belief-step-4"
                    className="text-lg md:text-2xl text-plk-navy font-sans font-light leading-relaxed"
                    text="Our role is not to predict markets, but to help clients make better decisions consistently especially when it matters most."
                    prefix={<span className="text-plk-navy font-montserrat">“</span>}
                    suffix={<span className="text-plk-navy font-montserrat">”</span>}
                  />
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Fee-Only*/}
      <section ref={section3Ref} className="w-full  max-w-6xl mx-auto px-6 md:px-12 mb-32">
        <div className="max-w-5xl flex flex-col items-start text-left space-y-6 md:space-y-8">
          {/* Main anchor  */}
          <div className="text-2xl font-semibold tracking-widest text-plk-navy/80 font-montserrat font-medium uppercase mb-2 ">
            WHY WE ARE FEE-ONLY
          </div>

          {/* Anchor */}
          <SplitText
            id="fee-anchor"
            className="text-2xl md:text-2xl lg:text-4xl text-plk-navy font-montserrat font-medium italic leading-tight"
            text="We work as a fiduciary legally and ethically required to act in our clients’ best interest."
            prefix={<span className="text-plk-navy font-montserrat">“</span>}
            suffix={<span className="text-plk-navy font-montserrat">”</span>}
            style={{ lineHeight: 1.6 }}
          />

          {/* Body */}
          <SplitText
            id="fee-body"
            className="text-2xl md:text-2xl text-plk-navy font-sans font-light leading-relaxed"
            text="In simple terms, this means our advice is driven only by what is right for you not by commissions, targets, or product incentives."
          />

          {/* Statement */}
          <SplitText
            id="fee-statement"
            className="text-xl md:text-2xl font-medium text-plk-navy font-montserrat"
            text="We are paid only by our clients."
          />

          {/* Practice List */}
          <div className="w-full bg-plk-white p-6 md:p-8 rounded-sm border-l-4 border-[#0B1B2F]/20 shadow-sm mt-4">
            <h3 id="fee-practice-header" className="text-2xl text-plk-navy font-sans font-light mb-6 opacity-0 translate-y-4">
              What this means in practice
            </h3>
            <ul className="space-y-4">
              {[
                "No commissions",
                "No product incentives",
                "No hidden costs",
                "No pressure to buy or change investments"
              ].map((item, i) => (
                <li key={i} className="fee-practice-item flex items-center space-x-3 opacity-0 -translate-x-4">
                  <span className="w-1.5 h-1.5 bg-[#0B1B2F] rounded-full"></span>
                  <span className="text-2xl text-plk-navy font-sans font-light">{item}</span>
                </li>
              ))}

              {/* Last item as split text */}
              <li className="pt-4 mt-4 border-t border-[#0B1B2F]/10">
                <SplitText
                  id="fee-last-item"
                  className="text-2xl text-plk-navy font-sans font-light"
                  text="If we ever believe something is not right for you, we will say no even if it means we earn less."
                />
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Section 4: How We Think About Money */}
      <section id="how-we-think" ref={section4Ref} className="w-full bg-plk-white py-32 mb-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-5xl flex flex-col items-start text-left space-y-16">

            <div className="space-y-6">
              <div className="text-2xl font-semibold tracking-widest text-plk-navy/80 font-montserrat font-medium uppercase mb-2  ">
                HOW WE THINK ABOUT MONEY
              </div>

              <SplitText
                id="think-intro"
                className="text-2xl md:text-2xl lg:text-4xl text-plk-navy font-montserrat font-medium italic leading-tight"
                text="We believe long-term outcomes are shaped more by how decisions are made than by trying to predict what markets will do next."
                prefix={<span className="text-plk-navy font-montserrat">“</span>}
                suffix={<span className="text-plk-navy font-montserrat">”</span>}
                style={{ lineHeight: 1.6 }}
              />
            </div>

            <div className="space-y-12 w-full">
              <h3 id="think-subheader" className="text-2xl md:text-2xl text-plk-navy font-sans font-light opacity-0">
                Our approach is built on a few simple principles:
              </h3>

              <div className="grid gap-10 md:gap-12">
                {[
                  {
                    title: "Risk comes before returns.",
                    desc: "Protecting capital matters more than chasing the highest possible return."
                  },
                  {
                    title: "Asset allocation drives outcomes.",
                    desc: "Over long periods, the majority of results are driven by how assets are allocated and rebalanced—not by selecting the next best fund or stock."
                  },
                  {
                    title: "Costs, taxes, and behaviour matter.",
                    desc: "What investors keep after costs, taxes, and emotional decisions matters more than headline returns."
                  },
                  {
                    title: "Markets move in cycles, not straight lines.",
                    desc: "Volatility is not a problem to be avoided, but a reality to be managed with discipline."
                  },
                  {
                    title: "Good advice is ongoing.",
                    desc: "Wealth management is not a one-time decision. It requires regular review, thoughtful adjustments, and steady guidance over time."
                  }
                ].map((item, i) => (
                  <div key={i} className="think-item flex flex-col space-y-2 opacity-0 translate-y-4">
                    <h4 className="text-xl md:text-2xl text-plk-navy font-montserrat font-medium">{item.title}</h4>
                    <p className="text-2xl text-plk-navy font-sans font-light leading-relaxed max-w-2xl">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      <HowWeWork variant="light" />

      {/* Section 5: Let's Chat */}
      <section ref={chatRef} className="w-full bg-plk-white py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-left">
          <div className="text-2xl font-semibold tracking-widest text-plk-navy/80 font-montserrat font-medium uppercase mb-6">
            LET’S CHAT
          </div>

          <SplitText
            id="chat-header"
            className="text-2xl md:text-2xl lg:text-4xl text-plk-navy font-montserrat font-medium italic mb-8 leading-tight block"
            text="A conversation is often the best place to begin."
            style={{ lineHeight: 1.6 }}
          />

          <p className="text-2xl md:text-xl text-plk-navy font-sans font-light leading-relaxed mb-12 opacity-0 translate-y-4 reveal-item">
            We usually start by listening understanding your priorities, responsibilities, and what you’re looking to achieve.
            <br /><br />
            If it feels right, we take the next steps together.
          </p>

          <div className="mt-8 reveal-item">
            <a href="/contact" className="inline-block bg-plk-lima font-sans font-medium text-plk-navy text-base px-6 py-3 md:text-lg md:px-8 md:py-4 rounded-full hover:bg-[#152E4D] hover:text-white transition-colors duration-300">
              Schedule a Conversation
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};
