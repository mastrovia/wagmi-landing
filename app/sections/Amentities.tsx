'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
        image: 'https://placehold.co/600x800/png?text=Internet',
    },
    {
        id: 2,
        title: 'Power Backup',
        description: '24/7 power backup ensures your work never stops, even during outages.',
        image: 'https://placehold.co/600x800/png?text=Power',
    },
    {
        id: 3,
        title: 'Printing Services',
        description:
            'High-quality printing and scanning facilities available for all your documentation needs.',
        image: 'https://placehold.co/600x800/png?text=Print',
    },
    {
        id: 4,
        title: 'Secure Parking',
        description: 'Ample parking space with 24/7 security surveillance for your peace of mind.',
        image: 'https://placehold.co/600x800/png?text=Parking',
    },
    {
        id: 5,
        title: 'Cafeteria',
        description:
            'A well-stocked cafeteria serving fresh snacks and beverages to keep you fueled.',
        image: 'https://placehold.co/600x800/png?text=Cafe',
    },
    {
        id: 6,
        title: 'Relaxation Zone',
        description: 'Comfortable lounge areas to unwind, relax, and recharge during your breaks.',
        image: 'https://placehold.co/600x800/png?text=Relax',
    },
];

const Amenities = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

    useEffect(() => {
        const updateConstraints = () => {
            if (containerRef.current) {
                const scrollWidth = containerRef.current.scrollWidth;
                const clientWidth = containerRef.current.clientWidth;
                setDragConstraints({
                    left: -(scrollWidth - clientWidth),
                    right: 0,
                });
            }
        };

        updateConstraints();
        window.addEventListener('resize', updateConstraints);
        return () => window.removeEventListener('resize', updateConstraints);
    }, []);

    return (
        <section id="amenities" className="px-12 py-16 md:py-24 overflow-hidden">
            <motion.div
                className="max-w-[1440px] mb-12"
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

            {/* Scrollable Container with Drag */}
            <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={containerRef}>
                <motion.div
                    className="pl-6 lg:pl-16 pb-8 flex gap-6 md:gap-8 pr-6 lg:pr-16"
                    drag="x"
                    dragConstraints={dragConstraints}
                    dragElastic={0.1}
                    dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {amenities.map((item) => (
                        <motion.div
                            key={item.id}
                            className="relative min-w-[300px] md:min-w-[350px] h-[450px] md:h-[500px] rounded-lg overflow-hidden snap-start group cursor-pointer"
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
                                        <h3 className="text-white text-2xl font-bold">
                                            {item.title}
                                        </h3>
                                        <MdArrowOutward className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0" />
                                    </div>

                                    <motion.div
                                        variants={{
                                            rest: { height: 0, opacity: 0, marginTop: 0 },
                                            hover: { height: 'auto', opacity: 1, marginTop: 16 },
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scrollbar hide utility */}
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default Amenities;
