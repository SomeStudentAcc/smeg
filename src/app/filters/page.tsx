"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import qs from "querystring";
import ProductCard from "@/components/shared/ProductCard";

const categories = [
  { url: "kitchen-appliances", name: "Кухонные приборы" },
  { url: "home-appliances", name: "Бытовая техника" },
  { url: "professional-appliances", name: "Профессиональная техника" },
];

const subCategories = [
  { url: "ovens", name: "Духовые шкафы" },
  { url: "cooktops", name: "Варочные панели" },
  { url: "refrigerators", name: "Холодильники" },
  { url: "dishwashers", name: "Посудомоечные машины" },
];

const colors = ["red", "blue", "green", "black", "white"];

export default function Filters() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [mobFilter, setMobFilter] = useState(false);

  useEffect(() => {
    const params = qs.parse(searchParams.toString());

    const categoryUrl = params.categoryUrl as string | undefined;
    const subCategoryUrl = params.subCategoryUrl as string | undefined;
    const color = params.color as string | undefined;
  }, [searchParams, router]);

  return (
    <div className="container mx-auto px-3 md:px-0 mt-10 mb-12 md:mb-20">
      <div className="flex flex-col md:flex-row gap-10 py-10">
        <div className="w-[260px] ">
          <div className="hidden md:flex flex-col gap-5">
            <h2 className="mb-3 font-semibold text-xl">Фильтры</h2>
            <button
              onClick={() => {
                router.push("?");
              }}
              className=" border py-3 px-1  w-full"
            >
              Сбросить
            </button>
            <CategoryFilter
              className="max-h-[240px] overflow-y-auto custom-scrollbar"
              categories={categories}
            />
            <CategoryFilter
              className="max-h-[240px] overflow-y-auto custom-scrollbar"
              categories={categories}
            />
            <CategoryFilter
              className="max-h-[240px] overflow-y-auto custom-scrollbar"
              categories={categories}
            />
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMobFilter(!mobFilter)}
            className=" border py-3 px-1 mb-5 w-full"
          >
            Фильтры
          </button>

          {mobFilter && (
            <div className="flex flex-col gap-5">
              <button
                onClick={() => {
                  router.push("?");
                }}
                className=" border py-3 px-1  w-full"
              >
                Сбросить
              </button>
              <CategoryFilter categories={categories} />
              <CategoryFilter categories={categories} />
              <CategoryFilter categories={categories} />
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </div>
    </div>
  );
}
