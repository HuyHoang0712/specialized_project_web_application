import React from "react";
import CreateModal from "@/app/components/Modals/CreateModal";
import VehicleSumaryContainer from "@/app/components/Containers/Vehicle/VehicleSumaryContainer";
import VehicleList from "@/app/components/Lists/VehicleList";
const VehicleManagementPage = () => {
  const modalProps = {
    title: "Add Vehicle",
    type: "Vehicle",
  };
  return (
    <div className="content-container">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium text-black-60">Manage Vehicle</h1>
        <CreateModal {...modalProps} />
      </div>
      <div className="flex gap-4 h-[90%]">
        <div className="flex w-[70%] bg-white p-3 rounded-lg">
          <VehicleList />
        </div>
        <VehicleSumaryContainer />
      </div>
    </div>
  );
};

export default VehicleManagementPage;
