"use client";
import React from "react";
import CreateModal from "../Modals/CreateModal";
//////
import List from "../Lists/UserRequestList";
import TokenService from "@/app/utils/Token.service";
import { useGetCurrentEmployeeIssuesQuery } from "@/app/redux/features/issues/issueApiSlice";

const Request = () => {
  const user_id = TokenService.getUserId();
  const {
    data: requests,
    error,
    isLoading,
  } = useGetCurrentEmployeeIssuesQuery(undefined, {
    pollingInterval: 10000,
    skipPollingIfUnfocused: true,
  });
  if (isLoading) {
    return (
      <div className="flex flex-1 flex-col bg-white p-3 gap-3">
        <div
          className="flex items-stretch justify-between p-3"
          aria-label="Global"
        >
          <div className="flex-1 w-32 text-lg text-black-60 font-medium">
            Loading...
          </div>
        </div>
        <div className="flex flex-row gap-3"></div>
      </div>
    );
  }
  const LIST_PROPS = {
    headers: [
      { title: "Title", key: "title" },
      { title: "Label", key: "label" },
      { title: "Status", key: "status" },
    ],
    data: requests,
    type: "issue-employee",
  };
  const create_customer_btn_props = {
    title: "Create Request",
    type: "Issue",
  };
  console.log(requests);
  return (
    <div className="flex flex-1 flex-col bg-white p-3 gap-3">
      <div
        className="flex items-stretch justify-between p-3"
        aria-label="Global"
      >
        <div className="flex-1 w-32 text-lg text-black-60 font-medium">
          Request
        </div>
        <CreateModal {...create_customer_btn_props} />
      </div>
      <List {...LIST_PROPS} />
    </div>
  );
};

export default Request;
