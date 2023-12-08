import Header from "./components/Header";

const loading = () => {
  return (
    <div>
      <Header />
      <div className="py-3 px-36 m-3 flex flex-wrap justify-center">
        {Array.from({ length: 24 }).map((_, idx) => {
          return (
            <div
              key={idx}
              className="shadow-md m-3 w-64 h-72 rounded overflow-hidden cursor-pointer"
            >
              <div className="relative h-36 w-full animate-pulse bg-gray-light mb-2"></div>
              <div className="p-2">
                <div className="mb-3 animate-pulse bg-gray-light h-6"></div>
                <div className="flex mb-2">
                  <div className="mr-2 animate-pulse bg-gray-light h-6 w-2/4"></div>
                  <div className="animate-pulse bg-gray-light h-6 w-2/4"></div>
                </div>
                <div className="flex mb-2">
                  <div className="animate-pulse bg-gray-light h-4 mr-3 w-2/6"></div>
                  <div className="animate-pulse bg-gray-light h-4 mr-3 w-2/6"></div>
                  <div className="animate-pulse bg-gray-light h-4 w-2/6"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default loading;
