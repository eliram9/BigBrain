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
                <title>Big Brain Therapy</title>
                <meta name="description" content="Welcome to BigBrain Therapy, your resource for EMDR and mental health services." />
                <link rel="canonical" href="https://bigbraintherapy.com" />

                {/* Structured Data for Organization */}
                <script type="application/ld+json">
                    {`
                        {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "url": "https://bigbraintherapy.com",
                        "logo": "https://bigbraintherapy.com/logo192.png",
                        "name": "BigBrain Therapy",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+1-301-337-5676",
                            "contactType": "Customer Service"
                        }
                        }
                    `}
                </script>

                {/* Structured Data for Breadcrumbs specific to Home */}
                <script type="application/ld+json">
                    {`
                        {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://bigbraintherapy.com/"
                        }]
                        }
                    `}
                </script>
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