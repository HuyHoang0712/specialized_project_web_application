"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import FormInput from "../../Input/FormInput";
import SolidButton from "../../Buttons/SolidButton";
import { UserIcon, EnvelopeIcon, PhoneIcon, HashtagIcon, CakeIcon, ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { useUpdateProfileByIdMutation } from "@/app/redux/features/profile/profileApiSlice";
type Inputs = {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  email: string;
  phone: string;
};

interface Props {
  formProps: any;
  setActive: any;
}

const UpdateProfileForm = ({ formProps: data, setActive }: Props) => {
  const [updateProfile] = useUpdateProfileByIdMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>({ mode: "all" });
  useEffect(() => {
    setValue("first_name", data.first_name);
    setValue("last_name", data.last_name);
    setValue("date_of_birth", data.date_of_birth);
    setValue("email", data.email);
    setValue("phone", data.phone);
  }, [data]);

  const onSubmit: SubmitHandler<Inputs> = async (inputData) => {
    const updateData = { ...inputData, id: data.id };
    try {
      const res = await updateProfile(updateData);
      toast.success("Profile updated successfully!", { toastId: 1 });
      setActive(false);
    } catch (error) {
      console.log(error);
    }
  };

  const btn_props = {
    label: "Update Profile",
    type: "Normal",
    styles: "mt-4 justify-center",
    btn_type: "submit" as "submit" | "button" | "reset",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:w-[30vw] sm:w-[35vw] gap-4">
      <h1 className="text-lg font-medium text-black-100">Employee Details</h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center gap-4">
          <FormInput Icon={HashtagIcon} label="Employee ID:" type="text" value={data.id} disabled={true} />
          <FormInput Icon={ChevronDoubleDownIcon} label="Role:" type="text" value={data.role} disabled={true} />
        </div>
        <div className="flex items-center gap-4">
          <FormInput
            Icon={UserIcon}
            label="First Name:"
            register={register("first_name", {
              required: true,
            })}
            type="text"
          />
          <FormInput
            Icon={UserIcon}
            label="Last Name:"
            register={register("last_name", {
              required: true,
            })}
            type="text"
          />
        </div>
        <div className="flex items-center gap-4">
          <FormInput Icon={CakeIcon} label="Date of Birth:" register={register("date_of_birth", { required: true })} type="date" error={errors.date_of_birth?.message} />
          <FormInput
            Icon={PhoneIcon}
            label="Phone Number:"
            type="tel"
            register={register("phone", {
              required: true,
              pattern: /(84|0)([235789])([0-9]{10}|[0-9]{8})/g,
              maxLength: 12,
            })}
            error={errors.phone ? "Invalid phone number!" : undefined}
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
      <SolidButton {...btn_props} />
    </form>
  );
};

export default UpdateProfileForm;
