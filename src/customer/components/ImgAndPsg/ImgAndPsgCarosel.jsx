import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import ImgAndPsgCard from './ImgAndPsgCard';

const ImgAndPsgCarosel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 1 },
        1024: { items: 1 },
    };

    const items = [0].map((items) => <ImgAndPsgCard/>)
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

export default ImgAndPsgCarosel 