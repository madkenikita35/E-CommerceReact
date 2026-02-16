import React from "react";
import Products from "./Products";
import { Link } from "react-router-dom";
import Header from "./Header";
import bg from "../assets/bg.png";
import NavBar from "./NavBar";
import Search from "./Search";

const Home = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="relative">
        <img src={bg} alt="Banner" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
            Welcome to Our E-Commerce Store
          </h1>
        </div>
      </div>
      <Search />
      <Products />
    </div>
  );
};

export default Home;
