"use client";
import React from "react";
import { Map,  YMaps } from "@pbe/react-yandex-maps";

export default function ShopsMap() {
  return (
    <div className="w-full col-span-8">
      <YMaps>
        <div style={{ width: "100%", height: "600px" }}>
          <Map
            defaultState={{
              center: [41.33706448715841, 69.355573846876],
              zoom: 12,
            }}
            width="100%"
            height="100%"
          ></Map>
        </div>
      </YMaps>
    </div>
  );
}
