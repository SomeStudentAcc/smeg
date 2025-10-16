"use client";
import React, { useRef } from "react";
import type SwiperType from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";

const data = [1, 2, 3, 5, 6, 7];

export default function RelatedProducts() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div className="container mx-auto px-3 mb-12 md:mb-20">
      {/* Header with title and custom buttons */}
      <div className="relative flex  justify-between lg:justify-center mb-12">
        <h2 className="text-xl sm:text-4xl  font-medium">Рекомендуем</h2>
        <div className="absolute right-0 flex gap-1 sm:gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border hover:bg-gray-100 cursor-pointer"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border hover:bg-gray-100 cursor-pointer"
          >
            →
          </button>
        </div>
      </div>

      {/* Swiper with staggered effect */}
      <Swiper
        spaceBetween={20}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        breakpoints={{
          0: { slidesPerView: 1 },
          350: { slidesPerView: 1.4 },
          500: { slidesPerView: 2 },
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 2.4 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        }}
      >
        {data.map((el, i) => (
          <SwiperSlide key={el}>
            <>
              <ProductCard />
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
