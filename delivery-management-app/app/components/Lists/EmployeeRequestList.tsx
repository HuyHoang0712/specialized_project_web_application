"use client";
import React from "react";
import { useGetIssuesByEmployeeIdQuery } from "@/app/redux/features/issues/issueApiSlice";
import { Skeleton } from "@mui/material";
import StatusCard from "../Cards/StatusCard";
import IssueEmptyList from "../EmptyList/IssueEmptyList";
import { Issue } from "@/app/lib/types";
interface EmployeeRequestListProps {
  id: string;
}

const EmployeeRequestList = ({ id }: EmployeeRequestListProps) => {
  const { data: issues, error, isLoading } = useGetIssuesByEmployeeIdQuery(id);

  return (
    <div className="flex flex-col flex-1 h-[50%] max-h-full bg-white rounded-lg p-3 gap-2">
      <span className="font-medium text-primary-100">EMPLOYEE REQUESTS</span>
      <div className="w-full h-full overflow-y-scroll scroll-smooth no-scrollbar">
        {isLoading ? (
          <ListSkeleton />
        ) : issues.length > 0 ? (
          issues.map((issue: Issue, idx: number) => (
            <div key={idx} className="space-y-2 py-1">
              <div className="flex justify-between items-center">
                <span className="font-medium text-black-60">{issue.title}</span>
                <StatusCard label={issue.status} type="order" />
              </div>
              <div className="flex justify-between items-center text-black-40">
                <span className="text-sm font-medium ">
                  Label: {issue.label}
                </span>
                <span className="text-xs">{issue.date_time}</span>
              </div>
            </div>
          ))
        ) : (
          <IssueEmptyList />
        )}
      </div>
    </div>
  );
};

export default EmployeeRequestList;

const ListSkeleton = () => {
  return (
    <div className="w-full h-full overflow-y-scroll scroll-smooth no-scrollbar">
      {[1, 2, 3, 4].map((_, idx) => (
        <div key={idx} className="space-y-2 py-1">
          <div className="flex justify-between items-center">
            <Skeleton variant="text" width={150} />
            <Skeleton variant="text" width={80} />
          </div>
          <div className="flex justify-between items-center text-black-40">
            <Skeleton variant="text" width={100} />
            <Skeleton variant="text" width={100} />
          </div>
        </div>
      ))}
    </div>
  );
};
