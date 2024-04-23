"use client";
import React, { useState } from "react";
import Search from "../Search/Search";
import FilterModal from "../Modals/FilterModal";
import List, { ListSkeleton } from "./List";
import { useGetOrdersinPlanQuery } from "@/app/redux/features/order/orderApiSlice";

interface Props {
  id: string;
}

function filterDataByName(data: any[], searchKey: string) {
  return data.filter((item) =>
    item.delivery_point.toLowerCase().includes(searchKey.toLowerCase())
  );
}

const OrderList = (props: Props) => {
  const { id } = props;
  const { data, isLoading, isError } = useGetOrdersinPlanQuery(id);
  const [searchKey, setSearchKey] = useState("");
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
    data: data && filterDataByName(data, searchKey),
    type: "order",
  };
  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex flex-row w-full justify-between items-center">
        <span className="text-lg text-black-60 font-medium">
          Transportation Plan {}
        </span>
        <div className="flex flex-row gap-3">
          <Search setSearchKey={setSearchKey} />
          <FilterModal />
        </div>
      </div>
      {isLoading ? (
        <ListSkeleton headers={LIST_PROPS.headers} />
      ) : (
        <List {...LIST_PROPS} />
      )}
    </div>
  );
};

export default OrderList;
