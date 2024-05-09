"use client";
import React from "react";
import StatusCard from "../../Cards/StatusCard";
import OrderEmptyList from "../../EmptyList/OrderEmptyList";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import {
  StopCircleIcon,
  EllipsisVerticalIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
interface Props {
  data: any[];
}

const OrderSubList = ({ data }: Props) => {
  const router = useRouter();
  return (
    <div className="w-full h-full divide-y-2 overflow-y-scroll scroll-smooth no-scrollbar">
      {data.length > 0 ? (
        data.map((order, idx) => (
          <div
            key={idx}
            className="flex gap-2 p-3 hover:bg-primary-10/50 cursor-pointer transition-all duration-200 ease-in-out"
            onClick={() => router.push(`/order/${order.id}`)}
          >
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
              <span className="text-xs text-black-40">{dayjs(order.date).format("DD MMM YYYY")}</span>
            </div>
          </div>
        ))
      ) : (
        <OrderEmptyList />
      )}
    </div>
  );
};

export default OrderSubList;
