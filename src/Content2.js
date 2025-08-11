import React from "react";
import { motion } from "framer-motion";
import img1 from "./content1.jpeg";
import img2 from "./content2.jpeg";
import img3 from "./content3.jpeg";
import img4 from "./content4.jpeg";
import img5 from "./content5.jpeg";

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
          className="grid grid-cols-1 sm:grid-cols-5 gap-5"
        >
          {[img1, img2, img3, img4, img5].map((img, index) => (
            <motion.img
              key={index}
              variants={item}
              src={img}
              className="h-96 w-80 object-cover"
              alt={`work-${index}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Content2;
