import React from 'react';

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
    const baseStyles =
        'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer';

    const variants = {
        primary: 'bg-primary text-white hover:bg-secondary',
        secondary: 'bg-secondary text-white hover:opacity-90',
        outline: 'border-2 border-primary text-primary hover:bg-primary/10',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
