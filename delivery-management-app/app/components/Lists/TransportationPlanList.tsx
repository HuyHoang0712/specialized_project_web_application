"use client";
import React, { useState } from "react";
import Search from "../Search/Search";
import FilterModal from "../Modals/FilterModal";
import List from "./List";
import { useGetAllPlanQuery } from "@/app/redux/features/plan/planApiSlice";
import Skeleton from "@mui/material/Skeleton";

function filterDataByDate(data: any[], searchKey: string) {
  return data.filter((item) => item.date.includes(searchKey));
}

const TransportationPlanList = () => {
  const { data, error, isLoading } = useGetAllPlanQuery("");
  const [searchKey, setSearchKey] = useState("");
  const LIST_PROPS = {
    headers: [
      { title: "#ID", key: "id" },
      { title: "Date", key: "date" },
      { title: "Number of Orders", key: "total_order" },
      { title: "Pending", key: "pending_order" },
      { title: "In-progress", key: "in_progress_order" },
      { title: "Completed", key: "completed_order" },
      { title: "Canceled", key: "cancel_order" },
      { title: "Issue", key: "issue_count" },
    ],
    data: data && filterDataByDate(data, searchKey),
    type: "plan",
  };

  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex flex-row w-full justify-between items-center">
        <span className="text-lg text-black-60 font-medium">
          Transportation Plans
        </span>
        <div className="flex flex-row gap-3">
          <Search setSearchKey={setSearchKey} />
          <FilterModal />
        </div>
      </div>
      {isLoading ? (
        <Skeleton
          variant="rounded"
          animation="wave"
          width={"full"}
          height={"90%"}
        />
      ) : (
        <List {...LIST_PROPS} />
      )}
    </div>
  );
};

export default TransportationPlanList;
