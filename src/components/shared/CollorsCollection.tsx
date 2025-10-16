"use client";

import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import type SwiperType from "swiper";

const data = [
  { id: 1, title: "Red", url: "/smegColor.webp" },
  { id: 2, title: "Blue", url: "/smegColor.webp" },
  { id: 3, title: "Green", url: "/smegColor.webp" },
  { id: 4, title: "Yellow", url: "/smegColor.webp" },
  { id: 5, title: "Black", url: "/smegColor.webp" },
  { id: 6, title: "White", url: "/smegColor.webp" },
  { id: 7, title: "White", url: "/smegColor.webp" },
  { id: 8, title: "White", url: "/smegColor.webp" },
  { id: 9, title: "White", url: "/smegColor.webp" },
  { id: 10, title: "White", url: "/smegColor.webp" },
];

export default function ColorsCollection() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div className="container mx-auto px-3 md:px-0 mb-12 md:mb-20 hidden lg:flex items-center gap-5">
      {/* Left Navigation with Pagination */}
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={handlePrev}
          className="w-10 h-10 cursor-pointer sm:w-12 sm:h-12 flex items-center justify-center rounded-full border hover:bg-gray-100"
        >
          ↑
        </button>

        {/* Swiper Pagination */}
        <div className={`my-pagination`}></div>

        <button
          onClick={handleNext}
          className="w-10 h-10 cursor-pointer sm:w-12 sm:h-12 flex items-center justify-center rounded-full border hover:bg-gray-100"
        >
          ↓
        </button>
      </div>

      {/* Swiper Slider */}
      <Swiper
        direction="vertical"
        slidesPerView={1}
        pagination={{
          el: ".my-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        modules={[Pagination]}
        className="!h-[800px]"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          // Set CSS variable for total slides count
          if (swiper.pagination?.el) {
            const paginationEl = swiper.pagination.el as HTMLElement;
            paginationEl.style.setProperty(
              "--total-slides",
              data.length.toString()
            );
          }
        }}
      >
        {data.map((el) => (
          <SwiperSlide
            key={el.id}
            className="!flex !items-center !justify-center my-h"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-full lg:items-center lg:gap-10">
              {/* Left Text Section */}
              <div className="mx-auto max-w-xs text-center flex flex-col gap-5">
                <h1 className="text-2xl font-bold">Cream Collection</h1>
                <h4 className="text-lg">{el.title}</h4>
                <div className="hidden lg:block w-full h-[500px] rounded-3xl overflow-hidden">
                  <Image
                    src="/smegCat.jpg"
                    className="block w-full h-full object-cover"
                    height={500}
                    width={400}
                    alt=""
                  />
                </div>
                <p className="font-semibold cursor-pointer">SHOP NOW</p>
              </div>

              {/* Right Image */}
              <div className="max-w-[650px] w-full hidden lg:block">
                <Image
                  src={el.url}
                  className="block w-full h-full object-cover rounded-3xl"
                  height={1300}
                  width={1300}
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
