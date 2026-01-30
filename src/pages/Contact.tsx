import React, { useRef } from 'react';
import { useReveal, useStagger } from '../hooks/useGsap';
import contactHero from '../assets/contact.png'; // Using placeholder relative to typical setup

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useReveal(containerRef);
  useStagger(containerRef, ".contact-item", { delay: 0.2, y: 20 });

  return (
    <main className="flex-grow bg-white text-[#0B1B2F] pt-28 pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] w-full mb-24 overflow-hidden">
        <div className="absolute inset-0">
          {/* Placeholder for hero image - using a gray gradient/placeholder if specific image not available, or reusing one */}
          <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300">
            {/* Note: In real implementation, use the actual image provided */}
            <img src={contactHero} alt="Contact Hero" className="w-full h-full object-cover opacity-80" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-transparent"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-end">
          <h1 className="text-6xl md:text-8xl font-serif text-[#0B1B2F] drop-shadow-sm mr-12">
            Contact Us
          </h1>
        </div>
      </section>


      {/* Content Section */}
      <section ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-12 opacity-0">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">

          {/* Left Column: Info */}
          <div className="w-full md:w-5/12 space-y-12">
            <div className="space-y-6 contact-item">
              <h2 className="text-4xl md:text-5xl font-serif text-[#0B1B2F]">Let's talk with us</h2>
              <p className="text-[#594D46] font-light leading-relaxed max-w-md">
                Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly.
              </p>
            </div>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4 contact-item">
                <div className="mt-1 text-[#152E4D]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1 text-[#0B1B2F]">Address</h4>
                  <p className="text-[#594D46] font-light">
                    <span className="font-medium block mb-1">PLK CAPITAL ADVISORS PRIVATE LIMITED</span>
                    #51, Pushpa Vatika, 1st Floor, C Flat,<br />
                    Vanivilas Road, Basavanagudi,<br />
                    Bangalore- 560004, Karnataka
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex gap-4 contact-item">
                <div className="mt-1 text-[#152E4D]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1 text-[#0B1B2F]">Phone</h4>
                  <p className="text-[#594D46] font-light">+91-9620050061</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 contact-item">
                <div className="mt-1 text-[#152E4D]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1 text-[#0B1B2F]">Email</h4>
                  <p className="text-[#594D46] font-light">Plkcapital14@gmail.com</p>
                </div>
              </div>

              {/* CIN */}
              <div className="flex gap-4 contact-item">
                <div className="mt-1 text-[#152E4D]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1 text-[#0B1B2F]">CIN</h4>
                  <p className="text-[#594D46] font-light">U66190KA2025PTC210648</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full md:w-7/12">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 contact-item">
              <form ref={formRef} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <input type="text" placeholder="John" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#152E4D] focus:ring-1 focus:ring-[#152E4D] transition-colors placeholder:text-gray-400 font-light" />
                  </div>
                  <div className="space-y-2">
                    <input type="text" placeholder="Last Name*" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#152E4D] focus:ring-1 focus:ring-[#152E4D] transition-colors placeholder:text-gray-400 font-light" />
                  </div>
                </div>

                <div className="space-y-2">
                  <input type="email" placeholder="Email*" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#152E4D] focus:ring-1 focus:ring-[#152E4D] transition-colors placeholder:text-gray-400 font-light" />
                </div>

                <div className="space-y-2">
                  <input type="tel" placeholder="Phone Number*" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#152E4D] focus:ring-1 focus:ring-[#152E4D] transition-colors placeholder:text-gray-400 font-light" />
                </div>

                <div className="space-y-2">
                  <textarea rows={5} placeholder="Your message..." className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#152E4D] focus:ring-1 focus:ring-[#152E4D] transition-colors placeholder:text-gray-400 font-light resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-[#152E4D] text-white font-medium py-3 rounded-full hover:bg-[#0B1B2F] transition-colors duration-300 shadow-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};
