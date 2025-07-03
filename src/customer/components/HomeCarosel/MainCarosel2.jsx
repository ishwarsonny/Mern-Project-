 import React from 'react'
import { MainCarouselData2 } from './MainCaroselData2'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarosel2 = () => {

    const items = MainCarouselData2.map((item) => <img className='cursor-pointer' role='presentation' src={item.image} alt="" />)
    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            disableDotsControls
           // autoPlay
           // autoPlayInterval={1000}
            //infinite
        />


    )

}



export default MainCarosel2;
