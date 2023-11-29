"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header() {
  let pathname = usePathname() || "/";
  return (
    <div className="flex flex-col divide-y">
      <div>Header</div>
      <div>Title</div>
    </div>
  );
}

export default Header;
