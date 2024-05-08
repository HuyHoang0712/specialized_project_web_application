
const searchByKey = (key: string, searchKey: string, data: any[]) => {
  return data.filter((item) =>
    item[key].toLowerCase().includes(searchKey.toLowerCase())
  );
};

const SearchFilterService = {
  searchByKey,
};

export default SearchFilterService;
