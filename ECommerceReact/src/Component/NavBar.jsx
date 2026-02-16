import React from "react";
import MenuBar from "./MenuBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-black justify-center items-center flex h-10 gap-9">
      <nav>
        <ul className="flex justify-center text-white items-center gap-4 m-4">
          <li>
            <Link to="/products" className="text-white hover:underline gap-9">
              View Products
            </Link>
          </li>
          <li>
            {" "}
            <MenuBar />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
