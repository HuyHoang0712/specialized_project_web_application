"use client";
import React from "react";
import Image from "next/image";
import { Icons } from "@/app/lib/constants";

function OrderCard(props: any) {
  const { depot, delivery, vehicle, status, demand } = props;
  return (
    <div className="flex flex-row w-full py-3 gap-[.625rem] items-center">
      <Image
        className="p-[.313rem] bg-primary-10 rounded-lg"
        src={Icons.Package}
        width={60}
        height={60}
        alt=""
      />
      <div className="flex flex-col flex-1 gap-1">
        <div className="card-content">
          <span className="text-black-60 font-[Poppins-Medium] text-base">Depot: {depot}</span>
          <span className="flex flex-row gap-2 text-black-20 font-[Poppins-Regular] text-base">
            <Image src={Icons.Truck} width={20} height={20} alt="" />
            {vehicle}
          </span>
        </div>
        <div className="card-content">
          <span className="text-black-60 font-[Poppins-Medium] text-base">To: {delivery}</span>
          <span>{status}</span>
        </div>
        <div className="text-black-80 font-[Poppins-Medium] text-base">Capacity: {demand} kg</div>
      </div>
    </div>
  );
}

export default OrderCard;
