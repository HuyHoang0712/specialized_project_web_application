"use client";
import React, { useState } from "react";
import Image from "next/image";
import Icons from "@/app/constances/icons";
function RequiredInput(props: any) {
  const { placeholder, type, required, icon } = props;
  const [showInput, setShowInput] = useState(type == "password" ? false : true);
  return (
    <label
      htmlFor={placeholder}
      className="flex flex-row px-4 gap-2.5 relative rounded-[0.5rem] border-none bg-input-defaut-color shadow-sm w-full h-[3.35rem]"
    >
      <Image
        src={Icons[`${icon}` as keyof typeof Icons]}
        width={24}
        height={24}
        alt={""}
      />
      <input
        type={type=="password"? (showInput? 'text':'password'):type}
        id={placeholder}
        className="peer flex-1 h-[3.35rem] border-none placeholder-black-20 bg-transparent focus:border-transparent focus:outline-none focus:ring-0"
        placeholder={placeholder}
        hidden={false}
      />
      <Image
        src={showInput? Icons.Eye:Icons.HideEye}
        width={16}
        height={16}
        alt={""}
        hidden={type=="password"? false:true}
        onClick={() => setShowInput(!showInput)}
        className="hover:scale-105"
      />
    </label>
  );
}

export default RequiredInput;
