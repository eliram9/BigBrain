import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo, LightModeIcon, DarkModeIcon } from '../media/icons'
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {
    let location = useLocation();
    return (
        <Link to={href} className={`${className} relative group dark:text-white`}>
            {title}
            <span className={`absolute h-[1px] inline-block bg-main left-0 -bottom-0.5
                            group-hover:w-full transition-[width] ease duration-800"
                            ${location.pathname === href ? "w-full" : "w-0"} dark:bg-white`}
            >
                &nbsp;
            </span>
        </Link>
    );
}

const MobileCustomLink = ({ href, title, className = "", onClick }) => {
    let location = useLocation();
    return (
        <Link to={href} className={`${className} relative group`} onClick={onClick}>
            {title}
            <span className={`absolute h-[1px] inline-block bg-white dark:bg-black left-0 -bottom-0.5
                            group-hover:w-full transition-[width] ease duration-800
                            ${location.pathname === href ? "w-full" : "w-0"}`}
            >
                &nbsp;
            </span>
        </Link>
    );
}

const Navbar = () => {
    const [theme, toggleTheme] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null); 
    let location = useLocation();

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleClickOutside = (event) => { 
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }

    useEffect(() => { 
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Close the menu when the route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <header className='w-full px-32 py-5 flex items-center justify-between dark:black relative poppins md:px-4 lg:px-8 xl:px-12 dark:bg-black'>

            {/* --- ### --- RESPONSIVE ONLY --- ### --- */}
            {/* Hamburger menu responsive mode */}
            <button className='flex-col justify-center items-center hidden sm:flex z-30' onClick={handleClick}>
                <span className={`bg-main dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`bg-main dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-main dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </button>

            {/* Logo in the center in responsive mode */}
            <div className='w-full hidden sm:flex justify-center'>
                <Logo className={theme === "dark" ? "white" : "#124C5F"} width={30} height={30} />
            </div>

            {/* Responsive menu */}
            { isOpen ? 
                <div ref={menuRef} className='hidden z-30 lg:flex flex-col justify-between items-center fixed top-[20%] left-1/2 -translate-x-1/2 rounded-xl backdrop-blur-md 
                              bg-slate-900/80 dark:bg-white/50 px-4 py-16 min-w-[80vw]' 
                >
                    <nav className="flex flex-col items-center justify-between">
                        <div className="items-center">
                            <div className='flex flex-col justify-center mb-12'>
                                <span className="text-[26px] text-white ml-1 font-extralight dark:text-black">
                                    Big
                                    <span className='font-normal mr-2'>
                                        Brain
                                    </span>
                                    Therapy
                                </span>
                            </div>    
                            <div className="text-center mb-12">
                                <div className="w-full flex justify-center mb-4">
                                    <MobileCustomLink href="/" 
                                                      title="Home Page" 
                                                      className="text-white dark:text-black dark:font-normal text-md font-extralight block w-3/5" 
                                                      onClick={handleClick} 
                                    />
                                </div>
                                <div className="w-full flex justify-center mb-4">
                                    <MobileCustomLink href="/about" 
                                                      title="About" 
                                                      className="text-white dark:text-[#4E4C46] dark:font-normal text-md font-extralight block w-3/5" 
                                                      onClick={handleClick} 
                                    />
                                </div>
                                <div className="w-full flex justify-center mb-4">
                                    <MobileCustomLink href="/emdr" 
                                                      title="EMDR" 
                                                      className="text-white dark:text-[#4E4C46] dark:font-normal text-md font-extralight block w-3/5" 
                                                      onClick={handleClick} 
                                    />
                                </div>
                                <div className="w-full flex justify-center mb-4">
                                    <MobileCustomLink href="/resources" 
                                                      title="Resources" 
                                                      className="text-white dark:text-[#4E4C46] dark:font-normal text-md font-extralight block w-3/5" 
                                                      onClick={handleClick} 
                                    />
                                </div>
                                <div className="w-full flex justify-center mb-4">
                                    <MobileCustomLink href="/blog" 
                                                      title="Blog" 
                                                      className="text-white dark:text-[#4E4C46] dark:font-normal text-md font-extralight block w-3/5" 
                                                      onClick={handleClick} 
                                    />
                                </div>
                                <div className="w-full flex justify-center mb-4">
                                    <MobileCustomLink href="/contact-us" 
                                                      title="Contact" 
                                                      className="text-white dark:text-[#4E4C46] dark:font-normal text-md font-extralight block w-3/5" 
                                                      onClick={handleClick} 
                                    />
                                </div>
                            </div>
                        </div>
                    </nav>
                    <nav>
                        <div className="flex items-center dark:text-black text-black">
                            <div className='bg-white py-1 rounded px-3 dark:bg-black'>
                                <p className='dark:text-white dark:font-light text-sm'>(301) 337-5676</p>
                            </div>
                        </div>
                    </nav>
                </div>
                : 
                null
            }
            {/* --- ### --- END RESPONSIVE MODE --- ### --- */}
            

            <div className='w-full flex justify-between items-center sm:hidden'>
                <nav className="items-center justify-between poppins dark:bg-black">
                    <div className="flex items-center">
                        <Link className='flex items-center md:mt-1' to="/" >
                            <Logo className={theme === "dark" ? "white" : "#124C5F"} alt="logo"  />
                            <span className="text-[26px] md:text-base text-main ml-1 font-extralight dark:text-white">
                                Big
                                <span className='font-normal'>
                                    Brain
                                </span>
                            </span>
                        </Link>    
                        <div className="ml-4 md:ml-1 mt-1 items-center">
                            <CustomLink href="/about" title="About" className="ml-10 text-main text-sm md:text-xs dark:font-light" />
                            <CustomLink href="/emdr" title="EMDR" className="ml-10 text-main text-sm md:text-xs dark:font-light" />
                            <CustomLink href="/resources" title="Resources" className="ml-10 text-main text-sm md:text-xs dark:font-light" />
                            <CustomLink href="/blog" title="Blog" className="ml-10 text-main text-sm md:text-xs dark:font-light" />
                            <CustomLink href="/contact-us" title="Contact" className="ml-10 text-main text-sm md:text-xs dark:font-light" />
                        </div>
                    </div>
                </nav>
                <nav>
                    <div className="flex items-center text-main dark:text-white ">
                        <p className='font-normal text-sm md:text-xs mt-1'>(301) 337-5676</p>
                        <button onClick={toggleTheme} className='w-8 md:w-6 ml-4 flex items-center justify-center rounded-full p-[3px]'>
                            { theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon /> }     
                        </button>
                    </div>
                </nav>
            </div>

            {/* This logo will be dispalyed only on mobile */}
            <div className='hidden sm:flex text-main dark:text-white'>
                {/* <Logo className='absolute translate-x-[-50%] left-[50%] top-5 fill-main h-[28px] dark:fill-white' /> */}

                <button onClick={toggleTheme} className='w-full h-auto flex items-center justify-end z-20'>
                    { theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon /> }     
                </button>
            </div>    
        </header>
    );
};

export default Navbar;
