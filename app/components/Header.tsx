import React from "react";
import MainHeader from "./MainHeader";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <MainHeader>
      <h1 className="text-white text-2xl font-bold mb-2">
        Find your table for any occasion
      </h1>
      <SearchBar />
    </MainHeader>
  );
};

export default Header;
