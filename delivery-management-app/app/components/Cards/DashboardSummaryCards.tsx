"use client";
import React from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map/Map"), { ssr: false });
const OrderListDashboard = dynamic(() => import("../Lists/OrderListDashboard"), {
  ssr: false,
});

function DashboardSummaryCards(props: any) {
  const { title, type } = props;

  return (
    <div
      className={
        "flex flex-col rounded-xl p-4 gap-5 bg-white overflow-hidden" +
        (type != "tracking" ? " flex-1" : "")
      }
    >
      <span className="sub-h3 font-[Poppins-Medium] text-black-60">
        {title}
      </span>
      {(() => {
        switch (type) {
          case "issue":
            return <></>;
          case "order":
            return <OrderListDashboard />;
          case "tracking":
            return <Map />;
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default DashboardSummaryCards;
