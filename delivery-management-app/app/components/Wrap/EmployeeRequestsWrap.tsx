"use client";
import { useGetIssuesByEmployeeIdQuery } from "@/app/redux/features/issues/issueApiSlice";
import RequestSubList from "@/app/components/Lists/SubLists/RequestSubList";
import { Skeleton } from "@mui/material";
import React from "react";

const EmployeeRequestsWrap = ({ id }: { id: string }) => {
  const { data: issues, error, isLoading } = useGetIssuesByEmployeeIdQuery(id);
  return (
    <div className="flex flex-col flex-[2_2_75%] bg-white shadow-sm rounded-lg p-3 overflow-hidden">
      <h1 className="font-medium text-primary-100">VEHICLE REQUESTS</h1>
      {isLoading ? (
        <Skeleton variant="rectangular" className="flex-1" />
      ) : (
        <RequestSubList data={issues} />
      )}
    </div>
  );
};

export default EmployeeRequestsWrap;
