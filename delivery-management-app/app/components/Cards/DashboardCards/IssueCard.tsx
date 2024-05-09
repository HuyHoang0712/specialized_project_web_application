"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Images } from "@/app/lib/assets";
import StatusCard from "../StatusCard";
import IssueDetailContainer from "@/app/components/Containers/IssueDetailContainer";
import Modal from "../../Modals/Modal";
import dayjs from "dayjs";
const IssueCard = (props: any) => {
  const [active, setActive] = useState(false);
  const { id, date_time, status, label, creator, vehicle_id } = props;
  const type = "issue";
  const modalProps = {
    title: "Issue Details",
    FormContent: IssueDetailContainer,
    formProps: { id, type },
    setActive: setActive,
  };
  return (
    <>
      <div
        className="flex w-full p-3 gap-[.625rem] items-start hover:bg-primary-10/50 cursor-pointer transition-all duration-200 ease-in-out"
        onClick={() => setActive(true)}
      >
        <Image
          className="p-[.313rem] rounded-lg"
          src={Images.ExampleAva}
          width={60}
          height={60}
          alt=""
        />
        <div className="flex flex-col flex-1 gap-1">
          <div className="flex flex-1 justify-between items-start">
            <span className="text-black-80 font-bold text-base">{creator}</span>
            <StatusCard label={status} type={"order"} />
          </div>
          <div className="flex flex-1 justify-between items-start text-sm">
            <span className="text-black-50 font-medium">Label: {label}</span>
            <span className="text-black-20 font-normal">
              {dayjs(date_time).format("DD MMM YYYY")}
            </span>
          </div>
          <div
            className={`flex flex-1 ${
              vehicle_id ? "justify-between" : "justify-end"
            } items-start text-sm`}
          >
            {vehicle_id && (
              <span className="text-black-50 font-medium text-sm">
                Vehicle: {vehicle_id}
              </span>
            )}
            <span className="text-black-20 font-normal">
              {dayjs(date_time).format("HH:mm")}
            </span>
          </div>
        </div>
      </div>
      {active && <Modal {...modalProps} />}
    </>
  );
};

export default IssueCard;
