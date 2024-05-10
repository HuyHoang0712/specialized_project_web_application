"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import OutlineButton from "../Buttons/OutlineButton";
import CreateIssueForm from "../Forms/IssueForm/CreateIssueForm";
const CreateVehicleRequestModal = ({ id }: { id: string }) => {
  const [active, setActive] = useState(false);
  const btnProps = {
    label: "Create Request",
    onClick: () => setActive(true),
    type: "Normal",
  };
  const modalProps = {
    title: "Create Request",
    FormContent: CreateIssueForm,
    setActive: setActive,
    formProps: { id: id, type: "vehicle" },
  };
  return (
    <>
      <OutlineButton {...btnProps} />
      {active && <Modal {...modalProps} />}
    </>
  );
};

export default CreateVehicleRequestModal;
