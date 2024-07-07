import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import PageContainer from '../ui-elements/PageContainer';
import FooterNew from '../FooterNew';
import FlyingBird from '../../media/bird.json';

const Schedule = () => {
    const containerRef = useRef(null);
    const lottieRef = useRef(null); // Ref for Lottie container

    useEffect(() => {
        // Adjust height function
        const adjustHeight = () => {
            if (containerRef.current) {
                const windowHeight = window.innerHeight;
                const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
                containerRef.current.style.minHeight = `${windowHeight - navbarHeight}px`;
            }
        };

        // Load Lottie animation
        lottie.loadAnimation({
            container: lottieRef.current, // the DOM element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: FlyingBird // the animation JSON data
        });

        adjustHeight();
        window.addEventListener('resize', adjustHeight);

        return () => {
            window.removeEventListener('resize', adjustHeight);
            lottie.destroy(); // Clean up Lottie animation on component unmount
        };
    }, []);

    return (
        <div ref={containerRef} className="flex flex-col">
            <main className="flex-grow dark:bg-black">
                <PageContainer>
                    <h2 className='text-3xl font-light text-main dark:text-mint text-center'>Coming soon...</h2>
                    <div ref={lottieRef} style={{ width: 300, height: 300, margin: '0 auto' }}></div>
                </PageContainer>
            </main>
            <FooterNew />
        </div>
    );
}

export default Schedule;