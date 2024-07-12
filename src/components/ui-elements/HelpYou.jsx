import React from 'react';
import { HelpingHand } from '../../media/icons';
import SectionSubtitle from './SectionSubtitle';


const HelpYou = () => {
    return (
        <>
            <section className='poppins sm:mb-16 sm:mt-0 xl:mt-16 2xl:mt-12'>
                <div className='flex flex-row items-center 
                                sm:flex-col'
                >
                    <div className='flex-1' >
                        <HelpingHand />
                    </div>
                    <div className='flex-1 text-black leading-relaxed dark:text-white font-light
                                    xs:-mt-10 
                                    sm:text-sm sm:-mt-10
                                    md:text-sm lg:text-sm xl:text-md'
                    >
                        <SectionSubtitle subtitle="How Can I Help You?" className="mb-20" />
                        <p>When life becomes too much to handle, you might know what you need to do logically to make things better, but 
                           actually starting can feel pretty scary. 
                        </p>
                        <br />
                        <p>I'm here to work alongside you to overcome your unproductive thoughts and habits and restore your calm. 
                           I employ Eye Movement Desensitization and Reprocessing (EMDR), which is highly proven by empirical studies 
                           to give you results quicker than traditional talk therapy. The goal is to reduce your distressing symptoms, 
                           transform your thoughts into self-assured ones, and help you re-engage with the present while feeling 
                           hopeful for your future. 
                        </p>
                        <br />
                        <p>  
                           You understand your struggles and story better than anyone 
                           else and I'm here to help you reclaim peace and balance in your life. 
                        </p>
                        <br />
                        <p>I speicalize in treating ADHD, anxiety, depression, and trauma.</p>
                        <p>I also offer support for stress management, relationship issues, self-esteem, life transitions, Alzheimer's, social anxiety, chronic pain, chronic pain, attachment trauma, medical trauma, stress related issues, and career/school counseling. 
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HelpYou;