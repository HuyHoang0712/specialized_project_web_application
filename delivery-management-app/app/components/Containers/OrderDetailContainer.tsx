"use client";
import React from "react";
import StatusCard from "../Cards/StatusCard";
import dynamic from "next/dynamic";

import OrderInforCard from "@/app/components/Cards/OrderInforCard";
import UpdateModal from "../Modals/UpdateModal";
import CancelOrderModal from "../Modals/CancelOrderModal";
import ReportIssueModal from "../Modals/ReportIssueModal";
import {
  HashtagIcon,
  MapPinIcon,
  ClockIcon,
  CubeIcon,
  ExclamationCircleIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { useGetOrderByIdQuery } from "@/app/redux/features/order/orderApiSlice";
const MapBox = dynamic(() => import("@/app/components/Map/Map"), {
  ssr: false,
});

interface Props {
  id: string;
}
const CONTENT_TITLE_CLASS = "flex items-center gap-1 text-sm text-black-40";
const CONTENT_CLASS =
  "text-black-100 shadow-sm shadow-inner border border-primary-10 w-full rounded-lg cursor-pointer px-3 py-2 truncate";
const ICON_CLASS = "w-4 text-black-40";

const OrderDetailContainer = (props: Props) => {
  const id = props.id;
  const { data, error, isLoading } = useGetOrderByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  const order = data;

  const vehicle = order?.vehicle;
  const driver = vehicle?.driver;
  const driver_card_props = {
    type: "driver",
    title: "Driver",
    titleContent: { Name: driver.name, "Driver ID": driver.id },
    content: { Phone: "+8490099129", Email: driver.email },
  };

  const vehicle_card_props = {
    type: "vehicle",
    title: "Vehicle",
    titleContent: {
      "License Plate": vehicle.license_plate,
      Capacity: vehicle.capacity + " kg",
    },
    content: { "Current Parking": "No. 15 Adekunle Street, Yaba, Lagos State" },
  };

  const update_order_modal_props = {
    id: id,
    title: "Update Order",
    type: "order",
  };

  return (
    <>
      <div className="flex flex-col gap-3 w-1/2">
        <div className="flex w-full h-[9.5rem] gap-3">
          <OrderInforCard {...driver_card_props} />
          <OrderInforCard {...vehicle_card_props} />
        </div>
        <div className="flex flex-col flex-1 rounded-lg p-3 gap-2 bg-white overflow-hidden">
          <span className="text-lg font-medium text-black-60">
            Order Tracking
          </span>
          <MapBox center={[10.772327943924136, 106.65794471075151]} />
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-white rounded-lg gap-3 p-3">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-primary-100">Order</span>
          <StatusCard label={order.status} />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-1">
            <div className={CONTENT_TITLE_CLASS}>
              <HashtagIcon className={ICON_CLASS} />
              Order ID:
            </div>
            <div className={CONTENT_CLASS}>{order.id}</div>
          </div>
          <div className="space-y-1">
            <div className={CONTENT_TITLE_CLASS}>
              <HashtagIcon className={ICON_CLASS} />
              Ship Code:
            </div>
            <div className={CONTENT_CLASS}>{order.ship_code}</div>
          </div>
          <div className="space-y-1">
            <div className={CONTENT_TITLE_CLASS}>
              <MapPinIcon className={ICON_CLASS} />
              Pick-up Address:
            </div>
            <div className={CONTENT_CLASS}>{order.pickup_point}</div>
          </div>
          <div className="space-y-1">
            <div className={CONTENT_TITLE_CLASS}>
              <ClockIcon className={ICON_CLASS} />
              Pick-up Time:
            </div>
            <div className={CONTENT_CLASS}>{order.time_in}</div>
          </div>
          <div className="space-y-1">
            <div className={CONTENT_TITLE_CLASS}>
              <MapPinIcon className={ICON_CLASS} />
              Delivery Address:
            </div>
            <div className={CONTENT_CLASS}>{order.delivery_point}</div>
          </div>
          <div className="space-y-1">
            <div className={CONTENT_TITLE_CLASS}>
              <CubeIcon className={ICON_CLASS} />
              Payload:
            </div>
            <div className={CONTENT_CLASS}>{order.payload} kg</div>
          </div>
          <div className="space-y-1">
            <div className={CONTENT_TITLE_CLASS}>
              <ExclamationCircleIcon className={ICON_CLASS} />
              Issues:
            </div>
            <div className={CONTENT_CLASS}>None</div>
          </div>
          <div className="space-y-1">
            <div className={CONTENT_TITLE_CLASS}>
              <PencilSquareIcon className={ICON_CLASS} />
              Note:
            </div>
            <textarea
              name="message"
              rows={5}
              cols={30}
              title="Note"
              placeholder="Enter your note here"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between gap-3">
          <UpdateModal {...update_order_modal_props} />
          <div className="flex gap-3">
            <ReportIssueModal />
            <CancelOrderModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailContainer;
