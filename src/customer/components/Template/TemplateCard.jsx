import React from 'react'

// 4th video

const TemplateCard =({product}) => {
    return(
        <div className='cursor-pointer flex flex-col items-center bg-white overflow-hidden w-[15rem] mx-3'>
            <div className='h-[12rem] w-[12rem]'>
                <img className='object-cover object-top w-full h-full' 
                src={product.image} 
                alt="" />
                
                
                

            </div>

             <div className='p-4'>
                <p className='mt-2 text-tg font-normal textgry-900'>{product.title}</p>
                {/* <p className='mt-2 text-sm text-gray-500'>SKU: LEH-COT31</p> */}
             </div>  
        </div>
    )
}
export default TemplateCard