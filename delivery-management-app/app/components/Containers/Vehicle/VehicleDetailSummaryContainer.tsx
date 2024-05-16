"use client";
import React from "react";
import { useGetVehicleByIdQuery } from "@/app/redux/features/vehicle/vehicleApiSlice";
import { useGetIssuesOfVehicleQuery } from "@/app/redux/features/issues/issueApiSlice";
import { useGetOrderOfVehicleQuery } from "@/app/redux/features/order/orderApiSlice";
import OrderInforCard, {
  OrderInforCardSkeleton,
} from "../../Cards/OrderInforCard";
import RequestSubList from "../../Lists/SubLists/RequestSubList";
import OrderSubList from "../../Lists/SubLists/OrderSubList";
import { Skeleton } from "@mui/material";
import OrderSummayOfVehicleWrap from "../../Wrap/OrderSummaryOfVehicleWrap";

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
        <div className="flex flex-col flex-[2_2_75%] bg-white shadow-sm rounded-lg p-3 overflow-hidden">
          <h1 className="font-medium text-primary-100">VEHICLE REQUESTS</h1>
          {issueLoading ? (
            <Skeleton variant="rectangular" className="flex-1" />
          ) : (
            <RequestSubList data={issues} />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 h-full w-[60%]">
        <OrderSummayOfVehicleWrap id={id} />
        <div className="flex flex-col flex-1 bg-white shadow-sm rounded-lg p-3 overflow-hidden">
          <h1 className="font-medium text-primary-100">ASSIGNED ORDERS</h1>
          {orderLoading ? (
            <Skeleton variant="rectangular" className="flex-1" />
          ) : (
            <OrderSubList data={orders} />
          )}
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailSummaryContainer;
