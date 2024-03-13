"use client";
import React from "react";
import Image from "next/image";
import { Images } from "@/app/lib/assets";
import { Issue } from "@/app/lib/types";
import StatusCard from "./StatusCard";

const IssueCard = (props: Issue) => {
  const { date_time, status, label, creator } = props;
  return (
    <div className="flex flex-row w-full py-3 gap-[.625rem] items-start">
      <Image
        className="p-[.313rem] rounded-lg"
        src={Images.ExampleAva}
        width={60}
        height={60}
        alt=""
      />
      <div className="flex flex-col flex-1 gap-1">
        <div className="card-content">
          <span className="text-black-80 font-bold text-base">{creator}</span>
          <StatusCard label={status} />
        </div>
        <div className="card-content text-sm">
          <span className="text-black-50 font-medium">Label: {label}</span>
          <span className="text-black-20 font-normal">{date_time}</span>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
