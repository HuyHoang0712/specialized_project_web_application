"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import FormInput from "../../Input/FormInput";
import SolidButton from "../../Buttons/SolidButton";
import { useCreateVehicleMutation } from "@/app/redux/features/vehicle/vehicleApiSlice";
import {
  IdentificationIcon,
  TruckIcon,
  TagIcon,
} from "@heroicons/react/24/solid";

interface Props {
  setActive: any;
}

type Inputs = {
  license_plate: string;
  brand: string;
  fuel_consumption_level: number;
  capacity: number;
};
const CreateVehicleForm = ({ setActive }: Props) => {
  const [createVehicle, { data: newVehicle, isSuccess, isLoading }] =
    useCreateVehicleMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>({ mode: "all" });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    createVehicle(data)
      .unwrap()
      .then((res) => {
        toast.success("Vehicle created successfully!", { toastId: 1 });
        setActive(false);
      })
      .catch((err) => console.log(err));
  };

  const btn_props = {
    label: "Add Vehicle",
    type: "Normal",
    styles: "mt-4 justify-center",
    btn_type: "submit" as "submit" | "button" | "reset",
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col lg:w-[30vw] sm:w-[35vw] gap-4"
    >
      <h1 className="text-lg font-medium text-black-100">
        Vehicle Information
      </h1>
      <div className="flex flex-col gap-5 w-full">
        <FormInput
          Icon={IdentificationIcon}
          label="Lisence Plate*:"
          register={register("license_plate", {
            required: "License plate is required!",
          })}
          type="text"
          placeholder="License Plate"
          error={errors.license_plate?.message}
        />
        <FormInput
          Icon={TagIcon}
          label="Brand*:"
          register={register("brand", {
            required: "Vehicle brand is required!",
          })}
          type="text"
          placeholder="Brand"
          error={errors.brand?.message}
        />
        <FormInput
          Icon={TruckIcon}
          label="Fuel Consumption*:"
          register={register("fuel_consumption_level", {
            required: "Fuel consumption level is required!",
          })}
          type="number"
          placeholder="Fuel Consumption Level (m/l)"
          error={errors.fuel_consumption_level?.message}
        />
        <FormInput
          Icon={TruckIcon}
          label="Capacity*:"
          register={register("capacity", {
            required: "Vehicle Capacity is required!",
          })}
          type="number"
          placeholder="Capacity (kg)"
          error={errors.capacity?.message}
        />
      </div>
      <SolidButton {...btn_props} />
    </form>
  );
};

export default CreateVehicleForm;
