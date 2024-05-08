"use client";
import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import DateTimeService from "@/app/utils/DateTime.service";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { DateRange } from "@mui/x-date-pickers-pro/models";
import SolidButton from "../Buttons/SolidButton";

interface Props {
  setActive: any;
  formProps: any;
}

const FilterByDate = ({
  formProps: { filterKey, setFilterKey },
  setActive,
}: Props) => {
  const [value, setValue] = useState<DateRange<Dayjs>>(filterKey.value);
  const [choosenType, setChoosenType] = useState(filterKey.type);
  const options = [
    {
      label: "This Week",
      id: "this-week",
    },
    {
      label: "Last Week",
      id: "last-week",
    },
    {
      label: "This Month",
      id: "this-month",
    },
    {
      label: "Last Month",
      id: "last-month",
    },
    {
      label: "Date Range",
      id: "date-range",
    },
    {
      label: "All Time",
      id: "all",
    },
  ];

  const onSubmit = () => {
    switch (choosenType) {
      case "this-week":
        setFilterKey({
          type: "this-week",
          value: DateTimeService.getDateRange("this-week"),
        });
        setActive(false);
        return;
      case "last-week":
        setFilterKey({
          type: "last-week",
          value: DateTimeService.getDateRange("last-week"),
        });
        setActive(false);
        return;
      case "this-month":
        setFilterKey({
          type: "this-month",
          value: DateTimeService.getDateRange("this-month"),
        });
        setActive(false);
        return;
      case "last-month":
        setFilterKey({
          type: "last-month",
          value: DateTimeService.getDateRange("last-month"),
        });
        setActive(false);
        return;
      case "date-range":
        setFilterKey({
          type: "date-range",
          value: value,
        });
        setActive(false);
        return;
      default:
        setFilterKey({
          type: "all",
          value: [],
        });
        setActive(false);
        return;
    }
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChoosenType((prevOption: string) =>
      prevOption === event.target.value ? "" : event.target.value
    );
  };

  const btn_props = {
    label: "Filter",
    type: "Normal",
    styles: "justify-center",
    btn_type: "submit" as "submit" | "button" | "reset",
    onClick: onSubmit,
  };

  return (
    <div className="grid grid-cols-2 gap-y-4 w-80">
      {options.map((option, idx) => (
        <div key={idx} className="flex gap-2 items-center text-black-60">
          <input
            id={option.id}
            type="radio"
            name="filterOption"
            value={option.id}
            onChange={handleOptionChange}
            checked={choosenType === option.id}
          ></input>
          <label htmlFor={option.id} className="">
            {option.label}
          </label>
        </div>
      ))}
      {choosenType === "date-range" && (
        <div className="col-span-2">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["DateRangeCalendar", "DateRangeCalendar"]}
            >
              <DemoItem>
                <DateRangeCalendar
                  value={value}
                  calendars={1}
                  onChange={(newValue) => setValue(newValue)}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
      )}
      <div className="flex flex-col col-span-2">
        <SolidButton {...btn_props} />
      </div>
    </div>
  );
};

export default FilterByDate;
