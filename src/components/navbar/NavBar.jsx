import Image from "next/image";
import React from "react";

import homeLogo from "../../../public/assets/home-logo.png";
import helpingHand from "../../../public/assets/others/helping-hand.svg";

import { CiSearch } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="md-p-fixed md-z-10 md-r-l-t-0 flex items-center justify-between w-full md-h-4 h-20 px-4 bg-white md-border-b ">
      <div className="flex items-center">
        <div className="w-11 lg:w-fit">
          <Image
            src={homeLogo}
            alt="homeLogo"
            className="w-9 md:w-11 h-9 md:h-11"
          />
        </div>
        <div class="ml-6 hidden lg:block">
          <h3 class="text-xl font-bold text-black dark:text-hadith-deepoffwhite ">
            হাদিস সমূহ
          </h3>
          <h6 class="text-sm text-[#404040] dark:text-hadith-deepoffwhite">
            হাদিস পড়ুন শিখুন এবং জানুন
          </h6>
        </div>
        <div class="ml-4 xss:ml-3 block lg:hidden">
          <h1 class="text-lg sm:text-[1.7rem] leading-7 text-[#1fa471] ">
            আল হাদিস
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4">
        <form action="" className="relative">
          <div className="hidden lg:block">
            <div>
              <CiSearch className="absolute left-4 top-[1.1rem]" />
            </div>
            <input
              type="text"
              className="border-[#DEE1E5] text-hadith-offblack border-2 p-3 rounded-lg focus:outline-0 focus:text-black pl-10 pr-10"
              placeholder="Search Hadith"
            />
          </div>
          <div className="lg:hidden">
            <div className="bg-[#ECEEF0] w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer">
              <CiSearch className="" />
            </div>
          </div>
        </form>
        <div className="lg:ml-12">
          <div class="hidden 2xl:flex cursor-pointer px-5 py-3 rounded-lg text-white bg-d-color  items-center gap-3">
            <p class="webkit text-[1.05rem] leading-[1]">সাপোর্ট করুন</p>
            <Image src={helpingHand} alt="helpingHand" />
          </div>
          <div className="2xl:hidden">
            <div className="p-2 bg-d-color flex items-center justify-center rounded-lg">
              <IoIosSettings className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      {/* <div></div> responsive right sidebar */}
    </div>
  );
};

export default NavBar;
