import React, { useRef, useState } from "react";
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
import BrandsServed from "./BrandsServed";
import Content2 from "./Content2";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useInView } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

function LandingPage() {
  const [subtextCount, setSubtextCount] = useState(0);
  const navigation = useNavigate();

  const sectionRef = useRef(null);
  const controls = useAnimation();
  const elevateRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRef = useRef(null);

  const isInView = useInView(elevateRef, { once: false, margin: "-100px" });
  const subtextInView = useInView(subtextRef, { once: true, margin: "-100px" });
  const headingInView = useInView(headingRef, {
    once: false,
    margin: "-100px",
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (subtextInView && subtextCount < 2) {
      setSubtextCount((prev) => prev + 1);
    }
  }, [subtextInView]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: "easeOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="h-screen  w-screen">
      <div>
        <Navbar />
      </div>

      <div className="">
        <div className="py-16 sm:py-40">
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 60 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="flex mt-10 sm:mt-20 justify-center items-center"
          >
            <div>
              <p className="font-bold  text-2xl sm:text-7xl">
                Elevate Your Elegance
              </p>
              <div className="flex items-center">
                <p className="font-bold  text-2xl sm:text-7xl">with</p>
                <p className="font-bold ml-6 text-[#e4b18c] text-2xl sm:text-8xl">
                  Mini Minds
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={subtextRef}
            initial={{ opacity: 0, y: 60 }}
            animate={subtextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="flex justify-center items-center"
          >
            <p className=" mb-3 text-sm sm:mb-7 mt-5 sm:mt-14 text-center sm:text-lg sm:w-7/12">
              Comprehensive marketing solutions that combine photography,
              videography, branding, and social media management to boost your
              brand, engage your audience, and deliver impactful results.
            </p>
          </motion.div>

          <motion.div
            ref={subtextInView}
            initial={{ opacity: 0, y: 60 }}
            animate={subtextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="flex justify-center space-x-5"
          >
            <button className="hover:bg-white  border border-[#333333] hover:text-[#333333] font-semibold font-dmSans px-5 py-1.5 rounded">
              <div
                onClick={() => navigation("/AboutUs")}
                className="flex items-center"
              >
                Learn More
                <IoArrowForwardSharp className="ml-1 mt-1" />
              </div>
            </button>
            <button className="bg-black text-white font-semibold font-dmSans px-5 py-1.5 rounded">
              <div
                onClick={() => {
                  sectionRef.current.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center"
              >
                Explore
                <GoArrowDownRight className="ml-1 mt-1" />
              </div>
            </button>
          </motion.div>
        </div>

        <div ref={sectionRef} className="p-5 sm:p-10 sm:py-28">
          <motion.div
            ref={elevateRef}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <div className="flex justify-center items-center">
              <p className=" text-2xl sm:text-5xl font-bold">Elevate Your</p>
              <p className="text-[#e4b18c] ml-3 text-xl sm:text-5xl font-bold">
                Brand
              </p>
            </div>

            <p className="  my-4 sm:my-8 sm:text-lg font-dmSans ">
              We are a dynamic, full-service marketing company that thrives on
              delivering innovative solutions tailored to your brand's unique
              needs.
            </p>
          </motion.div>

          <motion.div
            ref={elevateRef}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 text-[#333333] gap-5"
          >
            <motion.div
              variants={item}
              className="shadow-lg bg-black rounded-2xl p-5"
            >
              <div className="flex h-20  justify-center">
                <MdPhotoCamera
                  size={70}
                  className="bg-red-500 p-2 rounded-l-full "
                />
                <IoVideocam
                  size={70}
                  className="bg-blue-500 p-2 rounded-r-full "
                />
              </div>
              <p className=" font-bold text-white mt-3 text-xl">
                Photography / Videography
              </p>
              <p className="w-auto text-white text-sm text-justify">
                At <strong style={{ color: "#e4b18c" }}>Mini Minds</strong>, We
                specialize in creating visuals that bring your brand to life,
                from product shots to brand films and social media clips. Let’s
                craft visuals that captivate and leave a lasting impression.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-black shadow-lg rounded-2xl p-5"
            >
              <div className="flex h-20 justify-center">
                <PiFilmSlate
                  className="bg-purple-500 p-2 rounded-full text-white"
                  size={70}
                />
              </div>
              <p className=" font-bold mt-3 text-white text-xl">
                Content Creation
              </p>
              <p className="text-white w-auto text-sm text-justify">
                At <strong style={{ color: "#e4b18c" }}>Mini Minds</strong>, We
                turn your ideas into engaging content that builds a strong
                online presence and sparks conversation. Let’s bring your
                brand’s story to life.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="shadow-lg bg-black rounded-2xl p-5"
            >
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
                    className="bg-white text-black p-1 rounded"
                    size={40}
                  />
                  <IoLogoLinkedin
                    className="bg-blue-700 text-white p-1 rounded"
                    size={40}
                  />
                </div>
              </div>
              <p className=" font-bold mt-3 text-white text-xl">
                Social Media Managing
              </p>
              <p className="text-white w-auto text-sm text-justify">
                At <strong style={{ color: "#e4b18c" }}>Mini Minds</strong>, We
                turn your vision into a powerful social media presence with
                engaging content and effective campaigns that drive results.
                Let’s make your brand unforgettable online.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="shadow-lg bg-black rounded-2xl p-5"
            >
              <div className="flex h-20 justify-center">
                <p className="text-5xl bg-yellow-500 text-white py-3 px-7 rounded-full font-bold">
                  B
                </p>
              </div>
              <p className=" font-bold text-white mt-3 text-xl">Branding</p>
              <p className="text-white w-auto text-sm text-justify">
                At <strong style={{ color: "#e4b18c" }}>Mini Minds</strong>, We
                turn your vision into a standout brand with unique designs and
                strategies that leave a lasting impression.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div>
          <Content2 />
        </div>

        <div className="py-18">
          <div className="flex justify-center items-center ">
            <p className="text-2xl sm:text-5xl font-bold">Brands we</p>
            <p className="text-[#e4b18c] ml-3 text-xl sm:text-5xl font-bold">
              Served
            </p>
          </div>
          <p className="text-white my-4 sm:my-8 text-center text-lg font-dmSans">
            Empowering Brands, Amplifying Success: Testimonials from the Brands
            We’ve Served
          </p>
          <BrandsServed />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
