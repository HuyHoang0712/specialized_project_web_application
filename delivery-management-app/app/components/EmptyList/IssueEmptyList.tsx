"use client";
import React from "react";
import { DocumentIcon } from "@heroicons/react/24/solid";
const IssueEmptyList = () => {
  return (
    <div className="flex flex-col gap-4 h-full w-full items-center justify-center">
      <DocumentIcon className="w-32 p-10 rounded-full text-secondary-100 bg-secondary-20"/>
      <span className="font-semibold text-black-50">No Requests!</span>
    </div>
  );
};

export default IssueEmptyList;
