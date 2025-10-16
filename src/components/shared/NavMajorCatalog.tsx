import Image from "next/image";
import Link from "next/link";
import React from "react";

const majorCatalogData = [
  {
    id: 1,
    title: "Холодильники",
    url: "/smegCat.jpg",
  },
  {
    id: 2,
    title: "Посудомоечные машины",
    url: "/smegCat.jpg",
  },
  {
    id: 3,
    title: "Плиты и варочные панели",
    url: "/smegCat.jpg",
  },
  {
    id: 4,
    title: "Духовые шкафы",
    url: "/smegCat.jpg",
  },
  {
    id: 5,
    title: "Духовые шкафы",
    url: "/smegCat.jpg",
  },
  {
    id: 6,
    title: "Духовые шкафы",
    url: "/smegCat.jpg",
  },
  {
    id: 7,
    title: "Духовые шкафы",
    url: "/smegCat.jpg",
  },
  {
    id: 8,
    title: "Духовые шкафы",
    url: "/smegCat.jpg",
  },
  {
    id: 16,
    title: "Духовые шкафы",
    url: "/smegCat.jpg",
  },
  {
    id: 9,
    title: "Духовые шкафы",
    url: "/smegCat.jpg",
  },
  {
    id: 10,
    title: "Духовые шкафы",
    url: "/smegCat.jpg",
  },
  {
    id: 11,
    title: "Духовые шкафы",
    url: "/smegCat.jpg",
  },
  {
    id: 12,
    title: "Духовые шкафы",
    url: "/smegCat.jpg",
  },
  {
    id: 13,
    title: "Духовые шкафы",
    url: "/smegCat.jpg",
  },
  {
    id: 14,
    title: "Духовые шкафы",
    url: "/smegCat.jpg",
  },
];

export default function NavMajorCatalog() {
  return (
    <div className="w-full container mx-auto flex px-3">
      <div className="w-1/2 ">
        <div className="grid grid-cols-2 gap-y-5 h-full overflow-y-auto">
          {majorCatalogData.map((item) => (
            <Link
              key={item.id}
              href={`/filters`}
              className="flex flex-col lg:flex-row items-center gap-2"
            >
              <Image
                src={`${item.url}`}
                alt={item.title}
                width={70}
                height={70}
                className="rounded-full"
              />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-1/2 bg-gray-300 p-12">
        <div className="h-full   flex flex-col items-center justify-center gap-4">
          <div>
            <Image
              className="w-full h-[400px] object-cover rounded-lg"
              src="/smegCat2.jpg"
              height={400}
              width={400}
              alt="Smeg Catalog"
            />
          </div>
          <h3 className="text-xl text-center">
            Precision Perfected: Introducing SMEGs New Kitchen Scale
          </h3>
          <p className="underline">Shop now</p>
        </div>
      </div>
    </div>
  );
}
