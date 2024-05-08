"use client";
import React from "react";
import OrderCard from "../../Cards/DashboardCards/OrderCard";
import { useGetOrdersByDateQuery } from "@/app/redux/features/order/orderApiSlice";
import Skeleton from "@mui/material/Skeleton";
import OrderEmptyList from "../../EmptyList/OrderEmptyList";
const OrderListDashboard = () => {
  let date = new Date();
  let formattedDate = date.toISOString().split("T")[0];
  const {
    data: orderList,
    error,
    isLoading,
  } = useGetOrdersByDateQuery(formattedDate);
  if (isLoading) {
    return <Skeleton variant="rectangular" className="flex flex-1" />;
  }
  return (
    <div className="flex flex-col flex-1 items-center divide-y overflow-y-scroll scroll-y no-scrollbar">
      {orderList && orderList.lenth > 0 ? (
        orderList.map((item: any, idx: number) => (
          <OrderCard key={idx} {...item} />
        ))
      ) : (
        <OrderEmptyList />
      )}
    </div>
  );
};

export default OrderListDashboard;
