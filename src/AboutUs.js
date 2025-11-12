import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { PiFilmSlate } from "react-icons/pi";
import { MdPhotoCamera } from "react-icons/md";
import { IoLogoInstagram, IoVideocam } from "react-icons/io5";
import img1 from "./member1.jpeg";
import img2 from "./member2.jpeg";
import img3 from "./member3.jpeg";
import img4 from "./member4.jpeg";
import img5 from "./member5.jpg";
import { motion } from "framer-motion";

function AboutUs() {
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
    <div className="h-full min-h-screen w-screen">
      <div>
        <Navbar />
      </div>
      <div className="py-24 sm:py-32 sm:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=""
        >
          <div className="flex mx-5 sm:mx-36 space-x-3">
            <p className="text-2xl sm:text-8xl font-semibold">ABOUT</p>
            <p className="text-[#e4b18c] text-xl sm:text-8xl">US</p>
          </div>
          <div className="flex mx-5 sm:mx-36  sm:w-full space-x-3">
            <p className="text-2xl sm:text-4xl font-bold">
              Empowering Businesses in the
              <span className="text-[#e4b18c]">Digital Realm</span>
            </p>
          </div>
          <p className="text-justify  my-5 px-5 sm:px-20 md:px-36 text-lg">
            We are a creative team focused on helping businesses thrive online.
            Specializing in photography, videography, social media management,
            content creation, and branding, we provide tailored solutions to
            boost your brand’s presence and connect with your audience. Let us
            help you tell your brand’s story and make an impact in the digital
            world.
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="my-16 sm:my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 px-10 gap-5"
        >
          <motion.div
            variants={item}
            className="py-2.5 px-4 flex items-center justify-center text-sm bg-whit font-semibold rounded-full border border-black"
          >
            <IoLogoInstagram size={20} />
            <p className="ml-2">Social Media Management</p>
          </motion.div>

          <motion.div
            variants={item}
            className="py-2.5 px-4 font-semibold rounded-full border border-black bg-whit flex items-center justify-center"
          >
            <p className="border px-2 border-black rounded-full">B</p>
            <p className="ml-2">Branding</p>
          </motion.div>

          <motion.div
            variants={item}
            className="py-2.5 px-4 flex items-center justify-center font-semibold bg-whit rounded-full border border-black"
          >
            <PiFilmSlate size={20} />
            <p className="ml-2">Content Creation</p>
          </motion.div>

          <motion.div
            variants={item}
            className="py-2.5 px-4 flex items-center justify-center font-semibold bg-whit rounded-full border border-black"
          >
            <MdPhotoCamera size={20} />
            <p className="ml-2">Photography</p>
          </motion.div>

          <motion.div
            variants={item}
            className="py-2.5 px-4 flex items-center justify-center font-semibold bg-whit rounded-full border border-black"
          >
            <IoVideocam size={20} />
            <p className="ml-2">Videography</p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center my-10"
        >
          <div className="w-full p-5 sm:p-10 bg-black">
            <div className="mb-3 sm:mb-6 flex items-center justify-center">
              <p className="text-4xl font-bold text-center text-white">Our</p>
              <p className="text-[#e4b18c] ml-3 text-4xl font-bold">Mission</p>
            </div>
            <p className="text-lg sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-[#e4b18c] text-justify">
              In <strong className="mr-2">Mini Minds,</strong>
              Our mission is to empower businesses by providing innovative
              digital marketing solutions that drive growth and enhance brand
              visibility. We strive to deliver high-quality photography,
              videography, social media management, and content creation
              services that resonate with audiences and create lasting
              connections. Through creativity and strategic thinking, we are
              dedicated to helping brands succeed in the ever-evolving digital
              landscape.
            </p>
          </div>
        </motion.div>
        <div className="p-6 sm:p-16">
          <div className="mb-8 flex items-center  justify-center">
            <p className="text-4xl font-bold text-center text-black">Our </p>
            <p className="text-[#e4b18c] ml-3 text-xl sm:text-4xl font-bold">
              Core Values
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-7"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            {[
              {
                title: "CREATIVE & INNOVATIVE",
                points: [
                  "Emphasize the importance of thinking outside the box to deliver unique and impactful solutions for clients.",
                  "Showcase your ability to stay ahead of trends in photography, videography, and digital marketing.",
                ],
              },
              {
                title: "CLIENT-CENTRIC APPROACH",
                points: [
                  "Prioritize understanding client needs and delivering tailored solutions.",
                  "Focus on building long-term relationships and exceeding client expectations.",
                ],
              },
              {
                title: "QUALITY & EXCELLENCE",
                points: [
                  "Commit to delivering high-quality work in every project, whether it’s a photo shoot, video production, or social media campaign.",
                  "Strive for perfection in every detail, from content creation to branding.",
                ],
              },
              {
                title: "TRANSPARENCY & INTEGRITY",
                points: [
                  "Build trust by being honest, ethical, and transparent in all dealings.",
                  "Clearly communicate processes, pricing, and results to clients.",
                ],
              },
              {
                title: "COLLABORATION & TEAMWORK",
                points: [
                  "Highlight the importance of working together as a team and with clients to achieve the best results.",
                  "Foster a culture of collaboration among photographers, videographers, content creators, and strategists.",
                ],
              },
              {
                title: "STORYTELLING and AUTHENTICITY",
                points: [
                  "Focus on creating authentic, compelling stories through photography, videography, and branding.",
                  "Help clients connect with their audience on a deeper level.",
                ],
              },
            ].map(({ title, points }, i) => (
              <motion.div
                key={i}
                variants={item}
                className="border-t-8  border-black bg-white rounded-x shadow-black"
              >
                <div className="border-black p-5 border">
                  <p className="text-lg font-bold text-[#e4b18c]">{title}</p>
                  <ul className="list-disc ml-5 my-5 space-y-1 text-sm">
                    {points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        /
        <div>
          <div className="flex items-center justify-center">
            <p className="text-4xl font-bold text-center">Our </p>
            <p className="text-[#e4b18c] ml-3 text-xl sm:text-4xl font-bold">
              Team
            </p>
          </div>

          <motion.div
            className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            {[
              {
                img: img5,
                name: "Roshni Vishwakarma",
                role: "Founder & (Social Media Expert)",
              },
              {
                img: img4,
                name: "Jiten Jogadia",
                role: "Founder (Social Media Expert)",
              },
              {
                img: img1,
                name: "Deepak Laungani",
                role: "Customer Relationship Manager",
              },
              {
                img: img2,
                name: "Aron Bernard",
                role: "Social Media Manager",
              },
              {
                img: img3,
                name: "Omkar Tambe",
                role: "Photographer & Videographer",
              },
            ].map(({ img, name, role }, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="relative overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  src={img}
                  alt={name}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 bg-white rounded-xl p-3 m-2 text-center text-black">
                  <p className="text-lg font-bold">{name}</p>
                  <p className="text-sm text-[#e4b18c] font-semibold">{role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
