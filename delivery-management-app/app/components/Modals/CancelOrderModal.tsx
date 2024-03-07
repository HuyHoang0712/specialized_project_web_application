"use client";
import React, { useState } from "react";
import SolidButton from "../Buttons/SolidButton";
import Modal from "./Modal";

const CancelOrderModal = () => {
  let FormContent: any;
  const [active, setActive] = useState(false);

  const MODAL_PROPS = {
    title: "Cancel Order",
    FormContent: CancelOrderConfirm,
    setActive: setActive,
  };

  const CANCEL_BTN_PROPS = {
    label: "Cancel Order",
    onClick: () => setActive(true),
    type: "Normal",
    styles: "bg-red",
  };
  return (
    <>
      <SolidButton {...CANCEL_BTN_PROPS} />
      {active && <Modal {...MODAL_PROPS} />}
    </>
  );
};

const CancelOrderConfirm = () => {
  return <div>CancelOrderConfirm</div>;
};

export default CancelOrderModal;
