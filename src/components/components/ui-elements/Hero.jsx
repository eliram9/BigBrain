import React from 'react';
import { Link } from 'react-router-dom';

import useScreenSize from '../hooks/useScreenSize';
import { BrainGear, ContactUs, Explore } from '../../media/icons';
import PageContainer from './PageContainer';

const Hero = () => {
    const isSmallScreen = useScreenSize();

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center poppins dark:bg-black">
            {/* SVG Background */}
            <div className="absolute inset-0 w-full h-full sm:h-full md:h-[90%] bg-hero-background"></div>
                <PageContainer className='z-10 dark:bg-transparent 
                                           md:p-20 sm:top-10 lg:p-20'
                >

                {/* Parent div centered horizontally and vertically */}
                <div className="w-full flex lg:flex-col flex-row items-center justify-center z-10 text-black dark:text-white">
                    {/* First child div */}
                    <div className="sm:w-full md:w-full lg:w-full xl:w-7/12 w-7/12 text-start">
                        <h2 className='text-3xl font-light
                                       sm:text-xl md:text-lg lg:text-2xl'
                        >Reframe, Rebuild, Renew:
                        </h2>
                        <h1 className='text-5xl font-semibold
                                       sm:text-4xl md:text-3xl lg:text-4xl' 
                        >
                            EMDR as Your Mind's Gym
                        </h1>
                        <div className='pt-3 font-light 
                                        md:text-md lg:text-base'
                        >
                            <p>Healing is like building muscle — focused, intentional, and progressive.</p>
                            <br />
                            <p>Just as lifting weights strengthens muscles, our EMDR sessions 'work out' the brain, teaching it to process and reframe feelings about ourselves. </p>
                        </div>
                        <div className='sm:w-full flex justify-start items-center md:justify-center'>
                                 <Link to="/contact-us"
                                       onClick={() => window.scrollTo(0, 0)}
                                        className='my-10 px-6 py-2 bg-main text-white rounded-lg font-light flex items-center space-x-2 border-main border
                                                 hover:bg-[#0E3A4A]
                                                 xs:px-4 xs:text-xs xs:py-1
                                                 sm:px-5 sm:text-sm
                                                 md:text-sm'
                                 >
                                     <span>Contact Us</span>
                                     <ContactUs className='xs:h-4 md:h-5' />
                                 </Link>

                                 <Link to="/emdr"
                                       onClick={() => window.scrollTo(0, 0)}
                                       className='my-10 px-6 py-2 bg-white text-main rounded-lg flex items-center space-x-2 ml-7 border-main border
                                                 hover:bg-[#E6E6E6]
                                                 xs:px-4 xs:text-xs xs:py-1
                                                 sm:px-5 md:text-sm'
                                 >
                                     <span>Explore</span>
                                     <Explore className='xs:h-4 md:h-5 p-[1px]' />
                                 </Link>
                             </div>
                    </div>
                    

                    {/* Second child div */}
                    <div className="w-5/12 flex justify-center md:justify-start sm:w-full lg:w-4/6">
                        <BrainGear className='sm:w-5/6 h-1/2' /> 
                        {/* <BrainGear viewBox={isSmallScreen ? '-40 0 672 690' : '-90 0 672 690'} className='xs:h-full sm:h-2/3 md:z-30 h-full' /> */}
                    </div>
                </div>
                </PageContainer>
        </section>
    );
};


export default Hero;