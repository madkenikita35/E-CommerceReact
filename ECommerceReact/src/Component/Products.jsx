import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AddProduct from "./AddProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full w-full border-2 border-black-300 rounded-lg p-4 bg-[#f2cb55]">
      {loading ? (
        <p className="col-span-full text-center">Loading products...</p>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className="border-2 border-gray-300 rounded-lg p-4 flex flex-col items-center bg-orange-100"
          >
            <div className="p-4" style={{ height: "200px", width: "200px" }}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="basis-44 flex items-center justify-center gap-0">
              <h1 className="text-sm">{product.title}</h1>
            </div>
            <div className="inline-flex gap-18">
              <p>${product.price}</p>
              <AddProduct />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
