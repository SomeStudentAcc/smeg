/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Check, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "querystring";
import clsx from "clsx";

interface IFilterCategory {
  url: string;
  name: string;
}

interface Props {
  categories: IFilterCategory[];
  className?: string;
}

export default function CategoryFilter({ categories, className }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(true);

  const current = qs.parse(searchParams.toString());
  const selectedCategories = current.categoryUrl
    ? (current.categoryUrl as string).split(",")
    : [];

  const handleClick = (url: string) => {
    const updated = [...selectedCategories];

    if (updated.includes(url)) {
      // remove
      const index = updated.indexOf(url);
      updated.splice(index, 1);
    } else {
      // add
      updated.push(url);
    }

    const updatedParams = {
      ...current,
      categoryUrl: updated.length ? updated.join(",") : undefined
    } as Record<string, any>;

    delete updatedParams.subCategoryUrl; // reset dependent filters

    const queryString = qs.stringify(updatedParams);
    router.push(`?${queryString}`);
  };

  return (
    <div className="flex flex-col gap-3">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center"
      >
        <h2 className="font-semibold text-lg">Категории</h2>
        <ChevronDown
          className={`${
            isOpen ? "" : "rotate-180"
          } transition-transform duration-200`}
          color="black"
          size={20}
        />
      </div>
      {isOpen && (
        <div
          className={clsx(
            "flex flex-col gap-3 md:max-h-[140px] overflow-y-auto custom-scrollbar",
            className
          )}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategories.includes(cat.url);
            return (
              <div
                key={cat.url}
                onClick={() => handleClick(cat.url)}
                className={`flex items-center gap-3 cursor-pointer select-none ${
                  isSelected ? " font-semibold" : ""
                }`}
              >
                <div
                  className={`w-4 h-4 border flex justify-center items-center ${
                    isSelected ? " text-black" : ""
                  }`}
                >
                  {isSelected && <Check size={15} />}
                </div>
                <p>{cat.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
