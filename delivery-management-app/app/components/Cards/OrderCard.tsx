"use client";
import React from "react";
import Image from "next/image";
import { Icons, Themes } from "@/app/lib/assets";
import StatusCard from "./StatusCard";

interface OrderCardProps {
  id: number;
  ship_code: string;
  date: string;
  time_in: string;
  payload: string;
  vehicle?: string;
  pickup_point: string;
  delivery_point: string;
  empleyee_id: string;
  status: string;
}

function OrderCard(props: OrderCardProps) {
  const { ship_code, date, time_in, payload, vehicle, pickup_point, delivery_point, status } =
    props;
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
            Depot: {pickup_point}
          </span>
          <span className="flex flex-row gap-2 text-black-100 text-base">
            <Image src={Icons.Truck} width={20} height={20} alt="" />
            {vehicle}
          </span>
        </div>
        <div className="card-content">
          <span className="text-black-60 font-medium text-sm">
            To: {delivery_point}
          </span>
          <StatusCard label={status} />
        </div>
        <div className="text-black-80 font-medium text-sm">
          Capacity: {payload} kg
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
