import React from "react";

const Main = () => {
  return (
    <div className="w-full mt-[120px] lg:flex lg:flex-row lg:px-[50px] lg:justify-between lg:min-h-[700px] mb-[120px]">
      <div className="text-white py-[100px] tracking-[6px] lg:py-[150px] lg:pl-[50px]">
        <div className="text-[28px] font-medium w-[320px] m-auto xl:text-[40px] xl:w-[450px]">
          傳統派報 x 平面設計
        </div>
        <div className="text-start w-[320px] m-auto mt-[28px] xl:text-xl xl:w-[450px] space-y-4">
          <div>從設計到派發</div>
          <div>我們要讓您的設計貼滿大街小巷</div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 px-6 min-h-[360px] max-w-[400px] m-auto lg:max-w-[500px] lg:scale-[1.15] lg:ml-[100px] xl:scale-[1.35] xl:ml-[300px]">
        <div className="flex w-full space-x-4">
          <div className="blockanimation min-w-[120px] min-h-[150px] relative bg-[url('/images/main-block1.svg')] bg-cover cursor-pointer">
            <div className="h-[110px] w-[110px] pl-[16px] pt-[10px] tracking-widest text-white absolute top-[15%] left-[30px] border-white border-l ">
              作品集
            </div>
          </div>
          <div className="blockanimation min-w-[120px] min-h-[150px]  relative main-block2 cursor-pointer">
            <div className="h-[110px] w-[110px] pl-[16px] pt-[10px] tracking-widest text-white absolute top-[15%] left-[30px] border-white border-l">
              聯絡我們
            </div>
          </div>
        </div>
        <div className="min-h-[150px] min-w-[300px] relative main-block3 ">
          <div className="h-[110px] w-[110px] pl-[16px] pt-[10px] tracking-widest text-white absolute top-[15%] right-[10px] border-white border-l">
            派報 x 設計
            <div className="text-sm mt-5">整合式廣告介紹</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
