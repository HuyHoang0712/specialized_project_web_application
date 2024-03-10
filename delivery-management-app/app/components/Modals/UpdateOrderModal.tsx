"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import SolidButton from "../Buttons/SolidButton";
import Modal from "./Modal";

const FormContent = dynamic(
  () => import("@/app/components/Forms/ReportIssueForm"),
  { ssr: true, loading: () => <>Loading...</> }
);

const UpdateOrderModal = () => {
  const [active, setActive] = useState(false);

  const MODAL_PROPS = {
    title: "Update Order Detail",
    FormContent: FormContent,
    setActive: setActive,
  };

  const CANCEL_BTN_PROPS = {
    label: "Update Order",
    onClick: () => setActive(true),
    type: "Normal",
  };
  return (
    <>
      <SolidButton {...CANCEL_BTN_PROPS} />
      {active && <Modal {...MODAL_PROPS} />}
    </>
  );
};

export default UpdateOrderModal;
