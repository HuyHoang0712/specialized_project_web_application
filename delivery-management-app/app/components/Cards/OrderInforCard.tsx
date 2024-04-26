"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@mui/material";
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
      Icon = dynamic(
        () => import("@heroicons/react/24/outline").then((res) => res.UserIcon),
        {
          ssr: false,
        }
      );
      break;
    case "vehicle":
      Icon = dynamic(
        () =>
          import("@heroicons/react/24/outline").then((res) => res.TruckIcon),
        {
          ssr: false,
        }
      );
      break;

    default:
      Icon = dynamic(
        () =>
          import("@heroicons/react/24/outline").then(
            (res) => res.QuestionMarkCircleIcon
          ),
        {
          ssr: false,
        }
      );
      break;
  }

  const ContentIcon = Object.keys(content).map((key) => {
    switch (key) {
      case "Phone":
        return dynamic(
          () =>
            import("@heroicons/react/24/solid").then((res) => res.PhoneIcon),
          {
            ssr: false,
          }
        );
      case "Email":
        return dynamic(
          () =>
            import("@heroicons/react/24/solid").then((res) => res.EnvelopeIcon),
          {
            ssr: false,
          }
        );

      default:
        return dynamic(
          () =>
            import("@heroicons/react/24/solid").then(
              (res) => res.QuestionMarkCircleIcon
            ),
          {
            ssr: false,
          }
        );
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
          <span className="text-base font-medium text-primary-100">{title}</span>
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
