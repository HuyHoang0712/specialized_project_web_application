"use client";
import React from "react";
import SolidButton from "../Buttons/SolidButton";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import { useDeleteCustomerByIdMutation } from "@/app/redux/features/customer/customerApiSlice";
interface Props {
  formProps: any;
  setActive: any;
}
const DeleteCustomerForm = ({ formProps: { id }, setActive }: Props) => {
  const [deleteCustomer] = useDeleteCustomerByIdMutation();
  const confirmDelete = async () => {
    deleteCustomer(id)
      .unwrap()
      .then((res) => {
        setActive(false);
        toast.success("Customer deleted!", { toastId: 1 });
        redirect("/customers");
      })
      .catch((error) => toast.error(error.data.detail, { toastId: 0 }));
  };

  const confirm_btn_props = {
    label: "Delete",
    onClick: confirmDelete,
    type: "Normal",
    bg: "bg-red hover:bg-red/50",
  };

  return (
    <div className="w-[25vw]">
      <h1 className="text-lg text-black-60 font-medium">
        Do you want to delete this customer?
      </h1>
      <div className="flex justify-end mt-4">
        <SolidButton {...confirm_btn_props} />
      </div>
    </div>
  );
};

export default DeleteCustomerForm;
