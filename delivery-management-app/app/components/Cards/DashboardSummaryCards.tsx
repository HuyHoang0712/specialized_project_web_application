"use client";
import React from "react";
import dynamic from "next/dynamic";
import clsx from "clsx";
const Map = dynamic(() => import("../Map/Map"), { ssr: false });
const OrderListDashboard = dynamic(
  () => import("../Lists/OrderListDashboard"),
  { ssr: false }
);
const IssueListDashboard = dynamic(
  () => import("../Lists/IssueListDashboard"),
  { ssr: false }
);

function DashboardSummaryCards(props: any) {
  const { title, type } = props;

  return (
    <div
      className={clsx(
        "flex flex-col rounded-xl p-4 gap-5 bg-white overflow-hidden",
        { " flex-1": type != "tracking" }
      )}
    >
      <span className="text-xl font-medium text-black-60">{title}</span>
      {(() => {
        switch (type) {
          case "issue":
            return <IssueListDashboard />;
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
