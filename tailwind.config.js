
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
      fontSize: {
          xs: '0.7rem',
          sm: '0.8rem',
          md: "0.88rem",
          base: '1rem',
          lg:'1.1rem',
          xl: '1.25rem',
          '2xl': '1.5rem',
          '3xl': '2rem',
          '4xl': '2.5rem',
          '5xl': '3.0rem',
          '6xl': '3.75rem'
      },
      letterSpacing: {
          huge: "1em",
          wider: '0.75em',
          wide: '0.55em',
          reg: '0.2em',
          text: '0.03em'
      },
      fontFamily: {
          'days': ['Days One', 'sans-serif']
      },
      extend: {
          backgroundImage: {
              'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
              'gradient-conic':
              'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
             
          },
          filter: {
              'blur-5': 'blur(5px)',
          },

          colors: {
              main: "#124C5F",
              mint: "#C7E7E1",
              lightGray: "#FAFBFB",
              banana: "#FFEE94",
              lightBanana: "#FEFAE3",
              blue: "#DEECF5",
              darkGray: "#5B5B5B",
              pink: "#EBA8BF",
              cream: "#FFFFF6",
              babyBlue: "#F6FAF9",
              black: "#4E4C46"
          }
      },
      screens: {
          "3xl": { min: "1535px" }, //Extra-large desktops

          "2xl": { min: "1280px" }, // Larger desktops

          xl: { max: "1279px" }, // Laptops and desktops

          lg: { max: "1023px" }, // Tablets and smaller laptops

          md: { max: "768px" }, // Tablets and smaller laptops

          sm: { max: "639px" }, // Larger mobile devices

          xs: { max: "479px" } // Mobile devices 
      },
  },
  plugins: [
      require('tailwindcss-filters'),
  ],
}
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
