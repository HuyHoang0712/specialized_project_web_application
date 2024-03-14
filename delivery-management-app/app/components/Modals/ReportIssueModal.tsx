"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import SolidButton from "../Buttons/SolidButton";
import Modal from "./Modal";

const FormContent = dynamic(
  () => import("@/app/components/Forms/ReportIssueForm"),
  { ssr: true, loading: () => <>Loading...</> }
);

const ReportIssueModal = () => {
  const [active, setActive] = useState(false);

  const MODAL_PROPS = {
    title: "Report Order Issue",
    FormContent: FormContent,
    setActive: setActive,
  };

  const CANCEL_BTN_PROPS = {
    label: "Report Issue",
    onClick: () => setActive(true),
    type: "Normal",
    bg: "bg-black-60",
  };
  return (
    <>
      <SolidButton {...CANCEL_BTN_PROPS} />
      {active && <Modal {...MODAL_PROPS} />}
    </>
  );
};

export default ReportIssueModal;
