import React from "react";
import dynamic from "next/dynamic";
import CustomerDetailContainer from "@/app/components/Containers/CustomerDetailContainer";

const CustomerPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="content-container flex-row">
      <CustomerDetailContainer id={id} />
      <div className="flex flex-1 flex-col"></div>
    </div>
  );
};

export default CustomerPage;
