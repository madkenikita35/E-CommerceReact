import React from "react";
import { useState } from "react";

const AddProduct = () => {
  const [counter, setCounter] = useState(0);
  if (counter < 0) {
    setCounter(0);
  }
  return (
    <div className="inline-flex items-center justify-center gap-2 bg-amber-300 border-2 border-gray-300 rounded-lg">
      <button onClick={() => setCounter(counter + 1)}>+{counter}</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
};

export default AddProduct;
