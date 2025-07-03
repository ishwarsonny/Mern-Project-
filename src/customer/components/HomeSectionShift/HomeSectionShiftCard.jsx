import React from 'react'

const HomeSectionShiftCard =({product}) => {
    return(
        <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg overflow-hidden w-[15rem] mx-3'>
            <div className='h-[5rem] w-[4rem]'>
                <img className='object-cover object-top w-full h-full' 
                src={product.image} alt="" />
                

            </div>

              <div className='p-2'>
                <h3 className='text-tg font-low textgry-900'>{product.title}</h3>
                {/* <p className='mt-2 text-sm text-gray-500'>SKU: LEH-COT31</p> */}
             </div> 
        </div>
    )
}
export default HomeSectionShiftCard