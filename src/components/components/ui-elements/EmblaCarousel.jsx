import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { LeftArrow, RightArrow } from '../../media/icons';
import ReviewCard from './ReviewCard';
import reviewsData from '../data/reviewsData';

import '../../index.css';


const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', containScroll: 'trim' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);



  const onPrevButtonClick = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const onNextButtonClick = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const onDotButtonClick = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();

  }, [emblaApi]);


  return (
    <div className="w-full mx-auto poppins">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex space-x-4 px-4">
            {reviewsData.map((review, index) => (
                <div key={index} 
                    //  className="embla__slide flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
                    className={`embla__slide flex-shrink-0 xs:w-full sm:w-2/3 md:w-3/5 lg:w-2/6 xl:w-1/4 2xl:w-1/6 ${index === reviewsData.length - 1 ? 'mr-8' : ''}`}

                >
                    <ReviewCard {...review} />
                </div>
            ))}
        </div>
      </div>

    <div className="flex justify-between items-center mt-4 sm:px-2 md:px-4">
        <div>
            <button disabled={prevBtnDisabled}
                    onClick={onPrevButtonClick}
                    className={`embla__button md:p-1 ${prevBtnDisabled ? 'text-gray-500 border-gray-400' : 'text-black border-black'} bg-white p-2 border border-main rounded-full hover:bg-mint mr-5`}
            >
                <LeftArrow stroke={prevBtnDisabled ? 'darkgray' : '#124C5F'} />
            </button>
            <button disabled={nextBtnDisabled}
                    onClick={onNextButtonClick}
                    className={`embla__button md:p-1 ${nextBtnDisabled ? 'text-gray-500 border-gray-400' : 'text-black border-black'} bg-white p-2 border border-main rounded-full hover:bg-mint`}
            >
                <RightArrow stroke={nextBtnDisabled ? 'darkgray' : '#124C5F'} />
            </button>
        </div>
        
        <div className="flex space-x-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`w-4 h-4 rounded-full  ${index === selectedIndex ? 'bg-main dark:bg-banana' : 'bg-gray-300'} hover:bg-mint`}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default EmblaCarousel;
