"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import IssueDetailContainerAtProfile from "../Containers/IssueDetailContainerAtProfile";
const IssueDetailsModalAtProfile = ({ id, type, title }: { id: string; type: string; title: string }) => {
  const [active, setActive] = useState(false);
  const modalProps = {
    title: "Issue Details",
    FormContent: IssueDetailContainerAtProfile,
    formProps: { id, type },
    setActive: setActive,
  };
  return (
    <>
      <div className="flex flex-[2_2_0%] truncate hover:text-primary-100 cursor-pointer" onClick={() => setActive(true)}>
        {title}
      </div>
      {active && <Modal {...modalProps} />}
    </>
  );
};

export default IssueDetailsModalAtProfile;
