"use client";
import React, { useState } from "react";
import { useGetUnassignedEmployeesQuery } from "@/app/redux/features/employee/employeeApiSlice";
import { useAssignDriverMutation } from "@/app/redux/features/vehicle/vehicleApiSlice";
import SearchIuput from "../../Input/SearchIuput";
import { useForm, SubmitHandler } from "react-hook-form";
import { Images } from "@/app/lib/assets";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import SolidButton from "../../Buttons/SolidButton";
import { toast } from "react-toastify";

type Inputs = {
  driver_id: string;
};

interface Props {
  formProps: any;
  setActive: any;
}
const AsignDriverForm = ({ formProps: { id }, setActive }: Props) => {
  const [popup, setPopup] = useState({
    active: false,
    value: null,
  });
  const { data: drivers, isLoading } = useGetUnassignedEmployeesQuery("");
  const [assignDriver, { data: newDriver, isSuccess, isLoading: isAssigning }] =
    useAssignDriverMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>({ mode: "all" });

  const onChooseDriver = (driver: any) => {
    setValue("driver_id", driver.name);
    setPopup({ active: true, value: driver });
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(popup.value);
    const rq_date = { license_plate: id, driver_id: (popup.value as any).id };
    assignDriver(rq_date)
      .unwrap()
      .then((res) => {
        toast.success("Request created successfully!", { toastId: 1 });
        setActive(false);
      })
      .catch((err) => console.log(err));
  };

  const driver_input_props = {
    label: "Choose Driver:",
    register: register("driver_id", { required: true }),
    data: drivers ?? [],
    name_key: "name",
    onClick: onChooseDriver,
  };

  const btn_props = {
    label: "Assign Driver",
    type: "Normal",
    styles: "mt-4 justify-center self-end",
    btn_type: "submit" as "submit" | "button" | "reset",
  };

  return (
    <form
      className="flex flex-col w-[35vw] gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <SearchIuput {...driver_input_props} />
      {popup.active && (
        <>
          <div className="flex flex-col gap-3">
            <h1 className="text-primary-100 font-medium">DRIVER INFORMATION</h1>
            <div className="flex gap-5">
              <Image
                src={Images.ExampleAva}
                width={150}
                style={{ borderRadius: "0.5rem" }}
                alt="employee picture"
              />
              <div className="flex flex-col gap-y-2">
                <h1 className="font-medium text-black-60 text-lg">
                  {(popup.value as any).name}
                </h1>
                <span className="text-black-50">
                  Role: {(popup.value as any).role}
                </span>
                <span className="flex items-center gap-2 text-black-50">
                  <EnvelopeIcon className="w-5" /> {(popup.value as any).email}
                </span>
                <span className="flex items-center gap-2 text-black-50">
                  <PhoneIcon className="w-5" /> {(popup.value as any).phone}
                </span>
              </div>
            </div>
          </div>
          <SolidButton {...btn_props} />
        </>
      )}
    </form>
  );
};

export default AsignDriverForm;
