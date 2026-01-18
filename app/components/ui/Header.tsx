'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'HOME', href: '#home' },
        { name: 'OUR SPACES', href: '#spaces' },
        { name: 'AMENITIES', href: '#amenities' },
        { name: 'LOCATION', href: '#location' },
        { name: 'CONTACT', href: '#contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMobileMenuOpen(false);
    };

    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1] as const,
                when: 'afterChildren' as const,
            },
        },
        open: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1] as const,
                when: 'beforeChildren' as const,
                staggerChildren: 0.05,
            },
        },
    };

    const linkVariants = {
        closed: {
            opacity: 0,
            x: -20,
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: [0, 0, 0.2, 1] as const,
            },
        },
    };

    return (
        <header className="w-full bg-[#F3F4FB] py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Link href="/">
                    <Image
                        src="/logo/logo.svg"
                        alt="Wagmi Workspace"
                        width={120}
                        height={40}
                        priority
                        className="h-10 w-auto"
                    />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-gray-800 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors cursor-pointer"
                    >
                        {link.name}
                    </a>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-gray-800 focus:outline-none p-2"
                    aria-label="Toggle menu"
                >
                    <motion.div animate={isMobileMenuOpen ? 'open' : 'closed'}>
                        {isMobileMenuOpen ? (
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </motion.svg>
                        ) : (
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </motion.svg>
                        )}
                    </motion.div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="absolute top-full left-0 w-full bg-[#F3F4FB] shadow-lg md:hidden flex flex-col items-center py-4 space-y-2 border-t border-gray-200 overflow-hidden"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        {navLinks.map((link) => (
                            <motion.div key={link.name} variants={linkVariants} className="w-full">
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-gray-800 hover:text-blue-600 hover:bg-blue-50 font-semibold text-sm tracking-wide transition-colors w-full text-center py-3 block cursor-pointer"
                                >
                                    {link.name}
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
