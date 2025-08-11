import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion'; // Add Framer Motion
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from './kabira\'s cafe.png';
import img2 from './milat club.png';
import img3 from './eraya.png';
import img4 from './rudraksh.png';
import img5 from './symbians.png';
import img6 from './jemma.png';
import img7 from './joyfull.png';

const BrandsServed = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  // Framer Motion animation variants
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
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="px-5 py-10 mb-20"
    >
      <Slider {...settings}>
        {images.map((img, index) => (
          <motion.div key={index} variants={item} className="carousel-item flex justify-center">
            <img
              src={img}
              alt={`Brand ${index + 1}`}
              className="h-44 w-48 object-contain"
            />
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default BrandsServed;
