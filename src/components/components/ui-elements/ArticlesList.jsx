import React from 'react';

import TraumaPractice from '../../media/traumaPractice.jpg'


const articles = [
    { title: 'What is EMDR Therapy?', author: 'The Trauma Practice', image: TraumaPractice, link: "https://traumapractice.co.uk/what-is-emdr-therapy-in-laymans-terms/" },
];

const ArticlesList = ({ onClose }) => (
    <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
        <h3 className="text-2xl mb-4 text-main dark:text-white text-center">Articles</h3>
        <ul className="text-gray-700 dark:text-gray-300 grid gap-4 md:grid-cols-1 xl:grid-cols-2 grid-cols-3">
            {articles.map((article, index) => (
                <li key={index} className="mb-2 flex items-top bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                    <div className="mr-4 mb-2">
                        <img src={article.image} alt={article.title} className="w-20 object-cover rounded-lg" />
                    </div>
                    <div>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                            <h4 className="font-semibold hover:underline">{article.title}</h4>
                        </a>
                        <p className='mt-1 text-md'>Author: {article.author}</p>
                    </div>
                </li>
            ))}
        </ul>
        <div className='flex justify-center'>
            <button
                className="mt-4 bg-main text-white py-2 px-4 md:text-sm rounded hover:bg-[#0E3A4A]"
                onClick={onClose}
            >
                Close
            </button>
        </div>
    </div>
);

export default ArticlesList;