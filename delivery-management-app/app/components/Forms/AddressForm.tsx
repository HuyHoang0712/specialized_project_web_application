import React from "react";
import FormInput from "../Input/FormInput";
import SearchIuput from "../Input/SearchIuput";
import {
  useGetProvicesQuery,
  useLazyGetDistrictsInProvinceQuery,
  useLazyGetWardInDistrictQuery,
} from "@/app/redux/features/address/addressApiSlice";
interface AddressFormProps {
  register: any;
  setValue: any;
  getValues: any;
  errors: any;
  required?: boolean;
}

const AddressForm = ({
  register,
  setValue,
  getValues,
  errors,
  required = true,
}: AddressFormProps) => {
  const { data: provices } = useGetProvicesQuery("");
  const [getDistricts, resultDistrict] = useLazyGetDistrictsInProvinceQuery();
  const [getWard, resultWard] = useLazyGetWardInDistrictQuery();
  const onChooseProvince = (province: any) => {
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
  const province_search_props = {
    label: "City / Province:",
    register: register("address.city", { required: required }),
    data: provices ? provices.results : [],
    name_key: "province_name",
    onClick: onChooseProvince,
  };
  const district_search_props = {
    label: "District:",
    register: register("address.district", { required: required }),
    data: resultDistrict.data ? resultDistrict.data.results : [],
    name_key: "district_name",
    onClick: onChooseDistrict,
  };
  const ward_search_props = {
    label: "Ward:",
    register: register("address.ward", { required: required }),
    data: resultWard.data ? resultWard.data.results : [],
    name_key: "ward_name",
    onClick: onChooseWard,
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-4">
        <FormInput
          label="Address Number*:"
          register={register("address.number", {
            required: required,
          })}
          type="text"
          placeholder="Number"
          error={errors.address?.number?.message}
        />
        <FormInput
          label="Street*:"
          register={register("address.street", {
            required: required,
          })}
          type="text"
          placeholder="Street"
          error={errors.address?.street?.message}
        />
      </div>
      <SearchIuput {...province_search_props} />
      <div className="flex items-center gap-4">
        <SearchIuput {...district_search_props} />
        <SearchIuput {...ward_search_props} />
      </div>
    </div>
  );
};

export default AddressForm;
