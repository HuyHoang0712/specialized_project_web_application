"use client";
import React from "react";
import { LineChart as Chart } from "@mui/x-charts/LineChart";
import dayjs from "dayjs";

interface Props {
  data: any[];
}

const LineChart = ({ data }: Props) => {
  const getSixMonth = () => {
    const cur_month = dayjs().month() + 1;
    const months = [];
    for (let i = 0; i < 6; i++) {
      const month = cur_month - i;
      months.push(month < 1 ? 12 + month : month);
    }
    return months;
  };

  const getData = () => {
    const months = getSixMonth();
    return months.map((month) => {
      const monthData = data.find((d) => d.month === month);
      return monthData
        ? {
            ...monthData,
            total:
              monthData.completed +
              monthData.pending +
              monthData.canceled +
              monthData.in_progress,
          }
        : {
            month,
            total: 0,
            completed: 0,
            pending: 0,
            canceled: 0,
            in_progress: 0,
          };
    });
  };

  const chartData = getData().reverse();

  return (
    <Chart
      xAxis={[
        {
          data: chartData.map((item) =>
            dayjs()
              .month(item.month - 1)
              .format("MMM")
          ),
          scaleType: "point",
        },
      ]}
      series={[
        {
          data: chartData.map((item) => item.total),
          label: "Total",
          color: "rgba(28, 29, 34)",
        },
        {
          data: chartData.map((item) => item.pending),
          label: "Pending",
          color: "rgba(255, 204, 145)",
        },
        {
          data: chartData.map((item) => item.in_progress),
          label: "In Progress",
          color: "rgba(96, 120, 236)",
        },
        {
          data: chartData.map((item) => item.completed),
          label: "Completed",
          color: "rgba(81, 156, 102)",
        },
        {
          data: chartData.map((item) => item.canceled),
          label: "Canceled",
          color: "rgba(204, 95, 95)",
        },
      ]}
      slotProps={{
        legend: {
          position: { vertical: "top", horizontal: "middle" },
          itemMarkWidth: 14,
          itemMarkHeight: 14,
          itemGap: 10,
          labelStyle: {
            fontSize: 14,
            fontWeight: 500,
          },
          padding: 1,
        },
      }}
    />
  );
};

export default LineChart;
