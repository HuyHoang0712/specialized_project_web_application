import dynamic from "next/dynamic";

const OrderSummaryCard = dynamic(
  () => import("../../components/Cards/OrderSummaryCard"),
  { ssr: true, loading: () => <>Loading...</> }
);

const DashboardSummaryCards = dynamic(
  () => import("../../components/Cards/DashboardSummaryCards"),
  { ssr: true, loading: () => <>Loading...</> }
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
        className="flex flex-row gap-5"
        style={{ height: "calc(100vh - 18.875rem)" }}
      >
        <DashboardSummaryCards {...CardInfors[2]} />
        <DashboardSummaryCards {...CardInfors[0]} />
        <DashboardSummaryCards {...CardInfors[1]} />
      </div>
    </div>
  );
}

export default DashboardPage;
