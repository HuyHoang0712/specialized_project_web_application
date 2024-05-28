"use client";
import React from "react";
import IssueCard from "../../Cards/DashboardCards/IssueCard";
import { useGetIssuesByStatsusQuery } from "@/app/redux/features/issues/issueApiSlice";
import { Issue } from "@/app/lib/types";
import IssueEmptyList from "../../EmptyList/IssueEmptyList";
import { Skeleton } from "@mui/material";
const IssueListDashboard = () => {
  const {
    data: issues,
    error,
    isLoading,
  } = useGetIssuesByStatsusQuery(0, {
    pollingInterval: 10000,
    skipPollingIfUnfocused: true,
  });

  if (isLoading)
    return <Skeleton variant="rectangular" className="flex flex-1" />;

  return (
    <div className="flex flex-col flex-1 items-center divide-y overflow-y-scroll scroll-y no-scrollbar">
      {issues && issues.length > 0 ? (
        issues.map((item: Issue, idx: number) => (
          <IssueCard key={idx} {...item} />
        ))
      ) : (
        <IssueEmptyList />
      )}
    </div>
  );
};

export default IssueListDashboard;
