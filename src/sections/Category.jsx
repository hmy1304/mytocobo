import React, {useRef, useEffect} from 'react'
import { categoryData } from '../utils/categoryData'
import "./styles/Category.scss"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Category = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)

  useEffect(()=>{
    if(swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl=prevRef.current
      swiperRef.current.params.navigation.nextEl=nextRef.current
      swiperRef.current.navigation.destroy()
      swiperRef.current.navigation.init()
      swiperRef.current.navigation.update()
    }
  },[])

  return (
    <div className='inner category-inner'>
      <div className="t-wrap">
        <h2 className="tit">
          DISCOVERY
        </h2>
        <p className="txt">
          category
        </p>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          type:'progressbar'
        }}
        modules={[Pagination, Navigation]}
        onSwiper={(swiper)=>(swiperRef.current = swiper)}
        className="category-slider"
      >
        {categoryData.map((sl,i)=>(
          <SwiperSlide key={i}>
            <a href="#">
              <div className="info-wrap">
                <div className="info-tit">
                  {sl.title}
                </div>
                <div className="name">
                  {sl.name}
                </div>
                
              </div>
              <div className="img-wrap">
                <img src={sl.image} alt={sl.name} />
              </div>
              <div className="price">
                  {sl.price}
                </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <a href="#" 
      className='prev'
      onClick={(e)=>e.preventDefault()} 
      ref={prevRef}>prev</a>
      <a 
      href="#" 
      onClick={(e)=>e.preventDefault()} 
      className='next' 
      ref={nextRef}>next</a>
    </div>
  )
}

export default Category