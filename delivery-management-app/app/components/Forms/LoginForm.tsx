"use client";
import React, { useState, useRef, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useLoginMutation } from "@/app/redux/features/auth/authApiSlice";
import { useAppDispatch } from "@/app/redux/hooks";
import { setCredentials } from "@/app/redux/features/auth/authSlice";
import {
  EnvelopeIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
const ERROR_TOAST = 0;
const SUCCESS_TOAST = 1;

function LoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [showInput, setShowInput] = useState(false);
  const [login, { isLoading, data, error }] = useLoginMutation();

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const data = {
        username: formData.get("username"),
        password: formData.get("password"),
      };
      const res = await login(JSON.stringify(data));
      toast.success("Successfully logged in....", { toastId: SUCCESS_TOAST });
      router.push("/dashboard");
    } catch (error: any) {
      if (error.data)
        toast.error(error.data?.error_message, { toastId: ERROR_TOAST });
      else
        toast.error("Something went wrong! Please try again later!", {
          toastId: ERROR_TOAST,
        });
    }
  };

  return (
    <form
      onSubmit={submitForm}
      className="flex flex-col items-center justify-start w-full"
    >
      <div className="flex flex-col items-center justify-start gap-8 w-full">
        <div className="flex flex-row px-4 gap-2.5 relative rounded-[0.5rem] border-none bg-input-defaut-color shadow-sm w-full h-[3.35rem]">
          <EnvelopeIcon className="w-6 icon-sw-2 text-black-20" />
          <input
            type="text"
            name="username"
            className="peer flex-1 h-[3.35rem] border-none placeholder-black-20 bg-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Username"
            required
          />
        </div>
        <div className="flex flex-row px-4 gap-2.5 relative rounded-[0.5rem] border-none bg-input-defaut-color shadow-sm w-full h-[3.35rem]">
          <KeyIcon className="w-6 icon-sw-2 text-black-20" />
          <input
            type={showInput ? "text" : "password"}
            name="password"
            className="peer flex-1 h-[3.35rem] border-none placeholder-black-20 bg-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Password"
            required
          />
          <button
            type="button"
            onClick={() => setShowInput(!showInput)}
            className="hover:scale-105"
          >
            {showInput ? (
              <EyeIcon className="w-4 icon-sw-2" />
            ) : (
              <EyeSlashIcon className="w-4 icon-sw-2" />
            )}
          </button>
        </div>
      </div>
      <Link
        href={"/auth/fotgotPass"}
        className="text-base text-primary-100 font-normal mt-3 self-end cursor-pointer hover:scale-105"
      >
        Recover Password
      </Link>

      <button
        type="submit"
        className="rounded-xl w-[11.25rem] bg-primary-100 p-3 font-normal text-white text-xl mt-12 hover:scale-110"
      >
        {isLoading ? "Loging..." : "Login"}
      </button>
    </form>
  );
}

export default LoginForm;
