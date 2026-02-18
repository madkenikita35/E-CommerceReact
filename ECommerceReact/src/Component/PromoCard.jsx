import React from "react";

const PromoCard = ({ image }) => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between 
                    bg-gray-100 rounded-3xl p-8 
                    hover:shadow-xl transition-all duration-300"
    >
      <div className="mt-6 md:mt-0">
        <img
          src={image}
          alt="promo"
          className="w-72 object-contain hover:scale-105 transition duration-300"
        />
      </div>
    </div>
  );
};

export default PromoCard;
