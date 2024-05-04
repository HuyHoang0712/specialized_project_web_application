"use client";
import React from "react";
import { useGetVehicleByIdQuery } from "@/app/redux/features/vehicle/vehicleApiSlice";
import { useGetIssuesOfVehicleQuery } from "@/app/redux/features/issues/issueApiSlice";
import { useGetOrderOfVehicleQuery } from "@/app/redux/features/order/orderApiSlice";
import OrderInforCard, {
  OrderInforCardSkeleton,
} from "../../Cards/OrderInforCard";
import LineChart from "../../Chart/LineChart";
import RequestList, { ListSkeleton } from "../../Lists/SubLists/RequestList";
import OrderSubList from "../../Lists/SubLists/OrderSubList";
const VehicleDetailSummaryContainer = ({ id }: { id: string }) => {
  const {
    data: issues,
    error: issueError,
    isLoading: issueLoading,
  } = useGetIssuesOfVehicleQuery(id);
  const { data: vehicle, error, isLoading } = useGetVehicleByIdQuery(id);
  const {
    data: orders,
    error: orderError,
    isLoading: orderLoading,
  } = useGetOrderOfVehicleQuery(id);

  const driver_card_props = {
    type: "driver",
    title: "Driver",
    titleContent: {
      Name: vehicle?.driver.name,
      "Driver ID": vehicle?.driver.id,
    },
    content: {
      Phone: vehicle?.driver.phone ?? "0917236404",
      Email: vehicle?.driver.email,
    },
  };

  return (
    <div className="flex w-[60%] h-full gap-4">
      <div className="flex flex-col gap-4 h-full w-[40%]">
        {isLoading ? (
          <OrderInforCardSkeleton />
        ) : (
          <OrderInforCard {...driver_card_props} />
        )}
        {issueLoading ? (
          <ListSkeleton />
        ) : (
          <RequestList title="VEHICLE REQUESTS" data={issues} />
        )}
      </div>
      <div className="flex flex-col gap-4 h-full w-[60%]">
        <LineChart />
        {orderLoading ? (
          <ListSkeleton />
        ) : (
          <OrderSubList data={orders} title="ASSIGNED ORDERS" />
        )}
      </div>
    </div>
  );
};

export default VehicleDetailSummaryContainer;