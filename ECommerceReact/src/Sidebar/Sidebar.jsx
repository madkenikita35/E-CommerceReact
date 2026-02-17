import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";

const Sidebar = () => {
  return (
    <section
      className=" w-1/5 h-screen fixed left-0 top-0 flex flex-col gap-4 p-4 items-center"
      style={{ backgroundColor: "rgba(227, 170, 25, 0.85)" }}
    >
      <div>
        <h1 className="text-2xl m-15">
          <FaShoppingCart />
        </h1>
      </div>
      <Category />
      <Colors />
      <Price />
    </section>
  );
};

export default Sidebar;
