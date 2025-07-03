// import React from 'react'
// import ProductCardCarosel from '../ProductPage/ProductCard';
// import { PList5 } from '../ProductPage/ProductCard';
import "./Product.css";
import { FaStar } from "react-icons/fa6";
import AliceCarousel from 'react-alice-carousel';
import { NavLink } from 'react-router-dom';


export const PList5 = [
  {
      "image": "https://www.leheriya.com/cdn/shop/files/south-cotton-mangalgiri-3pc-salwar-suit-288245_700x.jpg?v=1739468300",
      "title": "South Cotton Mangalgiri 3pc Salwar Suit",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 3,999.00",
      "Price": "Rs. 7,998.00",
  },
  {
      "image": "https://www.leheriya.com/cdn/shop/files/south-cotton-mangalgiri-3pc-salwar-suit-738745_800x.jpg?v=1739468300",
      "title": "South Cotton Mangalgiri 3pc Salwar Suit",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 3,999.00",
      "Price": "Rs. 12,998.00",
  },
  {
      "image": "https://www.leheriya.com/products/mangalgiri-zari-border-3pc-cotton-silk-salwar-suit-8",
      "title": "South Cotton Mangalgiri 3pc Salwar Suit",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 3,999.00",
      "Price": "Rs. 12,998.00",
  },
  {
      "image": "https://www.leheriya.com/products/mangalgiri-zari-border-3pc-cotton-silk-salwar-suit-7",
      "title": "South Cotton Mangalgiri 3pc Salwar Suit",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 3,999.00",
      "Price": "Rs. 12,998.00",
  },
  {
      "image": "https://www.leheriya.com/cdn/shop/files/kota-doria-embroidered-3-pc-salwar-suit-with-colorful-gota-patti-work-466480_1000x.jpg?v=1736253112",
      "title": "Kota Doria Embroidered 3 pc Salwar Suit with Colorful Gota Patti Work",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 2,199.00",
      "Price": "Rs. 6,499.00",
  },
  {
      "image": "https://www.leheriya.com/products/kota-doria-embroidered-salwar-suit-with-colorful-embroidery-dupatta-13",
      "title": "Kota Doria Embroidered 3 pc Salwar Suit with Colorful Gota Patti Work",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 2,199.00",
      "Price": "Rs. 6,499.00",
  },
  {
      "image": "https://www.leheriya.com/products/kota-doria-embroidered-salwar-suit-with-colorful-embroidery-dupatta-12",
      "title": "Kota Doria Embroidered 3 pc Salwar Suit with Colorful Gota Patti Work",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 2,199.00",
      "Price": "Rs. 6,499.00",
  },
  {
      "image": "https://www.leheriya.com/cdn/shop/files/kota-doria-embroidered-3-pc-salwar-suit-with-colorful-gota-patti-work-482628_600x.jpg?v=1736253112",
      "title": "Kota Doria Embroidered 3 pc Salwar Suit with Colorful Gota Patti Work",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 2,199.00",
      "Price": "Rs. 6,499.00",
  },
  {
      "image": "https://www.leheriya.com/cdn/shop/files/pure-cotton-ikat-handloom-salwar-suit-920591_1000x.jpg?v=1739645239",
      "title": "Pure Cotton Ikat Handloom Salwar Suit",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 2,199.00",
      "Price": "Rs. 5,499.00",
  },
  {
      "image": "https://www.leheriya.com/cdn/shop/files/pure-cotton-ikat-handloom-salwar-suit-625593_600x.jpg?v=1739645239",
      "title": "Pure Cotton Ikat Handloom Salwar Suit",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 2,199.00",
      "Price": "Rs. 5,499.00",
  },
  {
      "image": "https://www.leheriya.com/cdn/shop/files/pure-cotton-ikat-handloom-salwar-suit-651448_1000x.jpg?v=1739645239",
      "title": "Pure Cotton Ikat Handloom Salwar Suit",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 2,199.00",
      "Price": "Rs. 5,499.00",
  },
  {
      "image": "https://www.leheriya.com/cdn/shop/files/pure-cotton-ikat-handloom-salwar-suit-960565_600x.jpg?v=1739645239",
      "title": "Pure Cotton Ikat Handloom Salwar Suit",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 2,199.00",
      "Price": "Rs. 5,499.00",
  },


];



