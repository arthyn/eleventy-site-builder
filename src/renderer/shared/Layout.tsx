import React, { FunctionComponent } from 'react'

interface LayoutProps {
    title: string;
    className?: string;
}

export const Layout: FunctionComponent<LayoutProps> = ({ children, title, className = '' }) => {
    return (
        <>
            <header className="fixed window-drag top-0 left-0 w-full h-10 p-3 bg-gray-800">
                <h1 className="text-center text-sm leading-none font-medium tracking-tighter text-gray-600">{title}</h1>
            </header>
            <main className={`mt-10 ${className}`}>
                { children }
            </main>
            <footer className="h-8 py-2">

            </footer>
        </>
    )
}