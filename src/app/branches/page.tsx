import React from "react";
import ShopsMap from "./ShopsMap";

export default function Branches() {
  return (
    <div className="container mx-auto px-3 md:px-0 mt-10 mb-12 md:mb-20">
      <h1 className="text-5xl font-semibold mb-10">Шоурумы</h1>
      <div className="flex flex-col md:grid grid-cols-12 gap-5">
        <div className=" col-span-4 flex flex-col justify-center gap-10 ">
          <h2 className="text-4xl font-semibold">SHOWROOM Ц5</h2>
          <div className="flex flex-col gap-3 ">
            <h3 className="text-xl font-semibold">Ждем вас по адресу:</h3>
            <p>Sharaf Rashidov st, 100017, Тоshkent, Toshkent</p>
            <p>
              Тел:<span>+998 98 777 77 77</span>
            </p>
            <p>info@smeg.uz</p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold">Часы работы:</h3>
            <p>Понедельни-пятница: 10.00 - 18.00</p>
            <p>воскресенье: выходные дни</p>
          </div>
        </div>
        <ShopsMap />
      </div>
    </div>
  );
}
