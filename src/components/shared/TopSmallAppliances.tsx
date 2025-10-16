"use client";
import React, { useRef, useState } from "react";
import type SwiperType from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const data = [
  { id: 1, title: "TOASTERS", url: "/topSmeg.webp", bg: "#d6d2c4" },
  { id: 2, title: "HAND BLENDERS", url: "/topSmeg2.webp", bg: "#bbdde6" },

  { id: 3, title: "PERSONAL BLENDERS", url: "/topSmeg3.webp", bg: "#f8b7cd" },
  {
    id: 4,
    title: "DRIP COFFEE MACHINES",
    url: "/topSmeg4.webp",
    bg: "#d22630",
  },
  { id: 6, title: "TOASTERS", url: "/topSmeg.webp", bg: "#d6d2c4" },
];

export default function TopSmallAppliances() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div className="container mx-auto px-3 mb-12 md:mb-20">
      {/* Header with title and custom buttons */}
      <div className="relative flex  justify-between lg:justify-center mb-12">
        <h2 className="text-xl sm:text-4xl  font-medium">
          Иконическая техника
        </h2>
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
          <SwiperSlide key={el.id} className="my-h">
            <>
              <div
                style={{ background: el.bg }}
                className={`text-center w-[250px] sm:w-[280px] md:w-[320px] my-h pr-3   rounded-[48px] hover-opacity  ${
                  i % 2 === 0 ? "md:mt-22" : "md:mt-0"
                }`}
              >
                <Image
                  src={el.url}
                  alt={el.title}
                  width={500}
                  height={800}
                  className="block w-full h-full  object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
              <div className="text-center">
                <p className="hover-opacity block py-5 text-sm texc uppercase">
                  {el.title}
                </p>
              </div>
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
