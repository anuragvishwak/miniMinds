import React from "react";
import Navbar from "./Navbar";
import { MdEmail, MdMail } from "react-icons/md";
import { PhoneCall } from "lucide";
import { FaPhone } from "react-icons/fa";
import { GoLocation, GoMail } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import Footer from "./Footer";
import { motion } from "framer-motion";

function ContactUs() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-screen">
      <div>
        <Navbar />
      </div>

      <div className="">
        <div className="w-full flex items-center justify-center  sm:h-60">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-32 mb-5 sm:mb-0 flex justify-center items-center"
          >
            <p className="text-2xl sm:text-5xl  font-bold">We'd love to talk</p>
            <p className="text-[#e4b18c] ml-3 text-xl sm:text-5xl font-bold">
              to you
            </p>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="sm:flex items-center sm:mt-10 mb-14 sm:mb-28 justify-between sm:w-10/12"
          >
            <div className="flex  w-80 sm:w-96 border-black border p-5 items-center">
              <FaPhone size={30} />
              <div className="ml-2">
                <p className="font-semibold">Phone No</p>
                <p>+91 9967784839</p>
              </div>
            </div>

            <div className="flex w-80 sm:w-96 sm:my-0 my-3 border-black border p-5 items-center">
              <MdMail size={30} />
              <div className="ml-2">
                <p className="font-semibold">Email</p>
                <p>rjsminiminds@gmail.com</p>
              </div>
            </div>

            <div className="flex w-80 sm:w-96 border-black border p-5 items-center">
              <IoLocationSharp size={30} />
              <div className="ml-2">
                <p className="font-semibold">Address</p>
                <p>Near Phoenix mall , Kurla West Mumbai 400071</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mb-14 sm:mb-20 shadow-xl border border-gray-300 rounded-xl bg-black mx-5 sm:mx-20">
          <div className="p-3">
            <p className="text-white text-2xl font-bold">Find us here</p>
            <p className="text-[#e4b18c]">
              Visit our location at Phoenix Marketcity
            </p>
          </div>
         <motion.div
           initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
         >
           <iframe 
            className="w-full h-96 rounded-b-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.488310742594!2d72.88626672493018!3d19.086222301652093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced1c96aa987%3A0x34cb4a6927ca9c36!2sphoenix%20market%20City%20Mall!5e0!3m2!1sen!2sin!4v1739450514821!5m2!1sen!2sin"
            height={300}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
         </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
