import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="flex justify-center pt-[50px]">
      <ul className="flex space-x-[10px] mobile:space-x-[20px] items-baseline text-sm font-bold mb-[20px] text-black">
        <Link href="/">
          <li className=" hover:text-gray-500" >Home</li>
        </Link>
        <Link href="/about">
          <li className=" hover:text-gray-500">About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
