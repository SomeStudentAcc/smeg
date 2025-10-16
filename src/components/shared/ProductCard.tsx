import Image from "next/image";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const prod = {
  id: 1,
  name: "Milk frother Retro-style White Glossy",
  model: "MFF11WHUS",
  image: "/smegProd1.avif",
};

const LikeBtn = dynamic(() => import("@/components/shared/FavoriteButton"), {
  ssr: false,
});

export default function ProductCard() {
  return (
    <Link
      href={"/product/1"}
      className="flex flex-col gap-3 w-full max-w-[300px] cursor-pointer group "
    >
      <div className="relative h-auto w-full aspect-square overflow-hidden transition-transform duration-300 group-hover:scale-105 ">
        <Image
          src={prod.image}
          alt="Product Image"
          width={500}
          height={500}
          className="w-full h-auto max-h-[370px] object-cover absolute top-0 left-0"
        />
        <LikeBtn product={prod} />
      </div>
      <div className="z-10 flex flex-col gap-1">
        <p className="w-full max-w-[150px] text-[14px] lg:text-base font-medium">
          {prod.name}
        </p>
        <span className=" font-light text-gray-600">{prod.model}</span>
      </div>
    </Link>
  );
}
