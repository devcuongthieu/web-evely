"use client";

import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Banner = () => {
  const items = Array.from({ length: 10 }).map((_, index) => (
    <SwiperSlide key={index}>
      <Box sx={{ width: "100%", height: "400px" }}>
        <img
          src={`https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2024%2F1%2F4%2Fbanner-web-2048x682_1704359611009.jpg&w=1920&q=75`}
          alt={`Banner ${index}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
    </SwiperSlide>
  ));
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      loop={true}
      centeredSlides={true}
      grabCursor={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {items}
    </Swiper>
  );
};

export default Banner;
