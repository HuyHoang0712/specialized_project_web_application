"use client";
import React from "react";
import clsx from "clsx";

interface Props {
  label: number;
  type: string;
}

const StatusCard = (props: Props) => {
  const { label, type } = props;
  const STATUS: { [key: number]: string } =
    type === "order"
      ? {
          0: "Pending",
          1: "In-Progress",
          2: "Completed",
          3: "Cancelled",
        }
      : {
          0: "Available",
          1: "Busy",
          2: "On-Break",
        };
  return (
    <div
      className={clsx("text-sm px-2 py-1 rounded-xl", {
        "bg-[#32936F]/[.16] text-green":
          label === 2 ||
          (label === 0 && ["employee", "vehicle"].includes(type)),
        "bg-secondary-30 text-[#FAA300]": label === 0 && type === "order",
        "bg-[#5570F1]/[.16] text-primary-100":
          label === 1 ||
          (label === 1 && ["employee", "vehicle"].includes(type)),
        "bg-red/0.16 text-red":
          label === 3 ||
          (label === 2 && ["employee", "vehicle"].includes(type)),
      })}
    >
      {STATUS[label]}
    </div>
  );
};

export default StatusCard;
