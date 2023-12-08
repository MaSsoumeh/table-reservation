const loading = () => {
  return (
    <>
      <div className="bg-gray-light w-[70%] animate-pulse h-screen rounded p-3 shadow"></div>
      <div className="w-[27%] relative animate-pulse">
        <div className="fixed w-[25%] bg-gray-light rounded p-3 shadow h-72" />
      </div>
    </>
  );
};

export default loading;
