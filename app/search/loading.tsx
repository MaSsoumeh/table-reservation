import Header from "./components/Header";

const loading = () => {
  return (
    <div>
      <Header />
      <div className="flex py-4 m-auto w-2/3 h-screen justify-between">
        <div className="w-1/5 h-2/3 mr-4 bg-gray-light animate-pulse" />
        <div className="w-5/6">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className="border-b flex pb-5  border-mint-light">
              <div className="w-44 h-44 mr-4 animate-pulse bg-gray-light" />
              <div className="w-5/6 h-44  bg-gray-light animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default loading;
