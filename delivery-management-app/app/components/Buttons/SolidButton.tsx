"use client";
import React from "react";
import clsx from "clsx";

interface Props {
  label: string;
  onClick: any;
  Icon?: any;
  type: string;
  styles?: string;
}

const SolidButton = (props: Props) => {
  const { label, onClick, Icon, type, styles } = props;
  return (
    <button
      type="button"
      className={clsx(
        `flex flex-row items-center gap-2 px-3 py-2 text-white font-normal rounded-lg hover:scale-105 ${styles}`,
        {
          "text-base": type === "Normal",
          "text-sm": type === "Small",
          "text-lg": type === "Large",
        },
        {
          "bg-primary-100": !styles,
        }
      )}
      onClick={() => onClick()}
    >
      {Icon && (
        <Icon
          className={clsx(
            "icon-sw-3",
            { "w-5": type === "Normal" },
            { "w-5": type === "Small" },
            { "w-6": type === "Large" }
          )}
        />
      )}
      {label}
    </button>
  );
};

export default SolidButton;
