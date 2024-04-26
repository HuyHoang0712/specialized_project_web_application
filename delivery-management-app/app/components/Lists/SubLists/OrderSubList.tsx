"use client";
import React from "react";
import StatusCard from "../../Cards/StatusCard";
import {
  StopCircleIcon,
  EllipsisVerticalIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
interface Props {
  title: string;
  data: any[];
}

const OrderSubList = ({ data, title }: Props) => {
  return (
    <div className="flex flex-1 flex-col basic-6/12 overflow-hidden bg-white rounded-lg p-3">
      <span className="font-medium text-primary-100">{title}</span>
      <div className="w-full h-full  divide-y-2 overflow-y-scroll scroll-smooth no-scrollbar">
        {data.length > 0 ? (
          data.map((order, idx) => (
            <div key={idx} className="flex gap-2 py-2">
              <div className="flex flex-col items-center justify-start py-1">
                <StopCircleIcon className="w-4 h-4 text-secondary-100" />
                <EllipsisVerticalIcon className="w-4 h-4 text-primary-90" />
                <MapPinIcon className="w-4 h-4 text-primary-100" />
              </div>
              <div className="flex flex-col flex-1 h-14 items-start justify-center gap-3 text-sm font-medium text-black-60">
                <span>{order.pickup_point}</span>
                <span>{order.delivery_point}</span>
              </div>
              <div className="flex flex-col gap-1 items-end">
                <StatusCard label={order.status} type="order" />
                <span className="text-xs text-black-40">{order.payload} kg</span>
                <span className="text-xs text-black-40">{order.date}</span>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default OrderSubList;
