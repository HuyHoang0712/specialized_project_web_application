"use client";
import React, { useState } from "react";
import { Icons } from "@/app/lib/assets";
import Image from "next/image";
import dynamic from "next/dynamic";
const CreateModal = ({ title, type }: any) => {
  const [active, setActive] = useState(false);
  let FormContent: any;

  if (type === "Plan") {
    FormContent = dynamic(
      () => import("@/app/components/Forms/CreateTransportationPlan"),
      { ssr: true, loading: () => <>Loading...</> }
    );
  } else if (type === "Order") {
    FormContent = dynamic(
      () => import("@/app/components/Forms/CreateOrderForm"),
      { ssr: true, loading: () => <>Loading...</> }
    );
  }

  return (
    <div>
      <button
        type="button"
        className="flex flex-row items-center gap-2 px-3 py-2 bg-primary-100 text-white text-base font-normal rounded-lg hover:scale-105"
        onClick={() => setActive(true)}
      >
        <Image src={Icons.Add} alt="" width={20} />
        {title}
      </button>
      {active && (
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-blur-color">
          <div className="bg-white p-5">
            <div className="flex flex-row justify-between items-center">
              <span>{title}</span>
              <span onClick={() => setActive(false)}>x</span>
            </div>
            <FormContent />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateModal;
