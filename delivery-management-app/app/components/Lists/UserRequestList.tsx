"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import IssueDetailsModalAtProfile from "../Modals/IssueDetailsModalAtProfile";
import StatusCard from "../Cards/StatusCard";
import { Skeleton } from "@mui/material";
import dynamic from "next/dynamic";
import clsx from "clsx";
interface Props {
  headers: any[];
  data: any[];
  type: string;
}

const List = (props: Props) => {
  const { headers, data, type } = props;
  const lenData = data.length;
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPage, setTotalPage] = useState(Math.ceil(lenData / itemsPerPage));
  const [curPage, setCurPage] = useState(1);
  const [curData, setCurData] = useState(data.slice(0, lenData > itemsPerPage ? itemsPerPage : lenData));
  const movePage = (move: number) => {
    if (move > 0 && curPage < totalPage) {
      setCurData(data.slice(itemsPerPage * curPage, curPage === totalPage - 1 ? lenData : itemsPerPage * (curPage + 1)));
      setCurPage(curPage + 1);
    } else if (move < 0 && curPage > 1) {
      setCurData(data.slice(itemsPerPage * (curPage - 2), itemsPerPage * (curPage - 1)));
      setCurPage(curPage - 1);
    }
  };

  const updateItemsPerPage = (items: number) => {
    let newTotalPage = Math.ceil(lenData / items);
    if (curPage >= newTotalPage) {
      setCurData(data.slice(items * (newTotalPage - 1), lenData));
      setCurPage(newTotalPage);
    } else {
      setCurData(data.slice(items * (curPage - 1), items * curPage));
    }

    setTotalPage(newTotalPage);
    setItemsPerPage(items);
  };

  useEffect(() => {
    setCurData(data.slice(0, lenData > itemsPerPage ? itemsPerPage : lenData));
    setItemsPerPage(10);
    setTotalPage(Math.ceil(lenData / itemsPerPage));
    setCurPage(1);
  }, [data]);

  return (
    <div className="flex flex-1 h-[90%] flex-col">
      {/* Tittle */}
      <div className="flex items-center p-3 gap-5 border-y-2 font-medium text-black-90">
        {headers.map((item, idx) => (
          <span
            key={idx}
            className={clsx("flex flex-1", {
              "flex-none w-40": item.key === "status",
              "flex-[2_2_0%]": item.key === "title",
            })}
          >
            {item.title}
          </span>
        ))}
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col p-3 gap-8 text-black-50 overflow-auto no-scrollbar">
        {curData.map((content, idx) => (
          <div key={idx} className="flex items-center gap-5">
            {headers.map((item: any, index) =>
              index === 0 ? (
                <IssueDetailsModalAtProfile key={index} id={content["id"]} type={type} title={content[item.key]} />
              ) : (
                <span
                  key={index}
                  className={clsx("flex flex-1 truncate", {
                    "flex-none w-40": item.key === "status",
                    "flex-[2_2_0%]": item.key === "title",
                  })}
                >
                  {item.key === "status" ? <StatusCard label={content[item.key]} type={type} /> : content[item.key]}
                </span>
              )
            )}
          </div>
        ))}
      </div>
      {/* Bottom */}
      <div className="flex px-3 py-2 justify-between border-t-2 text-sm font-medium">
        <div className="flex gap-2 items-center">
          <select id="items" className="min-w-[3.75rem] px-3 py-1 text-xs rounded-lg border-none text-black-40 bg-gray-100" onChange={(e) => updateItemsPerPage(parseInt(e.target.value))}>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={30}>30</option>
          </select>
          <label htmlFor="items" className="text-black-40">
            Items per Page
          </label>
          <span className="flex items-center text-black-50 ml-5">
            1-{itemsPerPage} of {lenData} items
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <input id="page" type="number" min={1} max={totalPage} className="w-[3.125rem] px-3 py-1 text-xs rounded-lg border-none text-black-40 bg-gray-100" value={curPage} onChange={(e) => movePage(parseInt(e.target.value) - curPage)} />
          <label htmlFor="page" className="text-black-40">
            of {totalPage} pages
          </label>
          <span className="flex items-center ml-2 gap-2 text-black-50">
            <ChevronLeftIcon className="w-4 icon-sw-2 hover:text-primary-100" onClick={() => movePage(-1)} />
            <ChevronRightIcon className="w-4 icon-sw-2 hover:text-primary-100" onClick={() => movePage(1)} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default List;

export const ListSkeleton = ({ headers }: { headers: any[] }) => {
  return (
    <div className="flex h-[90%] flex-col">
      {/* Tittle */}
      <div className="flex items-center p-3 gap-5 border-y-2 font-medium text-black-90">
        {headers.map((item, idx) => (
          <span
            key={idx}
            className={clsx("flex flex-1", {
              "flex-none w-32": ["id", "ship_code"].includes(item.key),
              "flex-none w-40": item.key === "status",
              "flex-none w-28": item.key === "issues_count",
            })}
          >
            {item.title}
          </span>
        ))}
      </div>
      <Skeleton className="flex flex-1" variant="rectangular" />
    </div>
  );
};
