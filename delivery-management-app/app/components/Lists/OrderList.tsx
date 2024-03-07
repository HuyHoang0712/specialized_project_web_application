"use client";
import React from "react";
import Search from "../Search/Search";
import FilterModal from "../Modals/FilterModal";
import List from "./List";

const ORDER_LIST = [
  {
    id: "981730",
    customer: "Distributor A",
    ship_code: "98173",
    pick_up: "4:00 am",
    demand: "9300",
    assign_vehicle: "51C-123456",
    status: "In-Progress",
    issue: "None",
  },
];

const LIST_PROPS = {
  headers: [
    { title: "#ID", key: "id" },
    { title: "Delivery Point", key: "customer" },
    { title: "Ship Code", key: "ship_code" },
    { title: "Pick-Up Time", key: "pick_up" },
    { title: "Total Demane (kg)", key: "demand" },
    { title: "Assigned", key: "assign_vehicle" },
    { title: "Status", key: "status" },
    { title: "Issue", key: "issue" },
  ],
  data: ORDER_LIST,
  type: "order",
};

interface Props {
  id: string;
}

const OrderList = (props: Props) => {
  const { id } = props;
  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex flex-row w-full justify-between items-center">
        <span className="text-lg text-black-60 font-medium">
          Transportation Plan {}
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

export default OrderList;
