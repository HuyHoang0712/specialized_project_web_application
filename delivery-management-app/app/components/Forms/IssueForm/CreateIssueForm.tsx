import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SolidButton from "../../Buttons/SolidButton";
import { UserIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import FormInput from "../../Input/FormInput";
import { toast } from "react-toastify";
import { useCreateIssueMutation } from "@/app/redux/features/issues/issueApiSlice";

type Inputs = {
  title: string;
  label: string;
  description: string;
};

interface Props {
  setActive: any;
}

const CreateIssueForm = (props: Props) => {
  const { setActive } = props;
  const [createIssue, { data: newCus, isSuccess, isLoading }] = useCreateIssueMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>({ mode: "all" });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      const res = await createIssue({ ...data });
      toast.success("Request created successfully!", { toastId: 1 });
      setActive(false);
    } catch (error: any) {
      throw error;
    }
  };

  const btn_props = {
    label: "Create Request",
    type: "Normal",
    styles: "mt-4 justify-center",
    btn_type: "submit" as "submit" | "button" | "reset",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:w-[30vw] sm:w-[35vw] gap-4">
      <h1 className="text-lg font-medium text-black-100">Request Information</h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center gap-4">
          <FormInput label="Title*:" register={register("title", { required: true })} type="text" placeholder="Request Title" error={errors.title?.message} />
          <FormInput label="Label*:" register={register("label", { required: true })} type="text" placeholder="Request Label" error={errors.label?.message} />
        </div>
        <FormInput label="Description*:" register={register("description", { required: true })} type="text" placeholder="Detail about your request" error={errors.description?.message} />
      </div>
      <SolidButton {...btn_props} />
    </form>
  );
};

export default CreateIssueForm;
