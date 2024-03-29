"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SolidButton from "../Buttons/SolidButton";
import { UserIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import FormInput from "../Input/FormInput";
import AddressForm from "./AddressForm";
import { toast } from "react-toastify";
import { useGetCustomerByIdQuery } from "@/app/redux/features/customer/customerApiSlice";
import { useUpdateCustomerByIdMutation } from "@/app/redux/features/customer/customerApiSlice";

type Inputs = {
  name: string;
  email: string;
  phone_number: string;
  address: {
    number: string;
    street: string;
    ward: string;
    district: string;
    city: string;
  };
};

interface Props {
  id: string;
  setActive: any;
}
const UpdateCustomerForm = ({ id, setActive }: Props) => {
  const { data, error, isLoading, isSuccess } = useGetCustomerByIdQuery(id);

  const [updateCustomer] = useUpdateCustomerByIdMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>({ mode: "all" });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { address, ...rest } = data;
    let updateData: { [key: string]: any } = rest;
    if (address.city) {
      updateData.address =
        data.address.number +
        " " +
        data.address.street +
        "," +
        data.address.ward +
        "," +
        data.address.district +
        "," +
        data.address.city;
    }
    updateData.id = id;
    console.log(updateData);

    try {
      const res = await updateCustomer(updateData);
      toast.success("Customer added successfully!", { toastId: 1 });
      setActive(false);
    } catch (error: any) {
      throw error;
    }
  };

  if (isSuccess) {
    setValue("name", data.name);
    setValue("email", "example@mail.com");
    setValue("phone_number", "0911226340");
  }

  const btn_props = {
    label: "Update Customer",
    type: "Normal",
    styles: "mt-4 justify-center",
    btn_type: "submit" as "submit" | "button" | "reset",
  };

  const address_form_props = {
    register: register,
    errors: errors,
    setValue: setValue,
    getValues: getValues,
    required: false,
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col lg:w-[30vw] sm:w-[35vw] gap-4"
    >
      <h1 className="text-lg font-medium text-black-100">
        Contact Information
      </h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center gap-4">
          <FormInput
            Icon={UserIcon}
            label="Customer Name:"
            register={register("name", { required: true })}
            type="text"
            placeholder="Customer Name"
            error={errors.name?.message}
          />
          <FormInput
            Icon={PhoneIcon}
            label="Contact Number:"
            register={register("phone_number", {
              required: true,
              pattern: /(84|0)([235789])([0-9]{10}|[0-9]{8})/g,
            })}
            type="tel"
            placeholder="Customer Name"
            error={errors.phone_number ? "Invalid phone number!" : undefined}
          />
        </div>
        <FormInput
          Icon={EnvelopeIcon}
          label="Email:"
          register={register("email", {
            required: true,
          })}
          type="email"
          placeholder="Email"
          error={errors.email?.message}
        />
      </div>
      <h1 className="text-lg font-medium text-black-100">Customer Address</h1>
      <AddressForm {...address_form_props} />
      <SolidButton {...btn_props} />
    </form>
  );
};

export default UpdateCustomerForm;
