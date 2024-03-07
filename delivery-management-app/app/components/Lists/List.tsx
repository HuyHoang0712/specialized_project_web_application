"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import StatusCard from "../Cards/StatusCard";
import clsx from "clsx";
interface Props {
  headers: any[];
  data: any[];
}

const List = (props: Props) => {
  const { headers, data } = props;
  const lenData = data.length;
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPage, setTotalPage] = useState(Math.ceil(lenData / itemsPerPage));
  const [curPage, setCurPage] = useState(1);
  const [curData, setCurData] = useState(data.slice(0, itemsPerPage));

  const movePage = (move: number) => {
    if (move > 0 && curPage < totalPage) {
      setCurData(
        data.slice(
          itemsPerPage * move,
          curPage === totalPage ? lenData : itemsPerPage * (move + 1)
        )
      );
      setCurPage(curPage + 1);
    } else if (move < 0 && curPage > 1) {
      setCurData(
        data.slice(
          itemsPerPage * (curPage - 1 + move),
          itemsPerPage * (curPage + move)
        )
      );
      setCurPage(curPage - 1);
    }
  };

  const updateItemsPerPage = (items: number) => {
    let newTotalPage = Math.ceil(lenData / items);
    if (curPage >= newTotalPage) {
      setCurData(data.slice(itemsPerPage * (newTotalPage - 1), lenData));
      setCurPage(newTotalPage);
    } else
      setCurData(
        data.slice(itemsPerPage * (curPage - 1), itemsPerPage * curPage)
      );
    setTotalPage(newTotalPage);
    setItemsPerPage(items);
  };

  return (
    <div className="flex h-[90%] flex-col">
      {/* Tittle */}
      <div className="flex items-center p-3 border-y-2 font-medium text-black-90">
        {headers.map((item, idx) => (
          <span
            key={idx}
            className={clsx("flex flex-1", {
              "flex-none w-40": item.key === "id",
            })}
          >
            {item.title}
          </span>
        ))}
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col p-3 gap-6 text-black-50 overflow-auto no-scrollbar">
        {curData.map((content, idx) => (
          <Link href={`/plan/${content.id}`} key={idx} className="flex items-center">
            {headers.map((item: any, index) => (
              <span
                key={index}
                className={clsx("flex flex-1", {
                  "flex-none w-40": item.key === "id",
                })}
              >
                {item.key === "status" ? (
                  <StatusCard label={content[item.key]} />
                ) : (
                  content[item.key]
                )}
              </span>
            ))}
          </Link>
        ))}
      </div>
      {/* Bottom */}
      <div className="flex px-3 py-2 justify-between border-t-2 text-sm font-medium">
        <div className="flex gap-2 items-center">
          <select
            id="items"
            className="min-w-[3.75rem] px-3 py-1 text-xs rounded-lg border-none text-black-40 bg-gray-100"
            onChange={(e) => updateItemsPerPage(parseInt(e.target.value))}
          >
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
          <input
            id="page"
            type="number"
            min={1}
            max={totalPage}
            className="w-[3.125rem] px-3 py-1 text-xs rounded-lg border-none text-black-40 bg-gray-100"
            value={curPage}
            onChange={(e) => movePage(parseInt(e.target.value) - curPage)}
          />
          <label htmlFor="page" className="text-black-40">
            of {totalPage} pages
          </label>
          <span className="flex items-center ml-2 gap-2 text-black-50">
            <ChevronLeftIcon
              className="w-4 icon-sw-2 hover:text-primary-100"
              onClick={() => movePage(-1)}
            />
            <ChevronRightIcon
              className="w-4 icon-sw-2 hover:text-primary-100"
              onClick={() => movePage(1)}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default List;
