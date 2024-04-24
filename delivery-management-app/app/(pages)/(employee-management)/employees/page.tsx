import React from "react";
import CreateModal from "@/app/components/Modals/CreateModal";
import EmployeeSumaryContainer from "@/app/components/Containers/EmployeeSumaryContainer";
import EmployeeList from "@/app/components/Lists/EmployeeList";
const EmployeeManagementPage = () => {
  const modalProps = {
    title: "Add Employee",
    type: "Employee",
  };

  return (
    <div className="content-container">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium text-black-60">Manage Employee</h1>
        <CreateModal {...modalProps} />
      </div>
      <div className="flex gap-4 h-[90%]">
        <div className="flex w-[60%] bg-white p-3 rounded-lg">
          <EmployeeList />
        </div>
        <EmployeeSumaryContainer />
      </div>
    </div>
  );
};

export default EmployeeManagementPage;
