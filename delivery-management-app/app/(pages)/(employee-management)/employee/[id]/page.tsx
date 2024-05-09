import React from "react";

import EmployeeDetailContainer from "@/app/components/Containers/Employee/EmployeeDetailContainer";
import EmployeeRequestsWrap from "@/app/components/Wrap/EmployeeRequestsWrap";
const EmployeeDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="content-container flex-row">
      <EmployeeDetailContainer id={id} />
      <div className="flex flex-1 flex-col">
        <EmployeeRequestsWrap id={id} />
      </div>
    </div>
  );
};

export default EmployeeDetailPage;
