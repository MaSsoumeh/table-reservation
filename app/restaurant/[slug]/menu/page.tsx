import { Metadata } from "next";
import Menu from "../components/Menu";
import RestaurantNavBar from "../components/RestaurantNavBar";
import { prisma } from "@/app/lib/service";

//metaData
export const metadata: Metadata = {
  title: "Menu | Milestone Grill | BookTable",
  description: "Reserve your desired table in your favorite restaurant",
};

//typeDefs
type Menu = {
  id: number;
  name: string;
  price: string;
  description: string;
};

//fetchData
const fetchMenu = async (slug: string): Promise<Menu[]> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });
  if (!restaurant) {
    throw new Error();
  }
  return restaurant.items;
};

type Props = {
  params: {
    slug: string;
  };
};

//
const RestaurantMenu = async (props: Props) => {
  const menuItems = await fetchMenu(props.params.slug);
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar slug={props.params.slug} activeTab="menu" />
        <Menu items={menuItems} />
      </div>
    </>
  );
};

export default RestaurantMenu;
