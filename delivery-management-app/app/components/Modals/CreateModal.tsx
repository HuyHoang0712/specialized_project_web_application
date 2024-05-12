"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import dynamic from "next/dynamic";
import SolidButton from "../Buttons/SolidButton";
import { PlusIcon } from "@heroicons/react/24/outline";

interface CreateModalProps {
  title: string;
  type: string;
}

const CreateModal = ({ title, type }: CreateModalProps) => {
  let FormContent: any;
  const [active, setActive] = useState(false);
  switch (type) {
    case "Plan":
      FormContent = dynamic(() => import("@/app/components/Forms/OrderPlanForm/CreateTransportationPlan"), { ssr: false, loading: () => <>Loading...</> });
      break;   
    case "Customer":
      FormContent = dynamic(() => import("@/app/components/Forms/CustomerForm/CreateCustomerForm"), { ssr: false, loading: () => <>Loading...</> });
      break;
    case "Employee":
      FormContent = dynamic(() => import("@/app/components/Forms/EmployeeForm/CreateEmployeeForm"), { ssr: false, loading: () => <>Loading...</> });
      break;
    case "Vehicle":
      FormContent = dynamic(() => import("@/app/components/Forms/VehicleForm/CreateVehicleForm"), { ssr: false, loading: () => <>Loading...</> });
      break;
    case "Issue":
      FormContent = dynamic(() => import("@/app/components/Forms/IssueForm/CreateIssueForm"), { ssr: false, loading: () => <>Loading...</> });
      break;
  }

  const modalProps = {
    title: title,
    FormContent: FormContent,
    setActive: setActive,
  };

  const btnProps = {
    label: title,
    onClick: () => setActive(true),
    Icon: PlusIcon,
    type: "Normal",
  };

  return (
    <>
      <SolidButton {...btnProps} />
      {active && <Modal {...modalProps} />}
    </>
  );
};

export default CreateModal;
