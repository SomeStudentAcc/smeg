import Image from "next/image";
import React from "react";

export default function Fab() {
  return (
    <div className="container mx-auto px-3 md:px-0  mb-12 md:mb-20">
      <div className=" block rounded-[48px]  w-full aspect-video  relative overflow-hidden">
        <Image
          src={"/fab.webp"}
          alt={""}
          width={100000}
          height={100000}
          className="block w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
