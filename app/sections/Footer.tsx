import React from 'react';
import Image from 'next/image';
import { BiMap, BiPhone, BiEnvelope } from 'react-icons/bi';

const Footer = () => {
    return (
        <footer className="bg-[#111827] text-white pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
                {/* Top Section: Logo & Columns */}
                <div className="flex flex-col mb-16">
                    {/* Logo */}
                    <div className="mb-12">
                        <div className="relative w-32 h-10">
                            <Image
                                src="/logo/logo.svg"
                                alt="Wagmi Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {/* Column 1: Description */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl font-bold text-white">Wagmi Workspace</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                                A modern coworking space in Kerala offering flexible office
                                solutions for professionals, startups, and teams.
                            </p>
                        </div>

                        {/* Column 2: Services */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl font-bold text-white">Services</h3>
                            <ul className="flex flex-col gap-4 text-gray-400 text-sm font-medium">
                                <li>
                                    <a href="#" className="hover:text-primary transition-colors">
                                        HotDesk
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary transition-colors">
                                        Dedicated Desk
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary transition-colors">
                                        Private Cabin
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary transition-colors">
                                        Virtual Office
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Contact */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl font-bold text-white">Contact</h3>
                            <ul className="flex flex-col gap-6 text-gray-400 text-sm font-medium">
                                <li className="flex items-start gap-3">
                                    <BiMap className="text-xl shrink-0 mt-0.5" />
                                    <span>
                                        Business District,
                                        <br />
                                        Kochi, Kerala 682001
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <BiPhone className="text-xl shrink-0" />
                                    <span>+91 81299 88389</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <BiEnvelope className="text-xl shrink-0" />
                                    <span>admin@wagmiworkspace.com</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Social */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl font-bold text-white">Social</h3>
                            <ul className="flex flex-col gap-4 text-gray-400 text-sm font-medium">
                                <li>
                                    <a href="#" className="hover:text-primary transition-colors">
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary transition-colors">
                                        Linkedin
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-primary transition-colors">
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-800 mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm font-medium mb-12">
                    <p>© 2025 Wagmi Workspace. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="text-center text-gray-600 text-xs leading-relaxed max-w-4xl mx-auto">
                    <p>
                        Wagmi Workspace is a modern coworking space in Kerala offering flexible
                        desks, private cabins, and meeting rooms for professionals. Located in
                        Kochi, we provide high-speed internet, 24/7 access, and professional
                        amenities for startups, freelancers, and remote teams.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
