"use client";
import React, { useState } from "react";
import { FunnelIcon } from "@heroicons/react/24/outline";
import Modal from "./Modal";
import OutlineButton from "../Buttons/OutlineButton";

interface Props {
  filterForm: any;
  formProps: any;
}

const FilterModal = ({ filterForm, formProps }: Props) => {
  const [active, setActive] = useState(false);
  const modalProps = {
    title: "Filter",
    FormContent: filterForm,
    formProps: formProps,
    setActive: setActive,
  };
  const buttonProps = {
    label: "Filter",
    onClick: () => setActive(true),
    Icon: FunnelIcon,
    type: "Small",
  };
  return (
    <>
      <OutlineButton {...buttonProps} />
      {active && <Modal {...modalProps} />}
    </>
  );
};

export default FilterModal;
