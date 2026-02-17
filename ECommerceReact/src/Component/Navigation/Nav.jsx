import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="flex justify-between items-center border-b-2 border-gray-300 p-4 m-2">
      <div>
        <input
          type="text"
          className="w-[300px] bg-[#f2cb55] p-2 rounded-md border border-gray-300"
          placeholder="Search..."
          onChange={handleChange}
          value={searchTerm}
        />
        <button className="bg-amber-500 text-white px-4 py-2 rounded-md">
          Search
        </button>
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
