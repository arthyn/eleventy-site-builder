import React, { FunctionComponent } from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({ children, className, ...props }) => {
    return (
        <button className={`inline-flex justify-center items-center py-3 px-2 font-medium text-lg leading-none text-yellow-400 border-2 border-yellow-400 rounded ${className}`}{...props}>
            { children }
        </button>
    )
}