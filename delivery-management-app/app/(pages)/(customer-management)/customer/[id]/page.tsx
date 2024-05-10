import React from "react";
import dynamic from "next/dynamic";
import CustomerDetailContainer from "@/app/components/Containers/CustomerDetailContainer";
import { Skeleton } from "@mui/material";
import OrderSubListWrap from "@/app/components/Wrap/OrderSubListWrap";
import OrderSummayOfCustomerWrap from "@/app/components/Wrap/OrderSummayOfCustomerWrap";
const CustomerLocation = dynamic(() => import("@/app/components/Map/CustomerLocation"), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" className="flex-1" />,
});

const CustomerPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div className="content-container flex-row">
      <CustomerDetailContainer id={id} />
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex flex-col gap-y-3 p-3 flex-1 bg-white rounded-lg shadow-sm">
          <span className="font-medium text-primary-100">CUSTOMER POSITION</span>
          <CustomerLocation id={id} />
        </div>
        <OrderSummayOfCustomerWrap id={id} />
      </div>
      <OrderSubListWrap id={id} />
    </div>
  );
};

export default CustomerPage;
