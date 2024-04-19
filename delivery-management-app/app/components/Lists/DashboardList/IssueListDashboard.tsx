"use client";
import React, { useEffect } from "react";
import IssueCard from "../../Cards/IssueCard";
import { useGetIssuesByStatsusQuery } from "@/app/redux/features/issues/issueApiSlice";
import { Issue } from "@/app/lib/types";

const IssueListDashboard = () => {
  const { data: issues, error, isLoading } = useGetIssuesByStatsusQuery(0);

  return (
    <div className="flex flex-col items-center divide-y overflow-y-scroll scroll-y no-scrollbar">
      {!isLoading &&
        issues.map((item: Issue, idx: number) => (
          <IssueCard key={idx} {...item} />
        ))}
    </div>
  );
};

export default IssueListDashboard;
