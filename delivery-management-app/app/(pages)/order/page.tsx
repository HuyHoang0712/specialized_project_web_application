import React from "react";
import CreateTransportationPlanModal from "@/app/components/Modals/CreateTransportationPlanModal";
function OrderPage() {
  return (
    <div className="content-container">
      <div className="flex flex-row justify-end w-full">
        <CreateTransportationPlanModal />
      </div>
      <div
        className="flex-1 bg-white p-5 rounded-xl"
      >
        <div className="flex flex-row justify-between w-full"></div>
      </div>
    </div>
  );
}

export default OrderPage;
