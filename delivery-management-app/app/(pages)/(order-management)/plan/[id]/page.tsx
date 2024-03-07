import React from "react";
import dynamic from "next/dynamic";
import CreateModal from "@/app/components/Modals/CreateModal";
const OrderList = dynamic(
  () => import("@/app/components/Lists/OrderList"),
  { ssr: true, loading: () => <>Loading...</> }
);
const PlanDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="content-container">
      <div className="flex flex-row justify-end w-full gap-3">
        <CreateModal title={"Create Transportation Plan"} type={"Plan"} />
        <CreateModal title={"Create Order"} type={"Order"} />
      </div>
      <div className="flex h-[90%] bg-white p-3 rounded-xl">
        <OrderList />
      </div>
    </div>
  );
};

export default PlanDetailPage;
