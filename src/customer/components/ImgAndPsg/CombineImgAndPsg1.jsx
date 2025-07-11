import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// (Combined Data)
  const ImgAndPsgCard = () => {
    return (
      <div className="max-w-16xl mx-auto flex flex-col md:flex-row bg-white shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://www.leheriya.com/cdn/shop/files/leheriya-exclusive-bhagalpuri-cotton-linen-embroidery-3-pc-salwar-suit-set-120510_900x.jpg?v=1721231235"
            alt="Unstitched Salwar Suit"
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Content Section */}
        <div className="md:w-2/5 px-20 py-16 flex flex-col justify-center">
  
          <h3 className="text-base font-normal  uppercase tracking-normal text-gray-500">
  
            Pick from our best sellers
          </h3>
          <h2 className="text-3xl font-normal uppercase letter-spacing-5 mt-2">
  
            Unstitched Salwar Suits and Dress Materials
          </h2>
          <p className="text-gray-600 mt-2 text-lg leading-relaxed">
  
            Dive into a wide variety of designs and motifs to pamper your
            celebrations with elegance. Our collection has the charm to make our
            lovely ladies feel special when you walk into the room.
          </p>
          <a
             href="#"
            className="mt-2 align-left text-indigo-600 font-semibold underline hover:underline"
          >
            Explore
          </a>
        </div>
      </div>
    );
  };

// Carosel
const ImgAndPsgCarosel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 1 },
        1024: { items: 1 },
    };

    const items = [0].map((items) => (
        <div  className="px-2 py-5">
          <ImgAndPsgCard/>
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

export default ImgAndPsgCarosel