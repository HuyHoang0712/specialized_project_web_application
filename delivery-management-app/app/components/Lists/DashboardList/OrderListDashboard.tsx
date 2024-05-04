"use client";
import React from "react";
import OrderCard from "../../Cards/DashboardCards/OrderCard";
import { useAppSelector } from "@/app/redux/hooks";
import { selectOrderList } from "@/app/redux/features/order/orderSlice";
import { useGetOrdersByDateQuery } from "@/app/redux/features/order/orderApiSlice";

const OrderListDashboard = () => {
  let date = new Date();
  let formattedDate = date.toISOString().split("T")[0];
  const {
    data: orderList,
    error,
    isLoading,
  } = useGetOrdersByDateQuery(formattedDate);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col items-center divide-y overflow-y-scroll scroll-y no-scrollbar">
      {orderList.map((item: any, idx: number) => (
        <OrderCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default OrderListDashboard;
