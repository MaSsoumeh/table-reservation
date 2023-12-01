"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");

  /***** Handlers*****/
  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    if (location === "silly location") return;
    router.push("/search");
  };

  /**********/
  return (
    <div className="text-left text-reg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[410px]"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={onChangeSearchInput}
      />
      <button
        className="rounded bg-mint-contrast px-9 py-2 text-primary"
        onClick={handleSearch}
      >
        Let&apos;s go
      </button>
    </div>
  );
};

export default SearchBar;
