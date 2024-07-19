import React, { useState } from 'react';

import PageContainer from '../ui-elements/PageContainer';
import { Article, Books, ResourcesImage, Video, Podcast } from '../../media/icons';
import SectionSubtitle from '../ui-elements/SectionSubtitle';
import FooterNew from '../FooterNew';
import BooksList from '../ui-elements/BooksList';
import PodcastList from '../ui-elements/PodcastList';
import ArticlesList from '../ui-elements/ArticlesList';
import VideosList from '../ui-elements/VideosList';

const Card = ({ icon, title, buttonText, onButtonClick, isSelected }) => (
  <div
    className={`flex flex-col items-center bg-lightGray rounded-lg shadow-lg p-6 cursor-pointer border-2 border-main
    ${
      isSelected ? 'bg-mint dark:bg-blue-800 border-2 border-main' : 'bg-lightGray hover:bg-blue dark:bg-gray-500 dark:hover:bg-blue'
    }`}
    onClick={onButtonClick}
  >
    <div className="text-4xl mb-5">{icon}</div>
    <h3 className={`text-lg font-normal mb-2 text-main ${isSelected ? 'font-semibold' : ' dark:hover:text-main'}`}>
      {title}
    </h3>
    <button 
      className={`text-md font-light text-main py-1 px-4 rounded bg-mint border border-main sm:text-xs md:text-sm ${isSelected ? 'text-main bg-banana' : 'text-gray-900 dark:text-main'}`}
      onClick={onButtonClick}
    >
      {buttonText}
    </button>
  </div>
);

const Resources = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleButtonClick = (cardTitle) => {
    setSelectedCard(cardTitle);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <section className='bg-gradient-to-b from-white to-cream dark:bg-gradient-to-b dark:from-black dark:to-black poppins'>
        <PageContainer className='text-darkGray dark:bg-black pb-32 '>
          <SectionSubtitle subtitle="Resources" className="sm:my-10 pb-10 sm:pb-0" />
          <div className='flex md:flex-col flex-row items-center justify-between'>
            {/* Image Container */}
            <div className='w-3/6 flex justify-center
                                        md:justify-center sm:w-10/12 md:w-8/12 sm:py-5 md:pb-5'>
                            <ResourcesImage className='h-auto' />
                        </div>
            {/* Text Container */}
            <div className='w-4/6 flex items-center sm:w-full sm:pl-0'>
              <div className="w-full dark:bg-black">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6 ">
                  <Card 
                    icon={<Books className="w-12 h-12" />} 
                    title="Books" 
                    buttonText="Learn More" 
                    onButtonClick={() => handleButtonClick('Books')}
                    isSelected={selectedCard === 'Books'}
                  />
                  <Card 
                    icon={<Podcast className="w-12 h-12" />} 
                    title="Podcasts" 
                    buttonText="Listen Now" 
                    onButtonClick={() => handleButtonClick('Podcasts')}
                    isSelected={selectedCard === 'Podcasts'}
                  />
                  <Card 
                    icon={<Video className="w-12 h-12" />} 
                    title="Videos" 
                    buttonText="Watch Now" 
                    onButtonClick={() => handleButtonClick('Videos')}
                    isSelected={selectedCard === 'Videos'}
                  />
                  <Card 
                    icon={<Article className="w-12 h-12" />} 
                    title="Articles" 
                    buttonText="Read More" 
                    onButtonClick={() => handleButtonClick('Articles')}
                    isSelected={selectedCard === 'Articles'}
                  />
                </div>
              </div>
            </div>
          </div>

            {selectedCard === 'Books' && (<BooksList onClose={handleClose} />)}
            {selectedCard === 'Podcasts' && (<PodcastList onClose={handleClose} />)}
            {selectedCard === 'Articles' && (<ArticlesList onClose={handleClose} />)}
            {selectedCard === 'Videos' && (<VideosList onClose={handleClose} />)}

        
        </PageContainer>
      </section>
      <FooterNew />
    </>
  );
};

export default Resources;
