"use client";
import React from "react";
import clsx from "clsx";

interface Props {
  label: number;
}

const StatusCard = (props: Props) => {
  const { label } = props;
  const STATUS: { [key: number]: string } = {
    0: "Pending",
    1: "In-Progress",
    2: "Completed",
    3: "Cancelled",
  };
  return (
    <div
      className={clsx("text-sm px-2 py-1 rounded-xl", {
        "bg-[#32936F]/[.16] text-green": label === 2,
        "bg-secondary-30 text-[#FAA300]": label === 0,
        "bg-[#5570F1]/[.16] text-primary-100": label === 1,
      })}
    >
      {STATUS[label]}
    </div>
  );
};

export default StatusCard;
