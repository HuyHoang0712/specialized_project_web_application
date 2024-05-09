"use client";
import React from "react";
import { useGetStatusSummaryQuery } from "@/app/redux/features/employee/employeeApiSlice";
import SummaryCard, { SummaryCardSkeleton } from "../Cards/SummaryCard";
import { Skeleton } from "@mui/material";
import IssueCard from "../Cards/DashboardCards/IssueCard";
import IssueEmptyList from "../EmptyList/IssueEmptyList";
import {
  UserCircleIcon,
  UsersIcon,
  UserMinusIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import { useGetAllIssueQuery } from "@/app/redux/features/issues/issueApiSlice";

const EmployeeSumaryContainer = () => {
  const { data, error, isLoading } = useGetStatusSummaryQuery("");
  const {
    data: issues,
    error: issueError,
    isLoading: issueLoading,
  } = useGetAllIssueQuery({ type: "issue-employee", status: 0 });

  return (
    <div className="h-full flex-1 grid grid-cols-2 grid-rows-6 grid-flow-row gap-4">
      {isLoading ? (
        <EmployeeSumaryContainerSkeleton />
      ) : (
        <>
          <SummaryCard
            Icon={UsersIcon}
            title="Total Employee"
            value={data?.total}
            type={4}
          />
          <SummaryCard
            Icon={CheckCircleIcon}
            title="Available Employee"
            value={data?.available}
            type={2}
          />
          <SummaryCard
            Icon={RocketLaunchIcon}
            title="Inactive Employee"
            value={data?.busy}
            type={0}
          />
          <SummaryCard
            Icon={UserMinusIcon}
            title="On Leave Employee"
            value={data?.on_break}
            type={3}
          />
        </>
      )}

      <div className="flex flex-col p-3 gap-2 col-span-2 row-span-4 bg-white rounded-lg">
        <div className="flex justify-between">
          <span className="text-lg font-medium text-black-60">
            Pending Approvals
          </span>
          <span className="text-lg font-medium text-secondary-100">
            {!issueLoading && issues.length} Requests
          </span>
        </div>
        {issueLoading ? (
           <Skeleton variant="rectangular" className="flex flex-1" />
        ) : (
          <div className="flex flex-col flex-1 items-center divide-y overflow-y-scroll scroll-y no-scrollbar">
            {issues && issues.length > 0 ? (
              issues.map((issue: any, idx: number) => (
                <IssueCard key={idx} {...issue} />
              ))
            ) : (
              <IssueEmptyList />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeSumaryContainer;

const EmployeeSumaryContainerSkeleton = () => {
  return (
    <>
      <SummaryCardSkeleton />
      <SummaryCardSkeleton />
      <SummaryCardSkeleton />
      <SummaryCardSkeleton />
    </>
  );
};
