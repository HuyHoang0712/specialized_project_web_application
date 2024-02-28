import React from "react";
import CreateModal from "@/app/components/Modals/CreateModal";
import TransportationPlanList from "@/app/components/Lists/TransportationPlanList";

function OrderPage() {
  return (
    <div className="content-container">
      <div className="flex flex-row justify-end w-full gap-3">
        <CreateModal title={"Create Transportation Plan"} type={"Plan"} />
        <CreateModal title={"Create Order"} type={"Order"} />
      </div>
      <div className="flex h-[90%] bg-white p-3 rounded-xl">
        <TransportationPlanList />
      </div>
    </div>
  );
}

export default OrderPage;
