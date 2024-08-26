import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
            <ul className="list-disc pl-5">
                <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
                <li><Link to="/about" className="text-blue-600 hover:underline">About</Link></li>
                <li><Link to="/emdr" className="text-blue-600 hover:underline">EMDR</Link></li>
                <li><Link to="/resources" className="text-blue-600 hover:underline">Resources</Link></li>
                <li><Link to="/contact-us" className="text-blue-600 hover:underline">Contact Us</Link></li>
                <li><Link to="/schedule" className="text-blue-600 hover:underline">Schedule</Link></li>
            </ul>
        </div>
    );
};

export default Sitemap;