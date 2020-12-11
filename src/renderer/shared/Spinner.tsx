import React from 'react';

export function Spinner({ className = '' }: { className?: string }) {
    return (
        <span className={`spinner animate-spin flex-none h-32 w-32 border-8 border-gray-600 rounded-full ${className}`} />
    )
}