const SuitCard =({product}) => {
  return(
      // 
      
       <div className='product-card-container'>
                  <NavLink to="/ProductDetails" className='product-image-wrapper'>
                     <img
                        src={product.image}
                        alt={product.title}
                        className='product-image'
                     />
                  </NavLink>
      
                  <div className='product-details'>
                     <h3 className='product-title'>{product.title}</h3>
      
                     <div className='rating-section'>
                        <div className='stars'>
                           {[...Array(5)].map((_, i) => (
                              <FaStar key={i} size={14} className='star-icon' />
                           ))}
                        </div>
                        <span className='review-count'>{product.review}</span>
                     </div>
      
                     <div className='price-section'>
                        <span className='discounted-price'>{product.discountedPrice}</span>
                        <span className='original-price'>{product.Price}</span>
                     </div>
                  </div>
      
               </div>
         
  )
};

const Suits  = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 6 },
  };

  const items = PList5.map((product, index) => (
    <div key={index} className="px-2 py-5">
      <SuitCard product={product} />
    </div>
  ));


// const NewArrivals = () => {
//     return (
//       <div className="w-full h-[12rem] text-center border-b py-2">
//         <h2 className="text-2xl font-semibold tracking-wide">NEW ARRIVALS</h2>
//         <p className="text-sm text-gray-600 mt-6">Styles that guarantee to catch your heart</p>
//         <div className="flex  items-right border-t py-1 px-50 mt-6">
//           <button className="text-gray-700 border-r items-center font-medium w-[5rem] h-[5rem] flex it">
//             SORT <span className="ml-2">▼</span>
//           </button>
//           <button className="text-gray-700 border-r px-3flex items-center w-[5rem] h-[5rem] font-medium">FILTER</button>
//         </div>
//       </div>
//     );
//   };

  

  //const items = data.map((items) => <ProductListCard product={items} />)
  return (
    <div className="relative px-40 lg:px-10 mt-5">
    
      {/* <div className="flex items-center justify-center gap-10 py-50">
        <img src="https://www.leheriya.com/cdn/shop/files/title_img_left.png?v=1677830223" alt="Decorative Icon" className="h-6 w-auto" />
        <span className="text-lg font-normal  tracking-wide uppercase">
          SHOP BY PATTERN / WEAVE / PRINT
        </span>
        <img src="https://www.leheriya.com/cdn/shop/files/title_img_right.png?v=1677830223" alt="Decorative Icon" className="h-6 w-auto" />
      </div>
       */}
       
      {/* <div>
        <NewArrivals/>
      </div> */}
      <div className="w-full h-[12rem] text-center border-b py-5">
        <h2 className="text-2xl font-semibold tracking-wide">UNSTITCHED SALWAR SUITS</h2>
        {/* <p className="text-sm text-gray-600 mt-6">Styles that guarantee to catch your heart</p> */}
        <div className="flex  items-right border-t py-1 px-50 mt-12">
          <button className="text-gray-700 border-r items-center font-medium w-[5rem] h-[5rem] flex it">
            SORT <span className="ml-2">▼</span>
          </button>
          <button className="text-gray-700 border-r px-3flex items-center w-[5rem] h-[5rem] font-medium">FILTER</button>
        </div>
      </div>


      <div className='relative p-10'>
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

export default Suits

// const NewArrivals = () => {
//   return (
//     <div className="max-w-8.2xl mx-auto">
//     <div>
//         <NewArrivalsCarosel data={PList5}/>
//     </div>
//    </div>
//   );
// };

// export default NewArrivals