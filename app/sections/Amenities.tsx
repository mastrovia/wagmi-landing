'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, animate, AnimationPlaybackControls } from 'framer-motion';
import { MdArrowOutward } from 'react-icons/md';

type Amenity = {
    id: number;
    title: string;
    description: string;
    image: string;
};

const amenities: Amenity[] = [
    {
        id: 1,
        title: 'High Speed Internet',
        description:
            'Fast, reliable connectivity built for video calls, cloud work, and uninterrupted productivity.',
        image: '/img/amenities/01.png',
    },
    {
        id: 2,
        title: 'Printing Services',
        description:
            'Convenient access to essential printing and scanning services to support your everyday work needs.',
        image: '/img/amenities/02.png',
    },
    {
        id: 3,
        title: 'Power Backup',
        description:
            'Uninterrupted power supply to ensure continuous productivity throughout the workday.',
        image: '/img/amenities/03.png',
    },
    {
        id: 4,
        title: 'Secure Parking',
        description:
            'Safe, monitored parking facilities to ensure peace of mind throughout your workday.',
        image: '/img/amenities/04.png',
    },
    {
        id: 5,
        title: 'Refreshments',
        description: 'Light refreshments available to keep you energized.',
        image: '/img/amenities/05.png',
    },
    {
        id: 6,
        title: 'Security Facilities',
        description:
            'Comprehensive security measures in place to ensure a safe and secure working environment.',
        image: '/img/amenities/06.png',
    },
];

const Amenities = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [isInteracting, setIsInteracting] = useState(false);
    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState(0);
    const resumeTimerRef = useRef<NodeJS.Timeout>(null);

    // Triple amenities for seamless loop in both directions
    const infiniteAmenities = [...amenities, ...amenities, ...amenities];

    useEffect(() => {
        if (containerRef.current) {
            const width = containerRef.current.scrollWidth / 3;
            setContentWidth(width);
            x.set(-width); // Start in the middle set
        }
    }, [x]);

    useEffect(() => {
        if (contentWidth === 0 || isPaused || isInteracting) return;

        const speed = 40; // Higher is slower

        // Calculate target based on current position to avoid jumps when resuming
        const currentX = x.get();
        const targetX = currentX - contentWidth;

        const controls: AnimationPlaybackControls = animate(x, targetX, {
            ease: 'linear',
            duration: speed,
            repeat: Infinity,
            repeatType: 'loop',
            onUpdate: (latest) => {
                // Handle complex wrapping inside the animation loop for extra smoothness
                if (latest <= -2 * contentWidth) {
                    x.set(latest + contentWidth);
                }
            },
        });

        return () => controls.stop();
    }, [contentWidth, isPaused, isInteracting, x]);

    // Handle manual wrapping (for drag/scroll)
    useEffect(() => {
        const unsubscribe = x.on('change', (latest) => {
            if (contentWidth === 0) return;
            if (latest <= -2 * contentWidth) {
                x.set(latest + contentWidth);
            } else if (latest >= 0) {
                x.set(latest - contentWidth);
            }
        });
        return () => unsubscribe();
    }, [contentWidth, x]);

    // Resume logic after interaction
    const startResumeTimer = () => {
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = setTimeout(() => {
            setIsInteracting(false);
        }, 2000); // Resume after 2 seconds of no interaction
    };

    // Wheel support
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
            if (e.shiftKey || isHorizontal) {
                e.preventDefault();
                setIsInteracting(true);
                const delta = e.shiftKey ? e.deltaY : e.deltaX;
                x.set(x.get() - delta);
                startResumeTimer();
            }
        };

        container.addEventListener('wheel', handleWheel, { passive: false });
        return () => container.removeEventListener('wheel', handleWheel);
    }, [x]);

    return (
        <section id="amenities" className="py-6 md:py-16 overflow-hidden">
            <motion.div
                className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-5xl font-extrabold text-start text-dark mb-6 uppercase tracking-tight">
                    EVERYTHING YOU NEED TO SUCCEED
                </h2>
                <p className="text-gray-600 font-medium max-w-2xl uppercase tracking-wide leading-relaxed">
                    OUR COWORKING SPACE IN KERALA COMES EQUIPPED WITH WORLD-CLASS AMENITIES TO
                    SUPPORT YOUR PRODUCTIVITY AND GROWTH.
                </p>
            </motion.div>

            {/* Marquee Container */}
            <div
                className="relative overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    ref={containerRef}
                    className="flex gap-6 md:gap-8 w-max pb-8 pl-6 lg:pl-24"
                    style={{ x }}
                    drag="x"
                    onDragStart={() => setIsInteracting(true)}
                    onDragEnd={() => startResumeTimer()}
                    dragElastic={0.05}
                    dragConstraints={{ left: -10000, right: 10000 }} // Effectively infinite constraints handled by wrap logic
                >
                    {infiniteAmenities.map((item, index) => (
                        <motion.div
                            key={`${item.id}-${index}`}
                            className={`relative min-w-[300px] md:min-w-[350px] h-[450px] md:h-[500px] overflow-hidden group cursor-pointer ${
                                (index % amenities.length) % 2 !== 0 ? 'md:mt-12' : ''
                            }`}
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                        >
                            {/* Background Image */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end">
                                <motion.div
                                    variants={{
                                        rest: { y: 0 },
                                        hover: { y: -10 },
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-white text-xl font-bold">
                                            {item.title}
                                        </h3>
                                        <MdArrowOutward className="text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0" />
                                    </div>

                                    <motion.div
                                        variants={{
                                            rest: { height: 0, opacity: 0, marginTop: 0 },
                                            hover: { height: 'auto', opacity: 1, marginTop: 16 },
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-gray-200 text-sm md:text-base">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Amenities;
