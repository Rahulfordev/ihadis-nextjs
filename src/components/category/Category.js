import React from "react";
import { CiSearch } from "react-icons/ci";

const Category = () => {
  return (
    <div className="col-start-1 hidden xl:block category-bar w-[350px] lg-max-full">
      <div className="rounded-2xl h-[calc(100vh_-_115px)] bg-white flex items-center flex-col">
        <div className="border-b-[1px] w-full flex items-center justify-center text-lg text-white border-[#ECEEF0]">
          <p class="bg-white text-black w-1/2 text-center py-3 cursor-pointer rounded-tl-2xl text-xl style-Kalpurush-webKit">
            বই
          </p>
          <p class="bg-d-color text-white text-xl style-Kalpurush-webKit w-1/2 text-center py-3 cursor-pointer rounded-tr-xl">
            অধ্যায়
          </p>
        </div>
        <div className="w-full h-[50px] category-bar">
          <div className="relative px-4 pr-6 my-3">
            <CiSearch className="absolute inset-y-6 left-7" />
            <input
              placeholder="Search For Filter"
              class="mt-2 bg-main-color w-full text-hadith-offblack p-3 rounded-lg focus:outline-0 focus:text-black pl-10 pr-10"
              type="text"
            ></input>
          </div>
          <div className="pl-4 cat-scrl pb-10 xl:pb-0 lg-max-h lg:h-[calc(100vh_-_270px)] pr-1.5 mr-1.5 mt-4">
            <div className="flex gap-y-2 flex-col w-full">
              <div className="p-4 flex cursor-pointer bg-[#ebfcf6] justify-between items-center rounded-2xl h-[6.25rem]">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 xl:w-10 flex items-center justify-center relative">
                    <h3 className="text-white text-[1.05rem] absolute text-xl font-medium group-hover:opacity-100 xl:text-lg">
                      ১
                    </h3>
                    <svg
                      className="fill"
                      width="56"
                      height="62"
                      viewBox="0 0 56 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-between gap-1.5 group">
                    <h4>ওহীর সূচনা অধ্যায়</h4>
                    <div className="text-[#40404099] text-sm leading-[26px] md:text-[13px]">
                      হাদিসের রেঞ্জ: ১ - ৭
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex group cursor-pointer hover:bg-[#ebfcf6] bg-white justify-between items-center rounded-2xl h-[6.25rem]">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 xl:w-10  flex items-center justify-center relative">
                    <h3 className="absolute text-xl font-medium text-gray-400 group-hover:text-white xl:text-lg">
                      ২
                    </h3>
                    <svg
                      className="fill-[#f1f5f4] group-hover:fill-[#096e55]"
                      width="56"
                      height="62"
                      viewBox="0 0 56 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-between gap-1.5">
                    <h4 className="text-base font-medium leading-7 text-[15px] text-black md:text-base xl:text-base">
                      ঈমান
                    </h4>
                    <div className="text-[#40404099] text-sm leading-[26px] md:text-[13px]">
                      হাদিসের রেঞ্জ: <span>৮ - ৫৮</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex group cursor-pointer hover:bg-[#ebfcf6] bg-white justify-between items-center rounded-2xl h-[6.25rem]">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 xl:w-10  flex items-center justify-center relative">
                    <h3 className="absolute text-xl font-medium text-gray-400 group-hover:text-white xl:text-lg">
                      ৩
                    </h3>
                    <svg
                      className="fill-[#f1f5f4] group-hover:fill-[#096e55]"
                      width="56"
                      height="62"
                      viewBox="0 0 56 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-between gap-1.5">
                    <h4 className="text-base font-medium leading-7 text-[15px] text-black md:text-base xl:text-base">
                      ইল্‌ম
                    </h4>
                    <div className="text-[#40404099] text-sm leading-[26px] md:text-[13px]">
                      হাদিসের রেঞ্জ: <span>৫৯ - ১৩৪</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex group cursor-pointer hover:bg-[#ebfcf6] bg-white justify-between items-center rounded-2xl h-[6.25rem]">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 xl:w-10  flex items-center justify-center relative">
                    <h3 className="absolute text-xl font-medium text-gray-400 group-hover:text-white xl:text-lg">
                      ৪
                    </h3>
                    <svg
                      className="fill-[#f1f5f4] group-hover:fill-[#096e55]"
                      width="56"
                      height="62"
                      viewBox="0 0 56 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-between gap-1.5">
                    <h4 className="text-base font-medium leading-7 text-[15px] text-black md:text-base xl:text-base">
                      ওজু
                    </h4>
                    <div className="text-[#40404099] text-sm leading-[26px] md:text-[13px]">
                      হাদিসের রেঞ্জ: <span>১৩৫ - ২৪৭</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex group cursor-pointer hover:bg-[#ebfcf6] bg-white justify-between items-center rounded-2xl h-[6.25rem]">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 xl:w-10  flex items-center justify-center relative">
                    <h3 className="absolute text-xl font-medium text-gray-400 group-hover:text-white xl:text-lg">
                      ৫
                    </h3>
                    <svg
                      className="fill-[#f1f5f4] group-hover:fill-[#096e55]"
                      width="56"
                      height="62"
                      viewBox="0 0 56 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-between gap-1.5">
                    <h4 className="text-base font-medium leading-7 text-[15px] text-black md:text-base xl:text-base">
                      গোসল
                    </h4>
                    <div className="text-[#40404099] text-sm leading-[26px] md:text-[13px]">
                      হাদিসের রেঞ্জ: <span>২৪৮ - ২৯৩</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex group cursor-pointer hover:bg-[#ebfcf6] bg-white justify-between items-center rounded-2xl h-[6.25rem]">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 xl:w-10  flex items-center justify-center relative">
                    <h3 className="absolute text-xl font-medium text-gray-400 group-hover:text-white xl:text-lg">
                      ৬
                    </h3>
                    <svg
                      className="fill-[#f1f5f4] group-hover:fill-[#096e55]"
                      width="56"
                      height="62"
                      viewBox="0 0 56 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-between gap-1.5">
                    <h4 className="text-base font-medium leading-7 text-[15px] text-black md:text-base xl:text-base">
                      হায়েজ
                    </h4>
                    <div className="text-[#40404099] text-sm leading-[26px] md:text-[13px]">
                      হাদিসের রেঞ্জ: <span>২৯৪ - ৩৩৩</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex group cursor-pointer hover:bg-[#ebfcf6] bg-white justify-between items-center rounded-2xl h-[6.25rem]">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 xl:w-10  flex items-center justify-center relative">
                    <h3 className="absolute text-xl font-medium text-gray-400 group-hover:text-white xl:text-lg">
                      ৭
                    </h3>
                    <svg
                      className="fill-[#f1f5f4] group-hover:fill-[#096e55]"
                      width="56"
                      height="62"
                      viewBox="0 0 56 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-between gap-1.5">
                    <h4 className="text-base font-medium leading-7 text-[15px] text-black md:text-base xl:text-base">
                      তায়াম্মুম
                    </h4>
                    <div className="text-[#40404099] text-sm leading-[26px] md:text-[13px]">
                      হাদিসের রেঞ্জ: <span>৩৩৪ - ৩৪৮</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex group cursor-pointer hover:bg-[#ebfcf6] bg-white justify-between items-center rounded-2xl h-[6.25rem]">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 xl:w-10  flex items-center justify-center relative">
                    <h3 className="absolute text-xl font-medium text-gray-400 group-hover:text-white xl:text-lg">
                      ৮
                    </h3>
                    <svg
                      className="fill-[#f1f5f4] group-hover:fill-[#096e55]"
                      width="56"
                      height="62"
                      viewBox="0 0 56 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-between gap-1.5">
                    <h4 className="text-base font-medium leading-7 text-[15px] text-black md:text-base xl:text-base">
                      সালাত
                    </h4>
                    <div className="text-[#40404099] text-sm leading-[26px] md:text-[13px]">
                      হাদিসের রেঞ্জ: <span>৩৪৯ - ৫২০</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex group cursor-pointer hover:bg-[#ebfcf6] bg-white justify-between items-center rounded-2xl h-[6.25rem]">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 xl:w-10  flex items-center justify-center relative">
                    <h3 className="absolute text-xl font-medium text-gray-400 group-hover:text-white xl:text-lg">
                      ৯
                    </h3>
                    <svg
                      className="fill-[#f1f5f4] group-hover:fill-[#096e55]"
                      width="56"
                      height="62"
                      viewBox="0 0 56 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-between gap-1.5">
                    <h4 className="text-base font-medium leading-7 text-[15px] text-black md:text-base xl:text-base">
                      সালাতের ওয়াক্তসমূহ
                    </h4>
                    <div className="text-[#40404099] text-sm leading-[26px] md:text-[13px]">
                      হাদিসের রেঞ্জ: <span>৫২১ - ৬০২</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 flex group cursor-pointer hover:bg-[#ebfcf6] bg-white justify-between items-center rounded-2xl h-[6.25rem]">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 xl:w-10  flex items-center justify-center relative">
                    <h3 className="absolute text-xl font-medium text-gray-400 group-hover:text-white xl:text-lg">
                      ১০
                    </h3>
                    <svg
                      className="fill-[#f1f5f4] group-hover:fill-[#096e55]"
                      width="56"
                      height="62"
                      viewBox="0 0 56 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-between gap-1.5">
                    <h4 className="text-base font-medium leading-7 text-[15px] text-black md:text-base xl:text-base">
                      আযান
                    </h4>
                    <div className="text-[#40404099] text-sm leading-[26px] md:text-[13px]">
                      হাদিসের রেঞ্জ: <span>৬০৩ - ৮৭৫</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
