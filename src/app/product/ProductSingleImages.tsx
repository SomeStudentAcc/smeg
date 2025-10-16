"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import FavoriteButton from "@/components/shared/FavoriteButton";

const data = {
  images: ["/smegProd1.avif", "/smegProd2.webp", "/smegProd3.webp"],
};

const prod = {
  id: 1,
  name: "Milk frother Retro-style White Glossy",
  model: "MFF11WHUS",
  image: "/smegProd1.avif",
};

/* const LikeBtn = dynamic(() => import("@/components/shared/FavoriteButton"), {
  ssr: false,
}); */

export default function ProductSingleImages() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    setSelectedIndex(0);
  }, []);

  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index);
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <div>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Navigation]}
        className="mb-16"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          const realIndex = swiper.realIndex;
          setSelectedIndex(realIndex);
        }}
      >
        {data.images.map((el, index) => {
          return (
            <SwiperSlide key={index} className="">
              <div className="relative min-h-[300px] max-w-[750px] mx-auto w-full aspect-[3/2]">
                <div
                  className="absolute right-0 z-10 p-5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FavoriteButton product={prod} />
                </div>
                <Image
                  src={el}
                  alt={`Product image ${index + 1}`}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex gap-3 mb-16 overflow-x-auto w-full scroll-mt-5">
        {data.images.map((el, index) => {
          return (
            <div
              onClick={() => handleThumbnailClick(index)}
              key={index}
              className={`cursor-pointe h-[80px] w-[80px] md:w-[110px] md:h-[110px] p-2 transition flex-shrink-0 ${
                selectedIndex === index ? "border border-black" : ""
              }`}
            >
              <Image
                src={el}
                alt={`Thumbnail ${index + 1}`}
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
            </div>
          );
        })}
      </div>

      <style jsx>{`
        /* Swiper Navigation Button Base Styles */

        :global(.swiper-pagination) {
          bottom: 0px !important;
          left: 0px !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 12px !important;
        }

        :global(.swiper-pagination-bullet) {
          width: 40px !important;
          height: 4px !important;
          background-color: rgba(255, 255, 255, 0.3) !important;
          border-radius: 9999px !important;
          opacity: 1 !important;
          transition: all 0.3s ease-in-out !important;
        }

        :global(.swiper-pagination-bullet-active) {
          background-color: white !important;
          height: 6px !important;
        }

        @media (max-width: 768px) {
          :global(.swiper-button-next),
          :global(.swiper-button-prev) {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
