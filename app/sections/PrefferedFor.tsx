import React from 'react';
import Image from 'next/image';
import PreferredCard from '../components/PreferredCard';

const PrefferedFor = () => {
    return (
        <section className="bg-[#F3F4FB] py-16 md:py-24 px-6 lg:px-16 overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-dark mb-4 uppercase tracking-tight">
                        WHO IS THIS FOR
                    </h2>
                    <p className="text-gray-600 font-bold uppercase tracking-wide text-sm md:text-base">
                        WAGMI WORKSPACE IS DESIGNED FOR MODERN PROFESSIONALS ACROSS INDUSTRIES.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column: Image Grid */}
                    <div className="grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
                        {/* Column 1: Stacked Images */}
                        <div className="flex flex-col gap-4 h-full">
                            <div className="relative flex-1 rounded-lg overflow-hidden">
                                <Image
                                    src="https://placehold.co/600x400/png?text=Freelancer"
                                    alt="Freelancer working"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="relative flex-1 rounded-lg overflow-hidden">
                                <Image
                                    src="https://placehold.co/600x400/png?text=Meeting"
                                    alt="Team meeting"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Column 2: Tall Image */}
                        <div className="relative h-full rounded-lg overflow-hidden">
                            <Image
                                src="https://placehold.co/600x800/png?text=Collaboration"
                                alt="Collaboration"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Right Column: Cards List */}
                    <div className="flex flex-col justify-center gap-6">
                        <PreferredCard
                            title="Freelancers"
                            description="A calm, professional space for focused work."
                        />
                        <PreferredCard
                            title="Startups"
                            description="A professional workspace to support collaboration"
                        />
                        <PreferredCard
                            title="Remote Team"
                            description="A well-connected workspace that enables focused teamwork."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrefferedFor;
