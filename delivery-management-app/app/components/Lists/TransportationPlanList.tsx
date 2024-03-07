"use client";
import React from "react";
import Search from "../Search/Search";
import FilterModal from "../Modals/FilterModal";
import List from "./List";

const transportationPlanList = [
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "In-Progress",
    issues: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Pending",
    issues: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
  {
    id: 1,
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
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issues: "None",
  },
];

const listProps = {
  headers: [
    { title: "#ID", key: "id" },
    { title: "Date", key: "date" },
    { title: "Number of Orders", key: "orders" },
    { title: "Status", key: "status" },
    { title: "Issue", key: "issues" },
  ],
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
