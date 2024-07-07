import React from 'react';

import EmblaCarousel from './EmblaCarousel';
import SectionSubtitle from './SectionSubtitle';

const Reviews = () => (
    <div className="w-full my-10 mb-40">
        <div className="flex flex-col items-center mb-20">
            <SectionSubtitle subtitle="Our Clients say" className="justify-center" />
        </div>
        <EmblaCarousel />
    </div>
);

export default Reviews;

