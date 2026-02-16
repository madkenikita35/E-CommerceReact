import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AddProduct from "./AddProduct";
import Header from "./Header";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full w-full border-2 border-black-300 rounded-lg p-4 bg-gray-400">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-2 border-gray-300 rounded-lg p-4 flex flex-col items-center bg-gray-100"
          >
            <div className="p-4" style={{ height: "200px", width: "200px" }}>
              <img src={product.image} alt={product.title} />
            </div>
            <div className="basis-44 flex items-center justify-center gap-0">
              <h1>{product.title}</h1>
            </div>
            <div className="inline-flex gap-18">
              <p>${product.price}</p>
              <AddProduct />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
