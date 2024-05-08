"use client";
import React from "react";
import OrderSubList from "@/app/components/Lists/SubLists/OrderSubList";
import { Skeleton } from "@mui/material";
import { useGetOrdersByDeliveryPointQuery } from "@/app/redux/features/order/orderApiSlice";
const OrderSubListWrap = ({ id }: { id: string }) => {
  const { data, error, isLoading } = useGetOrdersByDeliveryPointQuery(id);
  return (
    <div className="flex flex-col flex-1 bg-white rounded-lg shadow-sm p-3 gap-3">
      <h1 className="font-medium text-primary-100">Orders</h1>
      {isLoading ? (
        <Skeleton variant="rectangular" className="flex-1" />
      ) : (
        <OrderSubList data={data} />
      )}
    </div>
  );
};

export default OrderSubListWrap;
