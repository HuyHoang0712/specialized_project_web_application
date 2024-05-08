"use client";
import React, { useEffect } from "react";
import SearchIuput from "../Input/SearchIuput";
import SolidButton from "../Buttons/SolidButton";
import { ORDER_STATUS } from "@/app/lib/constances";
import { useForm, SubmitHandler } from "react-hook-form";
import SearchFilterService from "@/app/utils/SearchFilter.service";
interface Props {
  setActive: any;
  formProps: any;
}
type Inputs = {
  ship_code: string;
  vehicle: string;
  payload: string;
  status: number | string;
};
const FilterOrder = ({
  formProps: { filterKey, setFilterKey, orders },
  setActive,
}: Props) => {
  if (!orders) return <>loading...</>;

  const ship_codes = SearchFilterService.getDistinctValues(
    "ship_code",
    "ship_code",
    orders
  );
  const vehicles = SearchFilterService.getDistinctValues(
    "vehicle",
    "vehicle",
    orders
  );
  const payloads = SearchFilterService.getDistinctValues(
    "payload",
    "payload",
    orders
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>({ mode: "all" });

  useEffect(() => {
    setValue("ship_code", filterKey.ship_code);
    setValue("vehicle", filterKey.vehicle);
    setValue("payload", filterKey.payload);
    setValue("status", filterKey.status);
  }, [filterKey]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setFilterKey(data);
    setActive(false);
  };

  const onChooseShipCode = (item: any) => {
    setValue("ship_code", item.ship_code);
  };
  const onChooseVehicle = (item: any) => {
    setValue("vehicle", item.vehicle);
  };
  const onChoosePayload = (item: any) => {
    setValue("payload", item.payload);
  };
  const onChooseStatus = (item: any) => {
    setValue("status", item.label);
  };

  const ship_code_filter_input = {
    label: "Ship Code:",
    register: register("ship_code"),
    data: ship_codes.concat({ ship_code: "All" }),
    name_key: "ship_code",
    onClick: onChooseShipCode,
  };
  const vehicle_filter_input = {
    label: "Vehicle:",
    register: register("vehicle"),
    data: vehicles.concat({ vehicle: "All" }),
    name_key: "vehicle",
    onClick: onChooseVehicle,
  };
  const payload_filter_input = {
    label: "Payload:",
    register: register("payload"),
    data: payloads.concat({ payload: "All" }),
    name_key: "payload",
    onClick: onChoosePayload,
  };
  const status_filter_input = {
    label: "Status:",
    register: register("status"),
    data: ORDER_STATUS.concat({ label: "All", value: -1 }),
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
      <SearchIuput {...ship_code_filter_input} />
      <SearchIuput {...payload_filter_input} />
      <SearchIuput {...vehicle_filter_input} />
      <SearchIuput {...status_filter_input} />
      <SolidButton {...btn_props} />
    </form>
  );
};

export default FilterOrder;
