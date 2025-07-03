import React from 'react'
// import ProductCardCarosel from '../ProductPage/ProductCard';
// import { PList5 } from '../ProductPage/ProductCard';
import "./Product.css";
import { FaStar } from "react-icons/fa6";
import AliceCarousel from 'react-alice-carousel';
import { NavLink } from 'react-router-dom';

export const PList5 = [
  {
     "image": "https://www.leheriya.com/cdn/shop/files/blue-color-3pc-plain-modal-silk-salwar-suit-material-set-with-lagdi-patta-dupatta-653882_400x.jpg?v=1732047874",
     "title": "Blue Color 3pc Plain Modal Silk Salwar Suit Material Set with Lagdi Patta Dupatta",
     "review": "NO REVIEWS",
     "discountedPrice": "Rs. 5,999.00",
     "Price": "Rs. 12,998.00",
  },
  {
     "image": "https://www.leheriya.com/cdn/shop/files/3pc-plain-modal-silk-salwar-suit-material-set-with-lagdi-patta-dupatta-325876_400x.jpg?v=1732046972",
     "title": "3pc Plain Modal Silk Salwar Suit Material Set with Lagdi Patta Dupatta",
     "review": "NO REVIEWS",
     "discountedPrice": "Rs. 5,999.00",
     "Price": "Rs. 12,998.00",
  },
  {
     "image": "https://www.leheriya.com/cdn/shop/files/beige-color-3pc-plain-modal-silk-salwar-suit-material-set-with-lagdi-patta-dupatta-619109_400x.jpg?v=1732047540",
     "title": "Beige Color 3pc Plain Modal Silk Salwar Suit Material Set with Lagdi Patta Dupatta",
     "review": "NO REVIEWS",
     "discountedPrice": "Rs. 5,999.00",
     "Price": "Rs. 12,998.00",
  },
  {
     "image": "https://www.leheriya.com/cdn/shop/files/pink-color-3pc-plain-modal-silk-salwar-suit-material-set-with-lagdi-patta-dupatta-901555_400x.jpg?v=1732050859",
     "title": "Pink Color 3pc Plain Modal Silk Salwar Suit Material Set with Lagdi Patta Dupatta",
     "review": "NO REVIEWS",
     "discountedPrice": "Rs. 5,999.00",
     "Price": "Rs. 12,998.00",
  },

];


const NewArrivalsCard =({product}) => {
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

const NewArrivals  = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 6 },
  };

  const items = PList5.map((product, index) => (
    <div key={index} className="px-2 py-5">
      <NewArrivalsCard product={product} />
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
      <div className="w-full h-[12rem] text-center border-b py-2">
        <h2 className="text-2xl font-semibold tracking-wide">NEW ARRIVALS</h2>
        <p className="text-sm text-gray-600 mt-6">Styles that guarantee to catch your heart</p>
        <div className="flex  items-right border-t py-1 px-50 mt-6">
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

export default NewArrivals

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