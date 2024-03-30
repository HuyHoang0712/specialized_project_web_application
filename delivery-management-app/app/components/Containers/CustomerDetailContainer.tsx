"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useGetCustomerByIdQuery } from "@/app/redux/features/customer/customerApiSlice";
import { Skeleton } from "@mui/material";
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

interface InfoItemProps {
  Icon: React.FC<any>;
  title: string;
  content: string;
  styles?: string;
}

const CONTENT_TITLE_CLASS = "flex items-center gap-1 text-sm text-black-40";
const CONTENT_CLASS =
  "text-black-100 shadow-sm shadow-inner border border-primary-10 w-full rounded-lg cursor-pointer px-3 py-2 truncate";
const ICON_CLASS = "w-4 text-black-40";

const CustomerDetailContainer = (props: CustomerDetailContainerProps) => {
  const { id } = props;
  const { data, error, isLoading } = useGetCustomerByIdQuery(id);
  return (
    <div className="flex flex-1 flex-col bg-white rounded-lg p-3">
      <h1 className="text-lg font-medium text-primary-100">Customer</h1>
      {isLoading ? (
        <CustomerDetailContainerSkeleton />
      ) : (
        <>
          <div className="grid grid-cols-4 mt-3 gap-5">
            <InfoItem Icon={UserIcon} title="Name:" content={data.name} />
            <InfoItem Icon={HashtagIcon} title="Id:" content={data.id} />
            <InfoItem Icon={PhoneIcon} title="Phone:" content={"0912301231"} />
            <InfoItem
              Icon={EnvelopeIcon}
              title="Email:"
              content={"example@mail.com"}
            />
            <InfoItem
              Icon={MapPinIcon}
              title="Addres:"
              content={data.address}
              styles="col-span-4"
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
    <div className="grid grid-cols-4 mt-3 gap-5">
      <InforItemSkeleton />
      <InforItemSkeleton />
      <InforItemSkeleton />
      <InforItemSkeleton />
      <InforItemSkeleton styles="col-span-4" />
    </div>
  );
};

const InforItemSkeleton = ({ styles }: { styles?: string }) => {
  return (
    <div className={"space-y-1 " + (styles ? styles : "col-span-2")}>
      <div className={CONTENT_TITLE_CLASS}>
        <Skeleton variant="circular" width={20} height={20} />
        <Skeleton variant="text" width={100} />
      </div>
      <div className={CONTENT_CLASS}>
        <Skeleton variant="text" width={"100%"} />
      </div>
    </div>
  );
};

const InfoItem = ({ Icon, title, content, styles }: InfoItemProps) => (
  <div className={"space-y-1" + " " + (styles ? styles : "col-span-2")}>
    <div className={CONTENT_TITLE_CLASS}>
      <Icon className={ICON_CLASS} />
      {title}
    </div>
    <div className={CONTENT_CLASS}>{content}</div>
  </div>
);
