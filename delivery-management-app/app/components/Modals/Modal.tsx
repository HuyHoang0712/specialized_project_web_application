"use client";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  title: string;
  FormContent: any;
  setActive: any;
  formProps?: any;
}

const Modal = (props: Props) => {
  const { title, FormContent, setActive, formProps } = props;
  return (
    <div className="z-10 absolute w-full h-full top-0 left-0 flex justify-center items-center bg-blur-color">
      <div className="bg-white p-4 space-y-4 rounded-lg">
        <div className="flex flex-row justify-between items-center gap-5">
          <span className="text-xl font-medium text-primary-100">{title}</span>
          <XMarkIcon
            className="w-7 icon-sw-2 p-1 bg-secondary-30 rounded-lg hover:scale-105 hover:bg-secondary-90"
            onClick={() => setActive(false)}
          />
        </div>
        <FormContent formProps={formProps} setActive={setActive} />
      </div>
    </div>
  );
};

export default Modal;
