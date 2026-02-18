// // import React from "react";
// // import { Link } from "react-router-dom";
// // import Header from "./Header";
// // import bg from "../assets/bg.png";
// // import NavBar from "./NavBar";
// // import Nave from "./Navigation/Nav";
// // import Products from "./Products/Products";
// // import Recommendation from "../Recommendation/Recommendation";
// // import Sidebar from "../Sidebar/Sidebar";
// // import {useState} from "react";
// // import { FiAlignJustify } from "react-icons/fi";

// // const Home = () => {
// //   const [menu, setMneu] = useState[false];

// //   const setMenuF = () =>{
// //     setMneu(true);
// //   }
// //   return
// //   (
// //   <>
// //     {menu ? (
// //       <div>
// //             <Sidebar />
// //             <div className="ml-[20%]">
// //               <Header />
// //               <NavBar />
// //               <div className="relative">
// //                 <img src={bg} alt="Banner" className="w-full h-96 object-cover" />
// //                 <div className="absolute inset-0 flex items-center justify-center">
// //                   <h1 className="text-4xl font-bold text-white">
// //                     Welcome to Our E-Commerce Store
// //                   </h1>
// //                 </div>
// //               </div>
// //               <Nave />
// //               <Recommendation />
// //               <Products />
// //             </div>
// //           </div> ) :   (
// //             <div>
// //           <button onClick={setMenuF}>
// //             <FiAlignJustify />
// //           </button>

// //         </div>
// //       )}
// //   </>
// // );
// // };
// // export default Home;

// import React, { useState } from "react";
// import Header from "./Header";
// import bg from "../assets/bg.png";
// import NavBar from "./NavBar";
// import Nave from "./Navigation/Nav";
// import Products from "./Products/Products";
// import Recommendation from "../Recommendation/Recommendation";
// import Sidebar from "../Sidebar/Sidebar";
// import { FiAlignJustify } from "react-icons/fi";

// const Home = () => {
//   const [menu, setMenu] = useState(false);

//   const setMenuF = () => {
//     setMenu(true);
//   };

//   return (
//     <>
//       {menu ? (
//         <div>
//           <Sidebar />
//           <div className="ml-[20%]">
//             <Header />
//             <NavBar />
//             <div className="relative">
//               <img src={bg} alt="Banner" className="w-full h-96 object-cover" />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <h1 className="text-4xl font-bold text-white">
//                   Welcome to Our E-Commerce Store
//                 </h1>
//               </div>
//             </div>
//             <Nave />
//             <Recommendation />
//             <Products />
//           </div>
//         </div>
//       ) : (
//         <div>
//           {/* <button onClick={setMenuF}>
//             <FiAlignJustify />
//           </button> */}
//           <div>
//             <div>
//               <Header />
//               <>
//                 <button className="inline-block w-5" onClick={setMenuF}>
//                   <FiAlignJustify />
//                 </button>
//                 <p className="inline">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Obcaecati, ipsam corrupti nulla debitis corporis laudantium
//                   aliquid reiciendis fugit sit saepe minus perspiciatis facilis,
//                   ratione autem quae.
//                 </p>
//               </>
//               {/* <NavBar /> */}
//               <div className="relative">
//                 <img
//                   src={bg}
//                   alt="Banner"
//                   className="w-full h-96 object-cover"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <h1 className="text-4xl font-bold text-white">
//                     Welcome to Our E-Commerce Store
//                   </h1>
//                 </div>
//               </div>
//               <Nave />
//               <Recommendation />
//               <Products />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;

import React, { useState } from "react";
import Header from "./Header";
import bg from "../assets/bg.png";
import NavBar from "./NavBar";
import Nave from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommendation from "../Recommendation/Recommendation";
import Sidebar from "../Sidebar/Sidebar";
import { FiAlignJustify } from "react-icons/fi";

const Home = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <>
      {menu && <Sidebar />}

      <div className={menu ? "ml-[20%]" : ""}>
        <Header toggleMenu={toggleMenu} />
        <NavBar />
        <div className="relative">
          <img src={bg} alt="Banner" className="w-full h-96 object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">
              Welcome to Our E-Commerce Store
            </h1>
          </div>
        </div>
        <Nave />
        <Recommendation />
        <Products />
      </div>
    </>
  );
};

export default Home;
