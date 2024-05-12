"use client";
import React, { useState } from "react";
import { Skeleton } from "@mui/material";
import StatusCard from "../../Cards/StatusCard";
import IssueDetailContainer from "@/app/components/Containers/IssueDetailContainer";
import IssueEmptyList from "../../EmptyList/IssueEmptyList";
import { Issue } from "@/app/lib/types";
import Modal from "../../Modals/Modal";
import dayjs from "dayjs";
interface RequestListProps {
  data: any;
}

const RequestSubList = ({ data }: RequestListProps) => {
  return (
    <div className="w-full h-full divide-y-2 overflow-y-scroll scroll-smooth no-scrollbar">
      {data.length > 0 ? (
        data.map((issue: Issue, idx: number) => (
          <IssueCard key={idx} issue={issue} />
        ))
      ) : (
        <IssueEmptyList />
      )}
    </div>
  );
};

const IssueCard = ({ issue }: { issue: any }) => {
  const [active, setActive] = useState(false);

  const modalProps = {
    title: "Issue Details",
    FormContent: IssueDetailContainer,
    formProps: { id: issue.id, type: "issue-vehicle" },
    setActive: setActive,
  };
  return (
    <>
      <div
        className="space-y-2 p-2 hover:bg-primary-10/50 cursor-pointer transition-all duration-200 ease-in-out"
        onClick={() => setActive(true)}
      >
        <div className="flex justify-between items-center">
          <span className="font-medium text-black-60">{issue.title}</span>
          <StatusCard label={issue.status} type="issue-vehicle" />
        </div>
        <div className="flex justify-between items-center text-black-40">
          <span className="text-sm font-medium ">Label: {issue.label}</span>
          <span className="text-xs">
            {dayjs(issue.date_time).format("DD-MM-YYYY HH:mm")}
          </span>
        </div>
      </div>
      {active && <Modal {...modalProps} />}
    </>
  );
};

export default RequestSubList;
