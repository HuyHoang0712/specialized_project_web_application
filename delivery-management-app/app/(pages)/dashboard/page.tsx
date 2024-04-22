import dynamic from "next/dynamic";

import OrderSummaryCard from "@/app/components/Cards/OrderSummaryCard";

const DashboardSummaryCards = dynamic(
  () => import("../../components/Cards/DashboardSummaryCards"),
  { ssr: false, loading: () => <>Loading...</> }
);

const CardInfors = [
  {
    title: "Recent Issues",
    type: "issue",
  },
  {
    title: "Recent Orders",
    type: "order",
  },
  {
    title: "Vehicles Tracking",
    type: "tracking",
  },
];

function DashboardPage() {
  return (
    <div className="content-container">
      <OrderSummaryCard />
      <div
        className="flex flex-row gap-4"
        style={{ height: "calc(100vh - 16.275rem)" }}
      >
        <DashboardSummaryCards {...CardInfors[2]} />
        <DashboardSummaryCards {...CardInfors[0]} />
        <DashboardSummaryCards {...CardInfors[1]} />
      </div>
    </div>
  );
}

export default DashboardPage;
