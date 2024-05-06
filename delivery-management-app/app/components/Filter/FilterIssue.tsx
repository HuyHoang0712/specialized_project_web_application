"use client";
import React, { useEffect } from "react";
import SearchIuput from "../Input/SearchIuput";
import SolidButton from "../Buttons/SolidButton";
import { ISSUE_STATUS } from "@/app/lib/constances";
import { useForm, SubmitHandler } from "react-hook-form";
interface Props {
  setActive: any;
  formProps: any;
}

type Inputs = {
  label: string;
  creator: string;
  status: number | string;
  vehicle?: string;
};

function getDistinctLabels(requests: any[]) {
  const labels = new Set(requests.map((request) => request.label));
  return Array.from(labels, (label) => ({ title: label }));
}

function getDistinctCreators(requests: any[]) {
  const creators = new Set(requests.map((request) => request.creator));
  return Array.from(creators, (creator) => ({ name: creator }));
}

function getDistinctVehicles(requests: any[]) {
  const vehicles = new Set(requests.map((request) => request.vehicle_id));
  return Array.from(vehicles, (vehicle) => ({ id: vehicle }));
}

const FilterIssue = ({
  formProps: { filterKey, setFilterKey, requests },
  setActive,
}: Props) => {
  if (!requests) return <>loading...</>;

  const labels = getDistinctLabels(requests);
  const creators = getDistinctCreators(requests);
  const vehicles = filterKey.vehicle ? getDistinctVehicles(requests) : [];

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>({ mode: "all" });

  useEffect(() => {
    setValue("label", filterKey.label);
    setValue("creator", filterKey.creator);
    setValue("status", filterKey.status);
    if (filterKey.vehicle) {
      setValue("vehicle", filterKey.vehicle);
    }
  }, [filterKey]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setFilterKey(data);
    setActive(false);
  };

  const onChooseLabel = (label: any) => {
    setValue("label", label.title);
  };
  const onChooseCreator = (creator: any) => {
    setValue("creator", creator.name);
  };
  const onChooseStatus = (status: any) => {
    setValue("status", status.label);
  };
  const onChooseVehicle = (vehicle: any) => {
    setValue("vehicle", vehicle.name);
  };

  const label_filter_input = {
    label: "Label:",
    register: register("label"),
    data: labels.concat({ title: "All" }),
    name_key: "title",
    onClick: onChooseLabel,
  };
  const creator_filter_input = {
    label: "Creator:",
    register: register("creator"),
    data: creators.concat({ name: "All" }),
    name_key: "name",
    onClick: onChooseCreator,
  };
  const status_filter_input = {
    label: "Status:",
    register: register("status"),
    data: ISSUE_STATUS.concat({ label: "All", value: -1 }),
    name_key: "label",
    onClick: onChooseStatus,
  };
  const vehicle_filter_input = {
    label: "Vehicle:",
    register: register("vehicle"),
    data: vehicles.concat({ id: "All" }),
    name_key: "id",
    onClick: onChooseVehicle,
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
      <SearchIuput {...label_filter_input} />
      <SearchIuput {...creator_filter_input} />
      <SearchIuput {...status_filter_input} />
      {vehicles.length > 0 && <SearchIuput {...vehicle_filter_input} />}
      <SolidButton {...btn_props} />
    </form>
  );
};

export default FilterIssue;
