"use client";
import React, { useState } from "react";
import EmployeeRequestList from "./EmployeeRequestList";
import VehicleRequestList from "./VehicleRequestList";
import clsx from "clsx";
const RequestList = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="flex flex-1 flex-col bg-white rounded-lg shadow-sm p-3 gap-5">
      <div className="flex w-[25rem]">
        <button
          className={clsx(
            "flex flex-1 items-center justify-center py-2 font-medium text-black-20",
            { "border-b-4 border-primary-100 text-black-60": page === 0 }
          )}
          type="button"
          onClick={() => setPage(0)}
        >
          Employee
        </button>
        <button
          className={clsx(
            "flex flex-1 items-center justify-center py-2 font-medium text-black-20",
            { "border-b-4 border-primary-100 text-black-60": page === 1 }
          )}
          type="button"
          onClick={() => setPage(1)}
        >
          Vehicle
        </button>
      </div>
      {page === 0 ? <EmployeeRequestList /> : <VehicleRequestList />}
    </div>
  );
};

export default RequestList;
