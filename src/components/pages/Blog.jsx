import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import PageContainer from '../ui-elements/PageContainer';
import SectionSubtitle from '../ui-elements/SectionSubtitle';
import { formatDate } from '../../apollo/formatDate';

const GET_ALL_ARTICLES = gql`
    query AllArticles {
        articles {
            id
            title
            createdDate
        }
    }
`;

const Blog = () => {
        const { data, loading, error } = useQuery(GET_ALL_ARTICLES);
        // Loading state
        if (loading) return <p>Loading...</p>;
        // Error state
        if (error) return <p>Error :( {error.message}</p>;

        console.log(data);
    
    return (
        <>
            <section className='relative w-full h-auto overflow-hidden'>
                {/* <HeroGrayBackground className="absolute inset-0 w-full h-full" /> */}
                <PageContainer className='relative z-10 text-darkGray dark:bg-black pb-32 sm:pb-12 md:pb-16 pt-10'>
                    <SectionSubtitle subtitle="BlogBrain" className="mb-20 sm:mb-4" />
                        <div className='flex md:flex-col flex-row items-center justify-between'>
                            {/* Render the list of articles */}
                            {data.articles.map(article => (
                                <div key={article.id} className='mb-4 p-4 border rounded'>
                                    <h3 className='text-xl font-bold'>{article.title}</h3>
                                    <p className='text-gray-600'>Created Date: {formatDate(article.createdDate)}</p>
                                </div>
                            ))}
                        </div>
                    </PageContainer>
            </section>
        </>
    )
}

export default Blog
