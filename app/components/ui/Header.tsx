'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'OUR SPACES', href: '#spaces' },
        { name: 'AMENITIES', href: '#amenities' },
        { name: 'LOCATION', href: '#location' },
        { name: 'CONTACT', href: '#contact' },
    ]

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
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-gray-800 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-gray-800 focus:outline-none p-2"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#F3F4FB] shadow-lg md:hidden flex flex-col items-center py-4 space-y-4 border-t border-gray-200">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-800 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors w-full text-center py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    )
}

export default Header