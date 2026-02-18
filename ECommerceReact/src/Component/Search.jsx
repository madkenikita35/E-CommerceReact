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
    <div className="flex flex-col items-center">
      <div className="flex gap-4 mb-4">
        <InputText
          className="gap-4"
          style={{
            width: "300px",
            backgroundColor: "#f2cb55",
            padding: "0.5rem",
            borderRadius: "0.375rem",
            border: "1px solid #d1d5db",
            marginRight: "0.5rem",
          }}
          placeholder="Search..."
          onChange={handleChange}
          value={searchTerm}
        />
      </div>
      <div className="m-4">
        <button
          onClick={searchItem}
          className="bg-amber-500 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
