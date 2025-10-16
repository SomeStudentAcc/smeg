"use client";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type SwiperType from "swiper";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Холодильники",
    url: "/smegCol.webp",
  },
  {
    id: 2,
    title: "Посудомоечные машины",
    url: "/smegCol2.webp",
  },
  {
    id: 3,
    title: "Плиты и варочные панели",
    url: "/smegCol3.webp",
  },
  {
    id: 4,
    title: "Духовые шкафы",
    url: "/collab.webp",
  },
  {
    id: 5,
    title: "Микроволновки",
    url: "/smegCol2.webp",
  },
];

export default function CollectionSliderMobile() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div className="container mx-auto px-3 md:px-0 mb-12 md:mb-20 ">
      {/* Header with title and custom buttons */}
      <div className="relative flex  justify-between lg:justify-center mb-12">
        <h2 className="text-xl sm:text-4xl  font-medium">
          Иконическая техника
        </h2>
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
        {data.map((el) => (
          <SwiperSlide key={el.id} className="my-h">
            <div>
              <div
                className={`text-center w-[250px] sm:w-[280px] md:w-[320px] my-h rounded-[48px] overflow-hidden `}
              >
                <Image
                  src={el.url}
                  alt={el.title}
                  width={500}
                  height={800}
                  className="block w-full h-[250px] sm:h-[320px] object-cover"
                />
              </div>
              <p className="hover-opacity block py-5 text-sm uppercase">
                {el.title}
              </p>
            </div>
          </SwiperSlide>
          /*  <SwiperSlide key={el.id}>
            <div
              className={`text-center w-[250px] sm:w-[280px] md:w-[320px] my-h  pr-3 `}
            >
              <div className="hover-opacity  rounded-[48px] min-h-[330px] overflow-hidden">
                <Image
                  src={el.url}
                  alt={el.title}
                  width={500}
                  height={800}
                  className="block w-full h-full  object-cover"
                />
              </div>
              <p className="hover-opacity block py-5 text-sm uppercase">
                {el.title}
              </p>
            </div>
          </SwiperSlide> */
        ))}
      </Swiper>
    </div>
  );
}
