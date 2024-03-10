import React from "react";
import CancelOrderModal from "@/app/components/Modals/CancelOrderModal";
import ReportIssueModal from "@/app/components/Modals/ReportIssueModal";
import OrderInforCard from "@/app/components/Cards/OrderInforCard";
import dynamic from "next/dynamic";
import OrderDetailContainer from "@/app/components/Containers/OrderDetailContainer";

const Map = dynamic(() => import("@/app/components/Map/Map"), { ssr: false });

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
    <div className="content-container flex-row">
      <div className="flex flex-col gap-3 w-1/2">
        <div className="flex w-full h-[9.5rem] gap-3">
          <OrderInforCard {...driver_card_props} />
          <OrderInforCard {...vehicle_card_props} />
        </div>
        <div
          className="flex flex-col flex-1 rounded-lg p-3 bg-white overflow-hidden"
          // style={{ height: "calc(100vh - 16.275rem)" }}
        >
          <span className="text-lg font-medium text-black-60">
            Order Tracking
          </span>
          <Map mapWidth={"40vw"} />
        </div>
      </div>
      <OrderDetailContainer />
    </div>
  );
};

export default OrderDetailPage;
