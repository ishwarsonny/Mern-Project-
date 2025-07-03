import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionShiftCarosel from '../../components/HomeSectionShift/CombinedHomeSectionShift'
import ImgAndPsgCarosel from '../../components/ImgAndPsg/CombineImgAndPsg1';
import ImgAndPsgCarosel2 from '../../components/ImgAndPsg/CombineImgAndPsg2';
import MainCarosel from '../../components/HomeCarosel/CombineHomeCarosel1';
import TemplateCarosel from '../../components/Template/CombineTemplate';
import MainCarosel2 from '../../components/HomeCarosel/CombineHomeCarosel2';
import HomeSectionCarosel from '../../components/HomeSectionCard/CombineHomeSection';
import ProductListCarosel from '../../components/ProductList/CombineProductList1';
import { PList1 } from '../../components/ProductList/CombineProductList1';
import { PList2 } from '../../components/ProductList/CombineProductList1';
import { PList3 } from '../../components/ProductList/CombineProductList1';
import { PList4 } from '../../components/ProductList/CombineProductList1';
import { PList5 } from '../../components/ProductList/CombineProductList1';
import FeaturedArticles from '../../components/ProductList/FeaturedArticles';


// Combined Data
// const MainCarouselData = [
//   // Add your MainCarousel data here
//   {
//     image: "https://www.leheriya.com/cdn/shop/files/mobikwik_banner_35b10821-adb1-45b1-bdb7-56373fff27de_1600x.jpg?v=1732625425"
// },

// {
//     image: "https://www.leheriya.com/cdn/shop/files/Banner_7_1600x.jpg?v=1730710767.jpg"
// },
// {
//     image: "https://www.leheriya.com/cdn/shop/files/Leheriya_banner1_copy_1600x.jpg?v=1721710186"
// },
// {
//     image: "https://www.leheriya.com/cdn/shop/files/baner_suits_1600x.jpg?v=1721710270"
// },
// {
//     image: "https://www.leheriya.com/cdn/shop/files/Leheriya_banner2_copy_1600x.jpg?v=1721710367"
// }
// ];

// const ImgAndPsgData = {
//   image: "https://www.leheriya.com/cdn/shop/files/leheriya-exclusive-bhagalpuri-cotton-linen-embroidery-3-pc-salwar-suit-set-120510_900x.jpg?v=1721231235",
//   title: "Unstitched Salwar Suits and Dress Materials",
//   subtitle: "Pick from our best sellers",
//   description: "Dive into a wide variety of designs and motifs to pamper your celebrations with elegance. Our collection has the charm to make our lovely ladies feel special when you walk into the room."
// };

const HomePage2 = () => {
  return (
    <div className="max-w-8.2xl mx-auto">
      {/* <AliceCarousel
                   
                    disableButtonsControls
                    autoPlay
                    autoPlayInterval={1000}
                    infinite
        
                /> */}
     {/*  Main Carousel Section 
      <div className="mb-8">
         Add your MainCarousel component implementation here 
             const items = MainCarouselData.map((item) => <img className='cursor-pointer' role='presentation' src={item.image} alt="" />)
            return (
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    autoPlay
                    autoPlayInterval={1000}
                    infinite
        
                />
        
            )
         
         <img
         src={MainCarouselData.image}
         alt="Image"
         role='presentation'
         className='cursor-pointer'
         />
  
      </div>
       */}
      {/* Image and Passage Section 
      <div className="flex flex-col md:flex-row bg-white shadow-lg overflow-hidden">
         Image Section 
        <div className="md:w-1/2">
          <img
            src={ImgAndPsgData.image}
            alt="Unstitched Salwar Suit"
            className="w-full h-full object-cover"
          />
        </div>

         Content Section 
        <div className="md:w-1/3 px-8 py-16 flex flex-col justify-center">
          <h3 className="text-base font-medium tracking-normal text-gray-500">
            {ImgAndPsgData.subtitle}
          </h3>
          <h2 className="text-3xl font-semibold mt-2">
            {ImgAndPsgData.title}
          </h2>
          <p className="text-gray-600 mt-2 text-lg leading-relaxed">
            {ImgAndPsgData.description}
          </p>
          <button className="mt-4 text-indigo-600 font-semibold hover:underline">
            Explore
          </button>
        </div>
      </div> */}

      {/* Add other sections/components here as needed */}
      <div>
        <MainCarosel/>
        <HomeSectionShiftCarosel/>
        <HomeSectionCarosel/>
        <ImgAndPsgCarosel/>
        <TemplateCarosel/>
        <ProductListCarosel data={PList1} />
        <ProductListCarosel data={PList2}/>
        <ProductListCarosel data={PList3}/>
        <ProductListCarosel data={PList4}/>
        <ProductListCarosel data={PList5}/>
        <MainCarosel2/>
        <ImgAndPsgCarosel2/>
        <FeaturedArticles/>
        
          
      </div>  

    </div>
  );
};

export default HomePage2;
