"use client";
import React from "react";
import RequiredInput from "../Inputs/RequiredInput";
import Image from "next/image";
import Link from "next/link";
function LoginForm() {
  const userNameInput = {
    placeholder: "Username",
    type: "text",
    required: true,
    icon: "Mail",
  };
  const passwordInput = {
    placeholder: "Password",
    type: "password",
    required: true,
    icon: "Password",
  };
  return (
    <div className="flex flex-col items-center justify-start w-full">
      <div className="flex flex-col items-center justify-start gap-8 w-full">
        <RequiredInput {...userNameInput} />
        <RequiredInput {...passwordInput} />
      </div>
      <span
        className="p2 text-primary-100 font-['Poppins-Regular'] mt-3 self-end cursor-pointer hover:scale-105"
        onClick={() => {}}
      >
        Recover Password
      </span>
      <Link href={"/dashboard"}>
        <button
          type="submit"
          className="rounded-xl w-[11.25rem] bg-primary-100 p-3 font-['Poppins-Regular'] text-white text-xl mt-12 hover:scale-110"
        >
          Login
        </button>
      </Link>
    </div>
  );
}

export default LoginForm;
