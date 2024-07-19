import React from 'react';

import TherapyChat from '../../media/therapyChat.png';
import NoticeThat from '../../media/noticeThat.jpeg';
import TherapistUncensored from '../../media/tu.webp'

const podcasts = [
    { title: 'It Didn’t Start with You', host: 'Laura Reagan', image: TherapyChat, link: "https://podcasts.apple.com/us/podcast/therapy-chat/id1031099411" },
    { title: 'Notice That', host: 'Jen Savage, Melissa Benintendi, and Bridger Falkenstien', image: NoticeThat, link: "https://podcasts.apple.com/us/podcast/notice-that/id1462605147https://www.besselvanderkolk.com/" },
    { title: 'Therapist Uncensored Podcast', host: 'Sue Marriott LCSW, CGP & Ann Kelley PhD', image: TherapistUncensored, link: "https://podcasts.apple.com/us/podcast/therapist-uncensored-podcast/id1146941306" }
];

const PodcastList = ({ onClose }) => (
    <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
        <h3 className="text-2xl text-center mb-4 text-main dark:text-white">Podcast</h3>
        <ul className="text-gray-700 dark:text-gray-300 grid gap-4 md:grid-cols-1 xl:grid-cols-2 grid-cols-3">
            {podcasts.map((podcast, index) => (
                <li key={index} className="mb-2 flex items-start bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                    <div className="flex-shrink-0 mr-4">
                        <img src={podcast.image} alt={podcast.title} className="w-20 h-20 object-cover rounded-lg" />
                    </div>
                    <div className="overflow-hidden">
                        <a href={podcast.link} target="_blank" rel="noopener noreferrer">
                            <h4 className="font-semibold hover:underline sm:text-md">{podcast.title}</h4>
                        </a>
                        <p className='mt-1 text-md sm:text-sm truncate'>{podcast.host}</p>
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

export default PodcastList;