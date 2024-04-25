"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import SolidButton from "../Buttons/SolidButton";
import Modal from "./Modal";

interface Props {
  title: string;
  type: string;
  data: any;
}
const UpdateModal = ({ data, title, type }: Props) => {
  const [active, setActive] = useState(false);
  let FormContent: any;
  switch (type) {
    case "order":
      FormContent = dynamic(() => import("@/app/components/Forms/OrderPlanForm/UpdateOrderForm"), { ssr: false, loading: () => <>Loading...</> });
      break;
    case "customer":
      FormContent = dynamic(() => import("@/app/components/Forms/CustomerForm/UpdateCustomerForm"), { ssr: false, loading: () => <>Loading...</> });
      break;
    case "employee":
      FormContent = dynamic(() => import("@/app/components/Forms/EmployeeForm/UpdateEmployeeForm"), { ssr: false, loading: () => <>Loading...</> });
      break;
    case "profile":
      FormContent = dynamic(() => import("@/app/components/Forms/EmployeeForm/UpdateProfileForm"), { ssr: false, loading: () => <>Loading...</> });
      break;
  }

  const modal_props = {
    title: title,
    FormContent: FormContent,
    setActive: setActive,
    formProps: data,
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
