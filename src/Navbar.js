import React, { useState } from "react";
import img1 from "./Miniminds Logo.pdf.png";
import { PiHamburger } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import TalkToUs from "./TalkToUs";
import { motion } from "motion/react";

function Navbar() {
  const [openNavbar, setopenNavbar] = useState(false);
  const Navigation = useNavigate();
  const currentLocation = useLocation();
  console.log(currentLocation);
  const [openingTalkToUs, setopeningTalkToUs] = useState(false);

  return (
    <div className="fixed opacity-90 w-screen m-3 sm:m-7 z-50">
      <div className="flex sm:justify-center items-center">
        <div className="bg-white  p-2 shadow-xl sm:hidden rounded-full mr-3">
          <button
            onClick={() => setopenNavbar(!openNavbar)}
            className="text-[#333333]  border-2 border-[rgb(255,189,142)] p-2 rounded-full"
          >
            <FaBars size={20} />
          </button>
        </div>
        <div
          className={`flex items-center w-56 sm:w-7/12 ${
            openNavbar === true ? "rounded-t-3xl" : "rounded-full"
          } justify-between  sm:rounded-full  shadow-2xl bg-white backdrop-blur-md bg-white/15   px-3 py-2  `}
        >
          <img src={img1} className="h-10" />
          <div className="w-80 hidden  font-semibold font-dmSans  sm:flex justify-between">
            <button
              onClick={() => {
                Navigation("/");
              }}
              className={`${
                currentLocation.pathname === "/"
                  ? "text-[#e4b18c]"
                  : "text-white"
              }`}
            >
              Home
            </button>

            <button
              className={`${
                currentLocation.pathname === "/AboutUs"
                  ? "text-[#e4b18c]"
                  : "text-white"
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
                  : "text-white"
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
              onClick={() => setopeningTalkToUs(true)}
              className="bg-[#333333] text-white font-semibold text-sm sm:text-base font-dmSans px-5 py-1.5 rounded-full"
            >
              Talk to Us
            </button>
          </div>

          {openingTalkToUs && (
            <TalkToUs setopeningTalkToUs={setopeningTalkToUs} />
          )}

          {openNavbar && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed bg-white w-[224px] p-5 block sm:hidden rounded-b-xl border-x border-b left-[79px] top-[66px]  font-semibold font-dmSans"
            >
              <div>
                <button
                  onClick={() => {
                    Navigation("/");
                  }}
                  className={`${
                    currentLocation.pathname === "/"
                      ? "text-[#e4b18c]"
                      : "text-white"
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
                      : "text-white"
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
                      : "text-white"
                  }`}
                  onClick={() => {
                    Navigation("/ContactUs");
                  }}
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
