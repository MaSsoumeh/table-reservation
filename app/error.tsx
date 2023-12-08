"use client";
import Image from "next/image";
import crossImage from "../public/icons/cross.svg";

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="bg-[#ECECEC] w-full h-screen flex flex-col items-center justify-center">
      <p className="text-xl mb-4">Ooops!</p>
      <p className="text-lg mb-4 p-12">{error.message}</p>
      <Image src={crossImage} alt="error" className="w-33 h-33" />
    </div>
  );
};

export default Error;
