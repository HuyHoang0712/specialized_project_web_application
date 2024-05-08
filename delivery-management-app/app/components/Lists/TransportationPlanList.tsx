"use client";
import React, { useState } from "react";
import Search from "../Search/Search";
import FilterModal from "../Modals/FilterModal";
import FilterByDate from "../Filter/FilterByDate";
import List, { ListSkeleton } from "./List";
import { useGetAllPlanQuery } from "@/app/redux/features/plan/planApiSlice";
import SearchFilterService from "@/app/utils/SearchFilter.service";

const TransportationPlanList = () => {
  const { data, error, isLoading } = useGetAllPlanQuery("");
  const [searchKey, setSearchKey] = useState("");
  const [filterKey, setFilterKey] = useState({
    type: "all",
    value: [],
  });
  const LIST_PROPS = {
    headers: [
      { title: "#ID", key: "id" },
      { title: "Date", key: "date" },
      { title: "Number of Orders", key: "total_order" },
      { title: "Pending", key: "pending_order" },
      { title: "In-progress", key: "in_progress_order" },
      { title: "Completed", key: "completed_order" },
      { title: "Canceled", key: "cancel_order" },
    ],
    data:
      data &&
      SearchFilterService.filterByDate(
        filterKey,
        SearchFilterService.searchByKey("date", searchKey, data)
      ),
    type: "plan",
  };

  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex flex-row w-full justify-between items-center">
        <span className="text-lg text-black-60 font-medium">
          Transportation Plans
        </span>
        <div className="flex flex-row gap-3">
          <Search setSearchKey={setSearchKey} placeholder="Search by date" />
          <FilterModal
            formProps={{ filterKey: filterKey, setFilterKey: setFilterKey }}
            filterForm={FilterByDate}
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

export default TransportationPlanList;
