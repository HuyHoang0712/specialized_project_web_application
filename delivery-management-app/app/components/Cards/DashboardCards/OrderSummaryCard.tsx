"use client";
import React from "react";
import { Skeleton } from "@mui/material";
import { useGetOrdersByDateQuery } from "@/app/redux/features/order/orderApiSlice";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

function OrderSummaryCard() {
  let date = new Date();
  let formattedDate = date.toISOString().split("T")[0];
  const {
    data: orderList,
    error,
    isLoading,
  } = useGetOrdersByDateQuery(formattedDate, {
    pollingInterval: 10000,
    skipPollingIfUnfocused: true,
  });

  return (
    <div className="flex flex-col gap-3 h-[8rem] bg-white p-3 rounded-lg">
      <div className="flex flex-row items-center gap-3 text-black-100">
        <ShoppingBagIcon className="bg-secondary-30 p-2 rounded-lg w-10" />
        <span className="text-lg font-medium">Order</span>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <span className="text-base font-medium text-black-50">
            All Orders
          </span>
          <span className={"text-base font-medium text-black-100"}>
            {isLoading ? (
              <Skeleton variant="rectangular" width={20} height={20} />
            ) : (
              orderList.length
            )}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-base font-medium text-black-50">Completed</span>
          <span className={"text-base font-medium text-green"}>
            {isLoading ? (
              <Skeleton variant="rectangular" width={20} height={20} />
            ) : (
              orderList.filter((order: any) => order.status === 2).length
            )}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-base font-medium text-black-50">
            In Progress
          </span>
          <span className={"text-base font-medium text-primary-100"}>
            {isLoading ? (
              <Skeleton variant="rectangular" width={20} height={20} />
            ) : (
              orderList.filter((order: any) => order.status === 1).length
            )}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-base font-medium text-black-50">Pending</span>
          <span className={"text-base font-medium text-secondary-100"}>
            {isLoading ? (
              <Skeleton variant="rectangular" width={20} height={20} />
            ) : (
              orderList.filter((order: any) => order.status === 3).length
            )}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-base font-medium text-black-50">Canceled</span>
          <span className={"text-base font-medium text-red"}>
            {isLoading ? (
              <Skeleton variant="rectangular" width={20} height={20} />
            ) : (
              orderList.filter((order: any) => order.status === 4).length
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummaryCard;
