"use client";
import React from "react";
import StatusCard from "../Cards/StatusCard";
import SolidButton from "../Buttons/SolidButton";
import OutlineButton from "../Buttons/OutlineButton";
import {
  useUpdateIssueStatusMutation,
  useGetIssueByIdQuery,
} from "@/app/redux/features/issues/issueApiSlice";
import { Skeleton } from "@mui/material";
interface Props {
  formProps: any;
  setActive: any;
}

const IssueDetailContainerAtProfile = ({ formProps, setActive }: Props) => {
  const { id, type } = formProps;
  const [updateIssueStatus] = useUpdateIssueStatusMutation();
  const { data: issue, isLoading } = useGetIssueByIdQuery(id);
  if (isLoading) return <IssueDetailContianerSkeleton />;
  const handleuUpdateIssueStatus = async (status: number) => {
    try {
      await updateIssueStatus({ id: id, status: status, type: type });
      setActive(false);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex flex-col w-[35vw] max-h-[80vh] overflow-auto no-scrollbar gap-3">
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-wrap font-medium text-black-60">
          {issue.title}
        </h1>
        <StatusCard label={issue.status} type={type} />
      </div>
      <div className="flex gap-2 items-end">
        <div className="text-sm text-black-40">Label:</div>
        <div className="text-black-60 font-medium">{issue.label}</div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-sm text-black-40">
          Description:
        </label>
        <input
          id="description"
          type="text"
          className="text-black-60 font-medium rounded-lg border-black-20"
          disabled
          value={issue.description}
        />
      </div>
      <h2 className="font-medium text-primary-100 mt-2">Details</h2>
      <div className="grid grid-cols-2 w-full gap-3">
        <div className="flex gap-2 items-center">
          <label className="text-sm text-black-40">Creator:</label>
          <span className="text-black-60 font-medium">{issue.creator}</span>
        </div>
        <span className="justify-self-end text-sm text-black-40 items-center self-center">
          {issue.date_time}
        </span>
      </div>
      {issue.status != 4 && (
        <div className="flex items-center justify-end mt-5 gap-4">
          <OutlineButton
            label="Cancel Request"
            type="Normal"
            bg={"border-red text-red hover:text-red/50 hover:border-red/50"}
            onClick={() => handleuUpdateIssueStatus(4)}
          />
        </div>
      )}
    </div>
  );
};

export default IssueDetailContainerAtProfile;

const IssueDetailContianerSkeleton = () => {
  return (
    <div className="flex flex-col w-[35vw] max-h-[80vh] overflow-auto no-scrollbar gap-3">
      <div className="flex items-center justify-between">
        <Skeleton variant="text" width="50%" />
        <Skeleton variant="text" width="20%" />
      </div>
      <div className="flex gap-2 items-end">
        <Skeleton variant="text" width="20%" />
        <Skeleton variant="text" width="50%" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton variant="text" width="20%" />
        <Skeleton variant="text" width="100%" />
      </div>
      <h2 className="font-medium text-primary-100 mt-2">Details</h2>
      <div className="grid grid-cols-2 w-full gap-3">
        <div className="flex gap-2 items-center">
          <Skeleton variant="text" width="20%" />
          <Skeleton variant="text" width="50%" />
        </div>
        <Skeleton variant="text" width="20%" />
        <div className="flex gap-2 items-center">
          <Skeleton variant="text" width="20%" />
          <Skeleton variant="text" width="50%" />
        </div>
        <div className="flex gap-2 items-center justify-self-end">
          <Skeleton variant="text" width="20%" />
          <Skeleton variant="text" width="50%" />
        </div>
      </div>
    </div>
  );
};
