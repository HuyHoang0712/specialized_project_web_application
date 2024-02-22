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
    <div className="flex flex-col h-header divide-y">
      <div className="flex flex-row items-center px-3 py-3 justify-between">
        <span className="text-xl font-medium text-black-60">
          {pageName[0].toUpperCase() + pageName.slice(1)}
        </span>
        <div className="flex flex-row items-center gap-3">
          <Image
            className="hover:scale-110"
            src={Icons.Notification}
            width={24}
            height={24}
            alt=""
          />
          <span className="text-sm font-normal text-black-100 px-3 py-[.313rem] bg-secondary-20 rounded-lg">
            Username
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
          <Image src={Icons.Home} width={18} alt="" />
        </Link>
        {(pageName != "dashboard" ? paths.slice(1) : paths.slice(2)).map(
          (item, idx) => {
            item = item[0].toUpperCase() + item.slice(1);
            return (
              <div key={idx} className="flex flex-1 items-center text-sm text-black-30 font-normal">
                <span>/</span>
                <Link href={`/${pageName}`}>
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
