"use client";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  title: string;
  FormContent: any;
  setActive: any;
}

const Modal = (props: Props) => {
  const { title, FormContent, setActive } = props;

  return (
    <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-blur-color">
      <div className="bg-white px-5 py-8 space-y-3 rounded-lg">
        <div className="flex flex-row justify-between items-center gap-5">
          <span className="text-lg font-medium text-black-100">{title}</span>
          <XMarkIcon
            className="w-8 icon-sw-2 p-1 bg-secondary-30 rounded-lg hover:scale-105 hover:bg-secondary-90"
            onClick={() => setActive(false)}
          />
        </div>
        <FormContent />
      </div>
    </div>
  );
};

export default Modal;
