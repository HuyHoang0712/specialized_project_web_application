"use client"
import React from "react";
import Search from "../Search/Search";
import FilterModal from "../Modals/FilterModal";
import List from "./List";
import { useGetAllCustomersQuery } from "@/app/redux/features/customer/customerApiSlice";

const CustomerList = () => {
  const { data, error, isLoading } = useGetAllCustomersQuery("");
  if (isLoading) return <div>Loading...</div>;

  const LIST_PROPS = {
    headers: [
      { title: "#ID", key: "id" },
      { title: "Name", key: "name" },
      { title: "Adress", key: "address" },
    ],
    data: data,
    type: "customer",
  };
  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex flex-row w-full justify-between items-center">
        <span className="text-lg text-black-60 font-medium">Customers</span>
        <div className="flex flex-row gap-3">
          <Search />
          <FilterModal />
        </div>
      </div>
      <List {...LIST_PROPS} />
    </div>
  );
};

export default CustomerList;
