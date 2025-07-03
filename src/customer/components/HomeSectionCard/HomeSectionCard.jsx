import React from 'react'

const HomeSectionCard =({product}) => {
    return(
        <div className='cursor-pointer flex flex-col items-center bg-white overflow-hidden w-[30rem] mx-3'>
            <div className='h-[30rem] w-[28rem] relative'>
                <img className='object-cover object-top w-full h-full' 
                src={product.image} 
                alt="" />
                
                <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4'>
                    <h3 className='text-white text-lg font-medium'>{product.name}</h3>
                </div>
            </div>

            <button className='w-full py-3 bg-black text-white font-medium hover:bg-opacity-90 transition-colors'>
                Add to Cart
            </button>
        </div>

    );
};
export default HomeSectionCard
