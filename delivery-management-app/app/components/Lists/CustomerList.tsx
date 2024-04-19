"use client";
import React, { useState } from "react";
import Search from "../Search/Search";
import FilterModal from "../Modals/FilterModal";
import List, { ListSkeleton } from "./List";
import { useGetAllCustomersQuery } from "@/app/redux/features/customer/customerApiSlice";

function filterDataByName(data: any[], searchKey: string) {
  return data.filter((item) =>
    item.name.toLowerCase().includes(searchKey.toLowerCase())
  );
}

const CustomerList = () => {
  const { data, error, isLoading } = useGetAllCustomersQuery("");
  const [searchKey, setSearchKey] = useState("");
  const LIST_PROPS = {
    headers: [
      { title: "#ID", key: "id" },
      { title: "Name", key: "name" },
      { title: "Adress", key: "address" },
    ],
    data: data && filterDataByName(data, searchKey),
    type: "customer",
  };
  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex flex-row w-full justify-between items-center">
        <span className="text-lg text-black-60 font-medium">Customers</span>
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

export default CustomerList;
