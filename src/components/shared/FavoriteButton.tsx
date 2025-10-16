"use client";

import { useFavoriteStore } from "@/stores/useFavStore ";
import { Heart } from "lucide-react";
import React from "react";

interface IProduct {
  id: number;
  model: string;
  name: string;
  image: string;
}

interface Props {
  product: IProduct;
}

export default function FavoriteButton({ product }: Props) {
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);
  const isFavorite = useFavoriteStore((state) => state.isFavorite(product.id));

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite({
      id: product.id,
      image: product.image,
      name: product.name,
      model: product.model,
    });
  };

  return (
    <div
      className="absolute right-0 top-0 z-10 p-5 cursor-pointer"
      onClick={handleClick}
    >
      <Heart
        color={isFavorite ? "red" : "black"}
        className="transition"
        size={22}
      />
    </div>
  );
}
