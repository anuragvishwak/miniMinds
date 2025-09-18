import React from "react";
import { motion } from "framer-motion";
import img1 from "./content1.jpeg";
import img2 from "./content2.jpeg";
import img3 from "./content3.jpeg";
import img4 from "./content4.jpeg";
import img5 from "./content5.jpeg";
import sampleVideo from "./Sample content video.mp4";

function Content2() {
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

  const content = [
    { type: "img", src: img1 },
    { type: "img", src: img2 },
    { type: "video", src: sampleVideo },
    { type: "img", src: img3 },
    { type: "img", src: img4 },
    { type: "img", src: img5 },
  ];

  return (
    <div className="py-10">
      <div className="flex justify-center mb-5 items-center">
        <p className="text-2xl sm:text-5xl font-bold">Work by</p>
        <p className="text-[#e4b18c] ml-3 text-xl sm:text-5xl font-bold">
          Mini Minds
        </p>
      </div>

      <div className="flex p-0 sm:p-5 justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {content.map((itemData, index) =>
            itemData.type === "img" ? (
              <motion.img
                key={index}
                variants={item}
                src={itemData.src}
                className="h-[500px] w-full object-cover rounded-lg"
                alt={`work-${index}`}
              />
            ) : (
              <motion.video
                key={index}
                variants={item}
                autoPlay
                 loop
                 muted
                // playsInline
                className="h-[500px] w-full object-cover rounded-lg"
              >
                <source src={itemData.src} type="video/mp4" />
                Your browser does not support the video tag.
              </motion.video>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Content2;
