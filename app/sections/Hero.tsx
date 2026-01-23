'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import StatsCard from '../components/StatsCard';
import { useModal } from '../context/ModalContext';

const Hero = () => {
    const { openContactModal } = useModal();

    return (
        <section
            id="home"
            className="max-w-[1440px] mx-auto px-6 pt-4 pb-12 md:pb-20 lg:px-16 overflow-hidden"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
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
                        <Button variant="primary" className="mt-4" onClick={openContactModal}>
                            Book a seat
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Right Column */}
                <div className="flex flex-col gap-2">
                    {/* Top Wide Image */}
                    <motion.div
                        className="relative w-full h-56 overflow-hidden bg-gray-200"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Image
                            src="/img/hero/Rectangle 57.png"
                            alt="Office Space Large"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>

                    {/* Bottom Row: Left Large, Right Stacked */}
                    <div className="grid grid-cols-2 gap-2 h-64 md:h-80">
                        {/* Bottom Left: Single Large Image */}
                        <motion.div
                            className="relative w-full h-full overflow-hidden bg-gray-200"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Image
                                src="/img/hero/Rectangle 58.png"
                                alt="Reception Area"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>

                        {/* Bottom Right: Two Stacked Images */}
                        <div className="flex flex-col gap-2 h-full">
                            <motion.div
                                className="relative w-full h-full overflow-hidden bg-gray-200"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <Image
                                    src="/img/hero/Rectangle 56.png"
                                    alt="Office Room"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>
                            <motion.div
                                className="relative w-full h-full overflow-hidden bg-gray-200"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <Image
                                    src="/img/hero/Rectangle 55.png"
                                    alt="Glass Cabins"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Stats Row */}
                    <motion.div
                        className="grid grid-cols-3 gap-4 md:gap-6 mt-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.35 }}
                    >
                        <StatsCard value="12+" label="Companies" />
                        <StatsCard value="5+" label="Spaces Available" />
                        <StatsCard value="120+" label="Satisfied Clients" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
