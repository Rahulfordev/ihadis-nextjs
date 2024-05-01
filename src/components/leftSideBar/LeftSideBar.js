import React from "react";
import Image from "next/image";

import home from "../../../public/assets/leftbar/home.svg";
import book from "../../../public/assets/leftbar/book.svg";
import subject from "../../../public/assets/leftbar/subject.svg";
import bookmark from "../../../public/assets/leftbar/bookmark.svg";

import others from "../../../public/assets/leftbar/others.svg";
import goto from "../../../public/assets/leftbar/goto.svg";

const LeftSideBar = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white py-8 lg:max-w-[96px] lg:h-full lg:static drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] lg:filter-none">
      <div className="grid grid-cols-5 lg:grid-cols-1 grid-rows-1 lg:grid-rows-[1fr,56px,56px,56px,56px,56px,56px,1fr] place-content-center place-items-center my-auto h-full gap-[4.5%]">
        <Image
          src={home}
          alt="home"
          className="p-2 w-9 lg:w-14 lg:p-4 cursor-pointer  rounded-lg lg:row-start-2 col-start-1"
        />
        <Image
          src={book}
          alt="book"
          className="p-2 w-9 lg:w-14 lg:p-4 bg-d-color cursor-pointer rounded-lg lg:row-start-3"
        />
        <Image
          src={subject}
          alt="subject"
          className="hover:bg-[#f8f8f9] p-2 w-9 lg:w-14 lg:p-4 cursor-pointer rounded-lg lg:row-start-4"
        />
        <Image
          src={bookmark}
          alt="bookmark"
          className="hover:bg-[#f8f8f9] p-2 w-9 lg:w-14 lg:p-4 cursor-pointer rounded-lg lg:row-start-5"
        />
        <div className="lg:row-start-6 cursor-pointer hidden lg:block">
          <Image src={others} alt="others" className="" />
        </div>
        {/* hello */}
        <div className="lg:row-start-7 cursor-pointer">
          <Image src={goto} alt="goto" className="p-2 w-9 lg:w-14 lg:p-4" />
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
