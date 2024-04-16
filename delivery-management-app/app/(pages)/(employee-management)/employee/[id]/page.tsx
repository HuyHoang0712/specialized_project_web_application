import React from "react";

import EmployeeDetailContainer from "@/app/components/Containers/EmployeeDetailContainer";

const EmployeeDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="content-container flex-row">
      <EmployeeDetailContainer id={id} />
      <div className="flex flex-1 bg-white"></div>
    </div>
  );
};

export default EmployeeDetailPage;
