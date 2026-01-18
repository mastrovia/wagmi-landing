import React from 'react';

interface PreferredCardProps {
    title: string;
    description: string;
}

const PreferredCard: React.FC<PreferredCardProps> = ({ title, description }) => {
    return (
        <div
            className="w-full md:py-12 p-6 md:p-8 border border-[#E0E4F5] transition-all"
            style={{
                background:
                    'linear-gradient(180.25deg, #6676D2 -86.17%, rgba(255, 255, 255, 0) 75%)',
            }}
        >
            <h3 className="text-xl md:text-2xl font-bold text-dark mb-2">{title}</h3>
            <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default PreferredCard;
