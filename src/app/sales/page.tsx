import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const images = [
  {
    id: 1,
    url: "/smegSale.webp",
  },
  {
    id: 2,
    url: "/smegSale.webp",
  },
  {
    id: 3,
    url: "/smegSale.webp",
  },
  {
    id: 4,
    url: "/smegSale.webp",
  },
  {
    id: 5,
    url: "/smegSale.webp",
  },
];

export default function Sales() {
  return (
    <div className="container mx-auto px-3 md:px-0 mt-10 mb-12 md:mb-20">
      <h1 className="text-5xl font-semibold mb-10">Акции</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <Link href={`/sales/${image.id}`} key={index} className="mb-6">
            <Image
              src={image.url}
              alt={`Sale Image ${index + 1}`}
              width={1000}
              height={500}
              className="w-full h-auto object-cover rounded-lg"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
