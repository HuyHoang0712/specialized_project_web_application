"use client";
import React from "react";
import { useGetVehicleByIdQuery } from "@/app/redux/features/vehicle/vehicleApiSlice";
const VehicleDetailSummaryContainer = ({ id }: { id: string }) => {
  const { data: vehicle, error, isLoading } = useGetVehicleByIdQuery(id);
  return <div>VehicleDetailSummaryContainer</div>;
};

export default VehicleDetailSummaryContainer;
