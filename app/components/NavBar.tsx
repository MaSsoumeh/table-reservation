import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-primary text-lg">
        BookTable
      </Link>
      <div>
        <div className="flex">
          <button className="bg-secondary text-white border p-1 px-4 rounded mr-3">
            Sign in
          </button>
          <button className="bg-gray  text-white border p-1 px-4 rounded">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
