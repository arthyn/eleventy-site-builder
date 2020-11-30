import React from 'react';

export function Spinner({ className = '' }: { className?: string }) {
    return (
        <span className={`animate-spin h-32 w-32 border-t-8 rounded-full ${className}`} />
    )
}