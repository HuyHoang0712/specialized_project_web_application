"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useGetCustomerByIdQuery } from "@/app/redux/features/customer/customerApiSlice";
import {
  HashtagIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
const MapBox = dynamic(() => import("@/app/components/Map/Map"), {
  ssr: false,
});

interface CustomerDetailContainerProps {
  id: string;
}
const CONTENT_TITLE_CLASS =
  "flex items-center gap-1 font-medium text-sm text-black-30";
const CONTENT_CLASS =
  "font-medium text-black-60 shadow-sm border border-primary-10 w-full rounded-lg cursor-pointer p-3 truncate";
const ICON_CLASS = "w-4";

const CustomerDetailContainer = (props: CustomerDetailContainerProps) => {
  const { id } = props;
  const { data, error, isLoading } = useGetCustomerByIdQuery(id);
  if (isLoading) return <CustomerDetailContainerSkeleton />;
  return (
    <div className="flex flex-1 flex-col bg-white rounded-lg p-3">
      <h1 className="text-lg font-medium text-primary-100">Customer</h1>
      <div className="grid grid-cols-4 mt-3 gap-5">
        <div className="space-y-1 col-span-3">
          <div className={CONTENT_TITLE_CLASS}>
            <UserIcon className={ICON_CLASS} />
            Name
          </div>
          <div className={CONTENT_CLASS}>{data.name}</div>
        </div>
        <div className="space-y-1">
          <div className={CONTENT_TITLE_CLASS}>
            <HashtagIcon className={ICON_CLASS} />
            Id
          </div>
          <div className={CONTENT_CLASS}>{data.id}</div>
        </div>
        <div className="space-y-1 md:col-span-2 sm:col-span-4">
          <div className={CONTENT_TITLE_CLASS}>
            <PhoneIcon className={ICON_CLASS} />
            Phone
          </div>
          <div className={CONTENT_CLASS}>0991212331</div>
        </div>
        <div className="space-y-1 md:col-span-2 sm:col-span-4">
          <div className={CONTENT_TITLE_CLASS}>
            <EnvelopeIcon className={ICON_CLASS} />
            Email
          </div>
          <div className={CONTENT_CLASS}>example@mail.com</div>
        </div>
        <div className="space-y-1 col-span-4">
          <div className={CONTENT_TITLE_CLASS}>
            <MapPinIcon className={ICON_CLASS} />
            Address
          </div>
          <div className={CONTENT_CLASS}>{data.address}</div>
        </div>
      </div>
      <div className="flex-1 mt-3 shadow-sm">
        <MapBox center={[data.latitude, data.longitude]} />
      </div>
    </div>
  );
};

export default CustomerDetailContainer;

const CustomerDetailContainerSkeleton = () => {
  return <div>CustomerDetailContainerSkeleton</div>;
};
