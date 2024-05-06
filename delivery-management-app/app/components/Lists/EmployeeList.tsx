"use client";
import React, { useState } from "react";
import Search from "../Search/Search";
import FilterModal from "../Modals/FilterModal";
import FilterEmployee from "../Filter/FilterEmployee";
import List, { ListSkeleton } from "./List";
import { useGetAllEmployeesQuery } from "@/app/redux/features/employee/employeeApiSlice";
import { EMPLOYEE_STATUS } from "@/app/lib/constances";
function filterDataByName(data: any[], searchKey: string) {
  return data.filter((item) =>
    item.name.toLowerCase().includes(searchKey.toLowerCase())
  );
}

const applyFilterAndSearch = (
  data: any[],
  filterKey: any,
  searchKey: string
) => {
  if (searchKey != "") {
    data = filterDataByName(data, searchKey);
  }
  if (filterKey.role != "All") {
    data = data.filter((item) => item.role === filterKey.role);
  }
  if (filterKey.status != "All") {
    const statusIdx = EMPLOYEE_STATUS.findIndex(
      (item) => item.label === filterKey.status
    );

    data = data.filter(
      (item) => item.status === EMPLOYEE_STATUS[statusIdx].value
    );
  }

  return data;
};

const EmployeeList = () => {
  const { data, error, isLoading } = useGetAllEmployeesQuery("");
  const [searchKey, setSearchKey] = useState("");
  const [filterKey, setFilterKey] = useState({
    role: "All",
    status: "All",
  });

  const LIST_PROPS = {
    headers: [
      { title: "#ID", key: "id" },
      { title: "Name", key: "name" },
      { title: "Role", key: "role" },
      { title: "Status ", key: "status" },
    ],
    data: data && applyFilterAndSearch(data, filterKey, searchKey),
    type: "employee",
  };

  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex flex-row w-full justify-between items-center">
        <span className="text-lg text-black-60 font-medium">Employees</span>
        <div className="flex flex-row gap-3">
          <Search setSearchKey={setSearchKey} />
          <FilterModal
            filterForm={FilterEmployee}
            formProps={{ filterKey: filterKey, setFilterKey: setFilterKey }}
          />
        </div>
      </div>
      {isLoading ? (
        <ListSkeleton headers={LIST_PROPS.headers} />
      ) : (
        <List {...LIST_PROPS} />
      )}
    </div>
  );
};

export default EmployeeList;
