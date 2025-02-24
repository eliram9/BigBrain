import React from 'react';

import { Helmet } from 'react-helmet';

import PageContainer from '../ui-elements/PageContainer';
import { Factory, GirlsPuzzle, HeroGrayBackground } from '../../media/icons';
import QuoteBox from '../ui-elements/QuoteBox';
import SectionSubtitle from '../ui-elements/SectionSubtitle';
import FooterNew from '../FooterNew';


const CircledLetter = ({ letter }) => (
    <span className="inline-flex items-center justify-center font-normal border border-current rounded-full w-7 h-7 align-middle bg-blue dark:text-black">
      <span className="inline-block leading-none" style={{ marginTop: '1px' }}>{letter}</span>
    </span>
  );


const EMDR = () => {
    return (
        <>
            <Helmet>
                <title>BigBrain Therapy | EMDR Therapy Explained</title>  {/* Keeping this as is */}
                <meta name="description" content="Learn about EMDR therapy at BigBrain Therapy for trauma, ADHD, anxiety, depression, stress, relationships, and more. Schedule a consultation in Maryland, Virginia, Arizona & Nebraska." />
                <meta name="keywords" content="EMDR therapy, mental health services, trauma therapy, ADHD therapy, anxiety counseling, depression support, stress management, relationship issues, self-esteem, life transitions, BigBrain Therapy" />
                <link rel="canonical" href="https://bigbraintherapy.com/emdr" />

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
                        },{
                            "@type": "ListItem",
                            "position": 2,
                            "name": "EMDR Therapy",
                            "item": "https://bigbraintherapy.com/emdr"
                        }]
                        }
                    `}
                </script>

                {/* FAQ Schema */}
                <script type="application/ld+json">
                    {`
                        {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                            "@type": "Question",
                            "name": "What is EMDR therapy?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "EMDR is a psychotherapy method that helps reprocess traumatic memories and reduce psychological distress, benefiting those with trauma, anxiety, depression, and more."
                            }
                            },
                            {
                            "@type": "Question",
                            "name": "Who can benefit from EMDR therapy?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "EMDR therapy is effective for individuals with anxiety, PTSD, depression, ADHD, stress, relationship issues, low self-esteem, and life transition challenges."
                            }
                            },
                            {
                            "@type": "Question",
                            "name": "Is EMDR therapy offered online?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, EMDR therapy is provided via secure telehealth sessions, ensuring convenience and privacy for clients in Maryland, Virginia, Arizona, and Nebraska."
                            }
                            }
                        ]
                        }
                    `}
                </script>

                {/* Open Graph Tags */}
                <meta property="og:title" content="BigBrain Therapy | EMDR Therapy" />
                <meta property="og:description" content="Learn about EMDR therapy at BigBrain Therapy for trauma, ADHD, anxiety, depression, stress, relationships, and more. Schedule a consultation in Maryland, Virginia, Arizona & Nebraska." />
                <meta property="og:url" content="https://bigbraintherapy.com/emdr" />
                <meta property="og:type" content="website" />
            </Helmet>

            <section className='relative w-full h-auto overflow-hidden'>
                <HeroGrayBackground className="absolute inset-0 w-full h-full" />
                <PageContainer className='relative z-10 text-darkGray dark:bg-black pb-32 sm:pb-12 md:pb-16 pt-10'>
                    <SectionSubtitle subtitle="What is EMDR?" className="mb-20 sm:mb-4" />
                    <div className='flex md:flex-col flex-row items-center justify-between'>
                    
                        {/* Image Container */}
                        <div className='w-5/12 flex justify-start sm:h-1/2
                                        md:w-10/12 md:pb-5'>
                            <Factory className='h-auto' alt="Brain filing system visualization" />
                        </div>
                        
                        {/* Text Container */}
                        <div className='w-7/12 flex items-center pl-10
                                        md:w-full sm:pl-0'>
                            <div className='sm:text-left text-left dark:text-white leading-loose font-light sm:text-sm lg:text-md xl:text-md 2xl:text-base 3xl:text-xl'>
                                <p className='leading-loose'>
                                    The brain can be viewed as a filing cabinet where each memory is organized under tabs of related themes, such as, <span className='font-medium text-md xl:text-md 2xl:text-base 3xl:text-xl'>"I succeeded, I failed, I embarrassed 
                                    myself, or I am loved."</span>
                                </p>
                                <p>However, when a memory is distressing or doesn't match how we want to see ourselves, such as feeling incompetent, helpless, or cruel,
                                    it occasionally fails to find its proper location in the system. Instead, it remains like an unresolved pile of paperwork on top of your desk, persistently nagging 
                                    due to its unresolved nature.
                                </p>
                                <br />
                                <p>When this lingering issue is triggered, we find ourselves stuck in themes of, <span className='font-medium text-md xl:text-md 2xl:text-base 3xl:text-xl'>"I'm not good enough, I am alone, or I do not trust my
                                    judgement,"</span> and we react with emotional outbursts or strong anxiety that feels unavoidable.
                                </p>
                                <br />
                                <p>EMDR can be utilized with these unsettled concerns, aiding the brain's 
                                    natural healing process by effectively processing and organizing these unresolved memories. Once the source of distress has been alleviated, our behaviors 
                                    decrease in reactivity for current and future stressors and we are able to live healthier, happier lives. 
                                </p>
                            </div>
                        </div>
                     </div>
                </PageContainer>
            </section>

            <section>
                <div className="flex justify-center items-center py-10 dark:bg-black">
                    <QuoteBox 
                        qoute="The goal of EMDR therapy is trait change so that the negative emotions and sensations will no longer habitually arise." 
                        author="Francine Shapiro, Florence W. Kaslow & Louise Maxfield"
                    />
                </div>
            </section>

            <section>
                <PageContainer className='text-darkGray dark:bg-black pb-40 md:pb-20 pt-10 bg-gradient-to-b from-white to-cream dark:bg-gradient-to-b dark:from-black dark:to-black'>  
                    <SectionSubtitle subtitle="Is EMDR Right For ME?" className="items-center mb-20 sm:mb-4" />
                    <div className='flex md:flex-col-reverse items-center justify-between'>

                        {/* Text Container */}
                        <div className='w-7/12 flex items-start text-darkGray pr-10 md:w-full'>
                            <div className='sm:text-center text-left dark:text-white leading-loose font-light'>
                                <div className='sm:text-left text-left leading-loose sm:text-sm lg:text-md xl:text-md 2xl:text-base 3xl:text-xl'>
                                    <p className='leading-loose font-light'>Most people associate trauma with harrowing events, like war or a natural disaster. </p>
                                    <p>However, evidence 
                                    now concludes that repeated exposure to little <CircledLetter letter="t" /> traumas can cause more emotional harm than exposure to a single big <CircledLetter letter="T" /> traumatic event.
                                    Little <CircledLetter letter="t" /> traumas are everyday disturbances, such as becoming upset, anxious, or feeling down.
                                    </p>
                                    <p>Invalidating the impact of these little <CircledLetter letter="t" /> traumas can create adverse
                                    coping behaviors, such as bottling up emotions, feeling anxiety, or attempting to manage symptoms without support and feeling isolated.
                                    If you have had any little <CircledLetter letter="t" /> or big <CircledLetter letter="T" /> trauma, EMDR could be a great fit for you.
                                    </p>
                                    <br />
                                    <p>EMDR can decrease the feelings of depression, anxiety, low self esteem,
                                    emotional dysregulation, symptoms of OCD, PTSD, and ADHD. Not only can EMDR improve your quality of life, it can also be absorbed faster, stay longer, and be more impactful
                                    than traditional talk therapy. Together we can evaluate if EMDR is a good fit to alleviate the symptoms that cause distress in your life. 
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className='w-4/12 flex justify-center
                                        md:justify-center sm:w-10/12 md:w-8/12 sm:py-5 md:pb-5'>
                            <GirlsPuzzle className='h-auto' alt="EMDR therapy process illustration" />
                        </div>
                    </div>
                </PageContainer>
            </section>
            <FooterNew />
        </>
    );
}

export default EMDR;
