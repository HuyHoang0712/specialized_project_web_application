"use client";
import React from "react";
import { useGetVehiclesQuery } from "@/app/redux/features/vehicle/vehicleApiSlice";
import { useGetAllIssueQuery } from "@/app/redux/features/issues/issueApiSlice";
import SummaryCard, { SummaryCardSkeleton } from "../../Cards/SummaryCard";
import { Skeleton } from "@mui/material";
import IssueCard from "@/app/components/Cards/DashboardCards/IssueCard";
import IssueEmptyList from "@/app/components/EmptyList/IssueEmptyList";
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
  const {
    data: issues,
    error: issueError,
    isLoading: issueLoading,
  } = useGetAllIssueQuery({ type: "issue-vehicle", status: 0 });

  return (
    <div className="h-full flex-1 grid grid-cols-2 grid-rows-6 grid-flow-row gap-4">
      {isLoading ? (
        <VehicleSumaryContainerSkeleton />
      ) : (
        <>
          <SummaryCard
            Icon={TruckIcon}
            title="Total"
            value={vehicles?.length}
            type={4}
          />
          <SummaryCard
            Icon={CheckCircleIcon}
            title="Available"
            value={
              vehicles?.filter((vehicle: any) => vehicle.status === 2).length
            }
            type={2}
          />
          <SummaryCard
            Icon={RocketLaunchIcon}
            title="Delivering"
            value={
              vehicles?.filter((vehicle: any) => vehicle.status === 1).length
            }
            type={1}
          />
          <SummaryCard
            Icon={WrenchScrewdriverIcon}
            title="Repairing"
            value={
              vehicles?.filter((vehicle: any) => vehicle.status === 0).length
            }
            type={0}
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

export default VehicleSumaryContainer;

const VehicleSumaryContainerSkeleton = () => {
  return (
    <>
      <SummaryCardSkeleton />
      <SummaryCardSkeleton />
      <SummaryCardSkeleton />
      <SummaryCardSkeleton />
    </>
  );
};
