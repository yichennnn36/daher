import React from "react";

const Main = () => {
  return (
    <div className="w-full mt-[20px] lg:flex lg:flex-row lg:px-[50px] lg:justify-between">
      <div className="text-white py-[100px] tracking-[6px] lg:py-[200px] lg:pl-[80px]">
        <div className="text-[28px] font-medium w-[320px] m-auto lg:text-[40px] lg:w-[450px]">
          傳統派報 x 平面設計
        </div>
        <div className="text-start w-[320px] m-auto mt-[28px] lg:text-xl lg:w-[450px]">
          <div>從設計到派發</div>
          <div>我們要讓您的設計貼滿大街小巷</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 px-6 min-h-[360px] max-w-[400px] m-auto lg:max-h-[520px] lg:max-w-[600px] lg:mt-[80px] lg:gap-10 lg:m-10 2xl:scale-[1.25] 2xl:mr-[100px] 2xl:mt-[100px]">
        <div className="lg:w-[240px] lg:h-[240px] relative bg-[url('/images/main-block1.svg')] bg-cover cursor-pointer">
          <div className="h-[110px] w-[110px] pl-[16px] pt-[10px] tracking-widest text-white absolute top-[50%] left-[50%] border-white border-l translate-x-[-50%] translate-y-[-50%] lg:scale-[1.35]">
            作品集
          </div>
        </div>
        <div className="lg:w-[240px] lg:h-[240px] relative main-block2">
          <div className="h-[110px] w-[110px] pl-[16px] pt-[10px] tracking-widest text-white absolute top-[50%] left-[50%] border-white border-l translate-x-[-50%] translate-y-[-50%] lg:scale-[1.35]">
            聯絡我們
          </div>
        </div>
        <div className="col-span-2 w-full lg:h-[240px] lg:w-[540px] relative main-block3">
          <div className="h-[110px] w-[110px] pl-[16px] pt-[10px] tracking-widest text-white absolute top-[50%] left-[50%] border-white border-l translate-x-[38px] translate-y-[-50%] lg:scale-[1.35] lg:translate-x-[84px]">
            派報 x 設計
            <div className="text-sm mt-5">整合式廣告介紹</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
