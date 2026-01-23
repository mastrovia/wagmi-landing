'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        text: 'Our team collaboration has never been better. Having all communication, files, and tasks in one place has eliminated confusion.',
        name: 'Brendan Wilson',
        role: 'Freelancer',
        image: 'https://placehold.co/100x100/png?text=BW',
    },
    {
        id: 2,
        text: 'The flexibility of WAGMI has been a game changer for our startup. We can scale up or down as needed without any hassle.',
        name: 'Rock Lee',
        role: 'Web Designer',
        image: 'https://placehold.co/100x100/png?text=RL',
    },
    {
        id: 3,
        text: 'The facilities are top-notch. High-speed internet and comfortable lounges make it easy to stay productive all day long.',
        name: 'Sakura',
        role: 'Web Developer',
        image: 'https://placehold.co/100x100/png?text=S',
    },
    {
        id: 4,
        text: "I love the community vibe here. It's great to connect with other professionals and share ideas during breaks.",
        name: 'Naruto Uzumaki',
        role: 'Founder',
        image: 'https://placehold.co/100x100/png?text=NU',
    },
    {
        id: 5,
        text: 'Professional environment with a personal touch. The support team is always ready to help with any requests.',
        name: 'Kakashi Hatake',
        role: 'Remote Lead',
        image: 'https://placehold.co/100x100/png?text=KH',
    },
];

const Testimonials = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Handle scroll to determine active index
    const handleScroll = () => {
        if (!scrollRef.current) return;

        const container = scrollRef.current;
        const scrollLeft = container.scrollLeft;
        const containerWidth = container.offsetWidth;
        // We assume each card is approx 350px width + gap, or we calculate center based on positions.
        // Simpler approach: find the element closest to center.

        // Width of card + gap
        // Card min-width is set below (e.g., 350px or 400px), gap is 2rem (32px)
        // Let's calculate dynamically though.

        let closestIndex = 0;
        let minDistance = Number.MAX_VALUE;

        // Use querySelectorAll to find cards within the container
        const cards = container.querySelectorAll('[data-testimonial-card]');
        cards.forEach((card, index) => {
            // const rect = (card as HTMLElement).offsetLeft + (card as HTMLElement).offsetWidth / 2;
            // In a scrolling container, offsetLeft is relative to the scroll parent if properly positioned,
            // but let's rely on scroll coordinates.
            // Actually offsetLeft is relative to offsetParent.
            // Let's use getBoundingClientRect relative to container.
            const cardRect = card.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            const cardCenter = cardRect.left - containerRect.left + cardRect.width / 2; // Relative X center in view
            const containerCenter = containerRect.width / 2;

            const distance = Math.abs(cardCenter - containerCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });

        setActiveIndex(closestIndex);
    };

    useEffect(() => {
        // Initial calculation
        const timer = setTimeout(() => {
            handleScroll();
        }, 100);

        const container = scrollRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            // Also call it on resize
            window.addEventListener('resize', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <section className="bg-[#FFFFFF] py-6 md:py-16 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full flex flex-col items-start">
                {/* Header */}
                <div className="text-start mb-16 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-dark mb-6 uppercase tracking-tight">
                        WHAT OUR CUSTOMERS SAY
                    </h2>
                    <p className="text-gray-600 font-bold uppercase tracking-wide text-sm md:text-base leading-relaxed">
                        DON’T JUST TAKE OUR WORD FOR IT. HERE’S WHAT TEAMS USING WAGMI HAVE
                        ACCOMPLISHED.
                    </p>
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    className="w-full overflow-x-auto pb-12 pt-12 flex gap-8 -mx-6 lg:-mx-16 px-6 lg:px-16 snap-x snap-mandatory hide-scrollbar"
                    style={{ scrollPadding: '0 50%' }} // Helps with centering
                >
                    {/* Spacer to push first item to center */}
                    <div className="shrink-0 w-[5%] md:w-[25%]" />

                    {testimonials.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <motion.div
                                key={item.id}
                                data-testimonial-card
                                className={`shrink-0 w-[300px] md:w-[450px] bg-white p-8 md:p-12 border transition-all duration-300 snap-center flex flex-col justify-between ${
                                    isActive
                                        ? 'border-primary shadow-xl scale-110 z-10'
                                        : 'border-blue-100/50 shadow-sm opacity-60 scale-95'
                                }`}
                                style={{
                                    // Use inline style for pixel perfect border color match from image if needed,
                                    // but text-primary blue is #6676D2
                                    borderColor: isActive ? '#6676D2' : '#E0E4F5',
                                }}
                            >
                                <p className="text-gray-600 font-medium italic text-lg leading-relaxed mb-8">
                                    &quot;{item.text}&quot;
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-dark font-bold text-base">
                                            {item.name}
                                        </h4>
                                        <p className="text-gray-500 text-sm font-medium">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Spacer to push last item to center */}
                    <div className="shrink-0 w-[5%] md:w-[25%]" />
                </div>
            </div>

            {/* CSS Utility for hiding scrollbar */}
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

export default Testimonials;
