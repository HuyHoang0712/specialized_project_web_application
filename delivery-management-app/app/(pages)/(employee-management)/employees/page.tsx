import React from "react";
import CreateModal from "@/app/components/Modals/CreateModal";
import EmployeeSumaryContainer from "@/app/components/Containers/EmployeeSumaryContainer";
import EmployeeList from "@/app/components/Lists/EmployeeList";
const EmployeeManagementPage = () => {
  const modalProps = {
    title: "Create Employee",
    type: "Employee",
  };

  return (
    <div className="content-container">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-medium text-black-60">Manage Employee</h1>
        <CreateModal {...modalProps} />
      </div>
      {/* <EmployeeSumaryContainer /> */}
      <div className="flex flex-1 h-[40%] bg-white p-3 rounded-lg">
        <EmployeeList />
      </div>
    </div>
  );
};

export default EmployeeManagementPage;
