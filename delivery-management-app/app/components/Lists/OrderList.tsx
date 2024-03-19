"use client";
import React from "react";
import Search from "../Search/Search";
import FilterModal from "../Modals/FilterModal";
import List from "./List";
import { useGetOrdersinPlanQuery } from "@/app/redux/features/order/orderApiSlice";

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

interface Props {
  id: string;
}

const OrderList = (props: Props) => {
  const { id } = props;
  const { data, isLoading, isError } = useGetOrdersinPlanQuery(id);
  const LIST_PROPS = {
    headers: [
      { title: "#ID", key: "id" },
      { title: "Delivery Point", key: "delivery_point" },
      { title: "Ship Code", key: "ship_code" },
      { title: "Pick-Up Time", key: "time_in" },
      { title: "Total Demane (kg)", key: "payload" },
      { title: "Assigned", key: "vehicle" },
      { title: "Status", key: "status" },
      { title: "Issue", key: "issues_count" },
    ],
    data: data,
    type: "order",
  };
  if (isLoading) return <div>Loading...</div>;
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
