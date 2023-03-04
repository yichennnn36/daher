import React from "react";

const Banner = () => {
  return (
    <>
      <div className="w-[102%] h-[105vh] fixed top-[-20px] left-[-12px] z-[-100] banner bg-cover"></div>
      <div className="fixed z-[-50] banner-circle1 bg-cover w-[1100px] h-[1100px] top-[-460px] left-[-720px] opacity-50 lg:translate-x-[300px] lg:translate-y-[100px]"></div>
      <div className="fixed z-[-40] banner-circle1 bg-cover w-[1100px] h-[1100px] top-[-460px] left-[-720px] opacity-60 scale-110 lg:translate-x-[300px] lg:translate-y-[100px]"></div>
      <div className="fixed z-[-70] banner-circle2 bg-cover w-[700px] h-[700px] top-[600px] left-[150px] lg:translate-x-[300px]"></div>
      <div className="fixed z-[-80] banner-circle2 bg-cover w-[700px] h-[700px] top-[600px] left-[150px] opacity-60 scale-110 lg:translate-x-[300px]"></div>
    </>
  );
};

export default Banner;
