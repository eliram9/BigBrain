import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

import { GET_ARTICLE_DETAIL } from '../quries/fetchArticle';
import { formatFullDate } from '../../apollo/formatDate';
import { sanitizeAndPrepareHtml } from '../../apollo/htmlHandler';
import ScrollProgressBar from '../ui-elements/ScrollProgressBar';
import useCalculateWords from '../hooks/useCalculateWords';
import FooterNew from '../FooterNew';

const ArticleParagraph = ({ paragraph }) => {
    const preparedHtml = sanitizeAndPrepareHtml(paragraph);
    return (
        <div className="mb-10 articleContent poppins font-light dark:text-white">
            {parse(preparedHtml)}
        </div>
    );
};

const ArticleDetail = () => { 
    const { id } = useParams(); // Extract the article ID from the URL parameters
    const { loading, error, data } = useQuery(GET_ARTICLE_DETAIL, {
        variables: { id },
    });
    const [article, setArticle] = useState({ texts: [] }); // Initialize with an empty texts array
    const [isSticky, setIsSticky] = useState(false); // Control stickiness
    const imageRef = useRef(null); // Reference to the image
    const totalWords = useCalculateWords(article.texts);  // Calculate total words using the custom hook

    useEffect(() => {
        if (data && data.article) {
            setArticle(data.article);
        }
    }, [data]);

    // Image 
    useEffect(() => {
        let observer;
        const setupObserver = () => {
            observer = new IntersectionObserver(
                ([entry]) => {
                    setIsSticky(!entry.isIntersecting);
                },
                { threshold: 0 }
            );

            if (imageRef.current) {
                observer.observe(imageRef.current);
            }
        };

        // Set up the observer when the component mounts or when the image loads
        if (imageRef.current && imageRef.current.complete) {
            setupObserver();
        } else if (imageRef.current) {
            imageRef.current.onload = setupObserver;
        }

        return () => {
            if (observer && imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, [imageRef, article.openingImageUrl]); // Add article.openingImageUrl as a dependency

    if (loading) return <p></p>;
    if (error) return <p>Error: {error.message}</p>;

    console.log(article.texts);

    return (
        <>
            <section className='w-full h-auto overflow-hidden mb-20 poppins dark:bg-black'>
                <div className='relative'>
                    <img 
                        src={article.openingImageUrl}
                        alt={article.title} 
                        className="w-full max-h-[400px] object-cover"
                        ref={imageRef}
                    />                                                                                                                                                                                                       
                </div>  

                <ScrollProgressBar isSticky={isSticky} />   {/* Scroll Progress Bar Positioned Below the Image */}

                <div className='max-w-[750px] mx-auto'>
                    <div className='flex items-center justify-between pt-6 pb-1'>
                        <p className='text-slate-500 text-sm dark:text-lightBanana'><span className='font-medium'>Last updated: </span>{formatFullDate(article.createdDate)}</p>
                        <p className='text-main text-xs dark:text-banana'>&#9679;</p>
                        <p className='text-slate-500 text-sm font-medium  dark:text-lightBanana'>{article.category}</p>
                        <p className='text-main text-xs  dark:text-banana'>&#9679;</p>
                        <p className='text-main text-sm font-medium  dark:text-lightBanana'>{Math.trunc(totalWords / 200)} minutes read</p> {/* Display total words */}
                    </div>
                    <div>
                        <p className="text-black text-5xl font-bold dark:text-white">{article.title}</p>
                    </div>
                    <div>
                        <p className="text-black text-xl font-semibold pb-2 pt-4 dark:text-white">{article.summary}</p>
                    </div>
                    <div className='py-4 text-slate-500 text-sm dark:text-lightBanana'>
                        <p>{article.author},</p>
                        <p className=''>EMDR Therapist, LCSW-C</p>
                    </div>

                    <div className='h-full mt-10'>
                    {article.texts?.map((text, index) => {
    console.log('Text object:', text); // Log the structure of text
    return (
        <ArticleParagraph key={text.id || index} paragraph={text.paragraph || text} />
    );
})}
                    </div>
                </div>
                
            </section>
            <FooterNew />
        </>
    );
}

export default ArticleDetail;