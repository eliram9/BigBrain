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
        <div className="mb-2 articleContent">
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
            <section className='relative w-full h-auto overflow-hidden'>
                <PageContainer className='relative z-10 text-darkGray dark:bg-black pb-32 sm:pb-12 md:pb-16 pt-10'>
                    <SectionSubtitle subtitle={article.title} className="mb-20 sm:mb-4" />
                    <p>Last Update: {formatDate(article.createdDate)}</p>
                    <p>By: {article.author}</p>
                    

                    <br />

                    {article.texts?.map((text, index) => (
                        <ArticleParagraph key={text.id} 
                                          paragraph={text.paragraph} 
                        />
                    ))}
                </PageContainer>
            </section>
        </>
    );
}

export default ArticleDetail;