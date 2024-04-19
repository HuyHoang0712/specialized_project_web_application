import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";
import FormInput from "../../Input/FormInput";
import SearchIuput from "../../Input/SearchIuput";
import SolidButton from "../../Buttons/SolidButton";
import {
  useCreateEmployeeMutation,
  useGetGroupsQuery,
} from "@/app/redux/features/employee/employeeApiSlice";
type Inputs = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  dob: string;
  username: string;
  password: string;
  group: string;
};

interface Props {
  setActive: any;
}

function generateCredentials(first_name: string, last_name: string) {
  const username = `${first_name}.${last_name}`.toLowerCase();
  const password = Math.random().toString(36).slice(-8);
  return { username, password };
}

const CreateEmployeeForm = (props: Props) => {
  const { setActive } = props;
  const { data: groups } = useGetGroupsQuery("");
  const [createEmployee, { data: newEmp, isSuccess, isLoading }] =
    useCreateEmployeeMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>({ mode: "all" });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const { username, password } = generateCredentials(
      data.first_name,
      data.last_name
    );
    const res = await createEmployee({
      ...data,
      username: username,
      password: password,
    });
  };

  if (isSuccess) {
    toast.success("Employee added successfully!", { toastId: 1 });
    setActive(false);
  }

  const onChooseRole = (role: any) => {
    setValue("group", role.name);
  };

  const role_input_props = {
    label: "Role*:",
    register: register("group", { required: true }),
    data: groups ?? [],
    name_key: "name",
    onClick: onChooseRole,
  };

  const btn_props = {
    label: "Add Employee",
    type: "Normal",
    styles: "mt-4 justify-center",
    btn_type: "submit" as "submit" | "button" | "reset",
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col lg:w-[30vw] sm:w-[35vw] gap-4"
    >
      <h1 className="text-lg font-medium text-black-100">
        Employee Information
      </h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center gap-4">
          <FormInput
            Icon={UserIcon}
            label="First Name*:"
            register={register("first_name", { required: true })}
            type="text"
            placeholder="First Name"
            error={errors.first_name?.message}
          />
          <FormInput
            Icon={UserIcon}
            label="Last Name*:"
            register={register("last_name", { required: true })}
            type="text"
            placeholder="Last Name"
            error={errors.last_name?.message}
          />
        </div>
        <div className="flex items-center gap-4">
          <FormInput
            label="Date of Birth*:"
            register={register("dob", { required: true })}
            type="date"
            placeholder="Date of Birth"
            error={errors.dob?.message}
          />
          <FormInput
            Icon={PhoneIcon}
            label="Contact Number*:"
            register={register("phone", {
              required: true,
              pattern: /(84|0)([235789])([0-9]{10}|[0-9]{8})/g,
            })}
            type="tel"
            placeholder="Customer Name"
            error={errors.phone ? "Invalid phone number!" : undefined}
          />
        </div>
        <FormInput
          Icon={EnvelopeIcon}
          label="Email*:"
          register={register("email", {
            required: true,
          })}
          type="email"
          placeholder="Email"
          error={errors.email?.message}
        />
        <div className="flex items-center gap-4">
          <FormInput
            Icon={IdentificationIcon}
            label="Username*:"
            register={register("username", { required: true })}
            type="text"
            placeholder="Username"
            error={errors.username?.message}
          />
          <SearchIuput {...role_input_props} />
        </div>
      </div>
      <SolidButton {...btn_props} />
    </form>
  );
};

export default CreateEmployeeForm;
