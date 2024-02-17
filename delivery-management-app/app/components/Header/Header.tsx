"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Icons, Images } from "@/app/lib/assets";
function Header() {
  let pathname = usePathname() || "/";
  let paths = pathname.split("/");
  let pageName = paths[1];

  return (
    <div className="flex flex-col h-[5.625rem] divide-y">
      <div className="flex flex-row items-center px-5 py-[.875rem] justify-between">
        <span className="text-xl font-medium text-black-60">
          {pageName[0].toUpperCase() + pageName.slice(1)}
        </span>
        <div className="flex flex-row items-center gap-5">
          <Image
            className="hover:scale-110"
            src={Icons.Notification}
            width={24}
            height={24}
            alt=""
          />
          <span className="text-base font-normal text-black-100 px-3 py-[.313rem] bg-secondary-20 rounded-lg">
            Username
          </span>
          <Link href={"/profile"}>
            <Image
              className="rounded-lg"
              src={Images.ExampleAva}
              width={32}
              height={32}
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center px-5 py-1 gap-3">
        <Link href={"/dashboard"}>
          <Image src={Icons.Home} width={18} height={18} alt="" />
        </Link>
        {(pageName != "dashboard" ? paths.slice(1) : paths.slice(2)).map(
          (item, idx) => {
            item = item[0].toUpperCase() + item.slice(1);
            return (
              <div key={idx}>
                <span className="text-black-30">/</span>
                <Link href={`/${pageName}`}>
                  <span className="text-base text-black-30 font-normal hover:underline hover:text-primary-80 hover:underline-offset-2 ">
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
