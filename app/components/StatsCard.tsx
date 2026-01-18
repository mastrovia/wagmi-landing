import React from 'react';

interface StatsCardProps {
    value: string;
    label: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ value, label }) => {
    return (
        <div
            className="flex flex-col justify-center items-center px-[10px] py-[10px] gap-[10px] w-full h-[116px] border-b-0 border border-[#E0E4F5]"
            style={{
                background: 'linear-gradient(180.25deg, #6676D2 -90%, rgba(255, 255, 255, 0) 75%)',
                // borderColor: 'linear-gradient(180.25deg, #6676D2 -90%, rgba(255, 255, 255, 0) 50%)',
            }}
        >
            <div className="text-2xl md:text-3xl font-bold text-dark">{value}</div>
            <div className="text-xs md:text-sm font-semibold text-gray-700 text-center">
                {label}
            </div>
        </div>
    );
};

export default StatsCard;
