'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

const images = ['/img/hero/01.jpg', '/img/hero/02.jpg', '/img/hero/03.png', '/img/hero/04.png'];

const HeroCarousel = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 = right, -1 = left
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoPlay = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setDirection(1);
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
    };

    useEffect(() => {
        if (!isPaused) {
            startAutoPlay();
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPaused]);

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50;
        if (info.offset.x < -threshold) {
            // Swiped left -> go next
            setDirection(1);
            setIndex((prev) => (prev + 1) % images.length);
        } else if (info.offset.x > threshold) {
            // Swiped right -> go prev
            setDirection(-1);
            setIndex((prev) => (prev - 1 + images.length) % images.length);
        }
        // Resume autoplay after swipe
        setIsPaused(false);
    };

    const variants = {
        enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
    };

    return (
        <div
            className="relative w-full h-[300px] md:h-[550px] overflow-hidden rounded-2xl bg-gray-100 shadow-xl cursor-grab active:cursor-grabbing touch-pan-y"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                    key={index}
                    custom={direction}
                    className="absolute inset-0 w-full h-full"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 200, damping: 25, mass: 0.5 },
                        opacity: { duration: 0.3 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragStart={() => setIsPaused(true)}
                    onDragEnd={handleDragEnd}
                >
                    <Image
                        src={images[index]}
                        alt={`Office Space ${index + 1}`}
                        fill
                        className="object-cover pointer-events-none"
                        priority
                        draggable={false}
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </motion.div>
            </AnimatePresence>

            {/* Progress indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setDirection(i > index ? 1 : -1);
                            setIndex(i);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === index ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
