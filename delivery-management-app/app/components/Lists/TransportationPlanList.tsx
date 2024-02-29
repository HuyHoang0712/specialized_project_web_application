"use client";
import React from "react";
import Search from "../Search/Search";
import FilterModal from "../Modals/FilterModal";
import List from "./List";

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

const listProps = {
  headers: ["Date", "Number of Orders", "Status", "Issue"],
  data: transportationPlanList,
};

const TransportationPlanList = () => {
  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex flex-row w-full justify-between items-center">
        <span className="text-lg text-black-60 font-medium">
          Transportation Plans
        </span>
        <div className="flex flex-row gap-3">
          <Search />
          <FilterModal />
        </div>
      </div>
      <List {...listProps} />
    </div>
  );
};

export default TransportationPlanList;
