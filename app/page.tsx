import Header from "./components/Header";
import NavBar from "./components/NavBar";
import RestaurantCard from "./components/RestaurantCard";

export default function Home() {
  return (
    <main className="bg-gray-200 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <main>
          <Header />
          <div className="py-3 px-36 mt-1 flex flex-wrap justify-center">
            <RestaurantCard />
          </div>
        </main>
      </main>
    </main>
  );
}
