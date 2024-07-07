import React, {useState, useEffect} from 'react'
import { Qoutes } from '../../media/icons'

const QouteBox = ({ qoute, author }) => {

    const [bannerWidth, setBannerWidth] = useState("");

    useEffect(() => {
        const calculateWidth = () => {
            const screenWidth = window.innerWidth;
    
            let newWidth;
            if (screenWidth <= 767) {
                newWidth = `${screenWidth * 0.95}px`; // 80% of the screen width for smaller screens
            } else if (screenWidth > 767 && screenWidth <= 1279) {
                newWidth = `${screenWidth * 0.7}px`; // 60% of 767px for medium screens
            } else {
                newWidth = `${screenWidth * 0.65}px`; // 50% of the screen width for larger screens
            }
        
            setBannerWidth(newWidth);
        };
    
        calculateWidth();
        window.addEventListener('resize', calculateWidth);
    
        return () => window.removeEventListener('resize', calculateWidth);
    }, []);

    return (
        <div>
            <div style={{ boxShadow: '10px 10px 50px -30px rgba(0, 0, 0, 0.6)', width: bannerWidth }} 
                 className='w-[1200px] h-auto flex flex-col justify-center rounded-xl items-center relative poppins bg-white text-black
                            dark:bg-darkGray dark:text-lightGray 
                            xs:w-72 sm:w-72'
            >
                <Qoutes className='w-40 absolute -left-10 top-[-48%] flex justify-center 
                                  sm:-left-4 xs:w-20 lg:w-28 xl:w-32 z-10'
                />
                <h3 className='text-2xl font-thin mb-4 italic pt-8 px-16 text-center z-10 
                               xs:text-lg sm:font-light lg:text-base'
                >
                    {qoute}
                </h3>
                <h4 className='text-center mb-8 xs:text-sm'>{author}</h4>
            </div>
        </div>
    )
}

export default QouteBox
