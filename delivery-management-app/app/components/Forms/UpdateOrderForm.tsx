"use client";
import React, { useState } from "react";
import {
  HashtagIcon,
  MapPinIcon,
  ClockIcon,
  CubeIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import {
  useUpdateOrderByIdMutation,
  useGetOrderByIdQuery,
} from "@/app/redux/features/order/orderApiSlice";
import SolidButton from "../Buttons/SolidButton";
import { toast } from "react-toastify";

const CONTENT_TITLE_CLASS =
  "flex items-center gap-1 text-sm text-black-30";
const CONTENT_CLASS =
  "font-medium shadow-inner text-black-100 border border-primary-10 w-full rounded-lg cursor-pointer";
const ICON_CLASS = "w-4 icon-sw-2 text-primary-100";

interface Props {
  id: string;
  setActive: any;
}

const UpdateOrderForm = (props: Props) => {
  const { id, setActive } = props;
  const { data, error, isLoading } = useGetOrderByIdQuery(id);
  const [updateOrder, { isSuccess }] = useUpdateOrderByIdMutation();

  const [order, setOrder] = useState({
    ...data,
    vehicle: data.vehicle.license_plate,
  });

  const btn_props = {
    label: "Update Order",
    type: "Normal",
    styles: "w-fit justify-self-end self-end",
    btn_type: "submit" as "submit" | "button" | "reset",
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { delivery_point, pickup_point, ...rest } = order;
    try {
      const res = await updateOrder(rest);
      toast.success("Order updated successfully!", { toastId: 1 });
      setActive(false);
    } catch (error: any) {
      throw error;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="grid grid-cols-2 gap-3">
        <span className="col-span-2 font-medium text-black-80">
          Order Information
        </span>
        <div className="space-y-1">
          <label htmlFor="order-id" className={CONTENT_TITLE_CLASS}>
            <HashtagIcon className={ICON_CLASS} />
            Order ID:
          </label>
          <input
            id="order-id"
            className={CONTENT_CLASS}
            disabled
            value={order.id}
            onChange={(e) => setOrder({ ...order, id: e.target.value })}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="order-shipping-code" className={CONTENT_TITLE_CLASS}>
            <HashtagIcon className={ICON_CLASS} />
            Ship Code:
          </label>
          <input
            id="order-shipping-code"
            className={CONTENT_CLASS}
            disabled
            value={order.ship_code}
            onChange={(e) => setOrder({ ...order, ship_code: e.target.value })}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="order-time-in" className={CONTENT_TITLE_CLASS}>
            <ClockIcon className={ICON_CLASS} />
            Pick-up Time:
          </label>
          <input
            id="order-time-in"
            type="time"
            className={CONTENT_CLASS}
            value={order.time_in}
            onChange={(e) => setOrder({ ...order, time_in: e.target.value })}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="order-payload" className={CONTENT_TITLE_CLASS}>
            <CubeIcon className={ICON_CLASS} />
            Payload(kg):
          </label>
          <input
            id="order-payload"
            className={CONTENT_CLASS}
            disabled
            value={order.payload}
            onChange={(e) => setOrder({ ...order, payload: e.target.value })}
          />
        </div>
        <div className="space-y-1 col-span-2">
          <label
            htmlFor="order-pick-up-address"
            className={CONTENT_TITLE_CLASS}
          >
            <MapPinIcon className={ICON_CLASS} />
            Pick-up Address:
          </label>
          <input
            id="order-pick-up-address"
            className={CONTENT_CLASS}
            disabled
            value={order.pickup_point}
            onChange={(e) =>
              setOrder({ ...order, pickup_point: e.target.value })
            }
          />
        </div>
        <div className="space-y-1 col-span-2">
          <label
            htmlFor="order-delivery-address"
            className={CONTENT_TITLE_CLASS}
          >
            <MapPinIcon className={ICON_CLASS} />
            Delivery Address:
          </label>
          <input
            id="order-delivery-address"
            className={CONTENT_CLASS}
            disabled
            value={order.delivery_point}
            onChange={(e) =>
              setOrder({ ...order, delivery_point: e.target.value })
            }
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="order-vehicle" className={CONTENT_TITLE_CLASS}>
            <TruckIcon className={ICON_CLASS} />
            Vehicle:
          </label>
          <input
            id="order-vehicle"
            className={CONTENT_CLASS}
            value={order.vehicle}
            onChange={(e) => setOrder({ ...order, vehicle: e.target.value })}
          />
        </div>
        <SolidButton {...btn_props} />
      </div>
    </form>
  );
};

export default UpdateOrderForm;
