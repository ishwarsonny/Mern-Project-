
import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionShiftCard from './HomeSectionShiftCard';
import { HomeSectionShiftData } from '../../../Data/HomeSectionShiftData';

const HomeSectionShiftCarosel = () => {

    const responsive = {
                0: { items: 1 },
                720: { items: 3 },
                1024: { items: 5 },
            };
        
          const items=HomeSectionShiftData.map((items)=><HomeSectionShiftCard product={items}/>)
          return (
            <div className="relative px-2 lg:px-40">      
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

export default HomeSectionShiftCarosel