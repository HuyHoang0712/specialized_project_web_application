"use client";
import React from "react";
import dynamic from "next/dynamic";
interface Prosp {
  type: string;
  title: string;
  titleContent: {};
  content: {};
}

const OrderInforCard = (props: Prosp) => {
  const { type, title, titleContent, content } = props;
  let Icon: any;
  switch (type) {
    case "driver":
      Icon = dynamic(
        () => import("@heroicons/react/24/solid").then((res) => res.UserIcon),
        {
          ssr: false,
          loading: () => <>Loading...</>,
        }
      );
      break;
    case "vehicle":
      Icon = dynamic(
        () => import("@heroicons/react/24/solid").then((res) => res.TruckIcon),
        {
          ssr: false,
          loading: () => <>Loading...</>,
        }
      );
      break;

    default:
      Icon = dynamic(
        () =>
          import("@heroicons/react/24/solid").then(
            (res) => res.QuestionMarkCircleIcon
          ),
        {
          ssr: false,
          loading: () => <>Loading...</>,
        }
      );
      break;
  }

  const ContentIcon = Object.keys(content).map((key) => {
    switch (key) {
      case "Phone":
        return dynamic(
          () =>
            import("@heroicons/react/24/solid").then((res) => res.PhoneIcon),
          {
            ssr: false,
            loading: () => <>Loading...</>,
          }
        );
      case "Email":
        return dynamic(
          () =>
            import("@heroicons/react/24/solid").then((res) => res.EnvelopeIcon),
          {
            ssr: false,
            loading: () => <>Loading...</>,
          }
        );

      default:
        return dynamic(
          () =>
            import("@heroicons/react/24/solid").then(
              (res) => res.QuestionMarkCircleIcon
            ),
          {
            ssr: false,
            loading: () => <>Loading...</>,
          }
        );
    }
  });

  const getIcon = (idx: number) => {
    let CurIcon = ContentIcon[idx];
    return <CurIcon className="w-[0.875rem]" />;
  };

  return (
    <div className="flex flex-1 flex-col w-[25rem] bg-white rounded-lg p-3 gap-6">
      <div className="flex items-start gap-6">
        <Icon className="w-10 p-2 bg-secondary-20 rounded-lg" />
        <div className="flex flex-col">
          <span className="text-base font-bold text-black-90">{title}</span>
          {Object.entries(titleContent).map(
            ([key, value]: [string, any], idx) => (
              <span className="text-sm font-medium text-black-60" key={idx}>
                <span className="text-black-30">{key}:</span> {value}
              </span>
            )
          )}
        </div>
      </div>
      <div className="flex items-center justify-between">
        {Object.entries(content).map(([key, value]: [string, any], idx) => (
          <div
            className="flex flex-col text-sm font-medium text-black-60"
            key={idx}
          >
            <span className="flex gap-1 text-black-30">
              {getIcon(idx)}
              {key}
            </span>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderInforCard;
