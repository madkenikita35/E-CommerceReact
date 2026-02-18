import React, { useState } from "react";
import Header from "./Header";
import bg from "../assets/bg.png";
import NavBar from "./NavBar";
import Nave from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommendation from "../Recommendation/Recommendation";
import Sidebar from "../Sidebar/Sidebar";
import { FiAlignJustify } from "react-icons/fi";
import Headline from "./Headline";
import PromoCard from "./PromoCard";
import image from "../assets/image.png";

const Home = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <>
      {menu && <Sidebar />}

      <div className={menu ? "ml-[20%]" : ""}>
        <Header toggleMenu={toggleMenu} />

        {/* <NavBar /> */}
        <Headline />
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
        <PromoCard image={image} />
        <Products />
      </div>
    </>
  );
};

export default Home;
