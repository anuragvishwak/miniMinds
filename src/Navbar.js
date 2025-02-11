import React from "react";
import img1 from "./Miniminds Logo.pdf.png";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-7 py-3">
      <img src={img1} className="h-16 w-24" />
      <div className="w-96 font-semibold font-dmSans  text-[#333333] flex justify-between">
        <button className="">Home</button>
        <button>Services</button>
        <button>About Us</button>
        <button>Contact Us</button>
      </div>
     
        <button className="bg-[#333333] text-white font-semibold font-dmSans px-5 py-1.5 rounded">
          Talk to Us
        </button>
     
    </div>
  );
}

export default Navbar;
