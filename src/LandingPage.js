import React from "react";
import Navbar from "./Navbar";
import { GoArrowDownRight } from "react-icons/go";
import img2 from "./display image.png";
import {
  IoArrowForwardSharp,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import { MdFacebook, MdPhotoCamera } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { PiFilmSlate } from "react-icons/pi";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div>
      <Navbar />

      <div>
        <div className="flex items-center py-10 px-8 sm:px-14 bg-gradient-to-r from-white to-[#fcf9f6]">
          <div className="">
            <p className="font-bold text-[#333333] text-2xl sm:text-7xl">
              Grow your Business
            </p>
            <div className="flex items-center">
              <p className="font-bold text-[#333333] text-2xl sm:text-7xl">with</p>
              <p className="font-bold ml-6 text-[#e4b18c] text-2xl sm:text-8xl">
                Mini Minds
              </p>
            </div>
            <p className="text-[#333333] mb-3 text-sm sm:mb-7 mt-5 sm:mt-14 text-justify sm:text-lg sm:w-7/12">
              Comprehensive marketing solutions that combine photography,
              videography, branding, and social media management to boost your
              brand, engage your audience, and deliver impactful results.
            </p>

            <div className="flex space-x-5">
              <button className="hover:bg-[#333333] text-[#333333] border border-[#333333] hover:text-white font-semibold font-dmSans px-5 py-1.5 rounded">
                <div className="flex items-center">
                  Learn More
                  <IoArrowForwardSharp className="ml-1 mt-1" />
                </div>
              </button>
              <button className="bg-[#333333] text-white font-semibold font-dmSans px-5 py-1.5 rounded">
                <div className="flex items-center">
                  Explore
                  <GoArrowDownRight className="ml-1 mt-1" />
                </div>
              </button>
            </div>
          </div>

          <div className="sm:block hidden">
            <img src={img2} className="h-[600px] w-[770px]" />
          </div>
        </div>

        <div className="px-10 py-10 sm:py-28">
          <div className="text-center">
           <div className="flex justify-center items-center">
           <p className="text-[#333333] text-2xl sm:text-5xl font-bold">
              Elevate Your 
            </p>
            <p className="text-[#e4b18c] ml-3 text-xl sm:text-5xl font-bold">Brand</p>
           </div>
            
            <p className="text-[#333333] my-4 sm:my-8 text-lg font-dmSans ">
              We are a dynamic, full-service marketing company that thrives on
              delivering innovative solutions tailored to your brand's unique
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-[#333333] gap-5">
            <div className="border shadow-lg border-[#333333] rounded-2xl p-5">
              <div className="flex h-20 text-[#333333] justify-center">
                <MdPhotoCamera
                  size={70}
                  className="bg-red-500 p-2 rounded-l-full text-white"
                />
                <IoVideocam
                  size={70}
                  className="bg-blue-500 p-2 rounded-r-full text-white"
                />
              </div>
              <p className=" font-bold text-[#333333] mt-3 text-xl">
                Photography / Videography
              </p>
              <p className="w-auto text-sm text-justify">
                At <strong style={{ color: "#e4b18c" }}>Mini Minds</strong>, We specialize in creating visuals that bring your brand to life, from product shots to brand films and social media clips. Let’s craft visuals that captivate and leave a lasting impression.
              </p>
            </div>

            <div className="border shadow-lg border-[#333333] rounded-2xl p-5">
              <div className="flex h-20 justify-center">
                <PiFilmSlate
                  className="bg-purple-500 p-2 rounded-full text-white"
                  size={70}
                />
              </div>
              <p className=" font-bold mt-3 text-xl">Content Creation</p>
              <p className="w-auto text-sm text-justify">
                At <strong style={{ color: "#e4b18c" }}>Mini Minds</strong>, We turn your ideas into engaging content that builds a strong online presence and sparks conversation. Let’s bring your brand’s story to life.
              </p>
            </div>

            <div className="border shadow-lg border-[#333333] rounded-2xl p-5">
              <div className="flex h-20 justify-center">
                <div className="grid gap-2 grid-cols-2">
                  <MdFacebook
                    className="bg-blue-500 text-white p-1 rounded"
                    size={40}
                  />
                  <IoLogoInstagram
                    className="bg-pink-500 text-white p-1 rounded"
                    size={40}
                  />
                  <IoLogoTwitter
                    className="bg-black text-white p-1 rounded"
                    size={40}
                  />
                  <IoLogoLinkedin
                    className="bg-blue-700 text-white p-1 rounded"
                    size={40}
                  />
                </div>
              </div>
              <p className=" font-bold mt-3 text-xl">Social Media Managing</p>
              <p className="w-auto text-sm text-justify">
                At <strong style={{ color: "#e4b18c" }}>Mini Minds</strong>, We turn your vision into a powerful social media presence with engaging content and effective campaigns that drive results. Let’s make your brand unforgettable online.
              </p>
            </div>

            <div className="border shadow-lg border-[#333333] rounded-2xl p-5">
              <div className="flex h-20 justify-center">
                <p className="text-5xl bg-yellow-500 text-white py-3 px-7 rounded-full font-bold">
                  B
                </p>
              </div>
              <p className=" font-bold mt-3 text-xl">Branding</p>
              <p className="w-auto text-sm text-justify">
                At <strong style={{ color: "#e4b18c" }}>Mini Minds</strong>, We turn your vision into a standout brand with unique designs and strategies that leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default LandingPage;
