import React from "react";
import Navbar from "./Navbar";
import { MdEmail, MdMail } from "react-icons/md";
import { PhoneCall } from "lucide";
import { FaPhone } from "react-icons/fa";
import { GoLocation, GoMail } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import Footer from "./Footer";

function ContactUs() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
       <div className="w-full flex items-center bg-[#fcf9f6] justify-center h-60">
       <div className="flex justify-center items-center">
              <p className="text-[#333333] text-2xl sm:text-5xl font-bold">
                We'd love to talk
              </p>
              <p className="text-[#e4b18c] ml-3 text-xl sm:text-5xl font-bold">
                to you
              </p>
            </div>
       </div>
        <div className="flex justify-center">
          <div className="sm:flex items-center mt-10 mb-28 justify-between sm:w-10/12">
            <div className="flex  bg-white w-96 border-[#333333] border p-5 items-center">
              <FaPhone size={30} />
              <div className="ml-2">
                <p className="font-semibold">Phone No</p>
                <p>+91 9967784839</p>
              </div>
            </div>

            <div className="flex bg-white w-96 border-[#333333] border p-5 items-center">
              <MdMail size={30} />
              <div className="ml-2">
                <p className="font-semibold">Email</p>
                <p>rjsminiminds@gmail.com</p>
              </div>
            </div>

            <div className="flex bg-white w-96 border-[#333333] border p-5 items-center">
              <IoLocationSharp size={30} />
              <div className="ml-2">
                <p className="font-semibold">Address</p>
                <p>Near Phoenix mall , Kurla West Mumbai 400071</p>
              </div>
            </div>
          </div>
        </div>

       <div className="">
       <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.488310742594!2d72.88626672493018!3d19.086222301652093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced1c96aa987%3A0x34cb4a6927ca9c36!2sphoenix%20market%20City%20Mall!5e0!3m2!1sen!2sin!4v1739450514821!5m2!1sen!2sin" height={300}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactUs;
