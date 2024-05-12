"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SolidButton from "../../Buttons/SolidButton";
import { UserIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import FormInput from "../../Input/FormInput";
import AddressForm from "../AddressForm";
import { toast } from "react-toastify";
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
  formProps: any;
  setActive: any;
}
const UpdateCustomerForm = ({ formProps: customer, setActive }: Props) => {
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
    updateData.id = customer.id;
    console.log(updateData);

    await updateCustomer(updateData)
      .unwrap()
      .then((res) => {
        toast.success("Customer updated successfully!", { toastId: 1 });
        setActive(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    setValue("name", customer.name);
    setValue("email", "example@mail.com");
    setValue("phone_number", "0911226340");
  }, [customer]);

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
      <div className="flex flex-col gap-5  w-full">
        <div className="flex items-center gap-4">
          <FormInput
            Icon={UserIcon}
            label="Customer Name:"
            register={register("name", { required: true })}
            type="text"
            placeholder="Customer Name"
            error={errors.name?.message}
            disabled={true}
          />
          <FormInput
            Icon={PhoneIcon}
            label="Contact Number:"
            register={register("phone_number", {
              required: true,
              pattern: {
                value: /(84|0)([235789])([0-9]{10}|[0-9]{8})/g,
                message: "Invalid phone number!",
              },
            })}
            type="tel"
            placeholder="E.g: 0987654321"
            error={errors.phone_number?.message}
          />
        </div>
        <FormInput
          Icon={EnvelopeIcon}
          label="Email:"
          register={register("email", {
            required: "Email is required!",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address!",
            },
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
