import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  console.log(date);
  return (
    <div className=" w-full bg-black text-white text-center">
      This is Footer Section
      <p>© Copyright {date}</p>
    </div>
  );
};

export default Footer;
