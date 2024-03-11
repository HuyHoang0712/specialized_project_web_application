"use client";
import React from "react";
import Image from "next/image";
import { Icons, Themes } from "@/app/lib/assets";
import StatusCard from "./StatusCard";
function OrderCard(props: any) {
  const { depot, delivery, vehicle, status, demand } = props;
  return (
    <div className="flex flex-row w-full py-3 gap-[.625rem] items-start">
      <Image
        className="p-[.313rem] bg-primary-10 rounded-lg"
        src={Icons.Package}
        width={60}
        height={60}
        alt=""
      />
      <div className="flex flex-col flex-1 gap-1">
        <div className="card-content">
          <span className="text-black-60 font-medium text-base">
            Depot: {depot}
          </span>
          <span className="flex flex-row gap-2 text-black-100 text-base">
            <Image src={Icons.Truck} width={20} height={20} alt="" />
            {vehicle}
          </span>
        </div>
        <div className="card-content">
          <span className="text-black-60 font-medium text-sm">
            To: {delivery}
          </span>
          <StatusCard label={status} />
        </div>
        <div className="text-black-80 font-medium text-sm">
          Capacity: {demand} kg
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
