import React from "react";

const Recommendation = () => {
  return (
    <div className="flex ml-2">
      <h3 className=" font-bold text-lg">Recommended</h3>
      <ul className="ml-2">
        <li>
          <button className="bg-amber-300 text-white px-2 py-1 rounded">
            All Products
          </button>
        </li>
        <li>
          <button className="bg-amber-300 text-white px-2 py-1 rounded">
            Watch
          </button>
        </li>
        <li>
          <button className="bg-amber-300 text-white px-2 py-1 rounded">
            Ring
          </button>
        </li>
        <li>
          <button className="bg-amber-300 text-white px-2 py-1 rounded">
            Adidas
          </button>
        </li>
        <li>
          <button className="bg-amber-300 text-white px-2 py-1 rounded">
            Shoes
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Recommendation;
