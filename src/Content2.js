import React from "react";
import img1 from './content1.jpeg'
import img2 from './content2.jpeg';
import img3 from './content3.jpeg';
import img4 from './content4.jpeg';
import img5 from './content5.jpeg';

function Content2() {
  return (
    <div>
      <div className="flex justify-center mb-5 items-center ">
        <p className="text-[#333333] text-2xl sm:text-5xl font-bold">Work by</p>
        <p className="text-[#e4b18c] ml-3 text-xl sm:text-5xl font-bold">
          Mini Minds
        </p>
      </div>

      <div className="flex p-0 sm:p-5 justify-center">
        <div className="grid grid-col-1 gap-5 sm:grid-cols-5">
            <img className="h-96 w-80" src={img1} />
            <img className="h-96 w-80" src={img2} />
            <img className="h-96 w-80" src={img3} />
            <img className="h-96 w-80" src={img4} />
            <img className="h-96 w-80" src={img5} />
        </div>
      </div>
    </div>
  );
}

export default Content2;
