"use client";
import Image from "next/image";
import notFoundImage from "../public/icons/error.jpeg";

const NotFound = () => {
  return (
    <div className="bg-[#ECECEC] w-full h-screen flex flex-col items-center justify-center">
      <Image src={notFoundImage} alt="not-found" className="w-33 h-33" />
      <p className="text-lg mb-4 px-12">The page was not found!</p>
    </div>
  );
};

export default NotFound;
