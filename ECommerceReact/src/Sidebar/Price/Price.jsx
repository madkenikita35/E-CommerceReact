import React from "react";

const Price = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Price</h2>
      <div>
        <input type="radio" name="test" id="All" />
        <label htmlFor="All">All</label>
        <br />
        <input type="radio" name="test" id="$0-$20" />
        <label htmlFor="$0-$20">$0-$20</label>
        <br />
        <input type="radio" name="test" id="$20-$50" />
        <label htmlFor="$20-$50">$20-$50</label>
        <br />
        <input type="radio" name="test" id="$50-$70" />
        <label htmlFor="$50-$70">$50-$70</label>
        <br />
      </div>
    </div>
  );
};

export default Price;
