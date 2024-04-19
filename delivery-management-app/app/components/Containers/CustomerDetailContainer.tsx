"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useGetCustomerByIdQuery } from "@/app/redux/features/customer/customerApiSlice";
import { Skeleton } from "@mui/material";
import InforCard, { InforCardSkeleton } from "../Cards/InforCard";
import {
  HashtagIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

const MapBox = dynamic(() => import("@/app/components/Map/Map"), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" height={300} />,
});

interface CustomerDetailContainerProps {
  id: string;
}

const CustomerDetailContainer = (props: CustomerDetailContainerProps) => {
  const { id } = props;
  const { data, error, isLoading } = useGetCustomerByIdQuery(id);
  return (
    <div className="flex flex-1 flex-col bg-white rounded-lg p-3">
      <h1 className="text-lg font-medium text-primary-100">Customer Details</h1>
      {isLoading ? (
        <CustomerDetailContainerSkeleton />
      ) : (
        <>
          <div className="grid grid-cols-2 mt-3 gap-5">
            <InforCard Icon={UserIcon} title="Name:" content={data.name} />
            <InforCard Icon={HashtagIcon} title="Id:" content={data.id} />
            <InforCard Icon={PhoneIcon} title="Phone:" content={"0912301231"} />
            <InforCard
              Icon={EnvelopeIcon}
              title="Email:"
              content={"example@mail.com"}
            />
            <InforCard
              Icon={MapPinIcon}
              title="Addres:"
              content={data.address}
              styles="col-span-2"
            />
          </div>
          <div className="flex-1 mt-3 shadow-sm">
            <MapBox center={[data.latitude, data.longitude]} />
          </div>
        </>
      )}
    </div>
  );
};

export default CustomerDetailContainer;

const CustomerDetailContainerSkeleton = () => {
  return (
    <div className="grid grid-cols-2 mt-3 gap-5">
      <InforCardSkeleton />
      <InforCardSkeleton />
      <InforCardSkeleton />
      <InforCardSkeleton />
      <InforCardSkeleton styles="col-span-2" />
    </div>
  );
};
