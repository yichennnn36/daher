import React from "react";
import Slider from "./slider";

const SliderSection = () => {
  return (
    <div className="w-full bg-black bg-opacity-70 my-[100px] xl:my-[200px] px-6 py-10 z-30">
      {/* slider title */}
      <div className="flex flex-col justify-center items-center text-white">
        <h1 className="text-xl font-semibold lg:text-[38px]">
          傳統派報 x 平面設計
        </h1>
        <div className="border-white border-b w-[80%] mt-3 mb-6 md:w-[60%] lg:2-[50%] lg:mt-6 xl:w-[30%]"></div>
        <div className="flex flex-col only:items-start text-sm space-y-4 lg:text-base">
          <span>從設計到派發</span>
          <span>我們要讓您的設計貼滿大街小巷</span>
        </div>
      </div>
      {/* slider content */}
      <div className="mt-10">
        {/* slider */}
        <div className="w-full p-10 px-[120px]">
          <Slider />
        </div>
        {/* desc */}
        <div className="text-center px-12 text-[12px] text-white leading-6 lg:text-lg">
          <span>
            大和派報社於1997年投入廣告事業，25年派發廣告經驗，為順應時代變化，大和派報也不斷進步
          </span>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
