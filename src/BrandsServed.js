import React from 'react';
import Slider from 'react-slick'; // Import the Slider component from react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from "./kabira's cafe.png";
import img2 from './milat club.png';
import img3 from './eraya.png';
import img4 from './rudraksh.png';
import img5 from './symbians.png';
import img6 from './jemma.png';
import img7 from './joyfull.png';
import Navbar from './Navbar';

const BrandsServed = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Number of images per slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // On smaller screens, show 2 images per slide
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // On very small screens, show 1 image per slide
        }
      }
    ]
  };

  return (
    <div className=''>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="carousel-item ">
            <img src={img} alt={`Brand ${index + 1}`} className="h-44  w-48" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandsServed;
