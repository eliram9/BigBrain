import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

import PageContainer from '../ui-elements/PageContainer';
import SectionSubtitle from '../ui-elements/SectionSubtitle';
import { GET_ARTICLE_DETAIL } from '../quries/fetchArticle';
import { formatDate } from '../../apollo/formatDate';
import { sanitizeAndPrepareHtml } from'../../apollo/htmlHandler';


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

    useEffect(() => {
        if (data && data.article) {
            setArticle(data.article);
        }
    }, [data]);

    if (loading) return <p></p>;
    if (error) return <p>Error: {error.message}</p>;

    console.log(article.texts);

    return (
        <>
            <section className='w-full h-auto overflow-hidden'>
                <div className='relative'>
                    <img 
                        src="https://cdn.pixabay.com/photo/2021/01/05/06/40/boat-5889919_960_720.png" 
                        alt="boat on water" 
                        className="w-full max-h-[400px] object-cover"
                    />
                    {/* Text overlay */}
                    {/*                                                                                                                                                                                                                 */}
                </div>
                

                <div className='max-w-[750px] mx-auto'>
                <div className='flex items-center justify-between pt-6 pb-1'>
                    <p className='text-slate-500 text-sm font-medium'>some other text whout this category</p>
                    <p className='text-main text-xs'>&#9679;</p>
                    <p className='text-main text-sm font-medium'>Last updated: December 1, 2023</p>
                    <p className='text-main text-xs'>&#9679;</p>
                    <p className='text-main text-sm font-medium'>6 minutes read</p>
                </div>
                <div>
                    <p className="text-black text-5xl font-bold ">{article?.title}</p>
                </div>
                <div>
                    <p className="text-black text-xl font-semibold py-2">A well-designed blog is your best salesperson. A blog works 24/7 to generate traffic, inform your potential customers, build brand awareness and capture leads when they’re ready to convert. Conversely, a poorly designed blog can lead to a bad first impression,</p>
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