import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { MdOutlineArrowOutward } from 'react-icons/md';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    fullWidth = false,
    className = '',
    ...props
}) => {
    // Base styles: removed default padding to handle inner layout manually if needed,
    // but the design shows a structured layout.
    // We'll use flexbox for the button content.
    const baseStyles =
        'inline-flex items-center justify-between pl-3 p-1.5 rounded-md font-medium transition-all duration-300 cursor-pointer group';

    const variants = {
        primary: 'bg-primary text-white hover:bg-primary/90',
        secondary: 'bg-secondary text-white hover:opacity-90',
        outline: 'border-2 border-primary text-primary hover:bg-primary/10',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
            {...props}
        >
            <span className="mr-3 text-base font-semibold">{children}</span>
            <div className="relative overflow-hidden w-8 h-8 bg-secondary rounded flex items-center justify-center">
                <GoArrowUpRight className="text-xl absolute transition-transform duration-300 group-hover:translate-x-full group-hover:-translate-y-full" />
                <GoArrowUpRight className="text-xl absolute transition-transform duration-300 -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
        </button>
    );
};

export default Button;
