import React from "react";
import VehicleDetailSummaryContainer from "@/app/components/Containers/Vehicle/VehicleDetailSummaryContainer";
import VehicleDetailsContainer from "@/app/components/Containers/Vehicle/VehicleDetailsContainer";
const VehicleDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="content-container flex-row">
      <VehicleDetailSummaryContainer id={id} />
      <VehicleDetailsContainer id={id} />
    </div>
  );
};

export default VehicleDetailPage;
