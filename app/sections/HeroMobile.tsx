'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroMobile = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    // Logo animation: starts scaled up and translated up, then moves to normal position
    const logoScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const logoY = useTransform(scrollYProgress, [0, 1], ['-60vh', '3vh']);

    return (
        <div ref={containerRef} className="md:hidden">
            {/* Full-screen Hero Image */}
            <div className="relative w-full h-[100dvh]">
                <Image
                    src="/img/hero-mobile/hero.webp"
                    alt="Wagmi Workspace"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Logo Bar */}
            <div className="w-full h-[90px] flex items-center justify-center bg-primary px-8 sticky top-0 z-50">
                <motion.div
                    style={{
                        scale: logoScale,
                        y: logoY,
                    }}
                    className="will-change-transform"
                >
                    <Image
                        src="/logo/logo-white.svg"
                        alt="Wagmi Logo"
                        width={120}
                        height={40}
                        className="h-10 w-auto"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default HeroMobile;
