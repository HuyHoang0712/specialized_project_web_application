import dayjs from 'dayjs'

const transformDate = (date: string): string => {
  
  return dayjs(date).format("DD MMM YYYY");
};

const DateTimeService = { transformDate };

export default DateTimeService;
