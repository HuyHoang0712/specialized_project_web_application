"use client";
import { useGetIssuesByEmployeeIdQuery } from "@/app/redux/features/issues/issueApiSlice";
import RequestList, { ListSkeleton } from "@/app/components/Lists/SubLists/RequestList";
import React from "react";

const EmployeeRequestsWrap = ({ id }: { id: string }) => {
  const { data: issues, error, isLoading } = useGetIssuesByEmployeeIdQuery(id);
  if (isLoading) return <ListSkeleton />;
  return <RequestList title="EMPLOYEE REQUESTS" data={issues}/>;
};

export default EmployeeRequestsWrap;
