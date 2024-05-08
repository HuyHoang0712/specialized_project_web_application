import React from "react";
import { Skeleton } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import clsx from "clsx";
interface SummaryCardProps {
  Icon: any;
  title: string;
  value: string;
  type: number;
}

const SummaryCard = ({ Icon, title, value, type }: SummaryCardProps) => {
  return (
    <div className="flex bg-white p-3 gap-3 rounded-lg shadow-sm items-center">
      <Icon
        className={clsx("w-14 icon-sw-2 rounded-lg p-3", {
          "bg-[#32936F]/[.1] text-green": type === 2,
          "bg-red/[.1] text-red": type === 3,
          "text-[#FAA300] bg-secondary-30/50": type === 0,
          "text-primary-100 bg-primary-100/10 ": type === 1,
          "text-black-100 bg-black-10/30": type === 4,
        })}
      />
      <div className="flex flex-col">
        <span className="text-black-40">{title}</span>
        <span className="text-lg font-semibold text-black-60">{value}</span>
      </div>
    </div>
  );
};

export const SummaryCardSkeleton = () => {
  return (
    <div className="flex bg-white p-3 gap-3 rounded-lg shadow-sm items-center">
      <Skeleton variant="rectangular" width={50} height={50} />
      <div className="flex flex-col">
        <Skeleton variant="text" width={100} />
        <Skeleton variant="text" width={50} />
      </div>
    </div>
  );
};

export default SummaryCard;
