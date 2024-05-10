"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import SolidButton from "../Buttons/SolidButton";
import AsignDriverForm from "../Forms/VehicleForm/AsignDriverForm";
const AssignDriverModal = ({ id }: { id: string }) => {
  const [active, setActive] = useState(false);
  const btnProps = {
    label: "Assign Driver",
    styles: "mb-[3px]",
    onClick: () => setActive(true),
    type: "Normal",
  };
  const modalProps = {
    title: "Assign Driver",
    FormContent: AsignDriverForm,
    setActive: setActive,
    formProps: { id },
  };
  return (
    <>
      <SolidButton {...btnProps} />
      {active && <Modal {...modalProps} />}
    </>
  );
};

export default AssignDriverModal;
