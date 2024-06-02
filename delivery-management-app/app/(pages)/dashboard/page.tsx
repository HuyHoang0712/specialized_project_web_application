import dynamic from "next/dynamic";
import OrderSummaryCard from "@/app/components/Cards/DashboardCards/OrderSummaryCard";
import Mapbox from "@/app/components/Map/Map";
import OrderListDashboard from "@/app/components/Lists/DashboardList/OrderListDashboard";
import IssueListDashboard from "@/app/components/Lists/DashboardList/IssueListDashboard";
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
        <div className="flex flex-col rounded-lg p-3 gap-3 bg-white overflow-hidden flex-1">
          <span className="text-lg font-medium text-black-60">
            Delivery Point Tracking
          </span>
          <div id="mapbox" className="h-full">
            <Mapbox />
          </div>
        </div>

        <div className="flex flex-col rounded-lg p-3 gap-3 bg-white overflow-hidden flex-1">
          <span className="text-lg font-medium text-black-60">
            Recent Requests
          </span>
          <IssueListDashboard />
        </div>
        <div className="flex flex-col rounded-lg p-3 gap-3 bg-white overflow-hidden flex-1">
          <span className="text-lg font-medium text-black-60">
            Today Orders
          </span>
          <OrderListDashboard />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
