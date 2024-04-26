"use client";
import React from "react";
import StatusCard from "../Cards/StatusCard";
import dynamic from "next/dynamic";
import InforCard, { InforCardSkeleton } from "../Cards/InforCard";
import OrderInforCard, {
  OrderInforCardSkeleton,
} from "@/app/components/Cards/OrderInforCard";
import { Skeleton } from "@mui/material";
import UpdateModal from "../Modals/UpdateModal";
import CancelModal from "../Modals/CancelModal";
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

const OrderDetailContainer = (props: Props) => {
  const id = props.id;
  const { data: order, error, isLoading } = useGetOrderByIdQuery(id);

  if (isLoading) return <OrderDetailContainerSkeleton />;

  const vehicle = order?.vehicle;
  const driver = vehicle?.driver;
  const driver_card_props = {
    type: "driver",
    title: "Driver",
    titleContent: { Name: driver.name, "Driver ID": driver.id },
    content: { Phone: driver.phone ?? "", Email: driver.email },
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
    data: order,
    title: "Update Order",
    type: "order",
  };

  const cancel_order_modal_props = {
    id: id,
    title: "Cancel Order",
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
          <span className="text-lg font-medium text-primary-100">
            ORDER DETAILS
          </span>
          <StatusCard label={order.status} type="order" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <InforCard Icon={HashtagIcon} title="Order Id:" content={order.id} />
          <InforCard
            Icon={HashtagIcon}
            title="Ship Code:"
            content={order.ship_code}
          />
          <InforCard
            Icon={MapPinIcon}
            title="Pick-up Address:"
            content={order.pickup_point}
          />
          <InforCard
            Icon={ClockIcon}
            title="Pick-up Time:"
            content={order.time_in}
          />
          <InforCard
            Icon={MapPinIcon}
            title="Delivery Address:"
            content={order.delivery_point}
          />
          <InforCard
            Icon={CubeIcon}
            title="Payload:"
            content={order.payload + " kg"}
          />
          <InforCard
            Icon={ExclamationCircleIcon}
            title="Issues:"
            content="None"
          />
          <InforCard
            Icon={PencilSquareIcon}
            title="Note:"
            content={
              <textarea
                name="message"
                rows={5}
                cols={30}
                title="Note"
                placeholder="Enter your note here"
              ></textarea>
            }
          />
        </div>
        <div className="flex flex-1 items-end justify-between gap-3">
          <UpdateModal {...update_order_modal_props} />
          <div className="flex gap-3">
            <ReportIssueModal />
            <CancelModal {...cancel_order_modal_props} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailContainer;

const OrderDetailContainerSkeleton = () => {
  return (
    <>
      <div className="flex flex-col gap-3 w-1/2">
        <div className="flex w-full h-[9.5rem] gap-3">
          <OrderInforCardSkeleton />
          <OrderInforCardSkeleton />
        </div>
        <div className="flex flex-col flex-1 rounded-lg p-3 gap-2 bg-white overflow-hidden">
          <span className="text-lg font-medium text-black-60">
            Order Tracking
          </span>
          <Skeleton variant="rectangular" height={300} />
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-white rounded-lg gap-3 p-3">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-primary-100">Order</span>
          <Skeleton variant="text" width={100} />
        </div>
        <div className="grid grid-cols-2 gap-5">
          {[...Array(8)].map((_, idx) => (
            <InforCardSkeleton key={idx} />
          ))}
        </div>
      </div>
    </>
  );
};
