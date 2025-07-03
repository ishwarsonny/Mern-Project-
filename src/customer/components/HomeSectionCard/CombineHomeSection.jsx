import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { NavLink } from 'react-router-dom';

// Combine Data
export const HomeSectionCardData = [
    {
        title:"NEW ARRIVALS",
        to: "/newArrival",
        image: "https://www.leheriya.com/cdn/shop/files/banarasi-3-pc-unstitched-salwar-suit-984333_750x960_crop_center.jpg?v=1721221208"
    },
    {
        title:"UNSTITCHED SALWAR SUITS",
        to: "/unstitchedSalwarSuits",
        image: "https://www.leheriya.com/cdn/shop/files/banarasi-3-pc-paithani-salwar-suit-425288_750x960_crop_center.jpg?v=1718982148"
    },
    {
        title: "DUPATTAS",
        to: "/dupattas",
        image: "https://www.leheriya.com/cdn/shop/files/elegant-paithani-silk-dupatta-firozi-828858_1000x.jpg?v=1718983762"
    }
]

// Home Section Card
// 

const HomeSectionCard = ({ product }) => {
  return (
      <div className='cursor-pointer flex flex-col items-center bg-white overflow-hidden w-[30rem] mx-3 relative'>
          <div className='h-[30rem] w-[28rem] relative'>
              <img className='object-cover object-top w-full h-full' 
                   src={product.image} 
                   alt="" />
              
              {/* Label and Button positioned at bottom-left */}
              <div className="absolute bottom-8 left-8 text-white">
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <NavLink to={product.to}>
                  <button className="mt-8 px-5 py-3 bg-white text-black font-medium ">
                      EXPLORE NOW
                  </button>
                  </NavLink>
              </div>
          </div>
      </div>
  );
};



// Home Section Carosel
const HomeSectionCarosel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 2},
    1024: { items: 3},
  };

  const items = HomeSectionCardData.map((product, index) => (
    <div key={index} className="px-2 py-5">
      <HomeSectionCard product={product} />
    </div>
  ));
 
  return (
    <div className="relative px-2 lg:px-4">
      <div className='relative p-2'>
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
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
