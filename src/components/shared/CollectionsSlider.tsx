"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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

export default function CollectionsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full  py-16 min-h-screen mb-12 md:mb-20">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="text-6xl font-light mb-5">Collections</h1>

        {/* Custom Navigation arrows */}
        <div className="flex justify-center gap-4 mb-5">
          <button className="swiper-button-prev-custom cursor-pointer w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
            ←
          </button>
          <button className="swiper-button-next-custom cursor-pointer w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
            →
          </button>
        </div>
      </div>

      {/* Curved Rope */}
      <div className="relative w-full mb-2">
        <svg
          className="w-full h-20"
          viewBox="0 0 1000 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 Q250,60 500,40 T1000,20"
            stroke="#8B4513"
            strokeWidth="4"
            fill="none"
            className="drop-shadow-sm"
          />
          <path
            d="M0,20 Q250,60 500,40 T1000,20"
            stroke="#A0522D"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Swiper Container */}
      <div className="relative w-full overflow-hidden">
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={50}
          centeredSlides={true}
          loop={true}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full  px-8"
        >
          {data.map((slide) => (
            <SwiperSlide key={slide.id} className="flex justify-center my-h">
              {({ isActive, isPrev, isNext }) => {
                const slideClasses =
                  "transition-all duration-700 ease-out cursor-pointer relative flex flex-col items-center";
                let imageClasses = "rounded-[20px] overflow-hidden shadow-2xl";

                // Different hanging positions following the rope curve
                let hangingString = "";
                let rotation = "";
                let verticalOffset = "";
                let scale = "";

                if (isActive) {
                  // Center slide - hangs from the middle dip of the curve
                  scale = "scale-100";
                  imageClasses += " w-[320px] h-[400px]";
                  hangingString = "h-20"; // Longer string since rope dips down in middle
                  rotation = "rotate-0";
                  verticalOffset = "mt-0";
                } else if (isPrev) {
                  // Left side - hangs from higher part of curve
                  scale = "scale-90";
                  imageClasses += " w-[280px] h-[350px]";
                  hangingString = "h-8"; // Shorter string since rope is higher
                  rotation = "rotate-3";
                  verticalOffset = "-mt-4"; // Move up since rope is higher
                } else if (isNext) {
                  // Right side - hangs from higher part of curve
                  scale = "scale-90";
                  imageClasses += " w-[280px] h-[350px]";
                  hangingString = "h-12"; // Medium string length
                  rotation = "-rotate-2";
                  verticalOffset = "-mt-2"; // Move up slightly
                } else {
                  // Hidden slides
                  scale = "scale-75 opacity-0";
                  imageClasses += " w-[250px] h-[300px]";
                  hangingString = "h-6";
                  rotation = "rotate-0";
                  verticalOffset = "mt-0";
                }

                return (
                  <div className={`${slideClasses} ${scale} ${verticalOffset}`}>
                    {/* Hanging String/Wire following rope curve */}
                    <div
                      className={`w-0.5 bg-gray-400 ${hangingString} mb-2 shadow-sm`}
                    ></div>

                    {/* Small connector/clip */}
                    <div className="w-3 h-2 bg-gray-600 rounded-sm mb-1"></div>

                    {/* Image hanging with slight rotation */}
                    <div className={`${rotation} ${imageClasses}`}>
                      <Image
                        src={slide.url}
                        alt={slide.title}
                        height={500}
                        width={500}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {isActive && (
                      <div className="text-center mt-5">
                        <h3 className="text-xl font-medium text-gray-800">
                          {slide.title}
                        </h3>
                      </div>
                    )}
                  </div>
                );
              }}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Navigation Dots */}
      <div className="flex justify-center gap-2 mt-16">
        {data.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        .swiper-slide {
          display: flex !important;
          justify-content: center !important;
          align-items: flex-start !important;
        }
      `}</style>
    </div>
  );
}
