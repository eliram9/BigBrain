import React, { useEffect, useState } from 'react';

const SectionSubtitle = ({ subtitle, className }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Function to check and update dark mode status
        const updateDarkMode = () => {
            const darkModeEnabled = document.body.classList.contains('dark');
            setIsDarkMode(darkModeEnabled);
        };

        // Initial check
        updateDarkMode();

        // Set up a MutationObserver to watch for changes to the body's class list
        const observer = new MutationObserver(updateDarkMode);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        // Clean up the observer when the component unmounts
        return () => observer.disconnect();
    }, []);

    // Calculate the width of the underline
    const underlineWidth = `${subtitle.length * 7.5}px`;

    return (
        <div className={`flex flex-col ${className}`}>
            <h2 className="text-3xl font-semibold text-black relative dark:text-white sm:text-2xl">
                {subtitle}
            </h2>
            <div 
                className={`h-[3px] ${isDarkMode ? 'bg-[var(--underline-color-dark)]' : 'bg-[var(--underline-color-light)]'}`}
                style={{ width: underlineWidth }}
            ></div>
        </div>
    );
};

export default SectionSubtitle;