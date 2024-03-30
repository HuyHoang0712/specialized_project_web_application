"use client";
import React from "react";
import { LineChart as Chart } from "@mui/x-charts/LineChart";
import { PresentationChartLineIcon } from "@heroicons/react/24/outline";
const MONTH: { [key: number]: string } = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

const LineChart = () => {
  const getSixMonth = () => {
    const cur_month = new Date().getMonth() + 1;
    const months = [];
    for (let i = 0; i < 6; i++) {
      const month = cur_month - i;
      months.push(month < 1 ? 12 + month : month);
    }
    return months.map((month) => MONTH[month]);
  };

  return (
    <div className="bg-white rounded-lg p-3 flex flex-col items-center h-[80%] w-full">
      <div className="flex items-start gap-2 text-lg font-medium text-primary-100 self-start">
        <PresentationChartLineIcon className="w-10 p-2 bg-secondary-20 rounded-lg" />
        Order Summary
      </div>
      <Chart
        xAxis={[{ data: getSixMonth().reverse(), scaleType: "point" }]}
        series={[
          {
            data: [20, 30, 40, 50, 40, 20],
            label: "Total Orders",
            color: "rgba(96, 120, 236)",
          },
          {
            data: [20, 25, 30, 45, 40, 20],
            label: "Completed",
            color: "rgba(81, 156, 102)",
          },
          {
            data: [0, 4, 9, 10, 5, 0],
            label: "Pending",
            color: "rgba(255, 204, 145)",
          },
          {
            data: [0, 1, 1, 0, 0, 0],
            label: "Canceled",
            color: "rgba(204, 95, 95)",
          },
        ]}
        colors={["rgba(96, 120, 236)"]}
      />
    </div>
  );
};

export default LineChart;
