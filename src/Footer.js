import React from "react";
import img1 from "./1.png";
import { PiInstagramLogo, PiYoutubeLogo } from "react-icons/pi";
import { MdFacebook, MdPhone } from "react-icons/md";
import { GoLocation, GoMail } from "react-icons/go";

function Footer() {
  return (
    <div className="bg-black p-5">
      <div className="sm:flex justify-between py-5 items-center">
        <div>
          <img src={img1} className="h-20 w-32" />
        </div>

        <div className="flex items-center">
          <input
            placeholder="example@gmail.com"
            className="bg-[#333333] border w-[170px] sm:w-auto p-1 mr-3 rounded border-[#e4b18c]"
          ></input>
          <button className="bg-[#e4b18c] text-[#333333] font-semibold font-dmSans px-2.5 sm:px-5 py-1.5 rounded">
            Reach Us !
          </button>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-[#e4b18c] font-semibold font-dmSans text-xl">
          Contact Us
        </p>
        <div className="text-[#e4b18c] flex items-center">
          <GoLocation className="text-[#e4b18c]" />
          <p className="ml-1">Near Phoenix mall , Kurla West Mumbai 400071</p>
        </div>
        <div className="text-[#e4b18c] flex items-center">
        <a href="tel:+919967784839" className="flex items-center">
            <MdPhone className="text-[#e4b18c] mr-1" />
            <p>+91 9967784839</p>
          </a>
        </div>

        <div className="text-[#e4b18c] flex items-center">
        <a href="mailto:rjsminiminds@gmail.com" className="flex items-center">
            <GoMail className="text-[#e4b18c] mr-1" />
            <p>rjsminiminds@gmail.com</p>
          </a>
        </div>
      </div>

      <div className="text-[#e4b18c] border-t py-3 border-[#e4b18c] flex justify-end">
        <button>
        <a href="https://www.instagram.com/miniminds__?igsh=dHp2aWpkcWZpbDAy" target="_blank" rel="noopener noreferrer">
          <PiInstagramLogo size={30} />
        </a>
        </button>
        <button className="mx-3">
        <a href="https://www.facebook.com/people/Mini-Minds/pfbid0it1uNUXb6FpGm6QQGCoofnhs6mgp3w3iDnM2zCwbGqvrkMaR6ra5Uct19nkwsQ9dl/?ref=ig_profile_ac" target="_blank" rel="noopener noreferrer">
          <MdFacebook size={30} className="mx-3" />
        </a>
        </button>
        <button>
        <a href="https://www.youtube.com/@miniminds14?si=bT9uYWi-foXRGKgP" target="_blank" rel="noopener noreferrer">
          <PiYoutubeLogo size={30} />
        </a>
        </button>
      </div>
     
    </div>
  );
}

export default Footer;
