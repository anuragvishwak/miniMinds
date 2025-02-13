import React from "react";
import Navbar from "./Navbar";

function Service() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="flex justify-between w-6/12 m-4 font-semibold">
            <button>
                Photography
            </button>
            <button>
                Videography
            </button>
            <button>
                Social Media Management
            </button>
            <button>
                Content Creation
            </button>
            <button>
               Branding
            </button>
        </div>
      </div>
    </div>
  );
}

export default Service;
