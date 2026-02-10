import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLoadReveal, useHeaderScroll } from '../hooks/useGsap';
import logo from '../assets/logo2.png';

import { Menu, MenuItem, HoveredLink } from '../ui/navbar-menu';

export const Header: React.FC = () => {
    const location = useLocation();

    const [active, setActive] = useState<string | null>(null);
    const isLightPage = location.pathname === '/about' ||
        location.pathname === '/wealth-management' ||
        location.pathname === '/liquidity-management' ||
        location.pathname === '/contact' ||
        location.pathname === '/';
    const headerRef = useRef<HTMLElement>(null);

    useLoadReveal(headerRef, { y: -20, duration: 1, delay: 0.2 });
    useHeaderScroll(headerRef);

    // Styles based on page context
    const navContainerClass = isLightPage
        ? "border border-[#0B1B2F]/20 bg-gradient-to-r from-[#ffffff] to-[#e5e8ec] backdrop-blur-sm"
        : "border border-white/20 bg-plk-navy/50 backdrop-blur-sm";

    const textColor = isLightPage ? "text-[#0B1B2F]" : "text-plk-white";
    const logoSrc = logo;

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 w-full z-50 opacity-0 transition-opacity ${navContainerClass}`}
        >
            <div className="flex justify-start md:justify-between items-center w-full px-4 md:px-12 py-8 md:py-4 gap-2 md:gap-0">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <Link to="/">
                        <img src={logoSrc} alt="PLK Capital" className="h-5 md:h-10 w-auto object-contain" />
                    </Link>
                </div>

                {/* Center: Nav */}
                <div className="flex items-center md:mr-16">
                    <Menu setActive={setActive} className="bg-transparent border-none shadow-none backdrop-blur-none p-0">
                        <MenuItem setActive={setActive} active={active} item="About Us" href="/about" className={`text-xs md:text-xl font-medium font-montserrat relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-plk-lima after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 ${textColor}`}>
                            <div className="flex flex-col md:flex-row gap-6 md:gap-12 p-4 md:p-6 w-[85vw] md:w-[600px] max-h-[60vh] overflow-y-auto md:overflow-visible text-start">
                                {/* Left Content */}
                                <div className="flex-1 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-6">
                                    <div className="text-xs md:text-sm font-semibold tracking-widest text-plk-lima uppercase mb-1 md:mb-2 text-left">About Us</div>
                                    <p className="text-base md:text-lg text-white/80 leading-relaxed ">
                                        We believe wealth management should always be independent and in the client’s best interest.
                                    </p>
                                </div>
                                {/* Right Links */}
                                <div className="flex-1 flex flex-col space-y-3 md:space-y-4 justify-center">
                                    <div className="text-xs md:text-sm font-semibold tracking-widest text-plk-lima uppercase mb-1 md:mb-2 text-left">Sections</div>
                                    <HoveredLink href="/about#belief-step-1" onClick={() => setActive(null)}>Our Belief</HoveredLink>
                                    <HoveredLink href="/about#fee-anchor" onClick={() => setActive(null)}>Why We Are Fee-Only</HoveredLink>
                                    <HoveredLink href="/about#how-we-think" onClick={() => setActive(null)}>How We Think About Money</HoveredLink>
                                    <HoveredLink href="/about#who-we-work-with" onClick={() => setActive(null)}>Who We Work With</HoveredLink>
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Solutions" className={`text-xs md:text-xl font-medium font-montserrat relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-plk-lima after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 ${textColor}`}>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-4 p-4 md:p-6 w-[85vw] md:w-[650px] items-stretch max-h-[60vh] overflow-y-auto md:overflow-visible text-start">
                                {/* Left: Wealth Management */}
                                <div className="flex-1 rounded-lg hover:bg-white/5 transition-colors p-3 md:p-4 group">
                                    <Link to="/wealth-management" onClick={() => setActive(null)} className="block h-full">
                                        <div className="flex flex-col h-full justify-between space-y-2">
                                            <div>
                                                <h4 className="text-lg md:text-xl font-montserrat text-white group-hover:text-plk-lima transition-colors mb-2">Wealth Management</h4>
                                                <p className="text-xs md:text-sm text-white leading-relaxed">For Individuals & Families</p>
                                            </div>
                                            <span className="text-plk-lima text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity">Explore &rarr;</span>
                                        </div>
                                    </Link>
                                </div>

                                {/* Divider */}
                                <div className="h-[1px] w-full md:w-[1px] md:h-auto bg-white/10 my-2 md:my-0"></div>

                                {/* Right: Liquidity Management */}
                                <div className="flex-1 rounded-lg hover:bg-white/5 transition-colors p-3 md:p-4 group">
                                    <Link to="/liquidity-management" onClick={() => setActive(null)} className="block h-full">
                                        <div className="flex flex-col h-full justify-between space-y-2">
                                            <div>
                                                <h4 className="text-lg md:text-xl font-montserrat text-white group-hover:text-plk-lima transition-colors mb-2">Liquidity Management</h4>
                                                <p className="text-xs md:text-sm text-white leading-relaxed">For Businesses & Corporate</p>
                                            </div>
                                            <span className="text-plk-lima text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity">Explore &rarr;</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </MenuItem>
                        <Link to="/contact" onMouseEnter={() => setActive(null)} className={`text-xs md:text-xl font-medium font-montserrat relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-plk-lima after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300 ${textColor}`}>Lets Chat</Link>
                    </Menu>
                </div>
            </div>
        </header>
    );
};
