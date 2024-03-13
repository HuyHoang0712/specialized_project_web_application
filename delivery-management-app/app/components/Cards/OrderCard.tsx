"use client";
import React from "react";
import StatusCard from "./StatusCard";
import { TruckIcon, CubeTransparentIcon } from "@heroicons/react/24/solid";
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
  status: number;
}

function OrderCard(props: OrderCardProps) {
  const {
    ship_code,
    date,
    time_in,
    payload,
    vehicle,
    pickup_point,
    delivery_point,
    status,
  } = props;
  return (
    <div className="flex flex-row w-full py-3 gap-[.625rem] items-start">
      <CubeTransparentIcon className="w-10 p-[.313rem] bg-primary-10 rounded-lg" />
      <div className="flex flex-col flex-1 gap-1">
        <div className="card-content">
          <span className="text-black-60 font-medium text-base">
            Depot: {pickup_point}
          </span>
          <span className="flex flex-row gap-2 text-black-100 text-base">
            <TruckIcon className="w-5" />
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
