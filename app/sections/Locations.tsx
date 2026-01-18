import React from 'react';
import Image from 'next/image';
import { BiSupport, BiMessageSquareDetail, BiMap, BiPhoneCall } from 'react-icons/bi';
import Button from '../components/Button';
import { GoArrowUpRight } from 'react-icons/go';

const contactInfo = [
    {
        icon: BiSupport,
        title: 'Chat to customer services',
        subtitle: 'Lorem ipsum dolor sit',
        link: 'support@helio.com',
        href: 'mailto:support@helio.com',
    },
    {
        icon: BiMessageSquareDetail,
        title: 'Chat to our sales',
        subtitle: 'Lorem ipsum dolor sit',
        link: 'sales@helio.com',
        href: 'mailto:sales@helio.com',
    },
    {
        icon: BiMap,
        title: 'Visit us',
        subtitle: 'Lorem ipsum dolor sit',
        link: '53 Albert Street, Brisbane',
        href: '#',
    },
    {
        icon: BiPhoneCall,
        title: 'Call us',
        subtitle: 'Lorem ipsum dolor sit',
        link: '+61 (234) 5678',
        href: 'tel:+612345678',
    },
];

const locations = [
    {
        id: 1,
        city: 'Brisbane City',
        address: '53 Albert Street, Brisbane.',
        phone: '+61 234 5678',
        coords: { x: '50%', y: '50%' }, // Placeholder for map marker positioning if we had a real map
    },
];

const Locations = () => {
    // Determine active location (first one since user asked for "random location")
    const activeLocation = locations[0];

    return (
        <section className="bg-linear-to-b from-[#EAEBF8] to-[#FFFFFF] py-16 md:py-24 relative">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-dark mb-6 leading-tight">
                        Visit Wagmi Workspace and Experience a Better Work Environment
                    </h2>
                    <p className="text-gray-600 font-medium text-base md:text-lg mb-8 max-w-xl mx-auto">
                        Schedule a free tour and see how our professional coworking space can
                        support your work.
                    </p>

                    <div className="flex justify-center">
                        <Button variant="primary">Book a seat</Button>
                    </div>
                </div>

                {/* Contact Grid & Map Container */}
                <div className="bg-white border border-gray-100 p-6 md:p-8">
                    <div className="border border-gray-100 overflow-hidden">
                        {/* Contact Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x border-b border-gray-100">
                            {contactInfo.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-8 md:p-10 flex flex-col items-center text-center hover:bg-gray-50 transition-colors"
                                >
                                    <div className="w-12 h-12 border border-primary/20 bg-primary/5 flex items-center justify-center text-primary mb-6">
                                        <item.icon className="text-2xl" />
                                    </div>
                                    <h3 className="text-dark font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-sm mb-2">{item.subtitle}</p>
                                    <a
                                        href={item.href}
                                        className="text-dark font-bold underline decoration-primary/50 hover:decoration-primary transition-all"
                                    >
                                        {item.link}
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Map Section */}
                        <div className="relative w-full h-[400px] md:h-[500px] bg-gray-100">
                            <div className="absolute inset-0 bg-blue-50/50">
                                <Image
                                    src="https://placehold.co/1200x600/png?text=Map+View+Placeholder"
                                    alt="Map Location"
                                    fill
                                    className="object-cover opacity-80 mix-blend-multiply"
                                />
                            </div>

                            {/* Location Overlay Card */}
                            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 bg-white p-6 shadow-lg max-w-xs md:max-w-sm w-full">
                                <h3 className="text-xl font-bold text-dark mb-2">
                                    {activeLocation.city}
                                </h3>
                                <p className="text-gray-600 text-sm mb-6">
                                    {activeLocation.address}
                                </p>

                                <div className="flex items-center justify-between gap-4">
                                    <Button>
                                        Contact
                                    </Button>
                                    <div className="flex items-center gap-2 text-dark font-bold text-sm">
                                        <BiPhoneCall /> {activeLocation.phone}
                                    </div>
                                </div>
                            </div>

                            {/* Map Markers (Simulated) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-primary/20 animate-ping absolute inset-0"></div>
                                    <div className="w-12 h-12 bg-dark text-white flex items-center justify-center relative shadow-xl border-4 border-white">
                                        <BiMap className="text-2xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Locations;
