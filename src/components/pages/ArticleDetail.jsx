import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

import { GET_ARTICLE_DETAIL } from '../quries/fetchArticle';
import { formatDate } from '../../apollo/formatDate';
import { sanitizeAndPrepareHtml } from '../../apollo/htmlHandler';
import ScrollProgressBar from '../ui-elements/ScrollProgressBar';

const ArticleParagraph = ({ paragraph }) => {
    const preparedHtml = sanitizeAndPrepareHtml(paragraph);
    return (
        <div className="mb-10 articleContent poppins font-light">
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

    useEffect(() => {
        if (data && data.article) {
            setArticle(data.article);
        }
    }, [data]);

    // Image 
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSticky(!entry.isIntersecting);
            },
            { threshold: 0 }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, [imageRef]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    console.log(article.texts);

    return (
        <>
            <section className='w-full h-auto overflow-hidden poppins'>
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
                        <p className='text-slate-500 text-sm font-medium'>{article.category}</p>
                        <p className='text-main text-xs'>&#9679;</p>
                        <p className='text-main text-sm font-medium'>Last updated: {formatDate(article.createdDate)}</p>
                        <p className='text-main text-xs'>&#9679;</p>
                        <p className='text-main text-sm font-medium'>6 minutes read</p>
                    </div>
                    <div>
                        <p className="text-black text-5xl font-bold ">{article.title}</p>
                    </div>
                    <div>
                        <p className="text-black text-xl font-semibold pb-2 pt-4">{article.summary}</p>
                    </div>
                    <div className='py-4 text-gray-500 text-sm'>
                        <p>{article.author},</p>
                        <p className=''>EMDR Therapist, LCSW-C</p>
                    </div>

                    <div className='h-full mt-10'>
                        {article.texts?.map((text, index) => (
                            <ArticleParagraph key={text.id} 
                                            paragraph={text.paragraph} 
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ArticleDetail;