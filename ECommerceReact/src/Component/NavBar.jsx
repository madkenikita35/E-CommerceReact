import React from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="bg-black justify-center items-center flex h-10 gap-20">
      <nav>
        <ul className="flex justify-center text-white items-center gap-4 m-4">
          <li>
            <Link to="/products" className="text-white hover:underline">
              View Products
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
