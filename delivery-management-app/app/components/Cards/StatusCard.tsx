"use client";
import React from "react";
import clsx from "clsx";
interface Props {
  label: string;
}

const StatusCard = (props: Props) => {
  const { label } = props;
  return (
    <div
      className={clsx("px-3 py-2 rounded-xl", {
        "bg-[#32936F]/[.16] text-green": label === "Completed",
        "bg-secondary-30 text-[#FAA300]": label === "Pending",
        "bg-[#5570F1]/[.16] text-primary-100": label === "In-Progress",
      })}
    >
      {label}
    </div>
  );
};

export default StatusCard;
