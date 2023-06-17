import React from "react";

const Banner = () => {
  return (
    <>
      <div className="w-[103%] h-[105vh] fixed top-[-20px] left-[-12px] z-[-100] banner bg-cover"></div>
      <div className="fixed z-[-60] banner-circle1 bg-cover w-[1100px] h-[1100px] top-[-500px] left-[-700px] opacity-70 scale-110 md:left-[-480px] xl:left-[-400px] 2xl:w-[1250px] 2xl:h-[1250px]  2xl:left-[-550px]"></div>
      <div className="fixed z-[-50] banner-circle1 bg-cover w-[1100px] h-[1100px] top-[-500px] left-[-700px] opacity-90 md:left-[-480px] xl:left-[-400px] 2xl:w-[1250px] 2xl:h-[1250px]  2xl:left-[-550px]"></div>
      <div className="fixed z-[-70] banner-circle2 bg-cover w-[600px] h-[600px] top-[580px] left-[60px] opacity-90 md:left-[260px] xl:left-[300px] 2xl:w-[750px] 2xl:h-[700px] 2xl:top-[700px]"></div>
      <div className="fixed z-[-80] banner-circle2 bg-cover w-[600px] h-[600px] top-[580px] left-[60px] opacity-60 scale-110 md:left-[260px] xl:left-[300px] 2xl:w-[750px] 2xl:h-[700px] 2xl:top-[700px]"></div>
    </>
  );
};

export default Banner;
