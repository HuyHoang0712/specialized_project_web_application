import React from "react";
import CancelOrderModal from "@/app/components/Modals/CancelOrderModal";
import ReportIssueModal from "@/app/components/Modals/ReportIssueModal";
import OrderInforCard from "@/app/components/Cards/OrderInforCard";

const OrderDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const driver_card_props = {
    type: "driver",
    title: "Driver",
    titleContent: { Name: "Furuga Rei", "Driver ID": "01224" },
    content: { Phone: "+8490099129", Email: "example@gmail.com" },
  };

  const vehicle_card_props = {
    type: "vehicle",
    title: "Vehicle",
    titleContent: { "License Plate": "51C-12304", Capacity: "7500 kg" },
    content: { "Current Parking": "No. 15 Adekunle Street, Yaba, Lagos State" },
  };

  return (
    <div className="content-container">
      <div className="flex justify-end w-full gap-3">
        <ReportIssueModal />
        <CancelOrderModal />
      </div>
      <div className="flex w-full gap-3">
        <OrderInforCard {...driver_card_props} />
        <OrderInforCard {...vehicle_card_props} />
        <OrderInforCard {...vehicle_card_props} />
      </div>
    </div>
  );
};

export default OrderDetailPage;
