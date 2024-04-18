"use client";
import React from "react";

interface EmployeeRequestListProps {
  id: string;
}

const EmployeeRequestList = ({ id }: EmployeeRequestListProps) => {
  return (
    <div className="flex flex-1 h-[50%] bg-white rounded-lg p-3">
      <span className="font-medium text-primary-100/60">EMPLOYEE REQUESTS</span>
    </div>
  );
};

export default EmployeeRequestList;
