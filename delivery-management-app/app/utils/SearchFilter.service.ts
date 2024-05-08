import dayjs from "dayjs";
const searchByKey = (key: string, searchKey: string, data: any[]) => {
  if (searchKey === "") {
    return data;
  }
  if (key === "date") {
    return data.filter((item) => {
      const date = dayjs(item.date);
      return (
        date.format("DD MMM YYYY").toLowerCase() === searchKey.toLowerCase()
      );
    });
  }
  return data.filter((item) =>
    item[key].toLowerCase().includes(searchKey.toLowerCase())
  );
};

const filterByDate = (filterKey: any, data: any[]) => {
  if (filterKey.type === "all") {
    return data;
  }
  return data.filter((item) => {
    const date = dayjs(item.date);
    console.log(date);

    return (
      date.isAfter(filterKey.value[0]) && date.isBefore(filterKey.value[1])
    );
  });
};

const getDistinctValues = (returnKey: string, key: string, data: any[]) => {
  const values = new Set(data.map((item) => item[key]));
  return Array.from(values, (value) => ({ [returnKey]: value }));
};

const applyFilter = (
  data: any[],
  filterKey: { [key: string]: any },
  statusList?: { [key: string]: any }[]
) => {
  return Object.keys(filterKey).reduce((curData, key) => {
    if (filterKey[key] === "All") {
      return curData;
    }
    if (key === "status" && statusList) {
      const statusIdx = statusList.findIndex(
        (item) => item.label === filterKey.status
      );
      return curData.filter(
        (item) => item.status === statusList[statusIdx].value
      );
    }
    return curData.filter((item) => item[key] === filterKey[key]);
  }, data);
};

const SearchFilterService = {
  searchByKey,
  filterByDate,
  getDistinctValues,
  applyFilter,
};
export default SearchFilterService;
