import React from 'react'
import "./styles/Trend.scss"
import trend from '../utils/trend';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Trend = () => {
  return (
    <div className='inner trend-inner'>
      <div className="t-wrap">
        <h2 className="tit">
          Trend Pick
        </h2>
        <p className="txt">
          디스커버리에서 당신의 취향에 맞는 <br/>
          아이템을 골라가세요
        </p>
        <a href="#" className='btn'>
          Pick Ypur Item
        </a>
      </div>

      <div className="slider-wrap">
        <div className="in">
          <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          className="trend-slider">
            {trend.map((t)=>(
              <SwiperSlide
              style={{backgroundImage:`url(${t.image})`}}
              key={t.id}>
                <a href={t.link}>
                  <div className="t-review">
                    <p className='review-title'>
                      Customer Review
                    </p>
                    <p className="preview">
                      {t.preview}
                    </p>
                  </div>
                </a>
                
              </SwiperSlide>

            ))}
          </Swiper>
        </div>
      </div>
      
    </div>
  )
}

export default Trend