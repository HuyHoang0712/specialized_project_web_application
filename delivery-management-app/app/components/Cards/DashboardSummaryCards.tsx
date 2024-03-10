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

interface Props {
  title: string;
  type: string;
}

function DashboardSummaryCards(props: Props) {
  const { title, type } = props;

  return (
    <div
      className={clsx(
        "flex flex-col rounded-lg p-3 gap-3 bg-white overflow-hidden",
        { " flex-1": type != "tracking", "w-[40%]": type == "tracking" }
      )}
    >
      <span className="text-lg font-medium text-black-60">{title}</span>
      {(() => {
        switch (type) {
          case "issue":
            return <IssueListDashboard />;
          case "order":
            return <OrderListDashboard />;
          case "tracking":
            return <Map mapWidth={"40vw"}/>;
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default DashboardSummaryCards;
