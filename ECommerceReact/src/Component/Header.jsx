// import React from "react";
// import { Link } from "react-router-dom";
// import { Avatar } from "primereact/avatar";

// import MenuBar from "./MenuBar";

// const Header = () => {
//   return (
//     <div>
//       <header className="bg-amber-400 justify-center items-center flex h-20 gap-4">
//         <h1 className="text-2xl font-bold">Welcome to Our E-Commerce Store</h1>
//         <Avatar
//           image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.jpg"
//           size="large"
//           shape="circle"
//         />
//       </header>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import { Avatar } from "primereact/avatar";
import { FiAlignJustify } from "react-icons/fi";

const Header = ({ toggleMenu }) => {
  return (
    <header className="bg-amber-400 flex items-center justify-between px-4 h-20">
      {/* Menu Button */}
      <button onClick={toggleMenu}>
        <FiAlignJustify size={24} />
      </button>

      <h1 className="text-2xl font-bold">Welcome to Our E-Commerce Store</h1>

      <Avatar
        image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.jpg"
        size="large"
        shape="circle"
      />
    </header>
  );
};

export default Header;
