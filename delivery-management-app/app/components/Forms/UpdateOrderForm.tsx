"use client";
import React, { useState } from "react";
import {
  HashtagIcon,
  MapPinIcon,
  ClockIcon,
  CubeIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { useAppSelector } from "@/app/redux/hooks";
import { selectCurOrder } from "@/app/redux/features/order/orderSlice";
import { useUpdateOrderByIdMutation } from "@/app/redux/features/order/orderApiSlice";
import SolidButton from "../Buttons/SolidButton";

const CONTENT_TITLE_CLASS =
  "flex items-center gap-1 text-sm font-medium text-black-30";
const CONTENT_CLASS =
  "font-medium text-black-40 bg-black-10/20 w-full rounded-lg cursor-pointer border-none focus:border-transparent focus:outline-none focus:ring-0";
const ICON_CLASS = "w-4 icon-sw-2";

const UpdateOrderForm = () => {
  const [updateOrder, { isLoading, data, error }] =
    useUpdateOrderByIdMutation();
  const curOrder = useAppSelector((state) => selectCurOrder(state));
  const [order, setOrder] = useState({
    ...curOrder,
    vehicle: curOrder.vehicle.license_plate,
  });

  const btn_props = {
    label: "Update Order",
    type: "Normal",
    styles: "w-fit justify-self-end self-end",
    btn_type: "submit" as "submit" | "button" | "reset",
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateOrder(order);
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
