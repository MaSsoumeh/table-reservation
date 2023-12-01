import { Metadata } from "next";
import Header from "./components/Header";
import SearchRestaurantCard from "./components/SearchRestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

export const metadata: Metadata = {
  title: "Search | BookTable",
  description: "Search for available table in your favorite restaurant",
};
const SearchPage = () => {
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <SearchRestaurantCard />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
