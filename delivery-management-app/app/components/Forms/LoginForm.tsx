"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icons } from "@/app/lib/constants";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/actions/authActions";

function LoginForm() {
  const [showInput, setShowInput] = useState(false);
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <form
      action={dispatch}
      className="flex flex-col items-center justify-start w-full"
    >
      <div className="flex flex-col items-center justify-start gap-8 w-full">
        <div className="flex flex-row px-4 gap-2.5 relative rounded-[0.5rem] border-none bg-input-defaut-color shadow-sm w-full h-[3.35rem]">
          <Image src={Icons.Mail} width={24} height={24} alt={""} />
          <input
            type="email"
            id="email"
            name="email"
            className="peer flex-1 h-[3.35rem] border-none placeholder-black-20 bg-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Username"
            required
          />
        </div>
        <div className="flex flex-row px-4 gap-2.5 relative rounded-[0.5rem] border-none bg-input-defaut-color shadow-sm w-full h-[3.35rem]">
          <Image src={Icons.Password} width={24} height={24} alt={""} />
          <input
            type={showInput ? "text" : "password"}
            id="password"
            name="password"
            minLength={6}
            className="peer flex-1 h-[3.35rem] border-none placeholder-black-20 bg-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Password"
            required
          />
          <Image
            src={showInput ? Icons.Eye : Icons.HideEye}
            width={16}
            height={16}
            alt={""}
            onClick={() => setShowInput(!showInput)}
            className="hover:scale-105"
          />
        </div>
      </div>
      <Link
        href={"/auth/fotgotPass"}
        className="text-base text-primary-100 font-normal mt-3 self-end cursor-pointer hover:scale-105"
      >
        Recover Password
      </Link>
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-xl w-[11.25rem] bg-primary-100 p-3 font-normal text-white text-xl mt-12 hover:scale-110"
    >
      {pending? "Singing in...": "Log in"}
    </button>
  );
}

export default LoginForm;
