import React from "react";
import dynamic from "next/dynamic";
import CustomerDetailContainer from "@/app/components/Containers/CustomerDetailContainer";
import { Skeleton } from "@mui/material";
import UpdateModal from "@/app/components/Modals/UpdateModal";
const LineChart = dynamic(() => import("@/app/components/Chart/LineChart"), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" height={500} />,
});

const CustomerPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const update_customer_modal_props = {
    id: id,
    title: "Update Customer",
    type: "customer",
  };

  return (
    <div className="content-container flex-row">
      <CustomerDetailContainer id={id} />
      <div className="flex flex-1 flex-col justify-between">
        <LineChart />
        <div className="flex gap-5 self-end">
          <UpdateModal {...update_customer_modal_props} />
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
