"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "@/app/redux/hooks";
import Link from "next/link";
import { logOut } from "@/app/redux/features/auth/authSlice";
import {
  Squares2X2Icon as Squares2X2IconActive,
  ShoppingBagIcon as ShoppingBagIconActive,
  UserGroupIcon as UserGroupIconActive,
  UsersIcon as UsersIconActive,
  TruckIcon as TruckIconActive,
  InformationCircleIcon as InformationCircleIconActive,
  IdentificationIcon as IdentificationIconActive,
} from "@heroicons/react/24/solid";
import {
  Squares2X2Icon,
  ShoppingBagIcon,
  UserGroupIcon,
  UsersIcon,
  TruckIcon,
  InformationCircleIcon,
  IdentificationIcon,
  ArrowRightStartOnRectangleIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  {
    path: "/dashboard",
    name: "Dashboard",
    Unactive: Squares2X2Icon,
    Active: Squares2X2IconActive,
  },
  {
    path: "/plans",
    name: "Orders",
    Unactive: ShoppingBagIcon,
    Active: ShoppingBagIconActive,
  },
  {
    path: "/customer",
    name: "Customers",
    Unactive: UserGroupIcon,
    Active: UserGroupIconActive,
  },
  {
    path: "/employee",
    name: "Employees",
    Unactive: UsersIcon,
    Active: UsersIconActive,
  },
  {
    path: "/facilities",
    name: "Facilities",
    Unactive: TruckIcon,
    Active: TruckIconActive,
  },
  {
    path: "/issue",
    name: "Issues",
    Unactive: InformationCircleIcon,
    Active: InformationCircleIconActive,
  },
  {
    path: "/profile",
    name: "Profile",
    Unactive: IdentificationIcon,
    Active: IdentificationIconActive,
  },
];

function NavBar() {
  let pathname = usePathname() || "/";
  let [full, setFull] = useState(false);
  let [toggle, setToggle] = useState(false);
  const dispatch = useAppDispatch();

  const transformName = (curPath: string) => {
    const dashboard = ["dashboard"];
    const orderManage = ["plans", "plan", "order"];
    if (dashboard.includes(curPath)) {
      return "Dashboard";
    } else if (orderManage.includes(curPath)) {
      return "Orders";
    } else return curPath[0].toUpperCase() + curPath.slice(1);
  };

  const curPath = transformName(pathname.split("/")[1]);

  return (
    <div
      className={
        "flex flex-col relative transition-[width] h-100vh px-3 py-3 " +
        (full ? "w-[18.75rem]" : "w-[5.25rem]")
      }
      onMouseEnter={() => setToggle(true)}
      onMouseLeave={() => setToggle(false)}
    >
      <div className="flex flex-row gap-4 items-center h-16">
        <Image src={logo} width={60} alt="" />
        <span
          className="text-2xl font-bold text-primary-100 w-[12.5rem]"
          hidden={!full}
        >
          Transportation Management
        </span>
      </div>
      <div className="mt-8">
        <nav className="flex flex-col gap-4">
          {navItems.map((item, idx) => {
            const isActive = curPath === item.name;
            return (
              <Link
                key={idx}
                className={clsx(
                  "flex flex-row gap-3 items-center font-bold rounded-lg hover:bg-primary-20 w-full px-4 py-4",
                  { "justify-center": !full },
                  {
                    "text-white bg-primary-100": isActive,
                    "text-black-50": !isActive,
                  }
                )}
                href={item.path}
              >
                {isActive ? (
                  <item.Active className="w-6 icon-sw-2" />
                ) : (
                  <item.Unactive className="w-6 icon-sw-2" />
                )}
                {full && `${item.name}`}
              </Link>
            );
          })}
          <Link
            type="button"
            className={clsx(
              "flex flex-row gap-3 items-center font-bold rounded-lg text-red px-4 py-4 hover:bg-red-20"
            )}
            href={"/auth/login"}
            scroll={false}
            onClick={() => {
              dispatch(logOut());
            }}
          >
            <ArrowRightStartOnRectangleIcon className="w-6 icon-sw-2" />
            {full && "Logout"}
          </Link>
        </nav>
      </div>
      {toggle && (
        <div
          className="absolute top-1/2 left-full bg-primary-100/25 py-3 pl-1 pr-2 text-black-60 rounded-r-full"
          onClick={() => setFull(!full)}
        >
          {full ? (
            <ChevronDoubleLeftIcon className="w-5 icon-sw-2" />
          ) : (
            <ChevronDoubleRightIcon className="w-5 icon-sw-2" />
          )}
        </div>
      )}
    </div>
  );
}

export default NavBar;
