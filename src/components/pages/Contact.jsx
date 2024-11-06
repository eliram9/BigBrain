import React from 'react';

import { Helmet } from 'react-helmet';

import PageContainer from '../ui-elements/PageContainer';
import ContactForm from '../ui-elements/ContactForm';
import SectionSubtitle from '../ui-elements/SectionSubtitle';
import { SendingEmail } from '../../media/icons';
import BackgroundSVG from '../../media/Base.svg';
import ContactFooter from '../ContactFooter';
import QuoteBox from '../ui-elements/QuoteBox';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | BigBrain Therapy</title>
                <meta name="description" content="Get in touch with BigBrain Therapy for EMDR therapy services. Contact us today to book your consultation." />
                <meta name="keywords" content="contact BigBrain Therapy, EMDR therapy contact, schedule consultation" />
                <link rel="canonical" href="https://bigbraintherapy.com/contact-us" />
                
                {/* Structured Data for Breadcrumbs */}
                <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://bigbraintherapy.com/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Contact Us",
                                "item": "https://bigbraintherapy.com/contact-us"
                            }
                        ]
                    }
                `}
                </script>
            </Helmet>

            <section className="relative dark:bg-black bg-gradient-to-b from-white via bg-black to-white">
            <div 
                            className='absolute inset-0 w-full h-full'
                            style={{
                                backgroundImage: `url(${BackgroundSVG})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        />
                <PageContainer className='relative z-10 text-darkGray pt-10'>
                <SectionSubtitle subtitle="Contact Us" className="mb-20 sm:mb-4 md:mb-10 flex justify-center items-center" />
                    
                    <div className="relative pb-12 sm:pb-0"> 
                        {/* Content */}
                        <div className='relative z-10 flex sm:flex-col-reverse md:flex-row items-center justify-between'>
                            {/* Text Container */}
                            <div className='w-7/12 flex items-center text-darkGray pr-10
                                            sm:w-full lg:pr-0'
                            >
                                <ContactForm />
                            </div>
                            
                            {/* Image Container */}
                            <div className='w-5/12 flex justify-center
                                            sm:w-4/6 md:w-4/12 sm:h-fit sm:pb-6'
                            >
                                <SendingEmail className='h-2/4' />
                            </div>
                        </div>
                    </div>
                </PageContainer>
            </section>

            <section>
                <div className="flex justify-center items-center pb-20 pt-32 sm:py-24 dark:bg-black bg-transparent">
                    <QuoteBox 
                        author="Dr. David Servan-Schreiber" 
                        qoute="EMDR therapy is a proven method for overcoming trauma and fostering emotional healing."
                    />
                </div>
            </section>

            <ContactFooter />
        </>
    );
}

export default Contact;