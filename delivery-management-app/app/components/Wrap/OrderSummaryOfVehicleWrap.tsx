"use client";
import React from "react";
import LineChart from "../Chart/LineChart";
import { PresentationChartLineIcon } from "@heroicons/react/24/outline";
import { useGetOrderSummaryOfCustomerQuery } from "@/app/redux/features/order/orderApiSlice";
import { Skeleton } from "@mui/material";
interface Props {
  id: string;
}

const OrderSummayOfVehicleWrap = ({ id }: Props) => {
  const { data, isLoading } = useGetOrderSummaryOfCustomerQuery(id);

  return (
    <div className="bg-white rounded-lg p-3 flex flex-col items-center h-[50%] w-full">
      <div className="flex items-start gap-2 font-medium text-primary-100 self-start">
        <PresentationChartLineIcon className="w-10 p-2 bg-secondary-20 rounded-lg" />
        ORDER SUMMARY
      </div>
      {isLoading ? (
        <Skeleton variant="rectangular" className="flex-1" />
      ) : (
        <LineChart data={data} />
      )}
    </div>
  );
};

export default OrderSummayOfVehicleWrap;
