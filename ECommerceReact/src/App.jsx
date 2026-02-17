import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Products from "./Component/Products/Products";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};
export default App;

// import React from "react";
// import Nav from "./Component/Navigation/Nav";
// import Products from "./Component/Products/Products";

// const App = () => {
//   return (
//     <div>
//       <Nav />
//       <Products />
//     </div>
//   );
// };

// export default App;
