"use client";
import React, { useState } from "react";
import Search from "../../Search/Search";
import List, { ListSkeleton } from "../List";
import { useGetAllIssueQuery } from "@/app/redux/features/issues/issueApiSlice";
import FilterModal from "../../Modals/FilterModal";
import FilterIssue from "../../Filter/FilterIssue";
import { ISSUE_STATUS } from "@/app/lib/constances";
function filterDataByName(data: any[], searchKey: string) {
  return data.filter((item) =>
    item.title.toLowerCase().includes(searchKey.toLowerCase())
  );
}

const applyFilterAndSearch = (
  data: any[],
  filterKey: any,
  searchKey: string
) => {
  if (searchKey != "") {
    data = filterDataByName(data, searchKey);
  }
  if (filterKey.label != "All") {
    data = data.filter((item) => item.role === filterKey.role);
  }
  if (filterKey.creator != "All") {
    data = data.filter((item) => item.creator === filterKey.creator);
  }
  if (filterKey.status != "All") {
    const statusIdx = ISSUE_STATUS.findIndex(
      (item) => item.label === filterKey.status
    );

    data = data.filter((item) => item.status === ISSUE_STATUS[statusIdx].value);
  }

  return data;
};

const VehicleRequestList = () => {
  const {
    data: requests,
    error,
    isLoading,
  } = useGetAllIssueQuery({ type: "issue-vehicle" });
  const [searchKey, setSearchKey] = useState("");
  const [filterKey, setFilterKey] = useState({
    label: "All",
    creator: "All",
    status: "All",
    vehicle: "All",
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
    data: requests && applyFilterAndSearch(requests, filterKey, searchKey),
    type: "issue-vehicle",
  };
  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex flex-row w-full justify-between items-center">
        <span className="text-lg text-black-60 font-medium">
          Employee Requests
        </span>
        <div className="flex flex-row gap-3">
          <Search setSearchKey={setSearchKey} placeholder="Search by title" />
          <FilterModal
            filterForm={FilterIssue}
            formProps={{ filterKey, setFilterKey, requests }}
          />
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
