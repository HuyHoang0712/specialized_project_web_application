"use client";
import React, { useState } from "react";
import { FunnelIcon } from "@heroicons/react/24/outline";
import Filter from "../Filter/Filter";
import Modal from "./Modal";
import OutlineButton from "../Buttons/OutlineButton";
const FilterModal = () => {
  const [active, setActive] = useState(false);
  const modalProps = {
    title: "Filter",
    FormContent: Filter,
    setActive: setActive,
  };
  const buttonProps = {
    label: "Filter",
    onClick: () => setActive(true),
    Icon: FunnelIcon,
    type: "Small"
  };
  return (
    <>
      <OutlineButton {...buttonProps}/>
      {active && <Modal {...modalProps} />}
    </>
  );
};

export default FilterModal;
