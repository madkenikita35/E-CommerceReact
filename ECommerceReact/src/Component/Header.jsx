import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "primereact/avatar";
import Search from "./Search";

import MenuBar from "./MenuBar";

const Header = () => {
  return (
    <div>
      <header className="bg-amber-300 justify-center items-center flex h-20 gap-4">
        <h1 className="text-2xl font-bold">Welcome to Our E-Commerce Store</h1>
        <Avatar
          image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.jpg"
          size="large"
          shape="circle"
        />
        <Search />
      </header>
    </div>
  );
};

export default Header;
