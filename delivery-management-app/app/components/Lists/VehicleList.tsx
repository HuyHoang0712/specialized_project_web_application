"use client";
import React, { useState } from "react";
import Search from "../Search/Search";
import FilterModal from "../Modals/FilterModal";
import FilterVehicle from "../Filter/FilterVehicle";
import List, { ListSkeleton } from "./List";
import { useGetVehiclesQuery } from "@/app/redux/features/vehicle/vehicleApiSlice";
import { EMPLOYEE_STATUS } from "@/app/lib/constances";
function filterDataByLicense(data: any[], searchKey: string) {
  return data.filter((item) =>
    item.license_plate.toLowerCase().includes(searchKey.toLowerCase())
  );
}

const applyFilterAndSearch = (
  data: any[],
  filterKey: any,
  searchKey: string
) => {
  if (searchKey != "") {
    data = filterDataByLicense(data, searchKey);
  }
  if (filterKey.brand != "All") {
    data = data.filter((item) => item.brand === filterKey.brand);
  }
  if (filterKey.capacity != "All") {
    switch (filterKey.capacity) {
      case "< 7000kg":
        data = data.filter((item) => item.capacity < 7000);
        break;
      case "7000 - 9000kg":
        data = data.filter(
          (item) => item.capacity >= 7000 && item.capacity <= 9000
        );
        break;
      case "> 9000kg":
        data = data.filter((item) => item.capacity > 9000);
        break;
    }
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

const VehicleList = () => {
  const {
    data: vehicles,
    error,
    isLoading,
  } = useGetVehiclesQuery("", {
    pollingInterval: 10000,
    skipPollingIfUnfocused: true,
  });
  const [searchKey, setSearchKey] = useState("");
  const [filterKey, setFilterKey] = useState({
    brand: "All",
    capacity: "All",
    status: "All",
  });
  const LIST_PROPS = {
    headers: [
      { title: "License Plate", key: "license_plate" },
      { title: "Brand", key: "brand" },
      { title: "Capacity(kg)", key: "capacity" },
      { title: "Assigned Driver", key: "driver" },
      { title: "Status", key: "status" },
    ],
    data: vehicles && applyFilterAndSearch(vehicles, filterKey, searchKey),
    type: "vehicle",
  };

  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex flex-row w-full justify-between items-center">
        <span className="text-lg text-black-60 font-medium">Vehicles</span>
        <div className="flex flex-row gap-3">
          <Search setSearchKey={setSearchKey} />
          <FilterModal
            filterForm={FilterVehicle}
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

export default VehicleList;
