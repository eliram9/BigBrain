import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import PageContainer from '../ui-elements/PageContainer';
import SectionSubtitle from '../ui-elements/SectionSubtitle';
import { formatDate } from '../../apollo/formatDate';
import { GET_ALL_ARTICLES } from '../quries/fetchAllArticles';


// Article component for every article on the list.
const Article = ({ id, title, author, createdDate }) => {
    return (
        <div className='cursor-pointer border-2 border-main rounded-md hover:bg-gray-300'>
            <div className='bg-babyBlue py-10 flex justify-center rounded-t-md'>
                <h4 className='text-xl font-bold'>{title}</h4>
            </div>
            <Link to={`/blog/article/${id}`}>
                <div className='p-3'>
                    
                    <p className=''>Author: {author ? `${author}` : "N/A"}</p>
                    <p className='text-sm text-gray-400 '>Created Date: {formatDate(createdDate)}</p>
                </div>
            </Link>  
        </div>
    )
};

const Blog = () => {
        const { data, loading, error } = useQuery(GET_ALL_ARTICLES);
        // Loading state
        if (loading) return <p>Loading...</p>;
        // Error state
        if (error) return <p>Error :( {error.message}</p>;

        console.log(data.texts);
    
    return (
        <>
            <section className='relative w-full h-auto overflow-hidden'>
                {/* <HeroGrayBackground className="absolute inset-0 w-full h-full" /> */}
                <PageContainer className='relative z-10 text-darkGray dark:bg-black pb-32 sm:pb-12 md:pb-16 pt-10'>
                    <SectionSubtitle subtitle="BlogBrain" className="mb-20 sm:mb-4" />
                        <div className='grid grid-cols-2 gap-10'>
                            {/* Render the list of articles */}
                            {data.articles.map((article, index) => (
                                <Article key={article.id} 
                                         id={article.id}
                                         title={article.title}
                                         author={article.author}
                                         createdDate={article.createdDate}
                                />
                            ))}
                        </div>
                    </PageContainer>
            </section>
        </>
    )
}

export default Blog
