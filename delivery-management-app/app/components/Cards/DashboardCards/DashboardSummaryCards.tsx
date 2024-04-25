"use client";
import React from "react";
import dynamic from "next/dynamic";
import clsx from "clsx";
const MapBox = dynamic(() => import("../../Map/Map"), { ssr: false });
const OrderListDashboard = dynamic(
  () => import("../../Lists/DashboardList/OrderListDashboard"),
  { ssr: false }
);
const IssueListDashboard = dynamic(
  () => import("../../Lists/DashboardList/IssueListDashboard"),
  { ssr: false }
);

interface Props {
  title: string;
  type: string;
}

function DashboardSummaryCards(props: Props) {
  const { title, type } = props;

  return (
    <div
      // className={clsx(
      //   "flex flex-col rounded-lg p-3 gap-3 bg-white overflow-hidden",
      //   { " flex-1": type != "tracking", "w-[40%]": type == "tracking" }
      // )}
      className="flex flex-col rounded-lg p-3 gap-3 bg-white overflow-hidden flex-1"
    >
      <span className="text-lg font-medium text-black-60">{title}</span>
      {(() => {
        switch (type) {
          case "issue":
            return <IssueListDashboard />;
          case "order":
            return <OrderListDashboard />;
          case "tracking":
            return <MapBox center={[10.772327943924136, 106.65794471075151]}/>;
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default DashboardSummaryCards;
