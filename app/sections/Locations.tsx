'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { BiSupport, BiMessageSquareDetail, BiMap, BiPhoneCall } from 'react-icons/bi';
import Button from '../components/Button';
import { useModal } from '../context/ModalContext';

// Dynamically import Map to avoid SSR issues
const Map = dynamic(() => import('../components/Map'), {
    loading: () => <div className="w-full h-full bg-gray-100 animate-pulse" />,
    ssr: false,
});

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
        city: 'Edappally',
        address: 'Wagmi Coworking and Managed Office Space, Edappally, Kochi',
        phone: '+91 8129988389',
        coords: [10.029910609588125, 76.31987714232802] as [number, number],
    },
    {
        id: 2,
        city: 'HMT, Kalamassery',
        address: 'Wagmi Workspace, Seaport - Airport Rd, HMT, Kalamassery, Kochi.',
        phone: '+91 8129988389',
        coords: [10.04483620546756, 76.33748702883598] as [number, number],
    },
    {
        id: 3,
        city: 'Pathadipalam',
        address:
            '31/133A , EM Commercial Centre, Koonamthai, Edappally, Ernakulam, Kerala, 682024',
        phone: '+91 8129988389',
        coords: [10.034117082818941, 76.31340045582007] as [number, number],
    },
    {
        id: 4,
        city: 'Thrikkakara',
        address: 'Thrikkakara Heights, 1917, Ward No. 4, Thrikkakara, Kochi, Kerala Pin: 682021',
        phone: '+91 8129988389',
        coords: [10.034435049088826, 76.33335142265261] as [number, number],
    },
    {
        id: 5,
        city: 'Vyttila',
        address: 'Eloor Kizhakkumbhagam, Kalamassery, Ernakulam, Kerala 683501',
        phone: '+91 8129988389',
        coords: [10.074248597727571, 76.30968859354948] as [number, number],
    },
];

const Locations = () => {
    const { openContactModal } = useModal();
    const activeLocation = locations[0]; // Center map on the first location

    return (
        <section
            id="location"
            className="bg-linear-to-b from-[#EAEBF8] to-[#FFFFFF] py-16 md:py-24 relative"
        >
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
                {/* Header Section */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-dark mb-6 leading-tight">
                        Visit Wagmi Workspace and Experience a Better Work Environment
                    </h2>
                    <p className="text-gray-600 font-medium text-base md:text-lg mb-8 max-w-xl mx-auto">
                        Schedule a free tour and see how our professional coworking space can
                        support your work.
                    </p>

                    <div className="flex justify-center">
                        <Button variant="primary" onClick={openContactModal}>
                            Book a seat
                        </Button>
                    </div>
                </motion.div>

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
                        <div className="relative w-full h-[400px] md:h-[500px] bg-gray-100 rounded-lg overflow-hidden shadow-sm z-0">
                            <Map center={activeLocation.coords} zoom={12} locations={locations} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Locations;
