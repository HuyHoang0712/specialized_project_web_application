"use client";
import React from "react";
import { LineChart as Chart } from "@mui/x-charts/LineChart";

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
    <div className="bg-white rounded-lg p-3 flex flex-col items-center h-[40%] w-full">
      <div className="text-lg font-medium text-primary-100 self-start">
        Order
      </div>
      <Chart
        xAxis={[{ data: getSixMonth().reverse(), scaleType: "point" }]}
        series={[
          {
            data: [20, 30, 40, 50, 40, 20],
            label: "Total Orders",
          },
        ]}
        colors={["rgba(96, 120, 236)"]}
      />
    </div>
  );
};

export default LineChart;
