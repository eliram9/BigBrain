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
                <title>BigBrain Therapy | EMDR & Mental Health Services</title>
                <meta name="description" content="BigBrain Therapy offers expert EMDR therapy, trauma counseling, and support for ADHD, anxiety, depression, stress, relationships, and more in Maryland, Virginia, Arizona & Nebraska. Schedule a free consultation." />
                <link rel="canonical" href="https://bigbraintherapy.com/" />
                <meta name="keywords" content="EMDR therapy, mental health services, trauma therapy, online counseling, BigBrain Therapy, ADHD therapy, anxiety counseling, depression support, stress management, relationship issues, self-esteem, life transitions" />

                {/* Enhanced Organization Schema */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "MedicalOrganization",
                            "@id": "https://bigbraintherapy.com/#organization",
                            "url": "https://bigbraintherapy.com/",
                            "logo": "https://bigbraintherapy.com/logo192.png",
                            "image": "https://bigbraintherapy.com/logo192.png",
                            "name": "BigBrain Therapy",
                            "alternateName": "BigBrain EMDR Therapy",
                            "description": "Professional EMDR therapy and mental health services in Maryland, Virginia, Arizona & Nebraska.",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+1-301-337-5676",
                                "contactType": "Customer Service",
                                "areaServed": ["Maryland", "Virginia", "Arizona", "Nebraska"],
                                "availableLanguage": "English"
                            }
                        }
                    `}
                </script>

                {/* Breadcrumbs Schema */}
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

                {/* WebSite Schema with Sitelinks */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "@id": "https://bigbraintherapy.com/#website",
                            "url": "https://bigbraintherapy.com/",
                            "name": "BigBrain Therapy",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://bigbraintherapy.com/?s={search_term_string}",
                                "query-input": "required name=search_term_string"
                            },
                            "mainEntity": [
                                {
                                    "@type": "WebPage",
                                    "@id": "https://bigbraintherapy.com/#homepage",
                                    "url": "https://bigbraintherapy.com/",
                                    "name": "Home"
                                },
                                {
                                    "@type": "WebPage",
                                    "@id": "https://bigbraintherapy.com/about/#webpage",
                                    "url": "https://bigbraintherapy.com/about",
                                    "name": "About"
                                },
                                {
                                    "@type": "WebPage",
                                    "@id": "https://bigbraintherapy.com/emdr/#webpage",
                                    "url": "https://bigbraintherapy.com/emdr",
                                    "name": "EMDR"
                                },
                                {
                                    "@type": "WebPage",
                                    "@id": "https://bigbraintherapy.com/resources/#webpage",
                                    "url": "https://bigbraintherapy.com/resources",
                                    "name": "Resources"
                                },
                                {
                                    "@type": "WebPage",
                                    "@id": "https://bigbraintherapy.com/contact-us/#webpage",
                                    "url": "https://bigbraintherapy.com/contact-us",
                                    "name": "Contact Us"
                                },
                                {
                                    "@type": "WebPage",
                                    "@id": "https://bigbraintherapy.com/blog/#webpage",
                                    "url": "https://bigbraintherapy.com/blog",
                                    "name": "Blog"
                                }
                            ]
                        }
                    `}
                </script>
            </Helmet>
            <section aria-label="Hero Section" className="w-full h-screen">
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