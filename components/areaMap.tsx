import React, { useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import MapModal from "./mapModal";
import { get } from "lodash";

const AreaMap = ({ area }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [targetImg, setTargetImg] = useState("");
  const areaData = get(area, "data.slices");
  const title = get(area, "data.title");

  const toObject = (arr: []) => {
    let obj = {};
    arr.forEach((item: any) => (obj[item.primary.text] = item.items));
    return obj;
  };

  const mapTarget = toObject(areaData);

  const handleClick = (city) => {
    setTargetImg(mapTarget?.[city] || "");
    setIsOpen(true);
  };

  const Tag = ({ city, position }) => {
    return (
      <img
        src={`/images/${city}.png`}
        alt={city}
        className={`absolute ${position} w-[12%] hover:scale-[1.15] ease-out duration-[400ms] cursor-pointer`}
        onClick={() => handleClick(city)}
      />
    );
  };

  return (
    <>
      <div className="relative md:px-[50px] py-20 lg:flex lg:items-center">
        <div className="text-center">
          <PrismicRichText
            key="title"
            field={title}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-2xl md:text-4xl leading-10">{children}</h1>
              ),
              heading2: ({ children }) => (
                <h2 className="text-xl md:text-3xl leading-10">{children}</h2>
              ),
              heading3: ({ children }) => (
                <h3 className="text-lg md:text-2xl leading-8">{children}</h3>
              ),
              heading4: ({ children }) => (
                <h4 className="text-base md:text-xl">{children}</h4>
              ),
              heading5: ({ children }) => (
                <h5 className="text-sm md:text-lg">{children}</h5>
              ),
              heading6: ({ children }) => (
                <h6 className="text-sm md:text-lg">{children}</h6>
              ),
              paragraph: ({ children }) => (
                <p className="text-xs md:text-base">{children}</p>
              ),
            }}
          />
        </div>
        <div className="relative m-12 lg:ml-16">
          <img src="/images/citymap_outline.png" alt="map" className="" />
          <Tag city="梓官" position="top-[22%] left-[-3%]" />
          <Tag city="楠梓" position="top-[33%] left-[-3%]" />
          <Tag city="左營" position="top-[38%] left-[-3%]" />
          <Tag city="鼓山" position="top-[44%] left-[-3%]" />
          <Tag city="三民" position="top-[50%] left-[-3%]" />
          <Tag city="鹽埕" position="top-[55%] left-[-3%]" />
          <Tag city="前金" position="top-[61%] left-[-3%]" />
          <Tag city="新興" position="top-[66.5%] left-[-3%]" />
          <Tag city="前鎮" position="top-[73.5%] left-[3%]" />
          <Tag city="小港" position="top-[83%] left-[2%]" />
          <Tag city="岡山" position="top-[2.5%] right-[25%]" />
          <Tag city="橋頭" position="top-[12%] right-[26%]" />
          <Tag city="大社" position="top-[19.5%] right-[17%]" />
          <Tag city="仁武" position="top-[26.5%] right-[19%]" />
          <Tag city="鳥松" position="top-[33.5%] right-[21%]" />
          <Tag city="屏東" position="top-[43.5%] right-[-7%]" />
          <Tag city="鳳山" position="top-[58%] right-[13%]" />
          <Tag city="苓雅" position="top-[63.5%] right-[-3%]" />
          <Tag city="大寮" position="top-[74%] right-[6%]" />
          <Tag city="林園" position="top-[87%] right-[12%]" />
        </div>
        <div className="relative m-12 lg:ml-8 lg:scale-[0.9]">
          <img src="/images/specialmap_outline.png" alt="map" className="" />
          <Tag city="阿蓮" position="top-[1%] left-[34%]" />
          <Tag city="湖內" position="top-[-4%] left-[-2%]" />
          <Tag city="路竹" position="top-[19%] left-[-3%]" />
          <Tag city="彌陀" position="top-[30%] left-[4%]" />
          <Tag city="燕巢" position="top-[42.5%] left-[9%]" />
          <Tag city="麟洛" position="top-[60.5%] left-[14%]" />
          <Tag city="萬丹" position="top-[67.5%] left-[16%]" />
          <Tag city="新園" position="top-[74.5%] left-[15%]" />
          <Tag city="東港" position="top-[91%] left-[19%]" />
          <Tag city="美濃" position="top-[15%] right-[3%]" />
          <Tag city="旗山" position="top-[28%] right-[16%]" />
          <Tag city="大樹" position="top-[37%] right-[16%]" />
          <Tag city="長治" position="top-[39.5%] right-[-2%]" />
          <Tag city="內埔" position="top-[51.5%] right-[-1%]" />
          <Tag city="竹田" position="top-[60%] right-[-1%]" />
          <Tag city="萬巒" position="top-[66.5%] right-[-2%]" />
          <Tag city="潮州" position="top-[72.5%] right-[-2%]" />
          <Tag city="崁頂" position="top-[80%] right-[1%]" />
          <Tag city="南州" position="top-[85%] right-[11%]" />
          <Tag city="林邊" position="top-[92.5%] right-[2%]" />
        </div>
      </div>
      <MapModal isShow={isOpen} setIsShow={setIsOpen} image={targetImg} />
    </>
  );
};

export default AreaMap;
