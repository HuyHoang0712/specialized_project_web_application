"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import FormInput from "../../Input/FormInput";
import SearchIuput from "../../Input/SearchIuput";
import SolidButton from "../../Buttons/SolidButton";



type Inputs = {
  email: string;
  phone: string;
  group: string;
};

interface Props {
  formProps: any;
  setActive: any;
}

const UpdateVehicleForm = () => {
  return <div>UpdateVehicleForm</div>;
};

export default UpdateVehicleForm;
