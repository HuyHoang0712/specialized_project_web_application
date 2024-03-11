"use client";
import React, { use, useEffect } from "react";
import Image from "next/image";
import { Icons } from "@/app/lib/assets";
import { selectOrderList } from "@/app/redux/features/order/orderSlice";
import { useAppSelector } from "@/app/redux/hooks";
import { useGetOrdersByDateMutation } from "@/app/redux/features/order/orderApiSlice";
import { table } from "console";

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
  const [getOrdersByDate, { isLoading, data, error }] =
    useGetOrdersByDateMutation();
  const orderList = useAppSelector((state) => selectOrderList(state));
  const getCurOrders = async () => {
    try {
      let date = new Date();
      let formattedDate = date.toISOString().split("T")[0];
      const res = await getOrdersByDate(
        JSON.stringify({ date: formattedDate })
      ).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCurOrders();
    console.table(orderList);
  }, []);

  return (
    <div className="flex flex-col gap-3 h-[8rem] bg-white p-3 rounded-lg">
      <div className="flex flex-row items-center gap-3">
        <Image
          className="bg-secondary-30 p-2 rounded-lg"
          src={Icons.Order}
          width={40}
          alt=""
        />
        <span className="text-lg font-medium">Order</span>
      </div>
      <div className="flex flex-row items-center justify-between">
        {SummaryItems.map((item, idx) => (
          <div className="flex flex-col" key={idx}>
            <span className="text-base font-medium text-black-50">
              {item.title}
            </span>
            <span className={"text-base font-medium " + `text-${item.color}`}>
              0
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderSummaryCard;
