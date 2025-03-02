import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';

const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Resources = lazy(() => import('./components/pages/Resources'));
const Contact = lazy(() => import('./components/pages/Contact'));
const EMDR = lazy(() => import('./components/pages/EMDR'));
const Schedule = lazy(() => import('./components/pages/Schedule'));
const Blog = lazy(() => import('./components/pages/Blog'));
const ArticleDetail = lazy(() => import('./components/pages/ArticleDetail'));
const GoUpButton = lazy(() => import('./components/ui-elements/GoUpButton'));


function App() {
    return (
        <div className='flex flex-col'>
            <Helmet>
                <meta name="robots" content="index, follow" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#124C5F" />
            </Helmet>
            <Navbar />
            <Suspense fallback={null}>
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
            </Suspense>
            <Suspense fallback={null}>
                <GoUpButton />
            </Suspense>
        </div>
    );
}

export default App;