import dynamic from "next/dynamic";

const OrderSummaryCard = dynamic(
  () => import("../../components/Cards/OrderSummaryCard"),
  { ssr: true, loading: () => <>Loading...</> }
);

const DashboardSummaryCards = dynamic(
  () => import("../../components/Cards/DashboardSummaryCards"),
  { ssr: true, loading: () => <>Loading...</>}
)

const CardInfors = [
  {
    title: "Recent Issues",
    type: "issue"
  },
  {
    title: "Recent Orders",
    type: "order"
  },
  {
    title: "Vehicles Tracking",
    type: "tracking"
  }
]

function DashboardPage() {
  return (
    <div className="flex flex-col flex-auto bg-bg-color gap-5 p-5">
      <OrderSummaryCard />
      <div className="flex flex-row flex-1 gap-5">
        <div className="flex flex-col flex-1 gap-5">
          <DashboardSummaryCards {...CardInfors[0]}/>
          <DashboardSummaryCards {...CardInfors[2]}/>
        </div>
        <DashboardSummaryCards {...CardInfors[1]}/>
      </div>
    </div>
  );
}

export default DashboardPage;
