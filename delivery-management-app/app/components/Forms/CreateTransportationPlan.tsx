"use client";
import React, { useRef, useState } from "react";
import { DocumentCheckIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import { useCreatePlanMutation } from "@/app/redux/features/plan/planApiSlice";
import SolidButton from "../Buttons/SolidButton";

const ERROR_TOAST = 0;
const SUCCESS_TOAST = 1;
const CreateTransportationPlan = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [createPlan, { isLoading, data, error }] = useCreatePlanMutation();

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (e.dataTransfer.items) {
      for (let i = 0; i < e.dataTransfer.items.length; i++) {
        if (e.dataTransfer.items[i].kind === "file") {
          const file = e.dataTransfer.items[i].getAsFile();
          handleFile(file);
        }
      }
    }
  };

  const handleFile = (file: File | null) => {
    if (file && fileInputRef.current) {
      if (
        file.type !==
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        toast.error("Invalid file type. Please upload an Excel file.");
        return;
      }
      setSelectedFile(file);
      const fileNameElement = document.getElementById("fileName");
      if (fileNameElement) {
        fileNameElement.innerText = file.name;
      }
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitting");

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      createPlan(formData);
    } else {
      toast.error("Please input an excel file!", {
        toastId: ERROR_TOAST,
      });
    }
  };

  const btn_props = {
    label: "Create Plan",
    type: "Normal",
    styles: "self-end",
    btn_type: "submit" as "submit" | "button" | "reset",
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={submitHandler}>
      <div
        className="flex flex-col items-center justify-center w-[30vw] h-72 border-dashed border-2 border-black-30 rounded-lg"
        onDrop={dropHandler}
        onDragOver={(e) => e.preventDefault()}
      >
        <label
          htmlFor="fileInput"
          className="flex flex-col gap-5 items-center justify-center"
        >
          <DocumentCheckIcon className="rounded-full p-6 w-24 text-black-50 bg-primary-100/20" />
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            accept=".xlsx"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={(e) => {
              if (e.target.files) {
                handleFile(e.target.files[0]);
              }
            }}
          ></input>
          <span id="fileName">Choose or Drop an Excel file here!</span>
        </label>
      </div>
      <SolidButton {...btn_props} />
    </form>
  );
};

export default CreateTransportationPlan;
