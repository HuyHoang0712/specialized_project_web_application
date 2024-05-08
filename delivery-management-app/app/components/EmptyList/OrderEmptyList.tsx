"use client";
import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
const OrderEmptyList = () => {
  return (
    <div className="flex flex-col gap-4 h-full w-full items-center justify-center">
      <ShoppingBagIcon className="w-32 p-10 rounded-full text-secondary-100 bg-secondary-20" />
      <span className="font-semibold text-black-50">No Order!</span>
    </div>
  );
};

export default OrderEmptyList;
