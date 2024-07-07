import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Resources from './components/pages/Resources.jsx';
import Contact from './components/pages/Contact';
import EMDR from './components/pages/EMDR';
import Schedule from './components/pages/Schedule';

function App() {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/emdr" element={<EMDR />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/schedule" element={<Schedule />} />
            </Routes>
        </div>
    );
}

export default App;
