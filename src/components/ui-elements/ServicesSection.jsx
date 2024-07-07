import React from 'react';

import { Link } from 'react-router-dom'
import { Bulb, Calendar, FQA, Info, Puzzle } from '../../media/icons'
import SectionSubtitle from './SectionSubtitle';

const ServiceCard = ({ title, href, icon: IconComponent, className, border, bg }) => {
    return (
        <Link to={href}
              onClick={() => window.scrollTo(0, 0)}
              className={`flex flex-col justify-center items-center shadow-lg rounded-lg w-52 h-[170px] p-5 border-[2px] text-main ${border} ${bg} transition-all relative transform ease-in-out duration-700 will-change-transform 
                        sm:w-40 sm:h-36 sm:text-sm sm:mb-4
                        md:w-40 md:h-36 md:text-sm
                        bg-gradient-to-b from-mint to-white 
                        hover:bg-gradient-to-b hover:from-lightBanana hover:to-white 
                        hover:border-banana hover:text-main hover:scale-105`}
              style={{ backfaceVisibility: 'hidden' }}
        >
            <div className='mb-2'>
                {IconComponent()}
            </div>
            <div className='truncate mt-2'>{title}</div>
        </Link>
    );
}

const ServicesSection = () => {
    return (
        <div className='py-5 poppins mt-10'>
            <SectionSubtitle subtitle="Services Category" />
            <div className='mt-20 sm:grid sm:grid-cols-2 sm:gap-4 justify-items-center flex justify-around items-center gap-6'>  {/* Adjusted grid layout and added flex for md screens */}
                <ServiceCard title="APPOINTMENT" href="/schedule" border="border-mint" icon={() => <Calendar />} />
                <ServiceCard title="ABOUT" href="/about" border="border-mint" icon={() => <Info />} />
                <ServiceCard title="PROCESS" href="/emdr" border="border-mint" icon={() => <Puzzle />} />
                <ServiceCard title="RESOURCES" href="/resources" border="border-mint" icon={() => <Bulb />} />
            </div>
        </div>
    )
}

export default ServicesSection
