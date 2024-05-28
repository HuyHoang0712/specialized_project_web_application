"use client";
import React, { useState, useEffect } from "react";
import { BellIcon } from "@heroicons/react/24/solid";
import { useGetNotificationsQuery } from "@/app/redux/features/notification/notificationApiSlice";
import NotificationCard from "./NotificationCard";
import { Skeleton } from "@mui/material";
const NotificationWrap = () => {
  const {
    data: notifications,
    error,
    isLoading,
  } = useGetNotificationsQuery(undefined, {
    pollingInterval: 10000,
    skipPollingIfUnfocused: false,
  });
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handlerBlur = (e: any) => {
      if (!(e.target as any).closest(`.notifications`)) {
        setShow(false);
      }
    };
    document.addEventListener("click", handlerBlur);

    return () => {
      document.removeEventListener("click", handlerBlur);
    };
  }, []);

  return (
    <div
      className="relative w-6 h-6 flex justify-end notifications"
      onClick={() => setShow(true)}
    >
      {notifications &&
        notifications.filter((noti: any) => !noti.is_read).length > 0 && (
          <span className="relative flex h-2 w-2 z-10">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red"></span>
          </span>
        )}
      <BellIcon className="w-6 fill-primary-100 hover:scale-105 absolute" />
      {show && (
        <div className="flex flex-col gap-3 absolute top-10 right-[-10rem] divide-y-2 bg-white w-96 h-96 z-20 rounded-lg shadow-lg overflow-y-scroll no-scrollbar">
          {isLoading && <Skeleton variant="rectangular" className="flex-1" />}
          {error && <div>Error</div>}
          {notifications &&
            notifications.map((noti: any, index: number) => (
              <NotificationCard key={index} noti={noti} />
            ))}
        </div>
      )}
    </div>
  );
};

export default NotificationWrap;
