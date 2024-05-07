"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SearchIuput from "../Input/SearchIuput";
import SolidButton from "../Buttons/SolidButton";
import { EMPLOYEE_STATUS } from "@/app/lib/constances";
import { useGetVehicleBrandsQuery } from "@/app/redux/features/vehicle/vehicleApiSlice";
type Inputs = {
  brand: string;
  capacity: string;
  status: number | string;
};

interface Props {
  setActive: any;
  formProps: any;
}

const FilterVehicle = ({
  formProps: { filterKey, setFilterKey },
  setActive,
}: Props) => {
  const { data: brands } = useGetVehicleBrandsQuery("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>({ mode: "all" });

  useEffect(() => {
    setValue("brand", filterKey.brand);
    setValue("capacity", filterKey.capacity);
    setValue("status", filterKey.status);
  }, [filterKey]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setFilterKey(data);
    setActive(false);
  };

  const onChooseBrand = (role: any) => {
    setValue("brand", role.brand);
  };

  const onChooseStatus = (item: any) => {
    setValue("status", item.label);
  };

  const onChooseCapacity = (item: any) => {
    setValue("capacity", item.capacity);
  };

  const brand_filter_input = {
    label: "Brand:",
    register: register("brand"),
    data: brands ? brands.concat({ brand: "All" }) : [{ brand: "All" }],
    name_key: "brand",
    onClick: onChooseBrand,
  };

  const capacity_filter_input = {
    label: "Capacity:",
    register: register("capacity"),
    data: [
      { capacity: "< 7000kg" },
      { capacity: "7000 - 9000kg" },
      { capacity: "> 9000kg" },
      { capacity: "All" },
    ],
    name_key: "capacity",
    onClick: onChooseCapacity,
  };

  const status_filter_input = {
    label: "Status:",
    register: register("status"),
    data: EMPLOYEE_STATUS.concat({ label: "All", value: -1 }),
    name_key: "label",
    onClick: onChooseStatus,
  };

  const btn_props = {
    label: "Filter",
    type: "Normal",
    styles: "mt-4 justify-center",
    btn_type: "submit" as "submit" | "button" | "reset",
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-80 gap-4"
    >
      <SearchIuput {...brand_filter_input} />
      <SearchIuput {...capacity_filter_input} />
      <SearchIuput {...status_filter_input} />
      <SolidButton {...btn_props} />
    </form>
  );
};

export default FilterVehicle;
