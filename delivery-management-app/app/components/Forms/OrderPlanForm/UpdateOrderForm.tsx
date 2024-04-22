"use client";
import React, { useState, useEffect } from "react";
import {
  HashtagIcon,
  MapPinIcon,
  ClockIcon,
  CubeIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { useUpdateOrderByIdMutation } from "@/app/redux/features/order/orderApiSlice";
import SolidButton from "../../Buttons/SolidButton";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from "../../Input/FormInput";
import { toast } from "react-toastify";

const CONTENT_TITLE_CLASS = "flex items-center gap-1 text-sm text-black-30";
const CONTENT_CLASS =
  "font-medium shadow-inner text-black-100 border border-primary-10 w-full rounded-lg cursor-pointer";
const ICON_CLASS = "w-4 icon-sw-2 text-primary-100";

type Inputs = {
  id: string;
  ship_code: string;
  time_in: string;
  payload: string;
  pickup_point: string;
  delivery_point: string;
  vehicle: string;
};

interface Props {
  formProps: any;
  setActive: any;
}

const UpdateOrderForm = (props: Props) => {
  const { formProps: order, setActive } = props;

  const [updateOrder, { isSuccess }] = useUpdateOrderByIdMutation();

  // const [order, setOrder] = useState({
  //   ...data,
  //   vehicle: data.vehicle.license_plate,
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>({ mode: "all" });

  const btn_props = {
    label: "Update Order",
    type: "Normal",
    styles: "mt-4 justify-center",
    btn_type: "submit" as "submit" | "button" | "reset",
  };

  useEffect(() => {
    setValue("id", order.id);
    setValue("ship_code", order.ship_code);
    setValue("time_in", order.time_in);
    setValue("payload", order.payload);
    setValue("pickup_point", order.pickup_point);
    setValue("delivery_point", order.delivery_point);
    setValue("vehicle", order.vehicle.license_plate);
  }, [order]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { pickup_point, delivery_point, ...rest } = data;
    try {
      const res = await updateOrder(rest);
      toast.success("Order updated successfully!", { toastId: 1 });
      setActive(false);
    } catch (error: any) {
      throw error;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col lg:w-[30vw] sm:w-[35vw] gap-4"
    >
      <h1 className="text-lg font-medium text-black-100">Order Information</h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center gap-4">
          <FormInput
            Icon={HashtagIcon}
            label="Order ID:"
            register={register("id")}
            type="text"
            error={errors.id?.message}
            disabled={true}
          />
          <FormInput
            Icon={HashtagIcon}
            label="Ship Code:"
            register={register("ship_code")}
            type="text"
            error={errors.ship_code?.message}
            disabled={true}
          />
        </div>
        <div className="flex items-center gap-4">
          <FormInput
            label="Pick-up Time:"
            register={register("time_in")}
            type="time"
            error={errors.time_in?.message}
          />
          <FormInput
            Icon={CubeIcon}
            label="Payload(kg):"
            register={register("payload")}
            type="text"
            error={errors.payload?.message}
            disabled={true}
          />
        </div>
        <FormInput
          Icon={MapPinIcon}
          label="Pick-up Address:"
          register={register("pickup_point")}
          type="text"
          error={errors.pickup_point?.message}
          disabled={true}
        />
        <FormInput
          Icon={MapPinIcon}
          label="Delivery Address:"
          register={register("delivery_point")}
          type="text"
          error={errors.delivery_point?.message}
          disabled={true}
        />
        <FormInput
          Icon={TruckIcon}
          label="Vehicle:"
          register={register("vehicle")}
          type="text"
          error={errors.vehicle?.message}
        />
      </div>

      <SolidButton {...btn_props} />
    </form>
  );
};

export default UpdateOrderForm;
