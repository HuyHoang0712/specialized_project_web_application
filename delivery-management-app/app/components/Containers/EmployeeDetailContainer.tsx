"use client";
import React from "react";
import Image from "next/image";
import { Images } from "@/app/lib/assets";
import { useGetEmployeeByIdQuery } from "@/app/redux/features/employee/employeeApiSlice";
import CancelModal from "../Modals/CancelModal";
import UpdateModal from "../Modals/UpdateModal";
import StatusCard from "../Cards/StatusCard";
import InforCard, { InforCardSkeleton } from "../Cards/InforCard";

import {
  HashtagIcon,
  PhoneIcon,
  UserIcon,
  EnvelopeIcon,
  CakeIcon,
} from "@heroicons/react/24/solid";
import { Skeleton } from "@mui/material";
interface EmployeeDetailContainerProps {
  id: string;
}

const EmployeeDetailContainer = ({ id }: EmployeeDetailContainerProps) => {
  const { data, error, isLoading } = useGetEmployeeByIdQuery(id);

  if (isLoading) {
    return <EmployeeDetailContainerSkeleton />;
  }

  const update_btn_props = {
    data: data,
    title: "Update Employee",
    type: "employee",
  };

  const delete_btn_props = {
    id: id,
    title: "Delete Employee",
    type: "employee",
  };

  return (
    <div className="flex flex-col flex-[2_2_0%] bg-white rounded-lg p-4 gap-3">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-semibold text-black-60">
          {data.name}
        </span>
        <StatusCard label={data.status} type={"employee"} />
      </div>
      <div className="flex gap-10">
        <div className="grid gap-3">
          <span className="font-medium text-primary-100">
            EMPLOYEE PICTURE
          </span>
          <div>
            <Image
              src={Images.ExampleAva}
              width={250}
              height={250}
              style={{ borderRadius: "0.5rem" }}
              alt="employee picture"
            />
            <span className="text-xs mt-2 text-primary-100 underline underline-offset-1">
              Change employee picture
            </span>
          </div>
          <div className="mt-10 grid gap-3">
            <UpdateModal {...update_btn_props} />
            {/* <CancelModal {...delete_btn_props} /> */}
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-3">
          <span className="font-medium text-primary-100">
            EMPLOYEE DETAILS
          </span>
          <div className="grid grid-cols-2 gap-x-8 gap-y-5">
            <InforCard
              Icon={HashtagIcon}
              title="Employee ID:"
              content={data.id}
            />
            <InforCard Icon={HashtagIcon} title="Role:" content={data.role} />
            <InforCard
              Icon={UserIcon}
              title="First Name:"
              content={data.first_name}
            />
            <InforCard
              Icon={UserIcon}
              title="Last Name:"
              content={data.last_name}
            />
            <InforCard
              Icon={CakeIcon}
              title="Date of Birth:"
              content={data.date_of_birth}
            />
            <InforCard
              Icon={PhoneIcon}
              title="Phone Number:"
              content={data.phone}
            />
            <InforCard
              Icon={EnvelopeIcon}
              title="Email Address:"
              content={data.email}
              styles="col-span-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailContainer;

const EmployeeDetailContainerSkeleton = () => {
  return (
    <div className="flex flex-col flex-[2_2_0%] bg-white rounded-lg p-4 gap-3">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-semibold text-black-60">
          <Skeleton variant="text" width={150} />
        </span>
        <Skeleton variant="rectangular" width={80} height={28} />
      </div>
      <div className="flex gap-10">
        <div className="grid gap-3">
          <span className="font-medium text-primary-100/60">
            EMPLOYEE PICTURE
          </span>
          <div className="">
            <Skeleton variant="rectangular" width={250} height={250} />
            <span className="text-xs mt-2 text-primary-100 underline underline-offset-1">
              Change employee picture
            </span>
          </div>
          <div className="mt-10 grid gap-3">
            <Skeleton variant="rectangular"  height={40} />
            <Skeleton variant="rectangular"  height={40} />
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-3">
          <span className="font-medium text-primary-100/60">
            EMPLOYEE DETAILS
          </span>
          <div className="grid grid-cols-2 gap-x-8 gap-y-5">
            {[...Array(6)].map((_, idx) => (
              <InforCardSkeleton key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
