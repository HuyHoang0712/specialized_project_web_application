import React from "react";

import EmployeeDetailContainer from "@/app/components/Containers/EmployeeDetailContainer";
import EmployeeRequestList from "@/app/components/Lists/EmployeeRequestList";
const EmployeeDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="content-container flex-row">
      <EmployeeDetailContainer id={id} />
      <div className="flex flex-1 flex-col">
        <EmployeeRequestList id={id}/>
      </div>
    </div>
  );
};

export default EmployeeDetailPage;
