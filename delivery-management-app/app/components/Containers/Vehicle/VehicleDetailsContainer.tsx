"use client";
import React from "react";
import { useGetVehicleByIdQuery } from "@/app/redux/features/vehicle/vehicleApiSlice";
import InforCard from "../../Cards/InforCard";
import StatusCard from "../../Cards/StatusCard";
import { TruckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Images } from "@/app/lib/assets";
import { TagIcon } from "@heroicons/react/24/solid";
import CancelModal from "../../Modals/CancelModal";
import UpdateModal from "../../Modals/UpdateModal";
const VehicleDetailsContainer = ({ id }: { id: string }) => {
  const { data: vehicle, error, isLoading } = useGetVehicleByIdQuery(id);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-1 flex-col bg-white rounded-lg p-3 gap-3">
      <div className="flex justify-between items-center">
        <span className="flex gap-2 items-center text-2xl font-semibold text-black-60">
          <TruckIcon className="h-6 w-6 text-primary-100" />
          {vehicle.license_plate}
        </span>
        <StatusCard label={vehicle.status} type={"employee"} />
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col gap-3">
          <span className="font-medium text-primary-100">VEHICLE PICTURE</span>
          <div className="">
            <Image
              src={Images.ExampleAva}
              width={150}
              height={150}
              style={{ borderRadius: "0.5rem" }}
              alt="employee picture"
            />
            <span className="text-xs mt-2 text-primary-100 underline underline-offset-1">
              Change vehicle picture
            </span>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-3">
          <span className="font-medium text-primary-100">VEHICLE DETAILS</span>
          <div className="grid gap-x-8 gap-y-5">
            <InforCard
              Icon={TagIcon}
              title="Vehicle Brand:"
              content={vehicle.brand}
            />
            <InforCard
              Icon={TruckIcon}
              title="Vehicle Capacity:"
              content={vehicle.capacity}
            />
            <InforCard
              Icon={TruckIcon}
              title="Fuel Consumtion Level:"
              content={vehicle.fuel_consumption_level}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 gap-3 justify-end items-end">
        <CancelModal id={id} title="Cancel Vehicle" type="vehicle" />
        <UpdateModal data={vehicle} title="Update Vehicle" type="vehicle" />
      </div>
    </div>
  );
};

export default VehicleDetailsContainer;
