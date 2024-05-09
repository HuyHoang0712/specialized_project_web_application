"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Images } from "@/app/lib/assets";
import { BellIcon, HomeIcon } from "@heroicons/react/24/solid";
import Cookie from "js-cookie";

function Header() {
  let pathname = usePathname() || "/";
  let paths = pathname.split("/");

  const transformName = () => {
    const dashboard = ["dashboard"];
    const orderManage = ["plans", "plan", "order"];
    if (dashboard.includes(paths[1])) {
      return "Dashboard";
    } else if (orderManage.includes(paths[1])) {
      return "Order Management";
    } else return paths[1][0].toUpperCase() + paths[1].slice(1);
  };

  let pageName = transformName();
  const usename = Cookie.get("user_name");
  return (
    <div className="flex flex-col h-header divide-y">
      <div className="flex flex-row items-center px-3 py-3 justify-between">
        <span className="text-xl font-medium text-black-60">{pageName}</span>
        <div className="flex flex-row items-center gap-3">
          <BellIcon className="w-6 fill-primary-100 hover:scale-105 relative" />
          <span className="text-sm font-normal text-black-100 px-3 py-[.313rem] bg-secondary-20 rounded-lg">
            {usename}
          </span>
          <Link href={"/profile"}>
            <Image
              className="rounded-lg"
              src={Images.ExampleAva}
              width={32}
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center px-3 py-1 gap-1">
        <Link href={"/dashboard"}>
          <HomeIcon className="w-[1.125rem] text-primary-100" />
        </Link>
        {(paths[1] != "dashboard" ? paths.slice(1) : paths.slice(2)).map(
          (item, idx) => {
            item = item[0].toUpperCase() + item.slice(1);
            return (
              <div
                key={idx}
                className="flex items-center text-sm text-black-30 font-normal"
              >
                <span>/</span>
                <Link href={`/${paths[1]}`}>
                  <span className="hover:underline hover:text-primary-80 hover:underline-offset-2">
                    {item}
                  </span>
                </Link>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Header;
