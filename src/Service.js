import React from "react";
import Navbar from "./Navbar";

function Service() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="my-10">
        <div className="text-center">
          <p className="text-[#333333] text-2xl sm:text-5xl font-bold">
            Services provided by
          </p>
          <p className="text-[#e4b18c] text-xl sm:text-5xl font-bold">
            Mini Minds
          </p>
        </div>

        <p className="text-center my-5 px-5 sm:px-20 md:px-36 text-lg">
        At Mini Minds, we specialize in creative digital marketing solutions that elevate brands and engage audiences. From photography and videography to content creation, social media management, and branding, we deliver visually stunning and impactful results. Whether you're a startup or established brand, Mini Minds is your trusted partner for innovative, results-driven marketing. Let’s create something extraordinary!
        </p>
      </div>
    </div>
  );
}

export default Service;
