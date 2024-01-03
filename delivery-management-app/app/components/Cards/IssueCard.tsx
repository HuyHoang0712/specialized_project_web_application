"use client";
import React from "react";
import Image from "next/image";
import { Icons, Images, Themes } from "@/app/lib/constants";

const IssueCard = (props: any) => {
  const { owner, label, datetime, status, type } = props;
  return (
    <div className="flex flex-row w-full py-3 gap-[.625rem] items-center">
      <Image
        className="p-[.313rem] rounded-lg"
        src={Images.ExampleAva}
        width={60}
        height={60}
        alt=""
      />
      <div className="flex flex-col flex-1 gap-1">
        <div className="card-content">
          <span className="text-black-80 font-[Poppins-Bold] text-base">
            {owner}
          </span>
          <span
            className={
              "font-[Poppins-Regular] px-[.438rem] py-[0.125rem] text-sm rounded-lg " +
              Themes.StatusStyle[`${status}` as keyof typeof Themes.StatusStyle]
            }
          >
            {status}
          </span>
        </div>
        <div className="card-content">
          <span className="text-black-50 font-[Poppins-Medium] text-base">
            Label: {label}
          </span>
          <span className="text-black-20 font-[Poppins-Regular] text-sm">
            {datetime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
