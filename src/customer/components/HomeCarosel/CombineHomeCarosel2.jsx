import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


// Combine Data
const MainCaroselData = [
    {
        image: "https://www.leheriya.com/cdn/shop/files/dupatta_banner_1800x.jpg?v=1722245798"
    }
];


//carosel
const MainCarosel2 = () => {
    const items = MainCaroselData.map((item) => (
        <div>
            < img className='cursor-pointer' role='presentation' src={item.image} alt="" />
        </div>
      ));

    //const items = MainCaroselData.map((item) => <img className='cursor-pointer' role='presentation' src={item.image} alt="" />)
    return (
        <AliceCarousel
            items={items}
           disableButtonsControls
           disableDotsControls
            autoPlay
            autoPlayInterval={800}
            infinite

        />

    )

};

export default MainCarosel2;