"use client";

import React, { useRef } from "react";
import type SwiperType from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const images = [
  "/smegSale.webp",
  "/smegSale.webp",
  "/smegSale.webp",
  "/smegSale.webp",
  "/smegSale.webp",
];

export default function Sales() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();
  return (
    <div className="bg-gray-100 mb-12 md:mb-20">
      <div className="container mx-auto px-3 md:px-0   py-10 rounded-lg">
        <div className="relative flex  justify-between lg:justify-center mb-12">
          <h2 className="text-xl sm:text-4xl  font-medium">Акции</h2>
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
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={16}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: {
              spaceBetween: 16,
              slidesPerView: 1,
            },
            450: {
              spaceBetween: 16,
              slidesPerView: 1.5,
            },
            1000: {
              spaceBetween: 16,
              slidesPerView: 2.5,
            },
          }}
          slidesPerView={2.2}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "progressbar",
          }}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <Link href={`/sales/${i + 1}`}>
                <Image
                  src={src}
                  alt={`Sale Image ${i + 1}`}
                  width={1000}
                  height={500}
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
