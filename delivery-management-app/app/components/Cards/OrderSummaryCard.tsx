"use client";
import React from "react";
import Image from "next/image";
import { Icons } from "@/app/lib/constants";

const SummaryItems = [
  {
    title: "All Orders",
    color: "black-100",
  },
  {
    title: "Completed",
    color: "green",
  },
  {
    title: "In Progress",
    color: "primary-100",
  },
  {
    title: "Pending",
    color: "secondary-100",
  },
  {
    title: "Issue",
    color: "red",
  },
];

function OrderSummaryCard() {
  return (
    <div className="flex flex-col gap-3 h-[9.5rem] bg-white p-4 rounded-xl">
      <div className="flex flex-row flex-1 items-center gap-[.625rem]">
        <Image
          className="bg-secondary-30 p-3 rounded-lg"
          src={Icons.Order}
          width={48}
          height={48}
          alt=""
        />
        <span className="sub-h3 font-[Poppins-Medium]">Order</span>
      </div>
      <div className="flex flex-row flex-1 items-center justify-between">
        {SummaryItems.map((item, idx) => (
          <div className="flex flex-col gap-2" key={idx}>
            <span className="p2 font-[Poppins-Medium] text-black-30">
              {item.title}
            </span>
            <span className={`sub-h3 font-[Poppins-Medium] text-${item.color}`}>
              0
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderSummaryCard;
