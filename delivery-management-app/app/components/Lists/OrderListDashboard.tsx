"use client";
import React from "react";
import OrderCard from "../Cards/OrderCard";
import { useAppSelector } from "@/app/redux/hooks";
import { selectOrderList } from "@/app/redux/features/order/orderSlice";
const OrderLists = [
  {
    depot: "Depot A",
    delivery: "Retail A",
    vehicle: "51A-01234",
    status: "In-Progress",
    demand: 5500,
  },
  {
    depot: "Depot A",
    delivery: "Retail A",
    vehicle: "51A-01234",
    status: "In-Progress",
    demand: 5500,
  },
  {
    depot: "Depot A",
    delivery: "Retail A",
    vehicle: "51A-01234",
    status: "In-Progress",
    demand: 5500,
  },
  {
    depot: "Depot A",
    delivery: "Retail A",
    vehicle: "51A-01234",
    status: "In-Progress",
    demand: 5500,
  },
  {
    depot: "Depot A",
    delivery: "Retail A",
    vehicle: "51A-01234",
    status: "In-Progress",
    demand: 5500,
  },
  {
    depot: "Depot A",
    delivery: "Retail A",
    vehicle: "51A-01234",
    status: "In-Progress",
    demand: 5500,
  },
  {
    depot: "Depot A",
    delivery: "Retail A",
    vehicle: "51A-01234",
    status: "In-Progress",
    demand: 5500,
  },
  {
    depot: "Depot A",
    delivery: "Retail A",
    vehicle: "51A-01234",
    status: "In-Progress",
    demand: 5500,
  },
];

const OrderListDashboard = () => {
  const orderList = useAppSelector((state) => selectOrderList(state));

  return (
    <div className="flex flex-col items-center divide-y overflow-y-scroll scroll-y no-scrollbar">
      {orderList.map((item: any, idx: number) => (
        <OrderCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default OrderListDashboard;
