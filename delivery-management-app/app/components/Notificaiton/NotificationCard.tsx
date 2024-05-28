"use client";
import React from "react";
import Image from "next/image";
import { Images } from "@/app/lib/assets";
import Link from "next/link";
import dayjs from "dayjs";
import { useMaskAsReadedMutation } from "@/app/redux/features/notification/notificationApiSlice";
type NotificationCardProps = {
  noti: any;
};
const NotificationCard = ({ noti }: NotificationCardProps) => {
  const [maskAsReaded] = useMaskAsReadedMutation();
  const handleClick = async () => {
    await maskAsReaded(noti.id);
  };

  return (
    <Link
      className="flex w-full px-4 py-2 gap-3 items-start hover:bg-primary-10"
      href={noti.type === 1 ? `/order/${noti.order_id}` : "/issues"}
      onClick={handleClick}
    >
      <Image
        src={Images.ExampleAva}
        width={50}
        height={50}
        alt=""
        className="rounded-full"
      />
      <div className="flex flex-col flex-1 gap-1">
        <p className="font-medium text-black-60">{noti.description}</p>
        <span className="text-sm text-black-40">
          {dayjs(noti.send_datetime).format("DD-MM-YYYY HH:mm")}
        </span>
      </div>
      {!noti.is_read && (
        <div className="flex h-full items-center justify-center">
          <span className="h-3 w-3 rounded-full bg-primary-100"></span>
        </div>
      )}
    </Link>
  );
};

export default NotificationCard;
