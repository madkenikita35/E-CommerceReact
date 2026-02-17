import React from "react";
import Nav from "../Navigation/Nav";
import axios from "axios";
import { useState, useEffect } from "react";
import { BsFillBagHeartFill } from "react-icons/bs";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  bg-amber-300 p-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 p-2  bg-orange-100 rounded-lg flex flex-col items-center gap-2 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain hover:shadow-lg transition-shadow duration-300"
              />
              <h3 className="font-bold">{product.title}</h3>
              <p className="text-red-500">${product.price}</p>
              <BsFillBagHeartFill className="text-black" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
