"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import SolidButton from "../Buttons/SolidButton";
import Modal from "./Modal";

interface Props {
  id: string;
  title: string;
  type: string;
}
const UpdateModal = ({ id, title, type }: Props) => {
  const [active, setActive] = useState(false);
  let FormContent: any;
  switch (type) {
    case "order":
      FormContent = dynamic(
        () => import("@/app/components/Forms/UpdateOrderForm"),
        { ssr: false, loading: () => <>Loading...</> }
      );
      break;
    case "customer":
      FormContent = dynamic(
        () => import("@/app/components/Forms/UpdateCustomerForm"),
        { ssr: false, loading: () => <>Loading...</> }
      );
      break;
    case "employee":
      FormContent = dynamic(
        () => import("@/app/components/Forms/UpdateEmployeeForm"),
        { ssr: false, loading: () => <>Loading...</> }
      );
      break;
  }

  const modal_props = {
    title: title,
    FormContent: FormContent,
    setActive: setActive,
    formProps: { id: id },
  };

  const btn_props = {
    label: title,
    onClick: () => setActive(true),
    type: "Normal",
  };
  return (
    <>
      <SolidButton {...btn_props} />
      {active && <Modal {...modal_props} />}
    </>
  );
};

export default UpdateModal;
