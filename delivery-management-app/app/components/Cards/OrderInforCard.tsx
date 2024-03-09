"use client";
import React from "react";
import dynamic from "next/dynamic";

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
        () => import("@heroicons/react/24/solid").then((res) => res.UserIcon),
        {
          ssr: false,
          loading: () => <>Loading...</>,
        }
      );
      break;

    default:
      break;
  }

  return (
    <div className="bg-white rounded-lg p-3">
      <Icon className="w-5 bg-secondary-20 rounded-lg" />
    </div>
  );
};

export default OrderInforCard;
