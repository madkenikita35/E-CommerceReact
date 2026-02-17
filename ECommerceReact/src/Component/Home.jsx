import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import bg from "../assets/bg.png";
import NavBar from "./NavBar";
import Nave from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommendation from "../Recommendation/Recommendation";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-[20%]">
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
        <Nave />
        <Recommendation />
        <Products />
      </div>
    </div>
  );
};

export default Home;
