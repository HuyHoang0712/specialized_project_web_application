"use client";
import React from "react";
import StatusCard from "../StatusCard";
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
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex gap-2 items-center">
          <CubeTransparentIcon className="w-6 p-1 bg-primary-10 rounded-lg" />
          <span className="flex text-black-60 font-medium text-base">
            Delivery Point: {delivery_point}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-black-60 font-medium text-sm">
            Depot: {pickup_point}
          </span>
          <span className="flex flex-row w-[120px] gap-2 text-black-100 text-base">
            <TruckIcon className="w-5" />
            {vehicle}
          </span>
        </div>
        <div className="text-black-80 font-medium text-sm flex justify-between">
          Capacity: {payload} kg
          <StatusCard label={status} type="order" />
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
