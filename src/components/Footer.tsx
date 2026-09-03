import React from 'react';
import logo from '../assets/logo.png';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-plk-navy text-white pt-20 pb-10 font-sans font-light">
            <div className="max-w-7xl mx-auto px-4 md:px-12">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-20">

                    {/* Part A: Company Info */}
                    <div className="space-y-6">
                        <img src={logo} alt="PLK Capital" className="h-10 md:h-12 object-contain mb-2" />
                        <div className="text-gray-400 text-sm font-sans font-light space-y-2 leading-relaxed">
                            <p><strong className="text-plk-white font-montserrat font-medium">Company Name:</strong> PLK CAPITAL ADVISORS PRIVATE LIMITED</p>
                            <p><strong className="text-plk-white font-montserrat font-medium">CIN:</strong> U66190KA2025PTC210648</p>
                            <p><strong className="text-plk-white font-montserrat font-medium">SEBI RIA:</strong> -</p>
                            <p><strong className="text-plk-white font-montserrat font-medium">SEBI RA:</strong> -</p>
                        </div>
                    </div>

                    {/* Center: Links */}
                    <div className="md:px-4 lg:mx-auto">
                        <h4 className="text-lg mb-6 text-plk-white font-montserrat font-medium">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400 font-sans font-light text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Regulatory Disclosure</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Complaint Table</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Investor Charter</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Part B: Contact Info */}
                    <div className="space-y-6 lg:justify-self-end">
                        <h4 className="text-lg mb-6 text-plk-white font-montserrat font-medium">Contact Us</h4>
                        <div className="text-gray-400 text-sm font-sans font-light space-y-3 leading-relaxed">
                            <p>
                                <strong className="text-plk-white font-montserrat font-medium block mb-1">Email:</strong>
                                Plkcapital14@gmail.com
                            </p>
                            <p>
                                <strong className="text-plk-white font-montserrat font-medium block mb-1">Number:</strong>
                                +91-9620050061
                            </p>
                            <p>
                                <strong className="text-plk-white font-montserrat font-medium block mb-1">Address:</strong>
                                #51, Pushpa Vatika, 1st Floor, C Flat,<br />
                                Vanivilas Road, Basavanagudi,<br />
                                Bangalore- 560004, Karnataka
                            </p>
                            <div className="pt-2 space-y-2">
                                <p>
                                    <strong className="text-plk-white font-montserrat font-medium">Grievance Cell:</strong>{" "}
                                    <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                                        https://scores.sebi.gov.in/
                                    </a>
                                </p>
                                <p>
                                    <strong className="text-plk-white font-montserrat font-medium">SMARTODR:</strong>{" "}
                                    <a href="https://smartodr.in/login" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                                        https://smartodr.in/login
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Regulatory / Compliance Section */}
                <div className="border-t border-white/10 pt-8 mb-8 text-gray-400 font-sans font-light leading-relaxed space-y-4 text-[13px] md:text-sm">
                    <p>
                        <strong className="text-plk-white font-montserrat font-medium">Registered Office:</strong> PLK Capital Advisors Private Limited, #51, Pushpa Vatika, 1st Floor, C Flat, Vanivilas Road, Basavanagudi, Bangalore – 560004, Karnataka. Tel: +91-9620050061. CIN: U66190KA2025PTC210648. Type of Registration: Non-Individual Investment Adviser. SEBI RIA No.: [Registration in progress]. SEBI RA No.: [Registration in progress]. Principal Officer: Mehul Jain. Compliance Officer: Sharada Devi. Compliance Contact: <a href="mailto:plkcapital14@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">plkcapital14@gmail.com</a>. For SEBI office details: <a href="https://www.sebi.gov.in/contact-us.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors font-montserrat font-medium">Complete list of SEBI offices</a>
                    </p>
                    <p>
                        <strong className="text-plk-white font-montserrat font-medium">Disclaimer:</strong> Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, enlistment with IAASB and certification from NISM in no way guarantee performance of the IA or provide any assurance of returns to investors.
                    </p>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-sans font-light">
                    <div className="mb-4 md:mb-0">
                        Copyright @2026 PLK Capital
                    </div>
                    <div className="flex gap-8">
                        {/* Re-using links from Center column if redundancy is needed, or keeping standard bottom links */}
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Security</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};
