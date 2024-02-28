"use client";
import React from "react";
import Search from "../Search/Search";

const TransportationPlanList = () => {
  return (
    <div className="flex flex-1 divide-y">
      <div className="flex flex-row w-full justify-between items-center">
        <span className="text-lg text-black-60 font-medium">
          Transportation Plans
        </span>
        <div className="flex flex-row gap-3">
          <Search />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TransportationPlanList;
