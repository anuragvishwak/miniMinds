import React from "react";
import img1 from "./Miniminds Logo.pdf.png";

function Navbar() {
  return (
    <div className="flex imtes-center  p-3">
      <img src={img1} />
      <div>
        <button className="">Home</button>
        <button>Services</button>
        <button>About Us</button>
        <button>Contact Us</button>
      </div>
      <button>
          
      </button>
    </div>
  );
}

export default Navbar;
