"use client";
import React, { useState } from "react";
import { Icons } from "@/app/lib/constants";
import Image from "next/image";
const CreateTransportationPlanModal = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="flex flex-row gap-2 p-3 bg-primary-100 text-white p2 font-[Poppins-Regular] rounded-xl hover:scale-105"
        onClick={() => setActive(true)}
      >
        <Image src={Icons.Add} alt="" width={24} />
        Create a Transportation Plan
      </button>
      {active && (
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-blur-color">
          <div className="bg-white w-[50rem] h-[45rem]">
            <div className="flex flex-row justify-between items-center">
              <span>Create Transportation Plan</span>
              <span onClick={() => setActive(false)}>x</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTransportationPlanModal;
