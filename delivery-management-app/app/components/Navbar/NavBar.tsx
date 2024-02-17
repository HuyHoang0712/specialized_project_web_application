"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { Icons } from "@/app/lib/assets";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

  return (
    <div
      className={
        "flex flex-col gap-20 transition-[width] duration-150 " +
        (full ? "w-96 p-8" : "w-[6rem] p-[1.125rem]")
      }
      onMouseEnter={() => setFull(true)}
      onMouseLeave={() => setFull(false)}
    >
      <div className="flex flex-row gap-5 items-center">
        <Image src={logo} width={60} height={60} alt="" />
        <span className="text-2xl font-bold text-primary-100" hidden={!full}>
          Transportation Management
        </span>
      </div>
      <div className="">
        <nav className="flex flex-col gap-6">
          {navItems.map((item, idx) => {
            const isActive = item.path === pathname;
            return (
              <Link
                key={item.path}
                className={clsx(
                  "flex flex-row gap-3 items-center font-bold text-[1.25rem] rounded-xl hover:bg-primary-20",
                  { "px-5 py-4": full, "p-[0.938rem]": !full },
                  {
                    "text-white bg-primary-100": isActive,
                    "text-black-50": !isActive,
                  }
                )}
                href={item.path}
              >
                <Image
                  src={isActive ? item.active : item.icon}
                  height={30}
                  width={30}
                  alt=""
                />
                {full && `${item.name}`}
              </Link>
            );
          })}
        </nav>
      </div>
      <button
        type="button"
        className={clsx(
          "flex flex-row gap-3 items-center font-bold text-[1.25rem] rounded-xl text-red bottom-9 hover:bg-red-20",
          { "px-5 py-4": full, "p-[0.938rem]": !full }
        )}
      >
        <Image src={Icons.Logout} height={30} width={30} alt="" />
        {full && "Logout"}
      </button>
    </div>
  );
}

export default NavBar;
