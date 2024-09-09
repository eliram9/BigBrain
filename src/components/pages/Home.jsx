import React from 'react';

import { Helmet } from 'react-helmet';

import PageContainer from '../ui-elements/PageContainer';
import ServicesSection from '../ui-elements/ServicesSection';
import Hero from '../ui-elements/Hero';
import HelpYou from '../ui-elements/HelpYou';
import Reviews from '../ui-elements/Reviews';
import QuoteBox from '../ui-elements/QuoteBox';
import FooterNew from '../FooterNew';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>BigBrain Therapy | EMDR and Mental Health Services</title>
                <meta name="description" content="Big Brain Therapy offers professional EMDR and mental health services in Potomac, MD. Discover effective treatments for trauma, anxiety, and more to improve your well-being." />
                <link rel="canonical" href="https://www.bigbraintherapy.com" />
                <meta name="keywords" content="EMDR therapy, mental health, trauma treatment, anxiety therapy, Potomac, MD therapist" />
            </Helmet>       
            <section className="w-full h-screen">
                <Hero />
                <PageContainer className="bg-gradient-to-b from-transparent to-cream dark:bg-gradient-to-b dark:from-black dark:via-black dark:to-black">
                    <ServicesSection />
                    <HelpYou />
                    <section>
                        <div className="flex justify-center items-center py-10 dark:bg-black">
                            <QuoteBox 
                                author="Dr. Laurel Parnell" 
                                qoute="EMDR helps unlock the emotional and cognitive blocks that hold us back from living our best lives."
                            />
                        </div>
                    </section>
                    <Reviews /> 
                </PageContainer>
                <FooterNew />
            </section> 
        </>
         
    )
}

export default Home;