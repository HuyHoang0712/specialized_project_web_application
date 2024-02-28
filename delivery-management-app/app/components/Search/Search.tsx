"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = () => {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const handleSearch = (term: string) => {
    if (term != "") {
      const params = new URLSearchParams(searchParams);
    }
  };

  return (
    <label className="flex flex-row items-center px-3 gap-2 rounded-lg border-2 text-black-50 focus-within:border-primary-50 hover:border-primary-50 ">
      <MagnifyingGlassIcon
        className="w-6 heroicon-sw-2 text-black-60 hover:text-primary-50"
        onClick={() => handleSearch(search)}
      />
      <input
        type="text"
        title="search"
        placeholder="Search"
        className="text-sm border-none placeholder-black-20 bg-transparent focus:border-transparent focus:outline-none focus:ring-0"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch(search);
        }}
      />
      {search != "" && <XMarkIcon className="w-5" onClick={() => setSearch("")} />}
    </label>
  );
};

export default Search;
