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
    issue: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "In-Progress",
    issue: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Pending",
    issue: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issue: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issue: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issue: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issue: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issue: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issue: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issue: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issue: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issue: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issue: "None",
  },
  {
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issue: "None",
  },
  {
    id: 1,
    date: "12 Aug 2022",
    orders: 56,
    status: "Completed",
    issue: "None",
  },
];

const LIST_PROPS = {
  headers: [
    { title: "#ID", key: "id" },
    { title: "Date", key: "date" },
    { title: "Number of Orders", key: "orders" },
    { title: "Status", key: "status" },
    { title: "Issue", key: "issue" },
  ],
  data: transportationPlanList,
  type: "plan",
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
      <List {...LIST_PROPS} />
    </div>
  );
};

export default TransportationPlanList;
