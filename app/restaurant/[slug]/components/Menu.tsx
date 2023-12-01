import MenuCard from "./MenuCard";

type Props = {
  items: {
    id: number;
    name: string;
    price: string;
    description: string;
  }[];
};
const Menu = (props: Props) => {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        {props.items.length ? (
          <div className="flex flex-wrap justify-between">
            {props.items.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          "This restaurant doesn't have menu"
        )}
      </div>
    </main>
  );
};

export default Menu;
