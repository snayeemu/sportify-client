import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInternetExplorer,
  BiPhoneCall,
} from "react-icons/bi";
import { FaBehance } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineHeart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { TfiWrite } from "react-icons/tfi";
import { gallery } from "../../../utilities/utilities.js";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#232323] text-white p-8">
        <div className="grid gap-y-16 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 sm:px-10">
          {/* sportify about */}
          <div className="">
            <div className="flex items-center gap-4 mb-7">
              <img src={logo} alt="" className="w-12 h-12 rounded-full" />
              <h2 className="text-3xl font-semibold">Sportify</h2>
            </div>
            <p className="text-[#606060] mb-5">
              Discover a world of athleticism and growth at our sports academy,
              where expert coaching and modern facilities converge to elevate
              your skills to new heights.
            </p>
            <div className="flex gap-3">
              <BiLogoFacebook className="rounded-full text-[#606060] text-lg cursor-pointer hover:scale-95 duration-300" />
              <BiLogoTwitter className="rounded-full text-[#606060] text-lg cursor-pointer hover:scale-95 duration-300" />
              <BiLogoInternetExplorer className="rounded-full text-[#606060] text-lg cursor-pointer hover:scale-95 duration-300" />
              <FaBehance className="rounded-full text-[#606060] text-lg cursor-pointer hover:scale-95 duration-300" />
              <AiOutlineInstagram className="rounded-full text-[#606060] text-lg cursor-pointer hover:scale-95 duration-300" />
            </div>
          </div>

          {/* useful links */}
          <div>
            <h3 className="text-xl">USEFUL LINKS</h3>
            <div className="flex flex-col gap-4">
              <Link className="text-[#606060] hover:underline mt-9">Home</Link>
              <Link className="text-[#606060] hover:underline">
                Instructors
              </Link>
              <Link className="text-[#606060] hover:underline">Classes</Link>
              <Link className="text-[#606060] hover:underline">
                Instructor-Dashboard
              </Link>
            </div>
          </div>

          {/* footer gallery*/}
          <div>
            <h2 className="text-xl mb-9">GALLERY</h2>
            <div className="flex justify-center gap-4 grid-cols-3">
              {gallery.slice(0, 3).map((col, index1) => (
                <div
                  key={`footer-image-col-${index1}`}
                  className="flex flex-col gap-1"
                >
                  {col.slice(0, 2).map((image, index2) => (
                    <div
                      key={`col-footer-${index1}-image-${index2}`}
                      className="overflow-hidden"
                    >
                      <img
                        key={`col-footer-${index1}-image-${index2}`}
                        src={image}
                        alt=""
                        className="w-32 h-32 sm:h-16 md:h-32 lg:h-24 hover:scale-125 duration-300"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl mb-9">CONTACT</h2>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <CiLocationOn className="text-xl text-[#69bc5f]" />
                <p className="text-[#606060]">
                  4127/ 5B-C Nijami Road, Dhaka, Bangladesh
                </p>
              </div>

              <div className="flex gap-4">
                <BiPhoneCall className="text-xl text-[#69bc5f]" />
                <p className="text-[#606060]">
                  Main: +8801705213335 <br />
                  Office: +8801961588284
                </p>
              </div>

              <div className="flex gap-4">
                <TfiWrite className="text-xl text-[#69bc5f]" />
                <p className="text-[#606060]">snayeemu2@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* mini footer */}
      <div className="bg-[#141414] p-10 ">
        <p className="text-[#606060] text-center text-[12px]">
          Copyright ©2023 All rights reserved | This website is made with
          <AiOutlineHeart className="inline mx-1 " />
          by Nayeem
        </p>
      </div>
    </>
  );
};

export default Footer;
