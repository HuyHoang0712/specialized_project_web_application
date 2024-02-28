"use client";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface Props {
  title: string;
  FormContent: any;
  setActive: any;
}

const Modal = (props: Props) => {
  const { title, FormContent, setActive } = props;

  return (
    <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-blur-color">
      <div className="bg-white p-5">
        <div className="flex flex-row justify-between items-center">
          <span>{title}</span>
          <XMarkIcon className="w-5" onClick={() => setActive(false)} />
        </div>
        <FormContent />
      </div>
    </div>
  );
};

export default Modal;
