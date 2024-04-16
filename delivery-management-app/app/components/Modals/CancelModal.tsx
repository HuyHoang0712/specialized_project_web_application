"use client";
import React, { useState } from "react";
import SolidButton from "../Buttons/SolidButton";
import Modal from "./Modal";

interface Props {
  id: string;
  title: string;
  type: string;
}

const CancelModal = ({ id, title, type }: Props) => {
  const [active, setActive] = useState(false);

  const MODAL_PROPS = {
    title: title,
    FormContent: CancelConfirm,
    setActive: setActive,
  };

  const CANCEL_BTN_PROPS = {
    label: title,
    onClick: () => setActive(true),
    type: "Normal",
    bg: "bg-red hover:bg-red/50",
  };
  return (
    <>
      <SolidButton {...CANCEL_BTN_PROPS} />
      {active && <Modal {...MODAL_PROPS} />}
    </>
  );
};

const CancelConfirm = () => {
  return <div>CancelConfirm</div>;
};

export default CancelModal;
