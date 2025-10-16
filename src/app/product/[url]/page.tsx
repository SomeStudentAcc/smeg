"use client";
import React, { useState } from "react";
import ProductSingleImages from "../ProductSingleImages";
import ProductOverview from "@/components/shared/ProductOverview";
import { Plus, Minus } from "lucide-react";
import RelatedProducts from "@/components/shared/RelatedProducts";

export default function ProductSingle() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const characteristics = [
    { name: "Материал", value: "Пластик" },
    { name: "Цвет", value: "Белый" },
    { name: "Размер", value: "Средний" },
    { name: "Вес", value: "500 г" },
  ];

  return (
    <div className="container mx-auto px-3 md:px-0 mt-10 mb-12 md:mb-20">
      <div className="flex md:grid grid-cols-2 flex-col gap-5 mb-20">
        <div className="md:flex-1 md:min-w-0">
          <ProductSingleImages />
          <div className="md:hidden mb-5 relative">
            <ProductOverview />
          </div>

          <div className="bg-gray-100 py-10 px-3">
            <div className="max-w-[1000px] w-full mx-auto px-3 md:px-0">
              <h2 className="text-2xl font-semibold mb-5">Детали о продукте</h2>
              <div className="flex flex-col gap-5">
                {/* Описание */}
                <div className="py-3 border-b">
                  <div
                    className="flex items-center w-full justify-between cursor-pointer"
                    onClick={() => toggleSection("description")}
                  >
                    <h2 className="text-xl font-semibold">Описание</h2>
                    {openSection === "description" ? <Minus /> : <Plus />}
                  </div>
                  {openSection === "description" && (
                    <div className="mt-2">
                      Товар предназначен для использования в качестве
                      универсального средства для очистки и дезинфекции
                    </div>
                  )}
                </div>

                {/* Характеристики */}
                <div className="py-3 border-b">
                  <div
                    className="flex items-center w-full justify-between cursor-pointer"
                    onClick={() => toggleSection("features")}
                  >
                    <h2 className="text-xl font-semibold">Характеристики</h2>
                    {openSection === "features" ? <Minus /> : <Plus />}
                  </div>
                  {openSection === "features" && (
                    <div className="mt-2 flex flex-col gap-4">
                      {characteristics.map((char, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-semibold">{char.name}:</span>
                          <span>{char.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block w-full">
          <ProductOverview />
        </div>
      </div>
      <div>
        <RelatedProducts />
      </div>
    </div>
  );
}
