"use client";
import React, { useState } from "react";
import Search from "../../Search/Search";
import List, { ListSkeleton } from "../List";
import { useGetAllEmployeeIssuesQuery } from "@/app/redux/features/issues/issueApiSlice";

function filterDataByName(data: any[], searchKey: string) {
  return data.filter((item) =>
    item.creator.toLowerCase().includes(searchKey.toLowerCase())
  );
}

const applyFilterAndSearch = (
  data: any[],
  filterKey: any,
  searchKey: string
) => {
  // if (searchKey != "") {
  //   data = filterDataByName(data, searchKey);
  // }
  // if (filterKey.role != "All") {
  //   data = data.filter((item) => item.role === filterKey.role);
  // }
  // if (filterKey.status != "All") {
  //   const statusIdx = EMPLOYEE_VEHICLE_STATUS.findIndex(
  //     (item) => item.label === filterKey.status
  //   );

  //   data = data.filter(
  //     (item) => item.status === EMPLOYEE_VEHICLE_STATUS[statusIdx].value
  //   );
  // }

  return data;
};

const EmployeeRequestList = () => {
  const { data: requests, error, isLoading } = useGetAllEmployeeIssuesQuery("");
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
      { title: "Created Date", key: "date_time" },
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

export default EmployeeRequestList;
