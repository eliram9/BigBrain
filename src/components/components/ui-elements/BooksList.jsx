import React from 'react';
import Faces from '../../media/faces.jpg';
import Kolk from '../../media/kolk.jpg';


const books = [
    { title: 'It Didn’t Start with You', author: 'Mark Wolynn', image: Faces, link: "https://markwolynn.com/it-didnt-start-with-you/" },
    { title: 'The Body Keeps The Score', author: 'Bessel van der Kolk', image: Kolk, link: "https://www.besselvanderkolk.com/" },
];

const BooksList = ({ onClose }) => (
    <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
        <h3 className="text-2xl mb-4 text-main dark:text-white text-center">Books</h3>
        <ul className="text-gray-700 dark:text-gray-300 grid gap-4 md:grid-cols-1 xl:grid-cols-2 grid-cols-3">
            {books.map((book, index) => (
                <li key={index} className="mb-2 flex items-top bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                    <div className="mr-4 mb-2">
                        <img src={book.image} alt={book.title} className="w-16 object-cover rounded-lg" />
                    </div>
                    <div>
                        <a href={book.link} target="_blank" rel="noopener noreferrer">
                            <h4 className="font-semibold hover:underline">{book.title}</h4>
                        </a>
                        <p className='mt-1 text-md'>Author: {book.author}</p>
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