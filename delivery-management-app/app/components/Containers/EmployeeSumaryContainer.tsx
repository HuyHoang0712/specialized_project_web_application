"use client";
import React from "react";
import { useGetStatusSummaryQuery } from "@/app/redux/features/employee/employeeApiSlice";
import { Skeleton } from "@mui/material";
import Link from "next/link";
import {
  UserCircleIcon,
  UsersIcon,
  UserMinusIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
const EmployeeSumaryContainer = () => {
  const { data, error, isLoading } = useGetStatusSummaryQuery("");

  if (isLoading) return <EmployeeSumaryContainerSkeleton />;

  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4">
      <SummaryCard
        Icon={UsersIcon}
        title="Total Employee"
        value={data?.total}
      />
      <SummaryCard
        Icon={CheckCircleIcon}
        title="Available Employee"
        value={data?.available}
      />
      <SummaryCard
        Icon={RocketLaunchIcon}
        title="Busy Employee"
        value={data?.busy}
      />
      <SummaryCard
        Icon={UserMinusIcon}
        title="On Leave Employee"
        value={data?.on_break}
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
];

const RequestList = () => {
  return (
    <div className="flex flex-col p-3 gap-3 row-span-2 bg-white rounded-lg">
      <div className="flex justify-between">
        <span className="text-lg font-medium text-black-60">
          Pending Approvals
        </span>
        <span className="text-lg font-medium text-secondary-100">
          {requests.length} Requests
        </span>
      </div>
      <div className="h-[8.5rem] overflow-y-scroll no-scrollbar">
        {requests.map((request) => (
          <div
            key={request.id}
            className="flex items-center justify-between py-2"
          >
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

interface SummaryCardProps {
  Icon: any;
  title: string;
  value: string;
}

const SummaryCard = ({ Icon, title, value }: SummaryCardProps) => {
  return (
    <div className="flex bg-white p-3 gap-3 rounded-lg shadow-sm items-center">
      <Icon className="w-14 icon-sw-2 text-primary-100 bg-primary-100/10 rounded-lg p-3" />
      <div className="flex flex-col">
        <span className="font-medium text-black-40">{title}</span>
        <span className="text-lg font-semibold text-primary-100">{value}</span>
      </div>
    </div>
  );
};

const SummaryCardSkeleton = () => {
  return (
    <div className="flex bg-white p-3 gap-3 rounded-lg shadow-sm items-center">
      <Skeleton variant="circular" width={50} height={50} />
      <div className="flex flex-col">
        <Skeleton variant="text" width={100} />
        <Skeleton variant="text" width={50} />
      </div>
    </div>
  );
};

const EmployeeSumaryContainerSkeleton = () => {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4">
      <SummaryCardSkeleton />
      <SummaryCardSkeleton />
      <SummaryCardSkeleton />
      <SummaryCardSkeleton />
    </div>
  );
};
