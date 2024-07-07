import { useState, useEffect } from 'react';

const useScreenSize = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 640); // Tailwind's `sm` breakpoint is 640px
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isSmallScreen;
};

export default useScreenSize;
