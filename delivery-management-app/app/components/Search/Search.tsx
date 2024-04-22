"use client";
import React, { useState } from "react";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface Props {
  setSearchKey: (term: string) => void;
}

const Search = ({ setSearchKey }: Props) => {
  const [search, setSearch] = useState("");
  const handleSearch = (term: string) => {
    setSearchKey(term);
  };

  return (
    <div className="flex flex-row items-center h-fit px-3 gap-2 rounded-lg border-2 text-black-50 focus-within:border-primary-50 hover:border-primary-50 ">
      <MagnifyingGlassIcon
        className="w-5 icon-sw-2 text-black-60 hover:text-primary-50"
        onClick={() => handleSearch(search)}
      />
      <input
        id="search"
        type="text"
        title="search"
        placeholder="Search"
        autoComplete="off"
        className="w-full text-sm border-none placeholder-black-20 bg-transparent focus:border-transparent focus:outline-none focus:ring-0"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch(search);
        }}
      />
      <XMarkIcon
        visibility={search === "" ? "hidden" : "none"}
        className="w-4"
        onClick={() => {
          setSearch("");
          handleSearch("");
        }}
      />
    </div>
  );
};

export default Search;
