import React from "react";
import dynamic from "next/dynamic";
import CustomerDetailContainer from "@/app/components/Containers/CustomerDetailContainer";
import { Skeleton } from "@mui/material";
const LineChart = dynamic(() => import("@/app/components/Chart/LineChart"), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" height={500} />,
});

const CustomerPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div className="content-container flex-row">
      <CustomerDetailContainer id={id} />
      <div className="flex flex-1 flex-col justify-between">
        <LineChart />
      </div>
    </div>
  );
};

export default CustomerPage;
