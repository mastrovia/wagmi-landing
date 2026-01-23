'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type Space = {
    id: number;
    title: string;
    description: string;
    image: string;
};

const spaces: Space[] = [
    {
        id: 1,
        title: 'DAILY PASS',
        description:
            'Flexible access to a productive co-working environment, perfect for a day of focused work.',
        image: '/img/stepper/01.png',
    },
    {
        id: 2,
        title: 'CO-WORKING DESK',
        description:
            'A shared workspace designed for collaboration, networking, and everyday productivity',
        image: '/img/stepper/02.png',
    },
    {
        id: 3,
        title: 'PRIVATE CABIN',
        description:
            'A dedicated, fully furnished private office for teams or individuals who need focus and privacy',
        image: '/img/stepper/03.png',
    },
    {
        id: 4,
        title: 'VIRTUAL OFFICE',
        description:
            'A professional business address and services without the need for a physical workspace.',
        image: '/img/stepper/04.png',
    },
    {
        id: 5,
        title: 'MEETING ROOMS',
        description:
            'Fully equipped meeting spaces ideal for client discussions, presentations, and team meetings',
        image: '/img/stepper/05.png',
    },
];

const OurSpaces = () => {
    const [activeId, setActiveId] = useState<number>(1);

    const activeSpace = spaces.find((s) => s.id === activeId) || spaces[0];

    return (
        <section id="spaces" className="bg-[#F3F4FB] py-16 md:py-24 overflow-hidden">
            <div className="max-container">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-start text-dark mb-12 md:mb-16 uppercase tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    OUR SPACES
                </motion.h2>

                {/* Mobile Layout - Buttons on top, Image below */}
                <div className="block md:hidden">
                    {/* Stepper Buttons */}
                    <div className="flex flex-col gap-2 mb-6">
                        {spaces.map((space) => (
                            <motion.button
                                key={space.id}
                                onClick={() => setActiveId(space.id)}
                                className={`w-full text-left px-5 py-4 font-semibold text-lg transition-all duration-300 ${
                                    activeId === space.id
                                        ? 'bg-primary text-white'
                                        : 'bg-transparent text-gray-800 hover:bg-gray-100'
                                }`}
                                whileTap={{ scale: 0.98 }}
                            >
                                {space.title}
                            </motion.button>
                        ))}
                    </div>

                    {/* Active Space Image */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSpace.id}
                            className="relative w-full h-[350px] overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={activeSpace.image}
                                alt={activeSpace.title}
                                fill
                                className="object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                            {/* Description */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-white text-sm leading-relaxed uppercase font-medium">
                                    {activeSpace.description}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Desktop Layout - Side by side */}
                <motion.div
                    className="hidden md:flex flex-row gap-12 lg:gap-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {/* Left Column: List with Custom Stepper */}
                    <div className="flex-1 flex relative">
                        {/* Stepper Container */}
                        <div className="absolute left-6 top-4 bottom-4 w-px bg-gray-300">
                            {/* Active Line Segment */}
                            <motion.div
                                className="absolute w-[2px] -left-[0.5px] bg-primary"
                                initial={false}
                                animate={{
                                    height: `${100 / spaces.length}%`,
                                    top: `${((activeId - 1) / spaces.length) * 100}%`,
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                        </div>

                        {/* Counter - positioned at bottom of active segment */}
                        <motion.div
                            className="absolute -left-6 text-xs font-bold text-primary transition-all duration-300"
                            initial={false}
                            animate={{
                                top: `${(activeId / spaces.length) * 100}%`,
                            }}
                            transition={{ type: 'tween', stiffness: 300, damping: 40 }}
                            style={{
                                transform: 'translateY(-100%)',
                            }}
                        >
                            0{activeId} /0{spaces.length}
                        </motion.div>

                        {/* List Items */}
                        <div className="flex-1 flex flex-col ml-16">
                            {spaces.map((space) => (
                                <div key={space.id} className="relative flex-1">
                                    <button
                                        onClick={() => setActiveId(space.id)}
                                        className="w-full h-16 text-left pl-8 group outline-none focus:outline-none flex items-center justify-start"
                                    >
                                        {/* Animated Background for Active Item */}
                                        {activeId === space.id && (
                                            <motion.div
                                                layoutId="active-bg"
                                                className="absolute inset-0 bg-primary shadow-lg z-0 w-full"
                                                initial={false}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 400,
                                                    damping: 35,
                                                }}
                                            />
                                        )}

                                        <span
                                            className={`relative z-10 text-lg font-bold uppercase tracking-wide transition-colors duration-200 ${
                                                activeId === space.id
                                                    ? 'text-white'
                                                    : 'text-dark group-hover:text-primary'
                                            }`}
                                        >
                                            {space.title}
                                        </span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Image Preview */}
                    <div className="flex-1 h-[450px] relative overflow-hidden group">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSpace.id}
                                className="absolute inset-0"
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Image
                                    src={activeSpace.image}
                                    alt={activeSpace.title}
                                    fill
                                    className="object-cover"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Text Content */}
                                <div className="absolute bottom-0 left-0 p-10 w-full">
                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-white text-xl font-bold uppercase leading-relaxed max-w-lg"
                                    >
                                        {activeSpace.description.toUpperCase()}
                                    </motion.p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurSpaces;
