"use client";
import React, { useState } from "react";
import ProfileHeader from "../Header/ProfileHeader";
import { UserIcon } from "@heroicons/react/24/solid";
import { CreditCardIcon } from "@heroicons/react/24/solid";
import { useGetUserProfileQuery } from "@/app/redux/features/profile/profileApiSlice";
import InfoItem, { InforItemSkeleton } from "../Input/InfoItem";
import Image from "next/image";
import { Images } from "@/app/lib/assets";
import { CakeIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
//////
import Search from "../Search/Search";
import FilterModal from "../Modals/FilterModal";
import { Skeleton } from "@mui/material";

export const Profile = () => {
  const { data, error, isLoading } = useGetUserProfileQuery("");
  return (
    <div className="flex flex-1 flex-col bg-white p-3">
      <ProfileHeader />
      {isLoading ? (
        <ProfileSkeleton />
      ) : (
        <div className="flex flex-1 gap-3">
          <div className="flex flex-1 flex-col gap-3">
            <InfoItem
              Icon={UserIcon}
              title="Full name"
              content={data[0].name}
            />
            <InfoItem Icon={CreditCardIcon} title="ID" content={data[0].id} />
            <InfoItem
              Icon={CakeIcon}
              title="Birthday"
              content={data[0].date_of_birth}
            />
            <InfoItem
              Icon={EnvelopeIcon}
              title="E-mail"
              content={data[0].email}
            />
          </div>

          <Image
            className="w-[30%] h-[50%] rounded-lg p-3"
            src={Images.ExampleAva}
            alt=""
          />
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
          <InforItemSkeleton />
          <InforItemSkeleton />
          <InforItemSkeleton />
          <InforItemSkeleton />
        </div>
      </div>
      <Skeleton variant="rectangular" width={"30%"} height={"40%"} />
    </div>
  );
};

export const Request = () => {
  return (
    <div className="flex flex-1 flex-col bg-white p-3 gap-3">
      <div
        className="flex items-stretch justify-between p-3"
        aria-label="Global"
      >
        <div className="flex-1 w-32 text-lg text-black-60 font-medium">
          Request
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <Search />
        <FilterModal />
      </div>
    </div>
  );
};
