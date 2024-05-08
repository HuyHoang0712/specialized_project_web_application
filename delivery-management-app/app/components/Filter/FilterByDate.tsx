"use client";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import isoWeek from "dayjs/plugin/isoWeek";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { DateRange } from "@mui/x-date-pickers-pro/models";
import SolidButton from "../Buttons/SolidButton";

dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);


const currentWeekRange = [dayjs().startOf("isoWeek"), dayjs().endOf("isoWeek")];
const lastWeekRange = [dayjs().subtract(1, 'week').startOf('isoWeek'), dayjs().subtract(1, 'week').endOf('isoWeek')];
const thisMonthRange = [dayjs().startOf('month'), dayjs().endOf('month')];
const lastMonthRange = [dayjs().subtract(1, 'month').startOf('month'), dayjs().subtract(1, 'month').endOf('month')];
interface Props {
  setActive: any;
  formProps: any;
}

const FilterByDate = ({
  formProps: { filterKey, setFilterKey },
  setActive,
}: Props) => {
  const [value, setValue] = useState<DateRange<Dayjs>>(filterKey);
  const options = [
    {
      label: "This Week",
      id: "this-week",
      value: currentWeekRange,
    },
    {
      label: "Last Week",
      id: "last-week",
      value: lastWeekRange,
    },
    {
      label: "This Month",
      id: "this-month",
      value: thisMonthRange,
    },
    {
      label: "Last Month",
      id: "last-month",
      value: lastMonthRange,
    },
  ];

  const btn_props = {
    label: "Filter",
    type: "Normal",
    styles: "mt-4 justify-center",
    btn_type: "submit" as "submit" | "button" | "reset",
  };

  return (
    <div className="grid grid-cols-2 w-fit gap-y-4">
      {options.map((option, idx) => (
        <div key={idx} className="flex gap-2 items-center">
          <input id={option.id} type="checkbox" value={option.value}></input>
          <label htmlFor={option.id} className="">
            {option.label}
          </label>
        </div>
      ))}
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
      <div className="col-span-2">
        <SolidButton {...btn_props} />
      </div>
    </div>
  );
};

export default FilterByDate;
