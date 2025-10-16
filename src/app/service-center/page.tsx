import React from "react";
import ServiceMap from "./ServiceMap";

export default function ServiceCenter() {
  return (
    <div className="container mx-auto px-3 md:px-0 mt-10 mb-12 md:mb-20">
      <div className="flex flex-col md:grid grid-cols-12 gap-5">
        <div className=" col-span-4 flex flex-col justify-center gap-10 ">
          <h2 className="text-4xl font-semibold">Сервисный центр</h2>
          <div className="flex flex-col gap-3 ">
            <h3 className="text-xl font-semibold">Ждем вас по адресу:</h3>
            <p>Шайхонтохур рн ул.Тахтапул дарвоза. Дом 3Б</p>
            <p>
              Тел:<span>+998 98 777 77 77</span>
            </p>
            <p>Телеграм: @servis2929</p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold">Часы работы:</h3>
            <p>Понедельни-пятница: 9.00 - 18.00</p>
            <p>Суббота: 9.00 - 16.00</p>
            <p>воскресенье: Онлайн прием заявок</p>
          </div>
        </div>
        <ServiceMap />
      </div>
    </div>
  );
}
