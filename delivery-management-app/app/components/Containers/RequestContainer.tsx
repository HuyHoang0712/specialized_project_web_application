"use client";
import React, { useState } from "react";
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

export const Request = () => {
  return (
    <div className="flex flex-1 flex-col bg-white p-3 gap-3">
      <div className="flex items-stretch justify-between p-3" aria-label="Global">
        <div className="flex-1 w-32 text-lg text-black-60 font-medium">Request</div>
      </div>
      <div className="flex flex-row gap-3"></div>
    </div>
  );
};
