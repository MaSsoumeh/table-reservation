import Link from "next/link";

const RestaurantCard = () => {
  return (
    <Link href="/restaurant/Milestones-Grill">
      <div className="w-64 h-78 m-3 rounded overflow-hidden border cursor-pointer text-primary">
        <img
          src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
          alt=""
          className="w-full h-36"
        />
        <div className="p-2">
          <h3 className="font-bold text-lg mb-2 text-primary">
            Milestones Grill
          </h3>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2">77 reviews</p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">Mexican</p>
            <p className="mr-3">$$$$</p>
            <p>Toronto</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
