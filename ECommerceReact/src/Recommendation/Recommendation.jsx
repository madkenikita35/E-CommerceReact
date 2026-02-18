import React from "react";

const Recommendation = () => {
  return (
    <div className="flex ml-2">
      <h3 className=" font-bold text-lg m-4">Recommended</h3>

      <button className="bg-[#f2cb55] text-white px-2 py-1 rounded p-4 m-3">
        All Products
      </button>

      <button className="bg-[#f2cb55] text-white px-2 py-1 rounded p-4 m-3 hover:border-black">
        Watch
      </button>

      <button className="bg-[#f2cb55] text-white px-2 py-1 rounded p-4 m-3">
        Ring
      </button>
      <button className="bg-[#f2cb55] text-white px-2 py-1 rounded p-4 m-3">
        Adidas
      </button>

      <button className="bg-[#f2cb55] text-white px-2 py-1 rounded p-4 m-3">
        Shoes
      </button>
    </div>
  );
};

export default Recommendation;
