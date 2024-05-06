"use client";
import React, { useEffect } from "react";
import clsx from "clsx";
import {
  EMPLOYEE_STATUS,
  VEHICLE_STATUS,
  ORDER_STATUS,
  ISSUE_STATUS,
} from "@/app/lib/constances";

interface Props {
  label: number;
  type: string;
}

const StatusCard = (props: Props) => {
  const { label, type } = props;

  let STATUS: { label: string; value: number }[];
  switch (type) {
    case "employee":
      STATUS = EMPLOYEE_STATUS;
      break;
    case "vehicle":
      STATUS = VEHICLE_STATUS;
      break;
    case "order":
      STATUS = ORDER_STATUS;
      break;
    case "issue-employee":
    case "issue-vehicle":
      STATUS = ISSUE_STATUS;
      break;
    default:
      STATUS = [{ label: "Unknown", value: -1 }];
      break;
  }

  return (
    <div
      className={clsx("text-sm px-4 py-1 rounded-lg", {
        "bg-[#32936F]/[.16] text-green": label === 2,
        "bg-secondary-30 text-[#FAA300]": label === 0,
        "bg-[#5570F1]/[.16] text-primary-100": label === 1,
        "bg-red/[.16] text-red": label === 3,
      })}
    >
      {STATUS.find((item) => item.value === label)?.label}
    </div>
  );
};

export default StatusCard;
