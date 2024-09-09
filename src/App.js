import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Resources from './components/pages/Resources.jsx';
import Contact from './components/pages/Contact';
import EMDR from './components/pages/EMDR';
import Schedule from './components/pages/Schedule';
import GoUpButton from './components/ui-elements/GoUpButton';
import Blog from './components/pages/Blog';
import ArticleDetail from './components/pages/ArticleDetail';

function App() {
    return (
        <div className='flex flex-col'>
            <Helmet>
                <title>Big Brain Therapy</title>
                <meta name="description" content="EMDR and mental health services" />
                <link rel="canonical" href="https://www.bigbraintherapy.com" />
            </Helmet>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/emdr" element={<EMDR />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/article/:id" element={<ArticleDetail />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <GoUpButton />
        </div>
    );
}

export default App;