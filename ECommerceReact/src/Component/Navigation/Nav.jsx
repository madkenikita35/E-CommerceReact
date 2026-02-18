import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { GoSearch } from "react-icons/go";

const Nav = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="flex justify-between items-center border-b-2 p-4 m-2">
      <div className="relative ml-40">
        <GoSearch className="absolute left-220 top-1/2 -translate-y-1/2 text-gray-600" />
        <input
          type="text"
          className="ml-80 w-[600px] bg-[#f2cb55] p-2 rounded-md border border-gray-300"
          placeholder="Search..."
          onChange={handleChange}
          value={searchTerm}
        />
      </div>
      <div className="flex gap-4 text-xl">
        <a href="#">
          <FiHeart className="w-5 h-5 ml-2" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="w-5 h-5 ml-2" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="w-5 h-5 ml-2" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
