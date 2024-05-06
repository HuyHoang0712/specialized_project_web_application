"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import IssueDetailContainer from "../Containers/IssueDetailContainer";
const IssueDetailsModal = ({ id, type }: { id: string; type: string }) => {
  const [active, setActive] = useState(false);
  const modalProps = {
    title: "Issue Details",
    FormContent: IssueDetailContainer,
    formProps: { id, type },
    setActive: setActive,
  };
  return (
    <>
      <div
        className="flex flex-none w-32 truncate hover:text-primary-100 cursor-pointer"
        onClick={() => setActive(true)}
      >
        {id}
      </div>
      {active && <Modal {...modalProps} />}
    </>
  );
};

export default IssueDetailsModal;
