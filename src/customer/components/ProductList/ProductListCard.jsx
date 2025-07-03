import React from 'react'

const ProductListCard =({product}) => {
    return(
        <div className='cursor-pointer flex flex-col items-center bg-white overflow-hidden gap-25 w-[9rem] mx-20'>
            {/* <div className='h-[22rem] w-[10rem]'> */}
                <img className='object-cover object-top w-full h-full' 
                src={product.image} 
                alt="" />
            {/* </div> */}

             <div className='p-4'>
                <p className='mt-2 text-tg font-normal textgry-900'>{product.title}</p>
             </div>  
        </div>
    )
}
export default ProductListCard