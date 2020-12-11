import React from 'react';

type ButtonProps<T, P> = {
    as?: string | T;
    className?: string;
} & P & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button<C extends string | React.ComponentType<any>, P>({ as, children, className, ...props }: ButtonProps<C, P>) {
    const Component = as || 'button';

    return (
        <Component className={`inline-flex justify-center items-center py-3 px-2 font-medium text-lg leading-none text-yellow-400 border-2 border-yellow-400 rounded ${className}`}{...props}>
            { children }
        </Component>
    )
}