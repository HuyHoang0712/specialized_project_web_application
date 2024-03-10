"use client";
import React from "react";
import StatusCard from "../Cards/StatusCard";
import UpdateOrderModal from "../Modals/UpdateOrderModal";
import CancelOrderModal from "../Modals/CancelOrderModal";
import ReportIssueModal from "../Modals/ReportIssueModal";
import {
  HashtagIcon,
  MapPinIcon,
  ClockIcon,
  CubeIcon,
  ExclamationCircleIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const OrderDetailContainer = () => {
  const CONTENT_TITLE_CLASS =
    "flex items-center gap-1 font-medium text-black-30";
  const CONTENT_CLASS = "font-medium text-black-60";
  const ICON_CLASS = "w-5 icon-sw-2";

  return (
    <div className="flex flex-1 flex-col bg-white rounded-lg gap-3 p-3">
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium text-black-60">Order</span>
        <StatusCard label={"Pending"} />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="space-y-1">
          <div className={CONTENT_TITLE_CLASS}>
            <HashtagIcon className={ICON_CLASS} />
            Order ID:
          </div>
          <div className={CONTENT_CLASS}>123456</div>
        </div>
        <div className="space-y-1">
          <div className={CONTENT_TITLE_CLASS}>
            <HashtagIcon className={ICON_CLASS} />
            Ship Code:
          </div>
          <div className={CONTENT_CLASS}>123456</div>
        </div>
        <div className="space-y-1">
          <div className={CONTENT_TITLE_CLASS}>
            <MapPinIcon className={ICON_CLASS} />
            Pick-up Address:
          </div>
          <div className={CONTENT_CLASS}>
            No. 15 Adekunle Street, Yaba, Lagos State
          </div>
        </div>
        <div className="space-y-1">
          <div className={CONTENT_TITLE_CLASS}>
            <ClockIcon className={ICON_CLASS} />
            Pick-up Time:
          </div>
          <div className={CONTENT_CLASS}>12 Sept 2022 - 12:55 pm</div>
        </div>
        <div className="space-y-1">
          <div className={CONTENT_TITLE_CLASS}>
            <MapPinIcon className={ICON_CLASS} />
            Delivery Address:
          </div>
          <div className={CONTENT_CLASS}>
            No. 15 Adekunle Street, Yaba, Lagos State
          </div>
        </div>
        <div className="space-y-1">
          <div className={CONTENT_TITLE_CLASS}>
            <CubeIcon className={ICON_CLASS} />
            Payload:
          </div>
          <div className={CONTENT_CLASS}>5500 kg</div>
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
        <UpdateOrderModal />
        <div className="flex gap-3">
          <ReportIssueModal />
          <CancelOrderModal />
        </div>
      </div>
    </div>
  );
};

export default OrderDetailContainer;
