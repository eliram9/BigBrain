import React from 'react';

import PageContainer from '../ui-elements/PageContainer';
import Ari from '../../media/Ari.svg';

import { Conversation, Payment } from '../../media/icons';
import QuoteBox from '../ui-elements/QuoteBox';
import SectionSubtitle from '../ui-elements/SectionSubtitle';
import FooterNew from '../FooterNew';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <section className=''>
                <PageContainer className='dark:bg-black '>
                    <div className='flex sm:flex-col-reverse md:flex-row items-center justify-between'>
                        {/* Text Container */}
                        <div className='w-7/12 flex items-start text-black
                                        sm:w-full'>
                            <div className='sm:text-center text-left dark:text-white'>
                                <h1 className='text-4xl font-semibold mb-8'>Hi, I'm Arianne</h1>
                                <h4 className='leading-relaxed text-2xl xl:text-xl'>I’m glad that we’ve found each other. I am a licensed certified social worker – clinical in Maryland, Virginia, and Arizona.</h4>
                            </div>
                        </div>
                        
                        {/* Image Container */}
                        <div className='w-4/12 flex justify-end
                                        sm:w-full md:w-5/12'>
                            <img src={Ari} alt='Arianne' className='mx-auto' />
                        </div>
                    </div>
                </PageContainer>
            </section>

            <section className='dark:bg-black pt-10'>
                <PageContainer className='text-darkGray flex justify-end w-full text-left leading-relaxed font-light
                                         md:text-sm lg:text-md xl:text-md 2xl:text-base 3xl:text-xl dark:text-white dark:font-light'>
                    <p>I offer individual psychotherapy to teenagers and adults of all ages and stages. I have been partnering with individuals for 12 years, navigating the challenges, celebrating the victories, 
                       and working towards the life each person hopes for themselves.
                    </p>
                    <br /> 
                    <p>With specialized training in Eye Movement Desensitization and Reprocessing (EMDR), I bring a wealth of experience and a range of therapeutic tools to our sessions, but it's the connection 
                        between us that truly fosters healing and growth. My own experiences with mental health have taught me resilience, compassion, and the profound strength of the human spirit and I want to share that with you.
                    </p>

                    <br /> 

                    <p> I offer you a space of non-judgment, empathy, and authentic connection. </p>  
                    <p>If you’re seeking a therapist who believes in the power of the mind, who listens deeply, and who is committed to seeing you thrive, I invite you to reach out. 
                       This can be the start of healing for your past, present and future.  All services are being provided currently via telehealth.
                    </p>
                </PageContainer>
            </section>


            <section>
                <div className="flex justify-center items-center py-28 dark:bg-black">
                    <QuoteBox 
                        author="Dr. Bessel van der Kolk" 
                        qoute="Through EMDR, the mind can heal from psychological trauma just as the body recovers from physical trauma"
                    />
                </div>
            </section>
            
            
            <section>
                <PageContainer className='text-darkGray dark:bg-black pb-32'>
                    <SectionSubtitle subtitle="What To Expect?" className="mb-20 sm:mb-4" />
                    <div className='flex md:flex-col flex-row items-center justify-between'>
                    
                        {/* Image Container */}
                        <div className='w-5/12 flex justify-center xs:mb-4 md:mb-0
                                        md:w-9/12 sm:py-5 md:pb-5'>
                            <Conversation className='h-auto'/>
                        </div>
                        
                        {/* Text Container */}
                        <div className='w-7/12 flex items-center pl-10
                                        md:w-full md:pl-0 lg:text-md xl:text-md 2xl:text-base 3xl:text-xl'>
                            <div className='text-left dark:text-white leading-relaxed font-light sm:text-sm'>
                                <p className='leading-relaxed'>You can count on a supportive, and secure environment for healing, accessible from the comfort of your home.</p> 
                                <p>Sessions are conducted via a secure video conferencing platform, ensuring privacy and convenience.</p>

                                <br />

                                <p>I will guide you through the EMDR process, 
                                    using virtual tools for bilateral stimulation, such as a ball that crosses back and forth across the screen. 
                                </p>
                                <p>You will receive personalized support as you walk through your journey of healing.</p>
                            </div>
                        </div>
                    </div>
                </PageContainer>
            </section>

            <section>
                <PageContainer className='text-darkGray pb-40 md:pb-20 bg-gradient-to-b from-white to-cream dark:bg-gradient-to-b dark:from-black dark:to-black'>
                        <SectionSubtitle subtitle="Booking & Consultations" className="items-center mb-20 sm:mb-4" />
                        <div className='flex md:flex-col-reverse  items-center justify-between'>

                            {/* Text Container */}
                            <div className='w-7/12 flex items-start text-darkGray pr-10 md:w-full'>
                                <div className='sm:text-center text-left dark:text-white leading-relaxed font-light'>
                                    <div className='sm:text-left text-left dark:text-white leading-relaxed sm:text-sm lg:text-md xl:text-md 2xl:text-base 3xl:text-xl'>
                                        <p >Our first step will be to book a consultation. To do so, please contact us
                                            <Link to="/conact-us" className='underline text-main hover:text-white hover:bg-main ml-1'>here</Link>, call 301-337-5676, or visit our online booking system (coming soon).</p>

                                        <br />

                                        <p>During your initial consultation, we will discuss your goals and what tools the therapists can employ to best support you.</p>
                                    
                                        <br />

                                        <p>We offer flexible scheduling options with appointments through telehealth services ranging from 9 AM to 3 PM, Monday through Friday. 
                                           Evening appointments are available upon request.
                                        </p>
                                        <p>Each session lasts 50 minutes.</p>

                                        <br />

                                        <p>Please be advised that appointments must be cancelled at least 48 hours prior to your scheduled appointment or they will incur a cancellation fee of one session.
                                           I would love to see if we are a good match. 
                                           Please reach out to schedule a free 15-minute consultation with me today!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Image Container */}
                            <div className='w-5/12 flex justify-end sm:justify-center md:w-9/12 md:justify-center sm:py-5 md:pb-5'>
                                <Payment className='h-auto'/>
                            </div>
                        </div>
                    </PageContainer>
                </section>
            <FooterNew />     
        </>
    )
}

export default About;