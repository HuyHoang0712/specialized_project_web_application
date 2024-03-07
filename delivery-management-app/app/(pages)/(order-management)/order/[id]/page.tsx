import React from "react";
import CancelOrderModal from "@/app/components/Modals/CancelOrderModal";
import ReportIssueModal from "@/app/components/Modals/ReportIssueModal";
import OrderInforCard from "@/app/components/Cards/OrderInforCard";
const OrderDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div className="content-container">
      <div className="flex justify-end w-full gap-3">
        <ReportIssueModal />
        <CancelOrderModal />
      </div>
      <div className="flex w-full gap-3">
        <OrderInforCard />
        
      </div>
    </div>
  );
};

export default OrderDetailPage;
