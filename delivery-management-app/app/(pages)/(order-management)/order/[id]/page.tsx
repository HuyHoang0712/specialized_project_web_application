import React from "react";
import CancelOrderModal from "@/app/components/Modals/CancelOrderModal";
import ReportIssueModal from "@/app/components/Modals/ReportIssueModal";
import OrderInforCard from "@/app/components/Cards/OrderInforCard";


const OrderDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const driver_card_props = {
    type: "driver",
    title: "Assigned Driver",
    titleContent: { name: "Furuga Rei", driver_id: "01224" },
    content: { phone: "+8490099129", email: "example@gmail.com" },
  };

  return (
    <div className="content-container">
      <div className="flex justify-end w-full gap-3">
        <ReportIssueModal />
        <CancelOrderModal />
      </div>
      <div className="flex w-full gap-3">
        <OrderInforCard {...driver_card_props}/>
      </div>
    </div>
  );
};

export default OrderDetailPage;
