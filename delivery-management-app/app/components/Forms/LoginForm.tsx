"use client";
import React from "react";
import RequiredInput from "../Inputs/RequiredInput";
import Image from "next/image";
function LoginForm() {
  const userNameInput = {
    placeholder: 'Username',
    type: 'text',
    required: true,
    icon: 'Mail'
  }
  const passwordInput = {
    placeholder: 'Password',
    type: 'password',
    required: true,
    icon: 'Password'
  }
  return (
    <div className="flex flex-col items-center justify-start gap-8 w-full">
      <RequiredInput {...userNameInput}/>
      <RequiredInput {...passwordInput}/>
    </div>
  );
}

export default LoginForm;
