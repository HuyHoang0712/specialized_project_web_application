"use client";
import React from "react";
import IssueCard from "../Cards/IssueCard";

const IssueLists = [
  {
    owner: "John A",
    label: 'Request Leave',
    datetime: '30-11-2023 12:00 pm',
    status: 'Pending',
    type: "personal request"
  },
  {
    owner: "John A",
    label: 'Request Leave',
    datetime: '30-11-2023 12:00 pm',
    status: 'Pending',
    type: "personal request"
  },
  {
    owner: "John A",
    label: 'Request Leave',
    datetime: '30-11-2023 12:00 pm',
    status: 'Pending',
    type: "personal request"
  },
  {
    owner: "John A",
    label: 'Request Leave',
    datetime: '30-11-2023 12:00 pm',
    status: 'Pending',
    type: "personal request"
  },
  {
    owner: "John A",
    label: 'Request Leave',
    datetime: '30-11-2023 12:00 pm',
    status: 'Pending',
    type: "personal request"
  },
  {
    owner: "John A",
    label: 'Request Leave',
    datetime: '30-11-2023 12:00 pm',
    status: 'Pending',
    type: "personal request"
  },
  {
    owner: "John A",
    label: 'Request Leave',
    datetime: '30-11-2023 12:00 pm',
    status: 'Pending',
    type: "personal request"
  },
  {
    owner: "John A",
    label: 'Request Leave',
    datetime: '30-11-2023 12:00 pm',
    status: 'Pending',
    type: "personal request"
  },
];

const IssueListDashboard = () => {
  return (
    <div className="flex flex-col items-center divide-y overflow-y-scroll scroll-y no-scrollbar">
      {IssueLists.map((item, idx) => (
        <IssueCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default IssueListDashboard;
