"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import dynamic from "next/dynamic";
import SolidButton from "../Buttons/SolidButton";
import { PlusIcon } from "@heroicons/react/24/outline";

const CreateModal = ({ title, type }: any) => {
  let FormContent: any;
  const [active, setActive] = useState(false);
  if (type === "Plan") {
    FormContent = dynamic(
      () => import("@/app/components/Forms/CreateTransportationPlan"),
      { ssr: true, loading: () => <>Loading...</> }
    );
  } else if (type === "Order") {
    FormContent = dynamic(
      () => import("@/app/components/Forms/CreateOrderForm"),
      { ssr: true, loading: () => <>Loading...</> }
    );
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
