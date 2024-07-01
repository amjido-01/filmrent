import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import slide from '../../assets/slide.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Slider = () => {
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    className='mt-20 border-2 border-red-500 mySwiper'
  >
    <SwiperSlide>
        <img src={ slide} alt="slide" />
    </SwiperSlide>
    <SwiperSlide>
    <img src={ slide} alt="slide" />
    </SwiperSlide>
    <SwiperSlide>
    <img src={ slide} alt="slide" />
    </SwiperSlide>
    <SwiperSlide>
    <img src={ slide} alt="slide" />
    </SwiperSlide>
    ...
  </Swiper>
  )
}

export default Slider