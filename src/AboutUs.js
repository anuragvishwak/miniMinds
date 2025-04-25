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

function AboutUs() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-10 sm:mt-0">
        <div className="">
          <div className="text-center">
            <p className="text-[#333333] text-2xl sm:text-5xl font-bold">
              Empowering Businesses in the
            </p>
            <p className="text-[#e4b18c] text-xl sm:text-5xl font-bold">
              Digital Realm
            </p>
          </div>
          <p className="text-justify sm:text-center my-5 px-5 sm:px-20 md:px-36 text-lg">
            We are a creative team focused on helping businesses thrive online.
            Specializing in photography, videography, social media management,
            content creation, and branding, we provide tailored solutions to
            boost your brand’s presence and connect with your audience. Let us
            help you tell your brand’s story and make an impact in the digital
            world.
          </p>
        </div>

        <div className="my-16 sm:my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 px-10 gap-5">
          <div className="py-1 px-4 md:text-lg flex items-center font-semibold rounded-full border border-[#333333] text-[#333333]">
            <IoLogoInstagram size={20} />
            <p className="ml-2">Social Media Management</p>
          </div>
          <div className="py-1 px-4 md:text-lg font-semibold rounded-full border border-[#333333] flex items-center text-[#333333]">
            <p className="border px-2  border-[#333333] rounded-full">B</p>
            <p className="ml-2">Branding</p>
          </div>
          <div className="py-1 px-4 flex items-center md:text-lg font-semibold rounded-full border border-[#333333] text-[#333333]">
            <PiFilmSlate size={20} />
            <p className="ml-2">Content Creation</p>
          </div>
          <div className="py-1 px-4 flex items-center md:text-lg font-semibold rounded-full border border-[#333333] text-[#333333]">
            <MdPhotoCamera size={20} />
            <p className="ml-2">Photography</p>
          </div>
          <div className="py-1 px-4 md:text-lg flex items-center font-semibold rounded-full border border-[#333333] text-[#333333]">
            <IoVideocam size={20} />
            <p className="ml-2">Videography</p>
          </div>
        </div>

        <div className="flex items-center justify-center my-10">
          <div className="sm:w-8/12 border rounded-xl m-5 p-5 border-[#e4b18c] bg-[#fffafa]">
            <div className="mb-3 flex items-center justify-center">
              <p className="text-4xl font-bold text-center text-[#333333]">
                Our{" "}
              </p>
              <p className="text-[#e4b18c] ml-3 text-4xl font-bold">
                Mission
              </p>
            </div>
            <p className="text-[#e4b18c] text-lg text-justify">
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
        </div>

        <div className="p-10 sm:p-16">
          <div className="mb-8 flex items-center  justify-center">
            <p className="text-4xl font-bold text-center text-[#333333]">
              Our{" "}
            </p>
            <p className="text-[#e4b18c] ml-3 text-xl sm:text-4xl font-bold">
              Core Values
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 text-[#333333] gap-5 gap-7">
            <div className="border p-5 rounded-xl shadow-lg shadow-[#e4b18c]">
              <p className="text-lg font-bold">CREATIVE & INNOVATIVE</p>
              <li>
                Emphasize the importance of thinking outside the box to deliver
                unique and impactful solutions for clients.
              </li>
              <li>
                Showcase your ability to stay ahead of trends in photography,
                videography, and digital marketing.
              </li>
            </div>

            <div className="border p-5 rounded-xl shadow-lg shadow-[#e4b18c]">
              <p className="text-lg font-bold">CLIENT-CETRIC APPROACH</p>
              <li>
                Prioritize understanding client needs and delivering tailored
                solutions.
              </li>
              <li>
                Focus on building long-term relationships and exceeding client
                expectations.
              </li>
            </div>

            <div className="border p-5 rounded-xl shadow-lg shadow-[#e4b18c]">
              <p className="text-lg font-bold">QUALITY & EXCELLENCE</p>
              <li>
                Commit to delivering high-quality work in every project, whether
                it’s a photo shoot, video production, or social media campaign.
              </li>
              <li>
                Strive for perfection in every detail, from content creation to
                branding.
              </li>
            </div>

            <div className="border p-5 rounded-xl shadow-lg shadow-[#e4b18c]">
              <p className="text-lg font-bold">TRANSPARENCY & INTEGRITY</p>
              <li>
                Build trust by being honest, ethical, and transparent in all
                dealings.
              </li>
              <li>
                Clearly communicate processes, pricing, and results to clients.
              </li>
            </div>

            <div className="border p-5 rounded-xl shadow-lg shadow-[#e4b18c]">
              <p className="text-lg font-bold">COLLABORATION & TEAMWORK</p>
              <li>
                Highlight the importance of working together as a team and with
                clients to achieve the best results.
              </li>
              <li>
                Foster a culture of collaboration among photographers,
                videographers, content creators, and strategists.
              </li>
            </div>

            <div className="border p-5 rounded-xl shadow-lg shadow-[#e4b18c]">
              <p className="text-lg font-bold">STORYTELLING and AUTHENTICITY</p>
              <li>
                Focus on creating authentic, compelling stories through
                photography, videography, and branding.
              </li>
              <li>
                Help clients connect with their audience on a deeper level.
              </li>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-8 flex items-center  justify-center">
            <p className="text-4xl font-bold text-center text-[#333333]">
              Our{" "}
            </p>
            <p className="text-[#e4b18c] ml-3 text-xl sm:text-4xl font-bold">
              Team
            </p>
          </div>

          <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 px-10 gap-5">
            <div className="">
              <img className="h-48 rounded-full w-48" src={img5} />
              <p className="text-[#333333]  font-bold text-lg mt-2">
                Roshni Vishwakarma
              </p>
              <p className="font-semibold text-gray-400">Founder & (Social Media Expert)</p>
            </div>
            <div>
              <img className="h-48 rounded-full w-48" src={img4} />
              <p className="text-[#333333] font-bold text-lg mt-2">Jiten Jogadia</p>
              <p className="font-semibold text-gray-400">
                Founder (Social Media Expert)
              </p>
            </div>

            <div>
              <img className="h-48 rounded-full w-48" src={img1} />
              <p className="text-[#333333] font-bold text-lg mt-2">Deepak Laungani</p>
              <p className="font-semibold text-gray-400">
                Customer Relationship Manager (CRM)
              </p>
            </div>

            <div>
              <img className="h-48 rounded-full w-48" src={img2} />
              <p className="text-[#333333] font-bold text-lg mt-2">Aron Bernard</p>
              <p className="font-semibold text-gray-400">
                Social Media Manager
              </p>
            </div>

           

            <div>
              <img className="h-48 rounded-full w-48" src={img3} />
              <p className="text-[#333333] font-bold text-lg mt-2">Omkar Tambe</p>
              <p className="font-semibold text-gray-400">
                Photographer & Videographer
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
