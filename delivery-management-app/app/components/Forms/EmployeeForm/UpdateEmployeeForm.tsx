"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import FormInput from "../../Input/FormInput";
import SearchIuput from "../../Input/SearchIuput";
import SolidButton from "../../Buttons/SolidButton";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  HashtagIcon,
  CakeIcon,
} from "@heroicons/react/24/solid";
import {
  useUpdateEmployeeByIdMutation,
  useGetGroupsQuery,
} from "@/app/redux/features/employee/employeeApiSlice";
type Inputs = {
  email: string;
  phone: string;
  group: string;
};

interface Props {
  formProps: any;
  setActive: any;
}

const UpdateEmployeeForm = ({ formProps: data, setActive }: Props) => {
  const { data: groups } = useGetGroupsQuery("");
  const [updateEmployee] = useUpdateEmployeeByIdMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>({ mode: "all" });

  useEffect(() => {
    setValue("group", data.role);
    setValue("email", data.email);
    setValue("phone", data.phone);
  }, [data]);

  const onSubmit: SubmitHandler<Inputs> = async (inputData) => {
    const updateData = { ...inputData, id: data.id };
    updateEmployee(updateData)
      .unwrap()
      .then((res) => {
        toast.success("Employee updated successfully!", { toastId: 1 });
        setActive(false);
      })
      .catch((error) => toast.error(error.data.detail, { toastId: 0 }));
  };
  const onChooseRole = (role: any) => {
    setValue("group", role.name);
  };

  const role_input_props = {
    label: "Role*:",
    register: register("group", { required: true }),
    data: groups ?? [],
    name_key: "name",
    onClick: onChooseRole,
  };

  const btn_props = {
    label: "Update Employee",
    type: "Normal",
    styles: "mt-4 justify-center",
    btn_type: "submit" as "submit" | "button" | "reset",
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col lg:w-[30vw] sm:w-[35vw] gap-4"
    >
      <h1 className="text-lg font-medium text-black-100">Employee Details</h1>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex items-center gap-4">
          <FormInput
            Icon={HashtagIcon}
            label="Employee ID:"
            type="text"
            value={data.id}
            disabled={true}
          />
          <SearchIuput {...role_input_props} />
        </div>
        <div className="flex items-center gap-4">
          <FormInput
            Icon={UserIcon}
            label="First Name:"
            type="text"
            value={data.first_name}
            disabled={true}
          />
          <FormInput
            Icon={UserIcon}
            label="Last Name:"
            type="text"
            value={data.last_name}
            disabled={true}
          />
        </div>
        <div className="flex items-center gap-4">
          <FormInput
            Icon={CakeIcon}
            label="Date of Birth:"
            type="text"
            value={data.date_of_birth}
            disabled={true}
          />
          <FormInput
            Icon={PhoneIcon}
            label="Phone Number:"
            type="tel"
            register={register("phone", {
              required: "Phone number is required!",
              pattern: {
                value: /(84|0)([235789])([0-9]{10}|[0-9]{8})/g,
                message: "Invalid phone number!",
              },
            })}
            error={errors.phone?.message}
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
      <SolidButton {...btn_props} />
    </form>
  );
};

export default UpdateEmployeeForm;
