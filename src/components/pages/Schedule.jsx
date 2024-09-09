import React, { useEffect, useRef } from 'react';

import lottie from 'lottie-web';
import { Helmet } from 'react-helmet';

// import PageContainer from '../ui-elements/PageContainer';
import FooterNew from '../FooterNew';
import FlyingBird from '../../media/bird.json';
import PageContainer from '../ui-elements/PageContainer';
// import SectionSubtitle from '../ui-elements/SectionSubtitle';

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
        <>
            <Helmet>
                <title>Schedule | BigBrain Therapy</title>
                <meta name="description" content="Book your EMDR therapy or mental health consultation with BigBrain Therapy in Potomac, MD. Easy online scheduling for new and existing patients." />
                <meta name="keywords" content="schedule therapy, book appointment, EMDR therapy, mental health consultation, BigBrain Therapy, Potomac MD" />
                <link rel="canonical" href="https://www.bigbraintherapy.com/schedule" />
            </Helmet>
            {/* <section className='relative w-full h-auto overflow-hidden'>
                <PageContainer className='relative z-10 text-darkGray dark:bg-black pb-32 sm:pb-12 md:pb-16 pt-10'>
                    <SectionSubtitle subtitle="Resources" className="mb-20 sm:mb-4" /> */}
                        <div ref={containerRef} className="flex flex-col">
                            <main className="flex-grow dark:bg-black">
                                <PageContainer>
                                    <h2 className='text-3xl font-light text-main dark:text-mint text-center'>Coming soon...</h2>
                                    <div ref={lottieRef} style={{ width: 300, height: 300, margin: '0 auto' }}></div>
                                </PageContainer>
                            </main>
                            <FooterNew />
                        </div>
                {/* </PageContainer>
            </section> */}
        </>
    );
}

export default Schedule;