"use client";
import React from "react";
import SolidButton from "../Buttons/SolidButton";
import { useUpdateOrderByIdMutation } from "@/app/redux/features/order/orderApiSlice";
interface Props {
  formProps: any;
  setActive: any;
}

const CancelOrderForm = ({ formProps: { id }, setActive }: Props) => {
  const [updateOrder] = useUpdateOrderByIdMutation();
  const confirmCancel = async () => {
    await updateOrder({ id, status: 3 });
    setActive(false);
  };

  const confirm_btn_props = {
    label: "Confirm",
    onClick: confirmCancel,
    type: "Normal",
    bg: "bg-red hover:bg-red/50",
  };

  return (
    <div className="w-[25vw]">
      <h1 className="text-lg text-black-60 font-medium">
        Do you want to cancel this order?
      </h1>
      <div className="flex justify-end mt-4">
        <SolidButton {...confirm_btn_props} />
      </div>
    </div>
  );
};

export default CancelOrderForm;
