import React, { useState, useEffect } from "react";
import Link from "next/link";
import Community from "./community";
import { get } from "lodash";
import { useRouter } from "next/router";
import { gtag_report_conversion } from "../lib/ga";

export default function Header({ header }) {
  const router = useRouter();
  const [isScrollDown, setIsScrollDown] = useState(false);

  const logo = get(header?.headerImg, "data.slices[0].primary") || [];

  let lastPos = 0;

  useEffect(() => {
    const handleScrollDown = () => {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 90 && scrollTop > lastPos) {
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
    gtag_report_conversion();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`flex w-full justify-between items-center fixed top-0 z-30`}
    >
      <div
        className={`w-full header-bg bg-cover fixed z-30 top-0 h-[180px] ${
          isScrollDown ? "hidden" : ""
        }`}
      ></div>
      <div
        onClick={() => router.push("/about", undefined, { shallow: true })}
        className={`border-b w-full sm:w-[48%] h-[100px] z-50 ${
          isScrollDown ? "hidden" : ""
        }`}
      >
        <img
          src={`${logo ? logo.logoleft?.url : ""}`}
          alt="logo"
          className="max-h-[75px] w-auto cursor-pointer mt-5 sm:mt-3 ml-2"
        />
      </div>
      <div
        onClick={handleScroll}
        className={`border-b w-[48%] flex justify-end z-50 ${
          isScrollDown ? "hidden" : ""
        }`}
      >
        <img
          src={`${logo ? logo.logoright?.url : ""}`}
          alt="logo"
          className="h-[75px] cursor-pointer mx-5 my-3 md:mx-10"
        />
      </div>
      {/* 選單按鈕 */}
      <div className={`fixed z-50 ${isScrollDown ? "hidden" : ""}`}>
        <nav className="nav-box">
          <input
            type="checkbox"
            id="menu"
            className="lg:hidden border-white border"
          />
          <label htmlFor="menu" className="line lg:hidden">
            <div className="menu"></div>
          </label>

          <nav className="menu-list lg:w-full lg:top-[50px] lg:h-[120px] lg:bg-transparent">
            <ul className="lg:flex lg:space-y-0 lg:space-x-3 lg:!pt-[60px] lg:!ml-[36px] cursor-pointer tracking-[3px] text-lg">
              <Link href="/about" prefetch>
                <li
                  className="my-5 lg:!w-auto hover:scale-[1.05] lg:hover:scale-[1.15] ease-out duration-300"
                  onClick={handleScroll}
                >
                  ．派報{" "}
                  <span className="text-[6px] tracking-[1px]">ABOUT</span>．
                </li>
              </Link>
              <Link href="/gallery/all" prefetch>
                <li
                  className="my-5 lg:!w-auto hover:scale-[1.05] lg:hover:scale-[1.15] ease-out duration-300"
                  onClick={() => gtag_report_conversion()}
                >
                  ．作品集{" "}
                  <span className="text-[6px] tracking-[1px]">WORKS</span>．
                </li>
              </Link>
              <Link href="/category/hint" prefetch>
                <li
                  className="my-5 lg:!w-auto hover:scale-[1.05] lg:hover:scale-[1.15] ease-out duration-300"
                  onClick={() => gtag_report_conversion()}
                >
                  ．商品{" "}
                  <span className="text-[6px] tracking-[1px]">PRODUCT</span>．
                </li>
              </Link>
              <Link href="/contact" shallow>
                <li
                  className="my-5 lg:!w-auto hover:scale-[1.05] lg:hover:scale-[1.15] ease-out duration-300"
                  onClick={() => gtag_report_conversion()}
                >
                  ．聯絡我們{" "}
                  <span className="text-[6px] tracking-[1px]">CONTACT</span>．
                </li>
              </Link>
            </ul>
            <div className="flex space-x-10 justify-center mt-[150px]">
              <Community />
            </div>
          </nav>
        </nav>
      </div>
      {/* 右側icon */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:fixed lg:right-[14px] lg:top-[130px] lg:space-y-6 xl:mr-4 2xl:top-[200px]">
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
    </header>
  );
}
