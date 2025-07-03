// import React from 'react'
// import ProductCardCarosel from '../ProductPage/ProductCard';
// import { PList5 } from '../ProductPage/ProductCard';
import "./Product.css";
import { FaStar } from "react-icons/fa6";
import AliceCarousel from 'react-alice-carousel';
import { NavLink } from 'react-router-dom';

export const PList5 = [
  {
      "image": "https://www.leheriya.com/cdn/shop/files/premium-georgette-banarasi-bandhej-gharchola-dupattas-293226_600x.jpg?v=1717699978",
      "title": "Premium Georgette Banarasi Bandhej Gharchola Dupattas",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs.  2,799.00",
      "Price": "Rs. 9,250.00",
  },
  {
      "image": "https://www.leheriya.com/cdn/shop/files/premium-georgette-banarasi-bandhej-gharchola-dupattas-875407_600x.jpg?v=1717699978",
      "title": "Premium Georgette Banarasi Bandhej Gharchola Dupattas",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 2,799.00",
      "Price": "Rs.  9,250.00",
  },
  {
      "image": "https://www.leheriya.com/cdn/shop/files/premium-georgette-banarasi-bandhej-gharchola-dupattas-152302_600x.jpg?v=1717699978",
      "title": "Premium Georgette Banarasi Bandhej Gharchola Dupattas",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs.2,799.00",
      "Price": "Rs. 9,250.00",
  },
  {
      "image": "https://www.leheriya.com/cdn/shop/files/premium-georgette-banarasi-bandhej-gharchola-dupattas-152302_700x.jpg?v=1717699978",
      "title": "Premium Georgette Banarasi Bandhej Gharchola Dupattas",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 2,199.00",
      "Price": "Rs. 4,999.00",
  },
  {
      "image": "https://www.leheriya.com/cdn/shop/files/premium-georgette-banarasi-bandhej-gharchola-dupattas-807961_700x.jpg?v=1717700087",
      "title": "Premium Georgette Banarasi Bandhej Gharchola Dupattas",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 2,799.00",
      "Price": "Rs. 9,250.00",
  },
  {
      "image": "https://www.leheriya.com/cdn/shop/files/black-premium-georgette-banarasi-bandhej-gharchola-dupattas-622063_600x.jpg?v=1735040251",
      "title": "Black Premium Georgette Banarasi Bandhej Gharchola Dupattas",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 2,799.00",
      "Price": "Rs. 9,250.00",
  },
  {
      "image": "https://www.leheriya.com/cdn/shop/files/premium-georgette-banarasi-bandhej-gharchola-dupattas-564187_600x.jpg?v=1717699978",
      "title": " Premium Georgette Banarasi Bandhej Gharchola Dupattas",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs.  2,799.00",
      "Price": "Rs. 9,250.00",
  },
  {
      "image": "https://www.leheriya.com/cdn/shop/files/premium-georgette-banarasi-bandhej-gharchola-dupattas-263532_700x.jpg?v=1738357520",
      "title": "Premium Georgette Banarasi Bandhej Gharchola Dupattas",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 2,799.00",
      "Price": "Rs. 6,999.00",
  },
  {
      "image": "https://www.leheriya.com/cdn/shop/files/premium-georgette-banarasi-bandhej-gharchola-dupattas-612672_600x.jpg?v=1717700087",
      "title": "Premium Georgette Banarasi Bandhej Gharchola Dupattas",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 2,799.00",
      "Price": "Rs. 6,999.00",
  },
  {
      "image": "https://www.leheriya.com/cdn/shop/files/premium-georgette-banarasi-bandhej-gharchola-dupattas-927733_600x.jpg?v=1735042645",
      "title": "Premium Georgette Banarasi Bandhej Gharchola Dupattas",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 2,799.00",
      "Price": "Rs. 6,999.00",
  },
  {
      "image": "https://www.leheriya.com/cdn/shop/files/yellow-color-premium-georgette-banarasi-bandhej-gharchola-dupattas-141592_600x.jpg?v=1718048803",
      "title": " yellow Premium Georgette Banarasi Bandhej Gharchola Dupattas",
      "review": "NO REVIEWS",
      "discountedPrice": "Rs. 2,099.00",
      "Price": "Rs. 6,199.00",
  },


];


const DupattaCard =({product}) => {
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

const Dupattas  = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 6 },
  };

  const items = PList5.map((product, index) => (
    <div key={index} className="px-2 py-5">
      <DupattaCard product={product} />
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
        <h2 className="text-2xl font-semibold tracking-wide">Dupattas</h2>
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

export default Dupattas

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