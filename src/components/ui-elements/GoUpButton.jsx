import React, { useState, useEffect } from 'react';
import { GoUp, UpArrow } from '../../media/icons';

const GoUpButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    return (
        showButton && (
        <button onClick={scrollToTop}
                className="fixed bottom-4 right-8 bg-main text-white p-[6px] rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
        >
            <GoUp />
        </button>
        )
    );
};

export default GoUpButton;