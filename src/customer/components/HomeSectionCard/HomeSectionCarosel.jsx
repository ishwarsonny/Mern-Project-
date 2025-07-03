import React from 'react'
import { HomeSectionCardData } from '../../../Data/HomeSectionCardData';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from './HomeSectionCard';



const HomeSectionCarosel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 2},
    1024: { items: 3},
  };

  const items = HomeSectionCardData.map((items) => <HomeSectionCard product={items} />)
  return (
    <div className="relative px-2 lg:px-4">
      <div className='relative p-2'>
        <AliceCarousel
          items={items}
          disableButtonsControls
          // autoPlay
          // autoPlayInterval={1000}
          infinite
          responsive={responsive}

        />
      </div>
    </div>
  );
};

export default HomeSectionCarosel