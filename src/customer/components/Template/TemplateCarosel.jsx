import React from 'react'
//import { TemplateData } from '../../../Data/TemplateData';
import AliceCarousel from 'react-alice-carousel'
//import TemplateCard from './TemplateCard';


const TemplateCarosel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 6 },
  };

  const items = TemplateData.map((items) => <TemplateCard product={items} />)
  return (
    <div className="relative px-2 lg:px-10">
    
      <div className="flex items-center justify-center gap-4 py-10">
        <img src="https://www.leheriya.com/cdn/shop/files/title_img_left.png?v=1677830223" alt="Decorative Icon" className="h-6 w-auto" />
        <span className="text-lg font-normal  tracking-wide uppercase">
          SHOP BY PATTERN / WEAVE / PRINT
        </span>
        <img src="https://www.leheriya.com/cdn/shop/files/title_img_right.png?v=1677830223" alt="Decorative Icon" className="h-6 w-auto" />
      </div>
      
      
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

export default TemplateCarosel