import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// Combined Data
const HomeSectionShiftData = [
  // Add your HomeSectionShift data here
  {
    "image": "https://cdn.shopify.com/s/files/1/0569/1919/5741/files/Free-Shipping-Icons.png?v=1677829109",
    "title": "Free Shipping"
 },
 {
     "image": "https://cdn.shopify.com/s/files/1/0569/1919/5741/files/Cash-On-Delivery.png?v=1677829110",
     "title": "CASH ON DELIVERY"
  },
  {
     "image": "https://cdn.shopify.com/s/files/1/0569/1919/5741/files/Safe-Payment-Icons.png?v=1677829109",
     "title": "SAFE PAYMENT"
  },
  {
     "image": "https://cdn.shopify.com/s/files/1/0569/1919/5741/files/Ontime-Delivery-Icons.png?v=1677829109",
     "title": "ONTIME DELIVERY"
  },
  {
     "image": "https://cdn.shopify.com/s/files/1/0569/1919/5741/files/made-india-Icons.png?v=1677829109",
     "title": "MADE IN INDIA"
  },   
];

// HomeSectionShiftCard Component
const HomeSectionShiftCard =({item}) => {
  return(
      <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg overflow-hidden w-[15rem] mx-3'>
          <div className='h-[5rem] w-[4rem]'>
              <img className='object-cover object-top w-full h-full' 
              src={item.image} alt="" />
              

          </div>

            <div className='p-2'>
              <h3 className='text-tg font-low textgry-900'>{item.title}</h3>
              {/* <p className='mt-2 text-sm text-gray-500'>SKU: LEH-COT31</p> */}
           </div> 
      </div>
  )
}

// HomeSectionShiftCarosel Component
const HomeSectionShiftCarosel = () => {
  const responsive = {
    0: { items: 1 },
    768: { items: 3 },
    1024: { items: 5 }
  };

  const items = HomeSectionShiftData.map((item, index) => (
    <div key={index} className="px-2 py-5">
      <HomeSectionShiftCard item={item} />
    </div>
  ));
  return (
    <div className="relative px-2 lg:px-40">      
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

}

// // HomeSectionShiftCarosel Component
// const HomeSectionShiftCarosel = () => {

//   const responsive = {
//               0: { items: 1 },
//               720: { items: 3 },
//               1024: { items: 5 },
//           };
      
//         const items=HomeSectionShiftData.map((items)=><HomeSectionShiftCard product={items}/>)
//         return (
//           <div className="relative px-2 lg:px-40">      
//                 <div className='relative p-2'>
//                   <AliceCarousel
//                     items={items}
//                     disableButtonsControls
//                     // autoPlay
//                     // autoPlayInterval={1000}
//                     infinite
//                     responsive={responsive}
//                   />
                  
//                 </div>
//               </div>

//         );
// };

export default HomeSectionShiftCarosel;
