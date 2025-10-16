import Image from "next/image";
import React from "react";

const sale = {
  id: 1,
  url: "/smegSale.webp",
  title: "Акция на технику SMEG",
  description:
    "Get ready to mix up some pure joy with your SMEG essentials! Our Citrus Juicer brings the zesty sunshine, and the Sparkling Water Maker adds that delightful fizz, creating an Orange Cream Soda that tastes just like a creamsicle in a glass. It’s the perfect way to add a little sparkle and sweetness to your day!🍊",
};

export default function SaleSingle() {
  return (
    <div className="container mx-auto px-3 md:px-0 mt-10 mb-12 md:mb-20">
      <h1 className="text-5xl font-semibold mb-10">Акции</h1>
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl">{sale.title}</h2>
        <Image
          src={sale.url}
          alt={`Sale Image `}
          width={1000}
          height={500}
          className="w-full h-auto max-h-[600px] object-cover   rounded-[48px]"
        />
        <p>{sale.description}</p>
      </div>
    </div>
  );
}
