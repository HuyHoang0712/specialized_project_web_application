"use client";
import React from "react";
import { useGetStatusSummaryQuery } from "@/app/redux/features/employee/employeeApiSlice";
import SummaryCard, { SummaryCardSkeleton } from "../Cards/SummaryCard";
import Link from "next/link";
import {
  UserCircleIcon,
  UsersIcon,
  UserMinusIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Skeleton } from "@mui/material";
const EmployeeSumaryContainer = () => {
  const { data, error, isLoading } = useGetStatusSummaryQuery("");

  if (isLoading) return <EmployeeSumaryContainerSkeleton />;

  return (
    <div className="h-full flex-1 grid grid-cols-2 grid-rows-6 grid-flow-row gap-4">
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
      <RequestList />
    </div>
  );
};

export default EmployeeSumaryContainer;

const requests = [
  {
    id: 1,
    name: "John Doe",
    label: "Leave Request",
  },
  {
    id: 2,
    name: "Jane Doe",
    label: "Leave Request",
  },
  {
    id: 3,
    name: "John Doe",
    label: "Leave Request",
  },
  {
    id: 3,
    name: "John Doe",
    label: "Leave Request",
  },
  {
    id: 3,
    name: "John Doe",
    label: "Leave Request",
  },
  {
    id: 3,
    name: "John Doe",
    label: "Leave Request",
  },
  {
    id: 3,
    name: "John Doe",
    label: "Leave Request",
  },
  {
    id: 3,
    name: "John Doe",
    label: "Leave Request",
  },
  {
    id: 3,
    name: "John Doe",
    label: "Leave Request",
  },
  {
    id: 3,
    name: "John Doe",
    label: "Leave Request",
  },
  {
    id: 3,
    name: "John Doe",
    label: "Leave Request",
  },
  {
    id: 3,
    name: "John Doe",
    label: "Leave Request",
  },
];

const RequestList = () => {
  return (
    <div className="flex flex-col p-3 gap-2 col-span-2 row-span-4 bg-white rounded-lg">
      <div className="flex justify-between">
        <span className="text-lg font-medium text-black-60">
          Pending Approvals
        </span>
        <span className="text-lg font-medium text-secondary-100">
          {requests.length} Requests
        </span>
      </div>
      <div className="overflow-y-scroll no-scrollbar">
        {requests.map((request, idx) => (
          <div key={idx} className="flex items-center justify-between py-2">
            <span className="flex items-center gap-2 text-sm font-medium text-black-60">
              <UserCircleIcon className="w-8 bg-black-10/30 rounded-full p-1" />
              {request.name}
            </span>
            <span className="flex items-center gap-2 text-sm font-medium text-black-100">
              {request.label}
              <Link href={""}>
                <ChevronRightIcon className="w-4 icon-sw-3 text-primary-100" />
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const RequestListSkeleton = () => {
  return (
    <div className="flex flex-col p-3 gap-2 col-span-2 row-span-4 bg-white rounded-lg">
      <div className="flex justify-between">
        <span className="text-lg font-medium text-black-60">
          Pending Approvals
        </span>
        <Skeleton variant="text" width={100} />
      </div>
      <Skeleton variant="rectangular" height={200} />
    </div>
  );
};
const EmployeeSumaryContainerSkeleton = () => {
  return (
    <div className="h-full flex-1 grid grid-cols-2 grid-rows-6 grid-flow-row gap-4">
      <SummaryCardSkeleton />
      <SummaryCardSkeleton />
      <SummaryCardSkeleton />
      <SummaryCardSkeleton />
      <RequestListSkeleton />
    </div>
  );
};
