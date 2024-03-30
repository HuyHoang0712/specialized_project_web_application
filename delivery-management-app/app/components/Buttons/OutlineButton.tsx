"use client";
import React from "react";
import clsx from "clsx";

interface Props {
  label: string;
  onClick: any;
  Icon: any;
  type: string;
}

const OutlineButton = (props: Props) => {
  const { label, onClick, Icon, type } = props;
  return (
    <button
      type="button"
      className={clsx(
        "flex flex-row h-fit items-center gap-2 px-3 py-2 border-2 border-black-50 text-black-50 font-medium rounded-lg hover:text-primary-100 hover:border-primary-100",
        { "text-base": type === "Normal" },
        { "text-sm": type === "Small" },
        { "text-lg": type === "Large" }
      )}
      onClick={() => onClick()}
    >
      <Icon
        className={clsx(
          "icon-sw-2",
          { "w-5": type === "Normal" },
          { "w-5": type === "Small" },
          { "w-6": type === "Large" }
        )}
      />
      {label}
    </button>
  );
};

export default OutlineButton;
