import React from 'react';
import Image from 'next/image';
import { MdLocationOn, MdWifi, MdLightbulb } from 'react-icons/md';
import { FaHandshake } from 'react-icons/fa';

const features = [
    {
        icon: MdLocationOn,
        title: 'Prime Location:',
        description:
            'Located in Unichira, Edapally, WAGMI offers unmatched convenience with easy access to Kochi’s bustling areas like Thrikkakara, Kakkanad, and Edapally. You’ll enjoy proximity to major transportation, dining, and entertainment, always staying connected to everything you need.',
    },
    {
        icon: MdLightbulb,
        title: 'Flexible Solutions:',
        description:
            'We understand that every business has unique needs. That’s why we offer a variety of flexible membership options like hot desks, dedicated desks, private cabins, and virtual offices. Our solutions are designed to grow and adapt as your business evolves, giving you room to scale easily.',
    },
    {
        icon: MdWifi,
        title: 'Modern Facilities:',
        description:
            'Our spaces are equipped with the latest technology and features to support your business needs. Enjoy high-speed internet, well-designed workspaces, a cozy cafeteria, and relaxing lounge areas—all tailored to keep you productive, focused, and comfortable throughout your day.',
    },
    {
        icon: FaHandshake,
        title: 'Exceptional Support:',
        description:
            'Our dedicated team is always on hand to ensure your experience at WAGMI is seamless. From administrative help to tech support, we’re here to provide anything you need, ensuring you can focus on what truly matters: growing your business and achieving success.',
    },
];

const KnowMore = () => {
    return (
        <section className="py-16 md:py-24 px-6 lg:px-16 overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column - Sticky */}
                    <div className="w-full flex flex-col items-start lg:sticky lg:top-12 h-fit">
                        <div className="relative w-full h-80 mb-4">
                            <Image
                                src="/img/wagmi-poster.svg"
                                alt="Wagmi Workspace Illustration"
                                fill
                                className="object-contain object-left"
                            />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-extrabold text-dark mb-2 uppercase tracking-tight leading-tight">
                            GET TO KNOW WAGMI
                        </h2>

                        <p className="text-gray-600 font-bold uppercase tracking-wide text-sm md:text-base leading-relaxed">
                            PROFESSIONAL WORKSPACES DESIGNED FOR FOCUS, FLEXIBILITY, AND
                            PRODUCTIVITY.
                        </p>
                    </div>

                    {/* Right Column - Scrollable Content */}
                    <div className="w-full flex flex-col gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 md:p-12 rounded-none shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="shrink-0">
                                    <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-gray-600">
                                        <feature.icon className="text-3xl text-gray-700" />
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <h3 className="text-lg md:text-xl font-bold text-dark mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-[15px]">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KnowMore;
