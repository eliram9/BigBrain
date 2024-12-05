import React from 'react';

import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import PageContainer from '../ui-elements/PageContainer';
import SectionSubtitle from '../ui-elements/SectionSubtitle';
import { formatDate } from '../../apollo/formatDate';
import { GET_ALL_ARTICLES } from '../quries/fetchAllArticles';
import FooterNew from '../FooterNew';
import { LikeIcon } from '../../media/icons';


// Article component for every article on the list.
const Article = ({ id, title, author, createdDate, backgroundImage }) => {
    return (
        <Link to={`/blog/article/${id}`}
              className='block cursor-pointer border-2 border-main p-6 rounded-md overflow-hidden transition duration-300 transform hover:scale-105 hover:bg-blue dark:border-blue dark:bg-darkGray'
        >
            {/* Background Image Section */}
            <div className='relative h-64 rounded-md overflow-hidden'>
                <img src={backgroundImage}
                     alt={`${title}`}
                     className='w-full h-full object-cover transform transition-transform duration-500 hover:scale-106'
                     loading='lazy'
                />
                {/* Overlay for better text readability */}
                <div className='absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-60 flex items-center justify-center transition-opacity duration-500'>
                    <h4 className='text-xl font-bold text-center text-white px-4'>
                        {title}
                    </h4>
                </div>
            </div>

            {/* Article Details */}
            <div className='mt-4'>
                <p className='text-sm font-medium text-gray-700 dark:text-blue'>
                    Author: {author ? author : "N/A"}
                </p>
                <p className='text-sm text-gray-500 dark:text-blue'>
                    Created Date: {formatDate(createdDate)}
                </p>
            </div>
        </Link>
    );
};

  
  

const Blog = () => {
    const { data, loading, error } = useQuery(GET_ALL_ARTICLES);
    // Loading state
    if (loading) return <p></p>;
    // Error state
    if (error) return <p>Error :( {error.message}</p>;

    // console.log(data.articles);
    return (
        <>
            <Helmet>
                <title>BigBrain Therapy | Blog</title>
                <meta name="description" content="Explore the BigBrain Therapy blog for insights, tips, and articles on EMDR therapy and mental wellness." />
                <meta name="keywords" content="EMDR therapy blog, mental health articles, BigBrain Therapy blog" />
                <link rel="canonical" href="https://bigbraintherapy.com/blog" />
                
                {/* Structured Data for Breadcrumbs */}
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
                            }
                        ]
                    }
                `}
                </script>
            </Helmet>
            <section className='relative w-full h-auto overflow-hidden dark:bg-black'>
                {/* <HeroGrayBackground className="absolute inset-0 w-full h-full" /> */}
                <PageContainer className='relative z-10 text-darkGray dark:bg-black pb-32 sm:pb-12 md:pb-16 pt-10 mb-20'>
                    <SectionSubtitle subtitle="BlogBrain" className="mb-20 sm:mb-4" />
                        <div className='grid grid-cols-3 gap-10 sm:block md:grid md:grid-cols-2 md:gaap-10'>
                            {/* Render the list of articles */}
                            {data.articles.map((article, index) => (
                                <Article key={article.id} 
                                         id={article.id}
                                         title={article.title}
                                         author={article.author}
                                         createdDate={article.createdDate}
                                         backgroundImage={article.openingImageUrl}
                                />
                            ))}
                        </div>
                    </PageContainer>
                <FooterNew />
            </section>
        </>
    )
}

export default Blog
