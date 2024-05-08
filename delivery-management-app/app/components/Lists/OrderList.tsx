"use client";
import React, { useState } from "react";
import Search from "../Search/Search";
import FilterModal from "../Modals/FilterModal";
import FilterOrder from "../Filter/FilterOrder";
import List, { ListSkeleton } from "./List";
import dayjs from "dayjs";
import { useGetOrdersinPlanQuery } from "@/app/redux/features/order/orderApiSlice";
import SearchFilterService from "@/app/utils/SearchFilter.service";
import { ORDER_STATUS } from "@/app/lib/constances";

interface Props {
  id: string;
}

const OrderList = (props: Props) => {
  const { id } = props;
  const { data, isLoading, isError } = useGetOrdersinPlanQuery(id);
  const [searchKey, setSearchKey] = useState("");
  const [filterKey, setFilterKey] = useState({
    ship_code: "All",
    vehicle: "All",
    payload: "All",
    status: "All",
    pick_up_time: "All",
  });
  const LIST_PROPS = {
    headers: [
      { title: "#ID", key: "id" },
      { title: "Delivery Point", key: "delivery_point" },
      { title: "Ship Code", key: "ship_code" },
      { title: "Pick-Up Time", key: "time_in" },
      { title: "Total Payload (kg)", key: "payload" },
      { title: "Assigned", key: "vehicle" },
      { title: "Status", key: "status" },
    ],
    data:
      data &&
      SearchFilterService.applyFilter(
        SearchFilterService.searchByKey("delivery_point", searchKey, data),
        filterKey,
        ORDER_STATUS
      ),
    type: "order",
  };
  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex flex-row w-full justify-between items-center">
        <span className="text-lg text-black-60 font-medium">
          Transportation Plan:{" "}
          {!isLoading && dayjs(data[0].date).format("DD MMM YYYY")}
        </span>
        <div className="flex flex-row gap-3">
          <Search
            setSearchKey={setSearchKey}
            placeholder="Search by delivery point"
          />
          <FilterModal
            filterForm={FilterOrder}
            formProps={{
              filterKey: filterKey,
              setFilterKey: setFilterKey,
              orders: data,
            }}
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

export default OrderList;
