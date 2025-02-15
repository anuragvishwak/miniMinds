import React, { useState } from "react";
import img1 from "./Miniminds Logo.pdf.png";
import { PiHamburger } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import TalkToUs from "./TalkToUs";

function Navbar() {
  const [openNavbar, setopenNavbar] = useState(false);
  const Navigation = useNavigate();
  const currentLocation = useLocation();
  console.log(currentLocation);
  const [openingTalkToUs, setopeningTalkToUs] = useState(false);

  return (
    <div className="flex items-center justify-between px-7 py-3">
      <img src={img1} className="h-16 w-24" />
      <div className="w-80 hidden  font-semibold font-dmSans  sm:flex justify-between">
        <button
          onClick={() => {
            Navigation("/");
          }}
          className={`${
            currentLocation.pathname === "/"
              ? "text-[#e4b18c]"
              : "text-[#333333]"
          }`}
        >
          Home
        </button>
      
        
        <button
          className={`${
            currentLocation.pathname === "/AboutUs"
              ? "text-[#e4b18c]"
              : "text-[#333333]"
          }`}
          onClick={() => {
            Navigation("/AboutUs");
          }}
        >
          About Us
        </button>
        <button
          className={`${
            currentLocation.pathname === "/ContactUs"
              ? "text-[#e4b18c]"
              : "text-[#333333]"
          }`}
          onClick={() => {
            Navigation("/ContactUs");
          }}
        >
          Contact Us
        </button>
      </div>

      <div className="flex items-center">
        <button 
        onClick={() => setopenNavbar(!openNavbar)}
        className="text-[#333333] mr-2 border border-[#333333] p-1 rounded sm:hidden">
          <FaBars size={25} />
        </button>

      
        <button 
        onClick={() => setopeningTalkToUs(true)}
        className="bg-[#333333] text-white font-semibold font-dmSans px-5 py-1.5 rounded">
          Talk to Us
        </button>
      </div>

      {openingTalkToUs &&  <TalkToUs setopeningTalkToUs = {setopeningTalkToUs}/>}

      {openNavbar && (
         <div className="fixed bg-white p-5 rounded-xl shadow-xl z-50 top-20 right-5 font-semibold font-dmSans">
        <div>
        <button
           onClick={() => {
             Navigation("/");
           }}
           className={`${
             currentLocation.pathname === "/"
               ? "text-[#e4b18c]"
               : "text-[#333333]"
           }`}
         >
           Home
         </button>
        </div>
     
         
       <div>
       <button
           className={`${
             currentLocation.pathname === "/AboutUs"
               ? "text-[#e4b18c]"
               : "text-[#333333]"
           }`}
           onClick={() => {
             Navigation("/AboutUs");
           }}
         >
           About Us
         </button>
       </div>
        <div>
        <button
           className={`${
             currentLocation.pathname === "/ContactUs"
               ? "text-[#e4b18c]"
               : "text-[#333333]"
           }`}
           onClick={() => {
             Navigation("/ContactUs");
           }}
         >
           Contact Us
         </button>
        </div>
       </div>
      )}
    </div>
  );
}

export default Navbar;
