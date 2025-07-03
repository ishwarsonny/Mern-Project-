import React from 'react'
import ProductCardCarosel from './ProductCard'
import { PList5 } from './ProductCard';

const Product = () => {
  return (
    <div className="max-w-8.2xl mx-auto">
    <div>
        <ProductCardCarosel data={PList5}/>
    </div>
   </div>
  );
};

export default Product