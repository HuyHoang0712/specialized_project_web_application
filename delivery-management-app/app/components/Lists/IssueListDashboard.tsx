"use client";
import React, { useEffect } from "react";
import IssueCard from "../Cards/IssueCard";
import { useGetIssuesByStatsusQuery } from "@/app/redux/features/issues/issueApiSlice";
import { selectIssuesList } from "@/app/redux/features/issues/issueSlice";
import { useAppSelector } from "@/app/redux/hooks";
import { Issue } from "@/app/lib/types";

const IssueListDashboard = () => {
  const { data, error, isLoading } = useGetIssuesByStatsusQuery(0);
  const issueList = useAppSelector((state) => selectIssuesList(state));

  return (
    <div className="flex flex-col items-center divide-y overflow-y-scroll scroll-y no-scrollbar">
      {issueList.map((item: Issue, idx: number) => (
        <IssueCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default IssueListDashboard;
