import React from 'react';

// Sample data for videos
const videos = [
    { id: 1, src: "https://www.youtube.com/embed/bIJZQAr9nQo?si=w3IhswI_hwtIFpjd", 
      title: "Video 1", 
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    },
    { id: 2, src: "https://www.youtube.com/embed/hKrfH43srg8?si=xKgRsYXmkf0bWmQs", 
      title: "Video 2", 
    },
    { id: 3, src:"https://www.youtube.com/embed/Pkfln-ZtWeY?si=7XSC0h3VLnuObl2j", title: "Video 3" },
    // Add more video objects as needed
];

const BooksList = ({ onClose }) => (
    <div className="mt-6 p-4 bg-gray-100 dark:bg-darkGray rounded-lg shadow-lg">
        <h3 className="text-2xl mb-6 text-main dark:text-white text-center ">Videos</h3>
        <ul className="text-gray-700 dark:text-gray-300 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 ">
            {videos.map(video => (
                <li key={video.id} className="flex items-top bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div className="w-full">
                        <iframe 
                            width="100%" 
                            height="300" 
                            src={video.src}
                            title={video.title} 
                            allow={video.allow} 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className='border border-white rounded-lg shadow-lg h-[300px]'
                        ></iframe>
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

export default BooksList;
