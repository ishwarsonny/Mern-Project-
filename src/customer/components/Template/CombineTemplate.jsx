import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

//Data
const TemplateData =[
    {
        "image": "https://cdn.shopify.com/s/files/1/0569/1919/5741/files/Kota_Doria_Salwar_Suit-img.png?v=1729745500",
        "title": "Kota Doria Salwar Suits"
    },
    {
        "image": "https://cdn.shopify.com/s/files/1/0569/1919/5741/files/Banarasi-img.png?v=1729745500",
        "title": "Banarasi Salwar Suits"
    },
    {
        "image": "https://cdn.shopify.com/s/files/1/0569/1919/5741/files/Bandhej_Salwar_Suits.png?v=1729752410",
        "title": "Bandhej Salwar Suits"
    },
    {
        "image": "https://cdn.shopify.com/s/files/1/0569/1919/5741/files/South_Cotton_Mangalgiri.png?v=1729752410",
        "title": "South Cotton Mangalgiri"
    },
    {
        "image": "https://cdn.shopify.com/s/files/1/0569/1919/5741/files/Lucknowi_Salwar_Suits-img.png?v=1729745500",
        "title": "Lucknowi Chikankari Salwar Suits"
    },
    {
        "image": "https://cdn.shopify.com/s/files/1/0569/1919/5741/files/Pure_Kota_Doria-img.png?v=1729752410",
        "title": "Pure Kota Doria Salwar Suits"
    },
    {
        "image": "https://cdn.shopify.com/s/files/1/0569/1919/5741/files/Festive-img.png?v=1729745500",
        "title": "Festive Collection"
    },
    {
        "image": "https://cdn.shopify.com/s/files/1/0569/1919/5741/files/Applique_Work-img.png?v=1729745499",
        "title": "Applique Handwork Unstitched Salwar Suit"
    },
    {
        "image": "https://cdn.shopify.com/s/files/1/0569/1919/5741/files/Bagru_Hand_Block_Printed-img.png?v=1729745500",
        "title": "Bagru Hand Block Printed Salwar Suits"
    },
    {
        "image": "https://cdn.shopify.com/s/files/1/0569/1919/5741/files/Kota_Doria_Brush_Painting-img.png?v=1729745500",
        "title": "Kota Doria Brush Painting Salwar Suits"
    },
    {
        "image": "https://cdn.shopify.com/s/files/1/0569/1919/5741/files/Pure_Tussar_Silk_Suits-img.png?v=1729745499",
        "title": "Pure Tussar Silk Salwar Suits"
    },
    {
        "image": "https://cdn.shopify.com/s/files/1/0569/1919/5741/files/Pure_Modal_Silk_Salwar_Suits-img.png?v=1729745500",
        "title": "Pure Modal Silk Salwar Suits"
    }
]

//card
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
             </div>  
        </div>
    )
};

//carosel
const TemplateCarosel = () => {
  return (
    <div className="margin-bottom-30px relative px-2  lg:px-22">
      <div className="flex items-center justify-center gap-4 py-10">
        <img src="https://www.leheriya.com/cdn/shop/files/title_img_left.png?v=1677830223" alt="Decorative Icon" className="h-6 w-auto" />
        <span className="text-lg font-normal tracking-wide uppercase">
          SHOP BY PATTERN / WEAVE / PRINT
        </span>
        <img src="https://www.leheriya.com/cdn/shop/files/title_img_right.png?v=1677830223" alt="Decorative Icon" className="h-6 w-auto" />
      </div>

      <div className="relative p-2 swiper-container">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 20
            }
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          loop={true}
          centeredSlides={false}
          grabCursor={true}
        >
          {TemplateData.map((product, index) => (
            <SwiperSlide key={index}>
              <TemplateCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TemplateCarosel
