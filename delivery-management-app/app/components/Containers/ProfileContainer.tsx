"use client";
import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import { CreditCardIcon } from "@heroicons/react/24/solid";
import { useGetUserProfileQuery } from "@/app/redux/features/profile/profileApiSlice";
import InforCard, { InforCardSkeleton } from "../Cards/InforCard";
import Image from "next/image";
import { Images } from "@/app/lib/assets";
import { CakeIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import UpdateModal from "../Modals/UpdateModal";

//////
import Search from "../Search/Search";
import FilterModal from "../Modals/FilterModal";
import { Skeleton } from "@mui/material";
interface ProfileDetailContainerProps {
  id?: string;
}

export const Profile = ({ id }: ProfileDetailContainerProps) => {
  const { data, error, isLoading } = useGetUserProfileQuery(undefined);

  const update_btn_props = {
    data: data,
    title: "Update Profile",
    type: "profile",
  };

  return (
    <div className="flex flex-1 flex-col bg-white p-3">
      <div className="flex items-center justify-between p-3" aria-label="Global">
        <span className="text-lg text-black-60 font-medium">Account</span>
        <UpdateModal {...update_btn_props} />
      </div>
      {isLoading ? (
        <ProfileSkeleton />
      ) : (
        <div className="flex flex-1 gap-3">
          <div className="flex flex-1 flex-col gap-3">
            <InforCard Icon={UserIcon} title="Full name" content={data.name} />
            <InforCard Icon={CreditCardIcon} title="ID" content={data.id} />
            <InforCard Icon={CakeIcon} title="Birthday" content={data.date_of_birth} />
            <InforCard Icon={PhoneIcon} title="Phone" content={data.phone} />
            <InforCard Icon={EnvelopeIcon} title="E-mail" content={data.email} />
          </div>

          <Image className="w-[30%] h-[40%] rounded-lg p-3" src={Images.ExampleAva} alt="" />
        </div>
      )}
    </div>
  );
};

const ProfileSkeleton = () => {
  return (
    <div className="flex flex-1 gap-3">
      <div className="flex flex-1 gap-3">
        <div className="flex flex-1 flex-col gap-3">
          <InforCardSkeleton />
          <InforCardSkeleton />
          <InforCardSkeleton />
          <InforCardSkeleton />
        </div>
      </div>
      <Skeleton variant="rectangular" width={"30%"} height={"40%"} />
    </div>
  );
};
