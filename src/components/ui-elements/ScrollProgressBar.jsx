// src/ui-elements/ScrollProgressBar.js
import React, { useState, useEffect } from 'react';

const ScrollProgressBar = ({ isSticky }) => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const currentScroll = window.scrollY;
        const scrolled = (currentScroll / totalHeight) * 100;
        setScrollProgress(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`w-full h-2 bg-gray-200 z-40 ${isSticky ? 'fixed top-0' : 'relative'}`}
            aria-hidden="true"
        >
            <div
                className="h-full bg-main"
                style={{
                    width: `${scrollProgress}%`,
                    transition: 'width 0.3s ease-out',
                }}
            ></div>
        </div>
    );
};

export default ScrollProgressBar;