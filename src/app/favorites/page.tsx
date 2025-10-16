"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Heart } from "lucide-react";
import { useFavoriteStore } from "@/stores/useFavStore ";
import FavoriteButton from "@/components/shared/FavoriteButton";

export default function Favorites() {
  const favorites = useFavoriteStore((state) => state.favorites);
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);

  return (
    <div className="container mx-auto mb-20 h-full mt-12">
      <div>
        {favorites.length > 0 ? (
          <div>
            <h2 className="text-center text-3xl mb-5">Избранные</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-5 auto-rows-fr">
              {favorites.map((prod, index) => {
                return (
                  <Link href={`/product/1}`} key={index}>
                    <div className="flex flex-col gap-3 w-full max-w-[300px] cursor-pointer group ">
                      <div className="relative h-auto w-full aspect-square overflow-hidden transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={prod.image}
                          alt="Product Image"
                          width={500}
                          height={500}
                          className="w-full h-auto max-h-[370px] object-cover absolute top-0 left-0"
                        />
                        <FavoriteButton product={prod} />
                      </div>
                      <div className="z-10 flex flex-col gap-1">
                        <p className="w-full max-w-[150px] text-[14px] lg:text-base font-medium">
                          {prod.name}
                        </p>
                        <span className=" font-light text-gray-600">
                          {prod.model}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className=" text-center text-3xl mb-5">Пока ничего нет</h1>
            <div className="flex justify-center">
              <Link
                href={"/"}
                className="border flex justify-center px-5 py-3 text-black cursor-pointer"
              >
                На главную
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
