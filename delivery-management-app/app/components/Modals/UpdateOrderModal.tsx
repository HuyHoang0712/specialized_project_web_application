"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import SolidButton from "../Buttons/SolidButton";
import Modal from "./Modal";

const FormContent = dynamic(
  () => import("@/app/components/Forms/UpdateOrderForm"),
  { ssr: true, loading: () => <>Loading...</> }
);

interface Props {
  id: string;
}

const UpdateOrderModal = (props: Props) => {
  const [active, setActive] = useState(false);

  const MODAL_PROPS = {
    title: "Update Order Detail",
    FormContent: FormContent,
    setActive: setActive,
    formProps: props,
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
