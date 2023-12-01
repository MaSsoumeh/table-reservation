import NavBar from "@/app/components/NavBar";
import Form from "./components/Form";
import Header from "./components/Header";

const Reserve = () => {
  return (
    <main className="bg-gray min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-gray">
        <NavBar />
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <Header />
            <Form />
          </div>
        </div>
      </main>
    </main>
  );
};

export default Reserve;
