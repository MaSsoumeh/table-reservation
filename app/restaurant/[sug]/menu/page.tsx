import { Metadata } from "next";
import Menu from "../components/Menu";
import RestaurantNavBar from "../components/RestaurantNavBar";

export const metadata: Metadata = {
  title: "Menu | Milestone Grill | BookTable",
  description: "Reserve your desired table in your favorite restaurant",
};
const RestaurantMenu = () => {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar />
        <Menu />
      </div>
    </>
  );
};

export default RestaurantMenu;
