"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { Icons } from "@/app/lib/assets";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "@/app/redux/hooks";
import Link from "next/link";
import { logOut } from "@/app/redux/features/auth/authSlice";

const navItems = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Icons.Dashboard,
    active: Icons.DashboardActive,
  },
  {
    path: "/order",
    name: "Orders",
    icon: Icons.Order,
    active: Icons.OrderActive,
  },
  {
    path: "/customer",
    name: "Customers",
    icon: Icons.Customer,
    active: Icons.CustomerActive,
  },
  {
    path: "/employee",
    name: "Employees",
    icon: Icons.Employee,
    active: Icons.EmployeeActive,
  },
  {
    path: "/facilities",
    name: "Facilities",
    icon: Icons.Facilities,
    active: Icons.FacilitiesActive,
  },
  {
    path: "/issue",
    name: "Issues",
    icon: Icons.Issue,
    active: Icons.IssueActive,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: Icons.Profile,
    active: Icons.ProfileActive,
  },
];

function NavBar() {
  let pathname = usePathname() || "/";
  let [full, setFull] = useState(true);
  const dispatch = useAppDispatch();
  return (
    <div
      className={
        "flex flex-col relative transition-[width] h-100vh px-3 py-3 " +
        (full ? "w-[18.75rem]" : "w-[5.25rem]")
      }
      onMouseEnter={() => setFull(true)}
      onMouseLeave={() => setFull(false)}
    >
      <div className="flex flex-row gap-4 items-center h-16">
        <Image src={logo} width={60} alt="" />
        <span className="text-2xl font-bold text-primary-100 w-[12.5rem]" hidden={!full}>
          Transportation Management
        </span>
      </div>
      <div className="mt-8">
        <nav className="flex flex-col gap-4">
          {navItems.map((item, idx) => {
            const isActive = item.path === pathname;
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
                <Image
                  src={isActive ? item.active : item.icon}
                  width={24}
                  alt=""
                />
                {full && `${item.name}`}
              </Link>
            );
          })}
        </nav>
      </div>
      <Link
        type="button"
        className={clsx(
          "flex flex-row gap-3 absolute bottom-[1.25rem] items-center font-bold rounded-xl text-red px-5 py-4 hover:bg-red-20",
          { "w-[18.5rem]": full }
        )}
        href={"/auth/login"}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        <Image src={Icons.Logout} width={24} alt="" />
        {full && "Logout"}
      </Link>
    </div>
  );
}

export default NavBar;
