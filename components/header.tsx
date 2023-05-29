import React, { useState, useEffect } from "react";
import Link from "next/link";
import Community from "./community";

export default function Header() {
  const [isOnTop, setIsOnTop] = useState(true);
  const [isScrollDown, setIsScrollDown] = useState(false);

  let lastPos = 0;

  useEffect(() => {
    const handleScrollDown = () => {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > lastPos) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
      lastPos = scrollTop;
    };

    window.addEventListener("scroll", handleScrollDown);
    return () => window.removeEventListener("scroll", handleScrollDown);
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`flex w-full justify-between items-center fixed top-0 z-30`}
    >
      <div
        className={`w-full header-bg bg-cover fixed z-30 top-0 h-[180px] ${
          isScrollDown ? "hidden" : ""
        }`}
      ></div>
      <div
        onClick={handleScroll}
        className={`border-b w-[48%] z-50 ${isScrollDown ? "hidden" : ""}`}
      >
        <img
          src="/images/header-left-icon.svg"
          alt="logo"
          className="h-[75px] cursor-pointer mx-5 my-3 md:mx-10"
        />
      </div>
      <div
        className={`border-b w-[48%] flex justify-end z-50 ${
          isScrollDown ? "hidden" : ""
        }`}
      >
        <img
          src="/images/icon.png"
          alt="logo"
          className="h-[75px] cursor-pointer mx-5 my-3 md:mx-10"
        />
      </div>
      {/* 選單按鈕 */}
      <div className={`fixed z-50 ${isScrollDown ? "hidden" : ""}`}>
        <nav className="nav-box">
          <input type="checkbox" id="menu" className="lg:hidden" />
          <label htmlFor="menu" className="line lg:hidden">
            <div className="menu"></div>
          </label>

          <div className="menu-list lg:w-full lg:top-[50px] lg:h-[120px] lg:bg-transparent">
            <ul className="lg:flex lg:space-y-0 lg:space-x-3 lg:!pt-[60px] lg:!ml-[36px] cursor-pointer tracking-[3px] text-lg">
              <Link href="/about">
                <li
                  className="my-5 lg:!w-auto hover:scale-[1.05] lg:hover:scale-[1.15] ease-out duration-300"
                  onClick={handleScroll}
                >
                  ．派報{" "}
                  <span className="text-[6px] tracking-[1px]">ABOUT</span>．
                </li>
              </Link>
              <Link href="/gallery/card">
                <li className="my-5 lg:!w-auto hover:scale-[1.05] lg:hover:scale-[1.15] ease-out duration-300">
                  ．作品集{" "}
                  <span className="text-[6px] tracking-[1px]">WORKS</span>．
                </li>
              </Link>
              <Link href="/product/all">
                <li className="my-5 lg:!w-auto hover:scale-[1.05] lg:hover:scale-[1.15] ease-out duration-300">
                  ．商品{" "}
                  <span className="text-[6px] tracking-[1px]">PRODUCT</span>．
                </li>
              </Link>
              <Link href="/contact">
                <li className="my-5 lg:!w-auto hover:scale-[1.05] lg:hover:scale-[1.15] ease-out duration-300">
                  ．聯絡我們{" "}
                  <span className="text-[6px] tracking-[1px]">CONTACT</span>．
                </li>
              </Link>
            </ul>
            <div className="flex space-x-10 justify-center mt-[150px]">
              <Community />
            </div>
          </div>
        </nav>
      </div>
      {/* 右側icon */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:fixed lg:right-[14px] lg:top-[140px] lg:space-y-6 xl:mr-4">
        <div className="h-[100px] w-[2px] bg-white lg:h-[120px]"></div>
        <div className="space-y-5">
          <Community />
        </div>
        <div className="h-[100px] w-[2px] bg-white xl:h-[120px]"></div>
        <div className="arrow-body mr-5">
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
      </div>
    </div>
  );
}
