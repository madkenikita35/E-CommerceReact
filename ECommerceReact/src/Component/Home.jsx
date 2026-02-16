import React from "react";
import Products from "./Products";
import { Link } from "react-router-dom";
import Header from "./Header";
import banner from "../assets/banner.jpg";

const Home = () => {
  return (
    <div className="relative">
      <img src={banner} alt="Banner" className="w-full h-96 object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Welcome to Our E-Commerce Store
        </h1>
      </div>
      <div>
        <Header />
        <nav>
          <ul className="flex justify-center items-center gap-4 mt-4">
            <li>
              <Link
                to="/products"
                className="text-black-500 bg-yellow-100 hover:underline"
              >
                View Products
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
