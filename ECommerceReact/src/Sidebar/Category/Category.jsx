import React from "react";

const Category = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Category</h2>
      <div>
        <input type="radio" name="test" id="All" />
        <label htmlFor="All">All</label>
        <br />
        <input type="radio" name="test" id="Watch" />
        <label htmlFor="Watch">Watch</label>
        <br />
        <input type="radio" name="test" id="Ring" />
        <label htmlFor="Ring">Ring</label>
        <br />
        <input type="radio" name="test" id="Bracelet" />
        <label htmlFor="Bracelet">Bracelet</label>
        <br />
      </div>
    </div>
  );
};

export default Category;
