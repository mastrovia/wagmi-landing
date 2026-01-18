import Image from 'next/image';
import Button from '../components/Button';

const Hero = () => {
    return (
        <section className="max-w-[1440px] mx-auto px-6 pt-4 pb-12 md:pb-20 lg:px-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left Column */}
                <div className="flex flex-col items-start space-y-8">
                    {/* Logo/Icon */}
                    <div className="relative w-32 h-24 mb-4">
                        {/* Using the logo as the illustration above the text as seen in design */}
                        <Image
                            src="/img/workspace-illustration.svg"
                            alt="Wagmi Illustration"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>

                    <h2 className="text-sm md:text-base font-bold tracking-wider text-gray-900 uppercase">
                        Welcome to Wagmi – A Premium Co-Working Hub for Startups
                    </h2>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-dark leading-[1.1]">
                        DESIGNED FOR <br />
                        MODERN <span className="text-[#6676D2]">WORK.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed font-medium">
                        At Wagmi, we provide a modern co-working space for freelancers, startups,
                        and remote teams to work, collaborate, and grow.
                    </p>

                    <Button variant="primary" className="px-8! py-4! text-lg mt-4 group">
                        Book a seat
                    </Button>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                    {/* Top Wide Image */}
                    <div className="relative w-full h-56 rounded-sm overflow-hidden bg-gray-200">
                        <Image
                            src="https://placehold.co/800x400/png"
                            alt="Office Space Large"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Middle Two Images */}
                    <div className="grid grid-cols-2 gap-6 h-64 md:h-80">
                        <div className="relative w-full h-full rounded-sm overflow-hidden bg-gray-200">
                            <Image
                                src="https://placehold.co/400x400/png"
                                alt="Office Space Small 1"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="relative w-full h-full rounded-sm overflow-hidden bg-gray-200">
                            <Image
                                src="https://placehold.co/400x400/png"
                                alt="Office Space Small 2"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Bottom Stats Row */}
                    <div className="grid grid-cols-3 gap-4 md:gap-6 mt-2">
                        {/* Stat Card 1 */}
                        <div className="bg-linear-to-b from-[#EAEBF8] to-[#F3F4FB] p-4 md:p-6 rounded-md border border-[#E0E4F5] text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-2xl md:text-3xl font-bold text-dark mb-1">12+</div>
                            <div className="text-xs md:text-sm font-semibold text-gray-700">
                                Years Experience
                            </div>
                        </div>

                        {/* Stat Card 2 */}
                        <div className="bg-linear-to-b from-[#EAEBF8] to-[#F3F4FB] p-4 md:p-6 rounded-md border border-[#E0E4F5] text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-2xl md:text-3xl font-bold text-dark mb-1">86+</div>
                            <div className="text-xs md:text-sm font-semibold text-gray-700">
                                Spaces Available
                            </div>
                        </div>

                        {/* Stat Card 3 */}
                        <div className="bg-linear-to-b from-[#EAEBF8] to-[#F3F4FB] p-4 md:p-6 rounded-md border border-[#E0E4F5] text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-2xl md:text-3xl font-bold text-dark mb-1">
                                12k+
                            </div>
                            <div className="text-xs md:text-sm font-semibold text-gray-700">
                                Satisfied Clients
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
