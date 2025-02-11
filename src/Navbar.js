import React, { useState } from "react";
import img1 from "./Miniminds Logo.pdf.png";
import { PiHamburger } from "react-icons/pi";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [openNavbar, setopenNavbar] = useState(false);

  return (
    <div className="flex items-center justify-between px-7 py-3">
      <img src={img1} className="h-16 w-24" />
      <div className="w-96 hidden  font-semibold font-dmSans  text-[#333333] sm:flex justify-between">
        <button className="">Home</button>
        <button>Services</button>
        <button>About Us</button>
        <button>Contact Us</button>
      </div>

      <div className="flex items-center">
        <button className="text-[#333333] mr-2 border border-[#333333] p-1 rounded sm:hidden">
          <FaBars size={25} />
        </button>

        {/* <div className=" sm:hidden fixed font-semibold font-dmSans  text-[#333333]">
        <button className="">Home</button>
        <button>Services</button>
        <button>About Us</button>
        <button>Contact Us</button>
      </div> */}
        <button className="bg-[#333333] text-white font-semibold font-dmSans px-5 py-1.5 rounded">
          Talk to Us
        </button>
      </div>
    </div>
  );
}

export default Navbar;
