import React from "react";
import { useForm, SubmitHandler, set } from "react-hook-form";
import SolidButton from "../Buttons/SolidButton";
import { UserIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import SearchIuput from "../Search/SearchIuput";
import {
  useGetProvicesQuery,
  useLazyGetDistrictsInProvinceQuery,
  useLazyGetWardInDistrictQuery,
} from "@/app/redux/features/address/addressApiSlice";
import { useCreateCustomerMutation } from "@/app/redux/features/customer/customerApiSlice";

type Inputs = {
  name: string;
  email: string;
  phone_number: string;
  address: {
    number: string;
    street: string;
    ward: string;
    district: string;
    city: string;
  };
};

const CreateCustomerForm = () => {
  const { data: provices } = useGetProvicesQuery("");
  const [getDistricts, resultDistrict] = useLazyGetDistrictsInProvinceQuery();
  const [getWard, resultWard] = useLazyGetWardInDistrictQuery();
  const [createCustomer, { data: newCus, isSuccess, isLoading }] =
    useCreateCustomerMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    const combinedAddress =
      data.address.number +
      " " +
      data.address.street +
      "," +
      data.address.ward +
      "," +
      data.address.district +
      "," +
      data.address.city;
    console.log({ ...data, address: combinedAddress });

    createCustomer({ ...data, address: combinedAddress });
  };

  const onChooseProvince = (province: any) => {
    console.log("province", province);

    setValue("address.city", province.province_name);
    getDistricts(province.province_id);
  };

  const onChooseDistrict = (district: any) => {
    setValue("address.district", district.district_name);
    getWard(district.district_id);
  };

  const onChooseWard = (ward: any) => {
    setValue("address.ward", ward.ward_name);
  };

  const btn_props = {
    label: "Add Customer",
    type: "Normal",
    styles: "mt-4 justify-center",
    btn_type: "submit" as "submit" | "button" | "reset",
  };

  const province_search_props = {
    label: "City / Province",
    register: register("address.city", { required: true }),
    data: provices ? provices.results : [],
    name_key: "province_name",
    onClick: onChooseProvince,
  };
  const district_search_props = {
    label: "District",
    register: register("address.district", { required: true }),
    data: resultDistrict.data ? resultDistrict.data.results : [],
    name_key: "district_name",
    onClick: onChooseDistrict,
  };

  const ward_search_props = {
    label: "Ward",
    register: register("address.ward", { required: true }),
    data: resultWard.data ? resultWard.data.results : [],
    name_key: "ward_name",
    onClick: onChooseWard,
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col lg:w-[30vw] sm:w-[35vw] gap-4"
    >
      <h1 className="text-lg font-medium text-black-100">
        Contact Information
      </h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center gap-4">
          <div className="flex flex-col flex-0 gap-2 flex-1">
            <h3 className="text-black-100">Customer Name*</h3>
            <div className="flex items-center">
              <UserIcon className="w-5 h-5 text-primary-100 absolute ml-2" />
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full border-none rounded-md bg-input-defaut-color shadow-sm py-2 pl-10"
                placeholder="Customer Name"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="text-black-100">Contact Number*</h3>
            <div className="flex items-center">
              <PhoneIcon className="w-5 h-5 text-primary-100 absolute ml-2" />
              <input
                type="text"
                pattern="(84|0)[235789](([0-9]{8})|([0-9]{10}))"
                {...register("phone_number", { required: true })}
                className="w-full border-none rounded-md bg-input-defaut-color shadow-sm py-2 pl-10"
                placeholder="Contact Number"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-black-100">Email*</h3>
          <div className="flex items-center">
            <EnvelopeIcon className="w-5 h-5 text-primary-100 absolute ml-2" />
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full border-none rounded-md bg-input-defaut-color shadow-sm py-2 pl-10"
              placeholder="Email"
              required
            />
          </div>
        </div>
      </div>
      <h1 className="text-lg font-medium text-black-100">Customer Address</h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center gap-4">
          <div className="flex flex-col flex-0 gap-2 flex-1">
            <h3 className="text-black-100">Address Number*</h3>
            <div className="flex items-center">
              <input
                type="text"
                {...register("address.number", { required: true })}
                className="w-full border-none rounded-md bg-input-defaut-color shadow-sm py-2 "
                placeholder="Number"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="text-black-100">Street*</h3>
            <div className="flex items-center">
              <input
                type="text"
                {...register("address.street", { required: true })}
                className="w-full border-none rounded-md bg-input-defaut-color shadow-sm py-2 "
                placeholder="Street"
                required
              />
            </div>
          </div>
        </div>
        <SearchIuput {...province_search_props} />
        <div className="flex items-center gap-4">
          <SearchIuput {...district_search_props} />
          <SearchIuput {...ward_search_props} />
        </div>
      </div>
      <SolidButton {...btn_props} />
    </form>
  );
};

export default CreateCustomerForm;
