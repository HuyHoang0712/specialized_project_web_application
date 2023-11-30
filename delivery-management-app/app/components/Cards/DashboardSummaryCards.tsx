"use client";
import React from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import ("../Map/Map"), {ssr: true})

function DashboardSummaryCards(props: any) {
  const { title, type } = props;

  return (
    <div className="flex flex-auto flex-col rounded-xl p-4 gap-5 bg-white">
      <span className="sub-h3 font-[Poppins-Medium] text-black-60">
        {title}
      </span>
      {(() => {
        switch (type) {
          case "issue":
            return <></>;
          case "order":
            return <></>;
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
