"use client";
import React from "react";
import { useGetVehiclesQuery } from "@/app/redux/features/vehicle/vehicleApiSlice";
import SummaryCard, { SummaryCardSkeleton } from "../../Cards/SummaryCard";
import { Skeleton } from "@mui/material";
import Link from "next/link";
import {
  TruckIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  UserCircleIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
const VehicleSumaryContainer = () => {
  const { data: vehicles, error, isLoading } = useGetVehiclesQuery("");
  if (isLoading) return <VehicleSumaryContainerSkeleton />;
  return (
    <div className="h-full flex-1 grid grid-cols-2 grid-rows-6 grid-flow-row gap-4">
      <SummaryCard
        Icon={TruckIcon}
        title="Total"
        value={vehicles?.length}
        type="default"
      />
      <SummaryCard
        Icon={CheckCircleIcon}
        title="Available"
        value={vehicles?.filter((vehicle: any) => vehicle.status === 0).length}
        type="available"
      />
      <SummaryCard
        Icon={RocketLaunchIcon}
        title="Delivering"
        value={vehicles?.filter((vehicle: any) => vehicle.status === 1).length}
        type="busy"
      />
      <SummaryCard
        Icon={WrenchScrewdriverIcon}
        title="On Break"
        value={vehicles?.filter((vehicle: any) => vehicle.status === 2).length}
        type="on_break"
      />
      <RequestList />
    </div>
  );
};

export default VehicleSumaryContainer;

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
const VehicleSumaryContainerSkeleton = () => {
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
