import React from "react";

interface InputItemProps {
  Icon?: any;
  label: string;
  register: any;
  type: string;
  placeholder: string;
  error?: string;
  disabled?: boolean;
}

const FormInput = (props: InputItemProps) => {
  const { Icon, label, register, type, placeholder, error, disabled } = props;

  return (
    <div className="flex flex-col gap-2 flex-1 relative">
      <h3 className="text-black-100 text-sm">{label}</h3>
      <div className="flex items-center">
        {Icon && <Icon className="w-4 h-4 text-primary-100 absolute ml-2" />}
        <input
          type={type}
          {...register}
          autoComplete="off"
          placeholder={placeholder}
          className={`w-full border border-primary-30 rounded-md shadow-sm  py-2 ${
            Icon ? "pl-8" : ""
          }`}
          disabled={disabled}
        />
        {error && (
          <span className="absolute font-medium bottom-[-1.25rem] text-xs text-red">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default FormInput;
