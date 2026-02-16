import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchItem = () => {
    if (!searchTerm) return;

    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        const filtered = res.data.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()),
        );
        setProducts(filtered);
      })
      .catch((error) => {
        console.error("Error searching products:", error);
      });
  };

  return (
    <div className="flex flex-col items-center m-4">
      <div className="flex gap-2">
        <InputText
          style={{
            width: "300px",
            backgroundColor: "#f2cb55",
            padding: "0.5rem",
            borderRadius: "0.375rem",
            border: "1px solid #d1d5db",
          }}
          placeholder="Search..."
          onChange={handleChange}
          value={searchTerm}
        />
        <button
          onClick={searchItem}
          className="bg-amber-500 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>

      {/* Display Results */}
      <div>
        {products.map((product) => (
          <div key={product.id} className="p-2 border-b">
            {product.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
