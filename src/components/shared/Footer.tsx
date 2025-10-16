import { Facebook, Instagram, Send } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="border-t">
      <div className="container mx-auto px-3 flex flex-col md:flex-row md:justify-between gap-5 md:gap-0  md:px-0 py-5 md:py-10">
        <Image
          src="/SmegLogoBlack.svg"
          alt="Smeg Logo"
          height={70}
          width={232}
          className="lg:w-[232px] w-[150px] h-[70px] cursor-pointer"
        />
        <div>
          <h3 className=" text-2xl md:text-3xl font-semibold mb-3">О нас</h3>
          <div className="flex flex-col gap-2">
            <span>о компании</span>
            <span>Сервисный центр</span>
            <span>Сервисный центр</span>
          </div>
        </div>
        <div>
          <h3 className=" text-2xl md:text-3xl  font-semibold mb-3">
            Информация
          </h3>
          <div className="flex flex-col gap-2">
            <span>Акции</span>
            <span>Колаборации центр</span>
            <span>Магазины</span>
            <span>Поиск</span>
          </div>
        </div>
        <div>
          <h3 className=" text-2xl md:text-3xl  font-semibold mb-3">
            Наши Соц сети
          </h3>
          <div className="flex gap-2">
            <div className="p-3 flex justify-center items-center bg-black/10 rounded-full text-black cursor-pointer">
              <Instagram size={20} />
            </div>
            <div className="p-3 flex justify-center items-center bg-black/10 rounded-full text-black  cursor-pointer">
              <Facebook size={20} />
            </div>
            <div className="p-3 flex justify-center items-center bg-black/10 rounded-full text-black e cursor-pointer">
              <Send size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
