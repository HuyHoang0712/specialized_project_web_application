"use client";
import React from "react";
import Search from "../Search/Search";
import FilterModal from "../Modals/FilterModal";

const transportationPlanList = [
  {
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
];

const TransportationPlanList = () => {
  return (
    <div className="flex flex-1 flex-col gap-3">
      <div className="flex flex-row w-full justify-between items-center">
        <span className="text-lg text-black-60 font-medium">
          Transportation Plans
        </span>
        <div className="flex flex-row gap-3">
          <Search />
          <FilterModal />
        </div>
      </div>
      <div className="list-content">
        <div className="list-header">
          <span>Date</span>
          <span>Number of Orders</span>
          <span>Status</span>
          <span>issues</span>
        </div>
        <div className="list-body no-scrollbar">
          {transportationPlanList.map((item, idx) => (
            <div key={idx} className="body-row">
              <span>{item.date}</span>
              <span>{item.orders}</span>
              <span>{item.status}</span>
              <span>{item.issues}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransportationPlanList;
