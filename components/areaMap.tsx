import React, { useState } from "react";
import MapModal from "./mapModal";
import { get } from "lodash";

const AreaMap = ({ area }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [targetImg, setTargetImg] = useState("");
  const areaData = get(area, "data.slices");

  const toObject = (arr: []) => {
    let obj = {};
    arr.forEach(
      (item: any) => (obj[item.primary.text] = item.primary.image.url)
    );
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
      <div className="relative md:px-20 py-20 lg:flex">
        <div className="relative m-12 lg:m-16">
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
        <div className="relative m-12 lg:m-16">
          <img src="/images/specialmap_outline.png" alt="map" className="" />
          <Tag city="阿蓮" position="top-[-0.5%] left-[3%] lg:top-[0%]" />
          <Tag city="路竹" position="top-[17%] left-[-3%] lg:top-[16.5%]" />
          <Tag city="彌陀" position="top-[29.5%] left-[-3%] lg:top-[28%]" />
          <Tag city="燕巢" position="top-[42%] left-[-2%] lg:top-[39.5%]" />
          <Tag city="麟洛" position="top-[60%] left-[4%] lg:top-[57%]" />
          <Tag city="萬丹" position="top-[67.5%] left-[3%] lg:top-[63.5%]" />
          <Tag city="新園" position="top-[74.5%] left-[5%] lg:top-[70%]" />
          <Tag city="東港" position="top-[90%] left-[4%] lg:top-[85%]" />
          <Tag city="美濃" position="top-[14%] right-[3%] lg:top-[13%]" />
          <Tag city="旗山" position="top-[27.5%] right-[16%] lg:top-[26%]" />
          <Tag city="大樹" position="top-[36.5%] right-[16%] lg:top-[34%]" />
          <Tag city="長治" position="top-[39%] right-[-2%] lg:top-[36.5%]" />
          <Tag city="內埔" position="top-[51%] right-[-1%] lg:top-[48%]" />
          <Tag city="竹田" position="top-[63%] right-[-1%] lg:top-[59%]" />
          <Tag city="崁頂" position="top-[77.5%] right-[-3%] lg:top-[73%]" />
          <Tag city="南洲" position="top-[84.5%] right-[-3%] lg:top-[79.5%]" />
          <Tag city="林邊" position="top-[91.5%] right-[0%] lg:top-[86.5%]" />
        </div>
      </div>
      <MapModal isShow={isOpen} setIsShow={setIsOpen} image={targetImg} />
    </>
  );
};

export default AreaMap;
