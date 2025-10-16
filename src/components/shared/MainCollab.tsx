import Image from "next/image";
import React from "react";

export default function MainCollab() {
  return (
    <div className="bg-gray-100 py-12 mb-12 md:mb-20">
      <div className="container flex flex-col items-center mx-auto px-3 md:px-0  ">
        <h3 className="lg:text-[28px] text-[30px] leading-[2rem] lg:leading-[2.8rem] mb-8 text-center">
          Коллекция SMEG x Dolce & Gabbana: «Сицилия — это моя любовь»
        </h3>
        <p className="mb-14 text-center text-xs uppercase">
          От тостеров до соковыжималок для цитрусовых, от блендеров до
          планетарных миксеров — все украшены золотыми лимонами, опунциями и
          красными вишнями, характерными для сицилийского декоративного
          искусства, обрамлёнными треугольными узорами.
        </p>
        <div className=" block text-center rounded-[48px] max-w-[1315px]  w-full aspect-video  relative overflow-hidden">
          <Image
            src={"/collab.webp"}
            alt={""}
            width={10000}
            height={10000}
            className="block w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
