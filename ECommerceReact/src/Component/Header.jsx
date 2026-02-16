import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="bg-amber-300 justify-center items-center flex h-20 gap-">
        <h1>Welcome to Our E-Commerce Store</h1>
        <div>
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
      </header>
    </div>
  );
};

export default Header;
