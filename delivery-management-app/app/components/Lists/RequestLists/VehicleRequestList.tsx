"use client";
import React, { useState } from "react";
import Search from "../../Search/Search";
import List, { ListSkeleton } from "../List";
import { useGetAllVehicleIssuesQuery } from "@/app/redux/features/issues/issueApiSlice";
const VehicleRequestList = () => {
  const { data: requests, error, isLoading } = useGetAllVehicleIssuesQuery("");
  const [searchKey, setSearchKey] = useState("");
  const [filterKey, setFilterKey] = useState({
    role: "All",
    status: "All",
  });
  const LIST_PROPS = {
    headers: [
      { title: "#ID", key: "id" },
      { title: "Title", key: "title" },
      { title: "Label", key: "label" },
      { title: "Vehicle", key: "vehicle_id" },
      { title: "Creator", key: "creator" },
      { title: "Status", key: "status" },
    ],
    data: requests,
    type: "issue",
  };
  return (
    <div className="flex flex-1 flex-col gap-3">
      <div className="flex flex-row w-full justify-between items-center">
        <span className="text-lg text-black-60 font-medium">
          Employee Requests
        </span>
        <div className="flex flex-row gap-3">
          <Search setSearchKey={setSearchKey} />
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

export default VehicleRequestList;
