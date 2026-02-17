import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = () => {
  return (
    <nav className="flex border-b-2 border-solid border-gray-300 justify-between align-items-center p-20 m-2">
      <div>
        <input type="text" placeholder="Enter Your Search Shoes.." />
      </div>
      <div className="flex gap-2">
        <a href="#">
          <FiHeart />
        </a>
        <a href="#">
          <AiOutlineShoppingCart />
        </a>
        <a href="#">
          <AiOutlineUserAdd />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
