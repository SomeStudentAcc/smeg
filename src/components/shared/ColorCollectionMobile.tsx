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
];

export default function ColorsCollectionMobile() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div className="container mx-auto px-3 md:px-0 mb-12 md:mb-20 lg:hidden ">
      {/* Left Navigation with Pagination */}
      <div className="relative flex  justify-between lg:justify-center mb-12">
        <h2 className="text-xl sm:text-4xl  font-medium">Коллекция цветов</h2>
        <div className="absolute right-0 flex gap-1 sm:gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 cursor-pointer sm:w-12 sm:h-12 flex items-center justify-center rounded-full border hover:bg-gray-100"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 cursor-pointer sm:w-12 sm:h-12 flex items-center justify-center rounded-full border hover:bg-gray-100"
          >
            →
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        direction="horizontal"
        slidesPerView={1}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}">${index + 1}</span>`;
          },
        }}
        modules={[Pagination]}
        className="w-full h-auto"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {data.map((el) => (
          <SwiperSlide
            key={el.id}
            className="!flex !items-center !justify-center"
          >
            <div className="grid grid-cols-1">
              {/* Left Text Section */}
              <div className="mx-auto max-w-xs text-center flex flex-col gap-5">
                <h1 className="text-2xl font-bold">Cream Collection</h1>
                <h4 className="text-lg">{el.title}</h4>
                <div className=" w-full h-[350px] rounded-3xl overflow-hidden">
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
