"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useGetCustomerByIdQuery } from "@/app/redux/features/customer/customerApiSlice";
import { Skeleton } from "@mui/material";
import InforCard, { InforCardSkeleton } from "../Cards/InforCard";
import CancelModal from "../Modals/CancelModal";
import UpdateModal from "../Modals/UpdateModal";
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
  const { data: customer, error, isLoading } = useGetCustomerByIdQuery(id);
  if (isLoading) return <CustomerDetailContainerSkeleton />;

  const update_btn_props = {
    data: customer,
    title: "Update Customer",
    type: "customer",
  };

  const delete_btn_props = {
    id: id,
    title: "Delete Customer",
    type: "customer",
  };

  return (
    <div className="flex flex-[2_2_0%] flex-col bg-white rounded-lg p-3 gap-3">
      <span className="text-2xl font-semibold text-black-60">
        {customer.name}
      </span>
      <div className="flex flex-1 gap-10">
        <div className="space-y-3 shadow-sm w-[20rem] h-[25rem]">
          <span className="font-medium text-primary-100">
            CUSTOMER POSITION
          </span>
          <MapBox  />
        </div>
        <div className="flex flex-col flex-1 gap-3">
          <span className="font-medium text-primary-100">CUSTOMER DETAILS</span>
          <div className="flex-1 grid grid-cols-2 auto-rows-max gap-x-8 gap-y-5">
            <InforCard Icon={HashtagIcon} title="Id:" content={customer.id} />
            <InforCard Icon={PhoneIcon} title="Phone:" content={"0912301231"} />
            <InforCard
              Icon={EnvelopeIcon}
              title="Email:"
              content={"example@mail.com"}
              styles="col-span-2"
            />
            <InforCard
              Icon={MapPinIcon}
              title="Addres:"
              content={customer.address}
              styles="col-span-2"
            />
          </div>
          <div className="flex justify-end items-center gap-3">
            <CancelModal {...delete_btn_props} />
            <UpdateModal {...update_btn_props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailContainer;

export const CustomerDetailContainerSkeleton = () => {
  return (
    <div className="flex flex-1 flex-col bg-white rounded-lg p-3">
      <h1 className="text-lg font-medium text-primary-100">Customer Details</h1>
      <div className="grid grid-cols-2 mt-3 gap-5">
        <InforCardSkeleton />
        <InforCardSkeleton />
        <InforCardSkeleton />
        <InforCardSkeleton />
        <InforCardSkeleton styles="col-span-2" />
      </div>
    </div>
  );
};
