"use client";
import React from "react";
import { Skeleton } from "@mui/material";
import StatusCard from "../../Cards/StatusCard";
import IssueEmptyList from "../../EmptyList/IssueEmptyList";
import { Issue } from "@/app/lib/types";
interface RequestListProps {
  title: string;
  data: any;
}

const RequestSubList = ({ title, data }: RequestListProps) => {
  return (
    <div className="w-full h-full overflow-y-scroll scroll-smooth no-scrollbar">
      {data.length > 0 ? (
        data.map((issue: Issue, idx: number) => (
          <div key={idx} className="space-y-2 py-1">
            <div className="flex justify-between items-center">
              <span className="font-medium text-black-60">{issue.title}</span>
              <StatusCard label={issue.status} type="issue-vehicle" />
            </div>
            <div className="flex justify-between items-center text-black-40">
              <span className="text-sm font-medium ">Label: {issue.label}</span>
              <span className="text-xs">{issue.date_time}</span>
            </div>
          </div>
        ))
      ) : (
        <IssueEmptyList />
      )}
    </div>
  );
};

export default RequestSubList;

export const ListSkeleton = () => {
  return (
    <div className="flex flex-col flex-[2_2_75%] overflow-hidden bg-white rounded-lg p-3 gap-2">
      <Skeleton variant="text" width={150} />
      <Skeleton variant="rectangular" height={"100%"} />
    </div>
  );
};
