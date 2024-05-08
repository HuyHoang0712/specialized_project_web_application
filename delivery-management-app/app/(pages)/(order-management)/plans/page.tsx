import React from "react";
import dynamic from "next/dynamic";
import CreateModal from "@/app/components/Modals/CreateModal";

const TransportationPlanList = dynamic(
  () => import("@/app/components/Lists/TransportationPlanList"),
  { ssr: true, loading: () => <>Loading...</> }
);

function PlansPage() {
  return (
    <div className="content-container">
      <div className="flex flex-row self-end gap-3">
        <CreateModal title={"Create Transportation Plan"} type={"Plan"} />
        {/* <CreateModal title={"Create Order"} type={"Order"} /> */}
      </div>
      <div className="flex h-[90%] bg-white p-3 rounded-xl">
        <TransportationPlanList />
      </div>
    </div>
  );
}

export default PlansPage;
