import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


// Combine Data
const MainCaroselData = [
{
    image: "https://www.leheriya.com/cdn/shop/files/mobikwik_banner_35b10821-adb1-45b1-bdb7-56373fff27de_1600x.jpg?v=1732625425"
},

{
    image: "https://www.leheriya.com/cdn/shop/files/Banner_7_1600x.jpg?v=1730710767.jpg"
},
{
    image: "https://www.leheriya.com/cdn/shop/files/Leheriya_banner1_copy_1600x.jpg?v=1721710186"
},
{
    image: "https://www.leheriya.com/cdn/shop/files/baner_suits_1600x.jpg?v=1721710270"
},
{
    image: "https://www.leheriya.com/cdn/shop/files/Leheriya_banner2_copy_1600x.jpg?v=1721710367"
}

];


//carosel
const MainCarosel = () => {
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

export default MainCarosel;