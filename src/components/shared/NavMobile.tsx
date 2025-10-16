"use client";

import { ArrowLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {
  isMobNav: boolean;
  setMobNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const data = {
  categories: [
    {
      id: 1,
      title: "Большая техника",
      url: "big-appliances",
      subCategories: [
        { id: 1, title: "Холодильники", url: "refrigerators" },
        { id: 2, title: "Плиты", url: "stoves" },
        { id: 3, title: "Духовые шкафы", url: "ovens" },
        { id: 4, title: "Вытяжки", url: "hoods" },
        { id: 5, title: "Стиральные машины", url: "washing-machines" },
      ],
    },
    {
      id: 2,
      title: "Малая техника",
      url: "small-appliances",
      subCategories: [
        { id: 1, title: "Холодильники", url: "refrigerators" },
        { id: 2, title: "Плиты", url: "stoves" },
        { id: 3, title: "Духовые шкафы", url: "ovens" },
        { id: 4, title: "Вытяжки", url: "hoods" },
        { id: 5, title: "Стиральные машины", url: "washing-machines" },
      ],
    },
  ],
};

export default function NavMobile({ isMobNav, setMobNav }: Props) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<null | {
    title: string;
    url: string;
    subCategories: { id: number; title: string; url: string }[];
  }>(null);

  return (
    <>
      {/* Overlay */}
      {(isMobNav || selectedCategory) && (
        <div
          className="md:hidden fixed inset-0 bg-black/10 bg-opacity-50 z-40"
          onClick={() => {
            setMobNav(false);
            setSelectedCategory(null);
          }}
        />
      )}

      {/* Main Sidebar */}
      <div
        className={`fixed md:hidden top-0 left-0 h-screen w-full sm:max-w-[300px] bg-[#d6d2c4] text-white z-50 transform transition-transform duration-300 ${
          isMobNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-5 overflow-y-auto gap-10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Меню</h2>
            <button
              className="p-3 flex md:hidden justify-center items-center bg-white/10 rounded-full text-white group cursor-pointer transition duration-200 "
              onClick={() => setMobNav(false)}
            >
              <X
                size={24}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
            </button>
          </div>

          <ul>
            {data?.categories.map((item) => (
              <li
                key={item.id}
                className=" text-[#666666] items-center border-b border-white/10 py-4 cursor-pointer hover:text-gray-300"
                onClick={() =>
                  setSelectedCategory({
                    title: item.title,
                    subCategories: item.subCategories || [],
                /*     url: item.url, */
                    url: '/filters',
                  })
                }
              >
                <span>{item?.title}</span>
                
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-5">
            <span
              onClick={() => {
                setMobNav(false);
                setTimeout(() => {
                  router.push("/sales");
                }, 50);
              }}
              className="text-[#666666]"
            >
              Акции
            </span>
            <span
              onClick={() => {
                setMobNav(false);
                setTimeout(() => {
                  router.push("/service-center");
                }, 50);
              }}
              className="text-[#666666]"
            >
              Сервисный центр
            </span>
            <span
              onClick={() => {
                setMobNav(false);
                setTimeout(() => {
                  router.push("/about-company");
                }, 50);
              }}
              className="text-[#666666]"
            >
              О компании
            </span>
            <p className="text-[#666666]">Колаборации</p>
          </div>

          <div className="flex flex-col gap-5 text-white">
            <p>Youtube</p>
            <p>Instagram</p>
            <p>Telegram</p>
          </div>

          <div className="flex flex-col gap-1 text-white mt-auto">
            <p className="text-[#666666]">По любым вопросам звоните:</p>
            <p>+998 55 510-30-00</p>
          </div>
        </div>
      </div>

      {/* Subcategory Sidebar */}
      {selectedCategory && (
        <div
          className="fixed md:hidden top-0 left-0 h-screen w-full sm:max-w-[300px] bg-[#d6d2c4] text-white z-50 transform transition-transform duration-300"
          style={{ transform: "translateX(0%)" }}
        >
          <div className="flex flex-col h-full p-5 overflow-y-auto gap-10">
            <div className="flex items-center justify-between">
              <Link
/*                 href={`/catalog/${selectedCategory.url}`}
 */                href={`/filters`}
                onClick={() => {
                  setSelectedCategory(null);
                  setMobNav(false);
                }}
                className="text-xl font-semibold text-[#666666]"
              >
                {selectedCategory.title}
              </Link>
              <button
                className="p-3 flex md:hidden justify-center items-center bg-white/10 rounded-full text-[white] group cursor-pointer transition duration-200 "
                onClick={() => setSelectedCategory(null)}
              >
                <ArrowLeft
                  size={24}
                  className="transition-transform duration-300 "
                />
              </button>
            </div>

            <ul>
              {selectedCategory.subCategories.map((sub) => (
                <li key={sub.id} className="py-4 border-b border-white/10">
                  <Link
/*                     href={`/catalog/${selectedCategory.url}/${sub.url}`}
 */                    href={`/filters`}
                    className="text-[#666666] "
                    onClick={() => {
                      setSelectedCategory(null);
                      setMobNav(false);
                    }}
                  >
                    {sub.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
