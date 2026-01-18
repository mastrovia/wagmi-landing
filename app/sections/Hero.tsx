'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import StatsCard from '../components/StatsCard';

const Hero = () => {
    return (
        <section className="max-w-[1440px] mx-auto px-6 pt-4 pb-12 md:pb-20 lg:px-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left Column */}
                <motion.div
                    className="flex flex-col items-start space-y-8"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    {/* Logo/Icon */}
                    <motion.div
                        className="relative w-32 h-24 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                    >
                        <Image
                            src="/img/workspace-illustration.svg"
                            alt="Wagmi Illustration"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </motion.div>

                    <motion.h2
                        className="text-sm md:text-base font-bold tracking-wider text-gray-900 uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        Welcome to Wagmi – A Premium Co-Working Hub for Startups
                    </motion.h2>

                    <motion.h1
                        className="text-5xl md:text-7xl font-extrabold text-dark leading-[1.1]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                    >
                        DESIGNED FOR <br />
                        MODERN <span className="text-[#6676D2]">WORK.</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        At Wagmi, we provide a modern co-working space for freelancers, startups,
                        and remote teams to work, collaborate, and grow.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.25 }}
                    >
                        <Button variant="primary" className="mt-4">
                            Book a seat
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                    {/* Top Wide Image */}
                    <motion.div
                        className="relative w-full h-56 rounded-sm overflow-hidden bg-gray-200"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Image
                            src="https://placehold.co/800x400/png"
                            alt="Office Space Large"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>

                    {/* Middle Two Images */}
                    <div className="grid grid-cols-2 gap-6 h-64 md:h-80">
                        <motion.div
                            className="relative w-full h-full rounded-sm overflow-hidden bg-gray-200"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Image
                                src="https://placehold.co/400x400/png"
                                alt="Office Space Small 1"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>
                        <motion.div
                            className="relative w-full h-full rounded-sm overflow-hidden bg-gray-200"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Image
                                src="https://placehold.co/400x400/png"
                                alt="Office Space Small 2"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>
                    </div>

                    {/* Bottom Stats Row */}
                    <motion.div
                        className="grid grid-cols-3 gap-4 md:gap-6 mt-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.35 }}
                    >
                        <StatsCard value="12+" label="Years Experience" />
                        <StatsCard value="86+" label="Spaces Available" />
                        <StatsCard value="12k+" label="Satisfied Clients" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
