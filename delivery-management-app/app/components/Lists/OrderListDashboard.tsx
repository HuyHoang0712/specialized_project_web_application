"use client";
import React from "react";
import OrderCard from "../Cards/OrderCard";

const OrderLists = [
  {
    depot: "Depot A",
    delivery: "Retail A",
    vehicle: "51A-01234",
    status: "In progress",
    demand: 5500,
  },
  {
    depot: "Depot A",
    delivery: "Retail A",
    vehicle: "51A-01234",
    status: "In progress",
    demand: 5500,
  },
  {
    depot: "Depot A",
    delivery: "Retail A",
    vehicle: "51A-01234",
    status: "In progress",
    demand: 5500,
  },
  {
    depot: "Depot A",
    delivery: "Retail A",
    vehicle: "51A-01234",
    status: "In progress",
    demand: 5500,
  },
  {
    depot: "Depot A",
    delivery: "Retail A",
    vehicle: "51A-01234",
    status: "In progress",
    demand: 5500,
  },
  {
    depot: "Depot A",
    delivery: "Retail A",
    vehicle: "51A-01234",
    status: "In progress",
    demand: 5500,
  },
  {
    depot: "Depot A",
    delivery: "Retail A",
    vehicle: "51A-01234",
    status: "In progress",
    demand: 5500,
  },
  {
    depot: "Depot A",
    delivery: "Retail A",
    vehicle: "51A-01234",
    status: "In progress",
    demand: 5500,
  },
];

const OrderListDashboard = () => {
  return (
    <div className="flex flex-col items-center divide-y overflow-y-scroll scroll-y no-scrollbar">
      {OrderLists.map((item, idx) => (
        <OrderCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default OrderListDashboard;
