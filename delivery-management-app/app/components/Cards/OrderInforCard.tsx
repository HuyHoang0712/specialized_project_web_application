"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@mui/material";
import {
  UserIcon,
  TruckIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
interface Prosp {
  type: string;
  title: string;
  titleContent: {};
  content: {};
}

const OrderInforCard = (props: Prosp) => {
  const { type, title, titleContent, content } = props;
  let Icon: any;
  switch (type) {
    case "driver":
      Icon = UserIcon;
      break;
    case "vehicle":
      Icon = TruckIcon;
      break;

    default:
      Icon = QuestionMarkCircleIcon;
      break;
  }

  const ContentIcon = Object.keys(content).map((key) => {
    switch (key) {
      case "Phone":
        return PhoneIcon;
      case "Email":
        return EnvelopeIcon;
      default:
        return QuestionMarkCircleIcon;
    }
  });

  const getIcon = (idx: number) => {
    let CurIcon = ContentIcon[idx];
    return <CurIcon className="w-[0.875rem]" />;
  };

  return (
    <div className="flex flex-1 h-fit flex-col bg-white rounded-lg p-3 gap-6">
      <div className="flex items-start gap-6">
        <Icon className="w-10 p-2 bg-secondary-20 rounded-lg text-primary-100 icon-sw-2" />
        <div className="flex flex-col">
          <span className="text-base font-medium text-primary-100">
            {title}
          </span>
          {Object.entries(titleContent).map(
            ([key, value]: [string, any], idx) => (
              <span className="text-sm font-medium text-black-60" key={idx}>
                <span className="text-black-30">{key}:</span> {value}
              </span>
            )
          )}
        </div>
      </div>
      <div className="flex items-center justify-between gap-3">
        {Object.entries(content).map(([key, value]: [string, any], idx) => (
          <div className="text-sm font-medium text-black-60 truncate" key={idx}>
            <span className="flex gap-1 text-black-30">
              {getIcon(idx)}
              {key}
            </span>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderInforCard;

export const OrderInforCardSkeleton = () => {
  return (
    <div className="flex flex-1 flex-col bg-white rounded-lg p-3 gap-6">
      <div className="flex items-start gap-6">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="flex flex-col">
          <Skeleton variant="text" width={100} />
          <Skeleton variant="text" width={100} />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-medium text-black-60 truncate">
          <Skeleton variant="circular" width={14} height={14} />
          <Skeleton variant="text" width={100} />
        </div>
        <div className="text-sm font-medium text-black-60 truncate">
          <Skeleton variant="circular" width={14} height={14} />
          <Skeleton variant="text" width={100} />
        </div>
      </div>
    </div>
  );
};
