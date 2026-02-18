// import React from "react";
// import "../../src/slider.css";
// import { useState } from "react";

// const PromoCard = ({ image }) => {
//   return (
//     <div
//       className="flex flex-col md:flex-row items-center
//                    bg-[#f2cb55] rounded-3xl p-2
//                     hover:shadow-xl transition-all duration-300"
//     >
//       <div className="mt-6 md:mt-0 slider-track">
//         <button>
//           <img
//             src={image}
//             alt="promo"
//             className="w-72 h-72 ml-4 object-contain hover:scale-105 transition duration-300 slider-img"
//           />
//         </button>
//         <button>
//           <img
//             src={image}
//             alt="promo"
//             className="w-72 ml-4 h-72 object-contain hover:scale-105 transition duration-300 slider-img"
//           />
//         </button>
//         <button>
//           <img
//             src={image}
//             alt="promo"
//             className="w-72 ml-4 h-72 object-contain hover:scale-105 transition duration-300 slider-img"
//           />
//         </button>
//         <button>
//           <img
//             src={image}
//             alt="promo"
//             className="w-72 ml-4 h-72 object-contain hover:scale-105 transition duration-300 slider-img"
//           />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PromoCard;

// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const PromoCard = ({ images }) => {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   return (
//     <div className="relative  bg-[#f2cb55] overflow-hidden flex items-center justify-center">
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt="promo"
//             className="w-80 h-80 gap-4 mr-4 object-contain "
//           />
//         ))}
//       </div>
//       <button
//         onClick={prevSlide}
//         className="absolute left-3 bg-black/60 text-white p-2 rounded-full"
//       >
//         <FaChevronLeft />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-3 bg-black/60 text-white p-2 rounded-full"
//       >
//         <FaChevronRight />
//       </button>
//     </div>
//   );
// };

// export default PromoCard;

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PromoCard = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="bg-[#f2cb55]">
      <div
        className="relative md:ml-120 w-100 h-100 bg-[#f2cb55] 
                    overflow-hidden rounded-3xl sm:ml-50"
      >
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="w-100 h-100 flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={img}
                alt="promo"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 
                   bg-black/60 text-white p-2 rounded-full"
        >
          <FaChevronLeft />
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 
                   bg-black/60 text-white p-2 rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default PromoCard;
