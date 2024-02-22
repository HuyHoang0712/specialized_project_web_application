import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import LoginForm from "@/app/components/Forms/LoginForm";
import { Bounce, ToastContainer } from "react-toastify";


function LoginPage() {
  return (
    <div className="flex-1 flex flex-col bg-bg-color min-h-screen">
      <div className="flex flex-row gap-7 justify-start items-center w-full h-20 bg-white px-5">
        <Image src={logo} width={64} height={63} alt={""} />
        <span className="font-bold text-3xl text-primary-100">
          Transportation Management
        </span>
      </div>
      <div className="flex flex-1 justify-center items-center w-full shadow-xl">
        <div className="flex flex-col items-center justify-start w-28 h-36 rounded-xl bg-white p-8 gap-12">
          <div className="flex flex-col items-center justify-start">
            <Image src={logo} width={105} height={104} alt={""} />
            <span className="font-medium text-xl">Welcome back!</span>
            <span className="font-regular text-base">Log in your account</span>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
