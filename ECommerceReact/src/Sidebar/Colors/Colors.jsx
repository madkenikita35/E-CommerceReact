import React from "react";

const Colors = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Colors</h2>

      <input type="radio" name="test" id="All" />
      <label htmlFor="All">All</label>
      <br />
      <input type="radio" name="test" id="Gray" />
      <label htmlFor="Gray">Gray</label>
      <br />
      <input type="radio" name="test" id="Red" />
      <label htmlFor="Red">Red</label>
      <br />
      <input type="radio" name="test" id="Black" />
      <label htmlFor="Black">Black</label>
      <br />
    </div>
  );
};

export default Colors;
