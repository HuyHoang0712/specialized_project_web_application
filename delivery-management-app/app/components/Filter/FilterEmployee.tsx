"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SearchIuput from "../Input/SearchIuput";
import SolidButton from "../Buttons/SolidButton";
import { EMPLOYEE_VEHICLE_STATUS } from "@/app/lib/constances";
import { useGetGroupsQuery } from "@/app/redux/features/employee/employeeApiSlice";

type Inputs = {
  role: string;
  status: number | string;
};

interface Props {
  setActive: any;
  formProps: any;
}

const FilterEmployee = ({
  formProps: { filterKey, setFilterKey },
  setActive,
}: Props) => {
  const { data: groups } = useGetGroupsQuery("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>({ mode: "all" });

  useEffect(() => {
    setValue("role", filterKey.role);
    setValue("status", filterKey.status);
  }, [filterKey]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setFilterKey(data);
    setActive(false);
  };

  const onChooseRole = (role: any) => {
    setValue("role", role.name);
  };

  const onChooseStatus = (item: any) => {
    setValue("status", item.label);
  };

  const role_filter_input = {
    label: "Role:",
    register: register("role"),
    data: groups ? groups.concat({ name: "All" }) : [{ name: "All" }],
    name_key: "name",
    onClick: onChooseRole,
  };

  const status_filter_input = {
    label: "Status:",
    register: register("status"),
    data: EMPLOYEE_VEHICLE_STATUS.concat({ label: "All", value: -1 }),
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
      <SearchIuput {...role_filter_input} />
      <SearchIuput {...status_filter_input} />
      <SolidButton {...btn_props} />
    </form>
  );
};

export default FilterEmployee;
