import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SolidButton from "../../Buttons/SolidButton";
import FormInput from "../../Input/FormInput";
import SearchIuput from "../../Input/SearchIuput";
import { toast } from "react-toastify";
import { useCreateIssueMutation } from "@/app/redux/features/issues/issueApiSlice";
import TokenService from "@/app/utils/Token.service";
import { REQUEST_LABELS } from "@/app/lib/constances";
type Inputs = {
  title: string;
  label: string;
  description: string;
  cost?: number;
};

interface Props {
  formProps?: any;
  setActive: any;
}

const CreateIssueForm = ({ formProps, setActive }: Props) => {
  const { id, type } = formProps ?? {};
  const [createIssue, { data: newCus, isSuccess, isLoading }] =
    useCreateIssueMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>({ mode: "all" });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const user_id = TokenService.getUserId();
    let rq_data: { [key: string]: any } = { ...data, creator: user_id };
    if (formProps) rq_data = { ...rq_data, vehicle_id: id };
    console.log(rq_data);

    try {
      const res = await createIssue({
        data: rq_data,
        type: type ?? "employee",
      });
      toast.success("Request created successfully!", { toastId: 1 });
      setActive(false);
    } catch (error: any) {
      throw error;
    }
  };

  const label_input_props = {
    label: "Choose Label:",
    register: register("label", { required: "Label is required!" }),
    data: formProps
      ? REQUEST_LABELS.VEHICLE_REQUEST_LABELS
      : REQUEST_LABELS.EMPLOYEE_REQUEST_LABELS,
    name_key: "label",
    onClick: (label: any) => setValue("label", label.label),
  };

  const btn_props = {
    label: "Create Request",
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
        Request Information
      </h1>
      <div className="flex flex-col gap-5 w-full">
        <FormInput
          label="Title*:"
          register={register("title", { required: "Title is required!" })}
          type="text"
          placeholder="Request Title"
          error={errors.title?.message}
        />
        <SearchIuput {...label_input_props} />
        {formProps && (
          <FormInput
            label="Cost*:"
            register={register("cost", {
              required: "Cost is required!",
              maxLength: 8,
            })}
            type="number"
            placeholder="Request Cost"
            error={errors.cost?.message}
          />
        )}
        <div className="flex flex-col gap-2">
          <label className="text-black-100 text-sm">Description*:</label>
          <textarea
            {...register("description", {
              required: "Please add description!",
            })}
            className="rounded-lg border-primary-30"
          />
        </div>
      </div>
      <SolidButton {...btn_props} />
    </form>
  );
};

export default CreateIssueForm;
