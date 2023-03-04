import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOnTop, setIsOnTop] = useState(true);
  const [isScrollUp, setIsScrollUp] = useState(false);
  let lastPos = 0;

  // window.addEventListener("scroll", () => {
  //   const currentPos = window.scrollY;
  //   if (currentPos > lastPos) {
  //     setIsScrollUp(false);
  //   } else {
  //     setIsScrollUp(true);
  //   }
  //   lastPos = currentPos;
  // });
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) setIsOnTop(false);
    else setIsOnTop(true);
  });

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  //md:px-12 px-4
  return (
    <div className="flex min-h-[60px] w-full justify-between items-center sticky top-0 z-30">
      <div
        className={`w-full header-bg bg-cover fixed z-30 top-0 h-[40px] ${
          !isOnTop && "!h-[160px] header-bg2"
        }`}
      ></div>
      <div onClick={handleScroll} className="border-b w-[48%] z-50">
        <img
          src="/images/header-left-icon.svg"
          alt="logo"
          className="h-[75px] cursor-pointer mx-5 my-3 md:mx-10"
        />
      </div>
      <div className="border-b w-[48%] flex justify-end z-50">
        <img
          src="/images/header-right-icon.svg"
          alt="logo"
          className="h-[75px] cursor-pointer mx-5 my-3 md:mx-10"
        />
      </div>
      {/* 選單按鈕 */}
      <div className="fixed z-50">
        <nav className="nav-box">
          <input type="checkbox" id="menu" className="lg:hidden" />
          <label htmlFor="menu" className="line lg:hidden">
            <div className="menu"></div>
          </label>

          <div className="menu-list lg:w-full lg:top-[50px] lg:h-[100px]">
            <ul className="space-y-10 lg:flex lg:space-y-0 lg:space-x-4 lg:!pt-[60px] lg:!ml-[36px] cursor-pointer">
              <li className="lg:!w-auto">
                ．派報設計{" "}
                <span className="text-[6px] tracking-[1px]">ABOUT</span>．
              </li>
              <li className="lg:!w-auto">
                ．作品集{" "}
                <span className="text-[6px] tracking-[1px]">WORKS</span>．
              </li>
              <li className="lg:!w-auto">
                ．聯絡我們{" "}
                <span className="text-[6px] tracking-[1px]">CONTACT</span>．
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* 右側icon */}
      <div className="hidden xl:flex xl:flex-col xl:items-center xl:fixed xl:right-0 xl:top-[120px] 2xl:top-[150px] xl:space-y-8 xl:mt-[40px] xl:mr-6">
        <div className="h-[160px] w-[2px] bg-white xl:h-[120px]"></div>
        <div className="space-y-14">
          <button className="w-[50px] h-[50px] rounded-[50%] bg-[#c98b2e] flex justify-center items-center">
            <img
              src="/images/facebook.png"
              alt=""
              className="w-[25px] h-[25px]"
            />
          </button>
          <button className="w-[50px] h-[50px] rounded-[50%] bg-[#c98b2e] flex justify-center items-center">
            <img
              src="/images/instagram.png"
              alt=""
              className="w-[25px] h-[25px]"
            />
          </button>
          <button className="w-[50px] h-[50px] rounded-[50%] bg-[#c98b2e] flex justify-center items-center">
            <img src="/images/line.png" alt="" className="w-[25px] h-[25px]" />
          </button>
        </div>
        <div className="h-[160px] w-[2px] bg-white xl:h-[120px]"></div>
      </div>
    </div>
  );
}
