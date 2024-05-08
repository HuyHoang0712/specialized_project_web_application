import dayjs, { Dayjs } from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import isoWeek from "dayjs/plugin/isoWeek";

dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);

const transformDate = (date: string): string => {
  return dayjs(date).format("DD MMM YYYY");
};

const getDateRange = (type: string) => {
  switch (type) {
    case "this-week":
      return [dayjs().startOf("isoWeek"), dayjs().endOf("isoWeek")];
    case "last-week":
      return [
        dayjs().subtract(1, "week").startOf("isoWeek"),
        dayjs().subtract(1, "week").endOf("isoWeek"),
      ];
    case "this-month":
      return [dayjs().startOf("month"), dayjs().endOf("month")];
    case "last-month":
      return [
        dayjs().subtract(1, "month").startOf("month"),
        dayjs().subtract(1, "month").endOf("month"),
      ];
    default:
      return [];
  }
};

const DateTimeService = { transformDate, getDateRange };

export default DateTimeService;
