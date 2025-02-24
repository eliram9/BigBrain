import React, { useEffect, useState, useRef } from 'react';

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';

import { GET_ARTICLE_DETAIL } from '../quries/fetchArticle';
import { formatFullDate } from '../../apollo/formatDate';
import { sanitizeAndPrepareHtml } from '../../apollo/htmlHandler';
import ScrollProgressBar from '../ui-elements/ScrollProgressBar';
import useCalculateWords from '../hooks/useCalculateWords';
// import { LikeIcon } from '../../media/icons';
import ContactFooter from '../ContactFooter';

const ArticleParagraph = ({ paragraph }) => {
    const preparedHtml = sanitizeAndPrepareHtml(paragraph);
    return (
        <div className="prose prose-blog dark:prose-invert max-w-none">
            {parse(preparedHtml)}
        </div>
    );
};

const ArticleSource = ({ sourceName, url }) => {
    return (
        <li className='text-darkGray py-2 text-md xs:text-[10px] sm:text-xs'>
            <a href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-main underline hover:text-main/80"
            >
                {sourceName}
            </a>
        </li>
    );
  }

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
        const currentImageRef = imageRef.current; // Save the current reference
    
        const setupObserver = () => {
            observer = new IntersectionObserver(
                ([entry]) => {
                    setIsSticky(!entry.isIntersecting);
                },
                { threshold: 0 }
            );
    
            if (currentImageRef) {
                observer.observe(currentImageRef);
            }
        };
    
        // Set up the observer when the component mounts or when the image loads
        if (currentImageRef && currentImageRef.complete) {
            setupObserver();
        } else if (currentImageRef) {
            currentImageRef.onload = setupObserver;
        }
    
        return () => {
            if (observer && currentImageRef) {
                observer.unobserve(currentImageRef);
            }
        };
    }, [imageRef, article.openingImageUrl]); // Keep dependencies as they were

    if (loading) return <p></p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <Helmet>
                <title>{`BigBrain Therapy | Blog - ${article.title}`}</title>  {/* Updated for conciseness */}
                <meta name="description" content={`${article.summary || 'Read this article on the BigBrain Therapy blog for insights on mental health, including EMDR therapy, trauma, ADHD, anxiety, depression, stress management, relationships, self-esteem, and life transitions in Maryland, Virginia, Arizona & Nebraska.'}`} />
                <meta name="keywords" content={`${article.category}, EMDR therapy, mental health, BigBrain Therapy, ${article.author}, trauma therapy, ADHD resources, anxiety counseling, depression support, stress management, relationship issues, self-esteem, life transitions`} />  {/* Fixed duplication, kept expanded list */}
                <link rel="canonical" href={`https://bigbraintherapy.com/blog/article/${id}`} />
                <meta property="og:title" content={article.title} />
                <meta property="og:description" content={`${article.summary || 'Read this article on the BigBrain Therapy blog for insights on mental health, including EMDR therapy, trauma, ADHD, anxiety, depression, stress management, relationships, self-esteem, and life transitions in Maryland, Virginia, Arizona & Nebraska.'}`} />
                <meta property="og:image" content={article.openingImageUrl} />
                <meta property="og:url" content={`https://bigbraintherapy.com/blog/article/${id}`} />
                <meta property="og:type" content="article" />

                {/* Add Breadcrumbs schema */}
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
                                    "name": "Blog",
                                    "item": "https://bigbraintherapy.com/blog"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "${article.title}",
                                    "item": "https://bigbraintherapy.com/blog/article/${id}"
                                }
                            ]
                        }
                    `}
                </script>

                {/* Add Article schema */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": "${article.title}",
                            "image": "${article.openingImageUrl}",
                            "author": {
                                "@type": "Person",
                                "name": "${article.author}"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "BigBrain Therapy",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://bigbraintherapy.com/logo192.png"
                                }
                            },
                            "datePublished": "${article.createdDate}",
                            "dateModified": "${article.createdDate}",
                            "description": "${article.summary}",
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": "https://bigbraintherapy.com/blog/article/${id}"
                            }
                        }
                    `}
                </script>
            </Helmet>
            <section className='w-full h-auto overflow-hidden poppins dark:bg-black poppins'>
                <div className='relative'>
                    <img 
                        src={article.openingImageUrl}
                        alt={article.title} 
                        className="w-full max-h-[400px] object-cover"
                        ref={imageRef}
                    />                                                                                                                                                                                                       
                </div>  

                <ScrollProgressBar isSticky={isSticky} />   {/* Scroll Progress Bar Positioned Below the Image */}

                <div className='max-w-[750px] mx-auto md:px-[2rem]'>
                    <div className='flex items-center justify-between pt-6 pb-1'>
                        <p className='text-slate-500 text-sm  dark:text-lightBanana xs:text-[8px] sm:text-xs'><span className='font-medium'>Last updated: </span>{formatFullDate(article.createdDate)}</p>
                        <p className='text-main text-xs dark:text-banana'>&#9679;</p>
                        <p className='text-slate-500 text-sm font-medium dark:text-lightBanana xs:text-[8px] sm:text-xs'>{article.category}</p>
                        <p className='text-main text-xs  dark:text-banana'>&#9679;</p>
                        <p className='text-main text-sm font-medium  dark:text-lightBanana xs:text-[8px] sm:text-xs'>{Math.trunc(totalWords / 200)} minutes read</p>
                    </div>
                    <div>
                        <h1 className="text-black text-5xl font-bold dark:text-white mt-10 mb-5 
                                      xs:text-2xl lg:text-4xl"
                        >
                            {article.title}
                        </h1>
                    </div>
                    <div>
                        <p className="text-black text-xl font-semibold pb-2 pt-4 dark:text-white
                                     sm:text-lg"
                        >
                            {article.summary}
                        </p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='py-4 text-slate-500 text-sm dark:text-lightBanana'>
                            <p className='font-medium'>By: {article.author}</p>
                            <p className='xs:text-xs'>EMDR Therapist, LCSW-C</p>
                        </div>

                        
                        {/* <div className='flex justify-between items-center text-main dark:text-white'>
                            <p className='mr-1 font-light text-md'>13</p>
                            <button className="border border-main p-1 rounded-full flex items-center justify-center"
                                    onClick={() => alert("works")}
                                    aria-label="Like"
                            >
                                <LikeIcon />
                            </button>
                        </div> */}
                    </div>

                    <hr />

                    <div className='h-full mt-10 leading-loose mb-32 '>
                        {article.texts?.map((text, index) => {
                            return (
                                <ArticleParagraph key={text.id || index} paragraph={text.paragraph || text} />
                            );
                        })}
                    </div>
                    
                    <hr />
                    {article.sources && article.sources.length > 0 && (
                        <div className="bg-babyBlue px-5 py-5 mt-10 rounded-lg mb-20 md:mb-0">
                            <h2 className="text-darkGray text-xl font-semibold mb-4 md:text-sm">Sources</h2>
                            <ol className="list-decimal list-inside space-y-2">
                                {article.sources.map((source) => (
                                    <ArticleSource key={source.id}
                                                   sourceName={source.sourceName}
                                                   url={source.url}
                                    />
                                ))}
                            </ol>
                        </div>
                    )}
                </div>    
            </section>
            <ContactFooter />
        </>
    );
}

export default ArticleDetail;