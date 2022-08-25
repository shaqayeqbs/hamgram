import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "../../styles/Home.module.css";

import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {
  return (
    <div className="my-4 pb-8 relative h-[100%] px-4">
      <Swiper
        slidesPerView={4}
        spaceBetween={1}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full"
      >
        <div className="">
          {" "}
          <SwiperSlide>
            {" "}
            <div className="h-32 w-36 ml-12">
              <img
                src="/images/image1.jpg"
                className="object-cover rounded-md"
                alt="slidebar"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-32 w-28 ml-4">
              <img
                src="/images/image2.jpg"
                className="object-cover rounded-md"
                alt="slidebar"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="h-32 w-28 mr-3">
              <img
                src="/images/image3.jpg"
                className="w-20 object-cover rounded-md"
                alt="slidebar"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="h-32 w-28  mr-12">
              <img
                src="/images/image4.jpg"
                className="object-cover rounded-md"
                alt="slidebar"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-32 w-28 ml-12">
              <img
                src="/images/image4.jpg"
                className="object-cover rounded-md"
                alt="slidebar"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-32 w-28 ml-5">
              <img
                src="/images/image1.jpg"
                className="object-cover rounded-md"
                alt="slidebar"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="h-32 w-28 mr-3">
              <img
                src="/images/image2.jpg"
                className="object-cover rounded-md"
                alt="slidebar"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="h-32 w-28  mr-12">
              <img
                src="/images/image3.jpg"
                className="w-20 object-cover rounded-md"
                alt="slidebar"
              />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
