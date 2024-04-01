import React, { useState } from 'react';
import { PrismicRichText } from '@prismicio/react';
import MapModal from './mapModal';
import { get } from 'lodash';

const AreaMap = ({ area }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [targetImg, setTargetImg] = useState('');
  const areaData = get(area, 'data.slices');
  const title = get(area, 'data.title');

  const toObject = (arr: []) => {
    let obj = {};
    arr.forEach((item: any) => (obj[item.primary.text] = item.items));
    return obj;
  };

  const mapTarget = toObject(areaData);

  const handleClick = (city) => {
    setTargetImg(mapTarget?.[city] || '');
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
      <div className="relative md:px-[60px] py-20 lg:flex lg:items-center">
        <div className="text-center">
          <PrismicRichText
            key="title"
            field={title}
            components={{
              heading1: ({ children }) => <h1 className="text-2xl md:text-4xl leading-10">{children}</h1>,
              heading2: ({ children }) => <h2 className="text-xl md:text-3xl leading-10">{children}</h2>,
              heading3: ({ children }) => <h3 className="text-lg md:text-2xl leading-8">{children}</h3>,
              heading4: ({ children }) => <h4 className="text-base md:text-xl">{children}</h4>,
              heading5: ({ children }) => <h5 className="text-sm md:text-lg">{children}</h5>,
              heading6: ({ children }) => <h6 className="text-sm md:text-lg">{children}</h6>,
              paragraph: ({ children }) => <p className="text-xs md:text-base">{children}</p>,
            }}
          />
        </div>
        <div className="relative m-[50px] lg:ml-[80px]">
          <img src="/images/citymap_outline.png" alt="map" className="" />
          <Tag city="梓官" position="top-[22.5%] left-[-3%]" />
          <Tag city="楠梓" position="top-[34%] left-[-3%]" />
          <Tag city="左營" position="top-[40%] left-[-3%]" />
          <Tag city="鼓山" position="top-[46%] left-[-3%]" />
          <Tag city="三民" position="top-[51.5%] left-[-3%]" />
          <Tag city="鹽埕" position="top-[56.5%] left-[-3%]" />
          <Tag city="前金" position="top-[62.5%] left-[-3%]" />
          <Tag city="新興" position="top-[67.5%] left-[-3%]" />
          <Tag city="前鎮" position="top-[72.5%] left-[-3%]" />
          <Tag city="小港(含大林蒲、鳳鼻頭)" position="top-[77%] left-[-4%]" />
          <Tag city="小港(不含大林蒲、鳳鼻頭)" position="top-[83.1%] left-[-4%]" />
          <Tag city="旗津" position="top-[90.5%] left-[5%]" />

          <Tag city="岡山" position="top-[7.5%] right-[14%]" />
          <Tag city="橋頭" position="top-[15.5%] right-[14%]" />
          <Tag city="大社" position="top-[21.5%] right-[14%]" />
          <Tag city="仁武" position="top-[27.4%] right-[14%]" />
          <Tag city="屏東" position="top-[42.6%] right-[-7%]" />
          <Tag city="鳥松" position="top-[48.8%] right-[-7%]" />
          <Tag city="鳳山" position="top-[58.2%] right-[-7%]" />
          <Tag city="苓雅" position="top-[64.6%] right-[-7%]" />
          <Tag city="大寮一" position="top-[73.5%] right-[12%]" />
          <Tag city="大寮二" position="top-[78.5%] right-[12%]" />
          <Tag city="林園" position="top-[87.6%] right-[12%]" />
        </div>
        <div className="relative m-[50px] lg:mr-[100px]">
          <img src="/images/specialmap_outline.png" alt="map" className="" />
          <Tag city="阿蓮" position="top-[25.1%] left-[-2%]" />
          <Tag city="路竹" position="top-[29.8%] left-[-2%]" />
          <Tag city="彌陀" position="top-[34.9%] left-[-2%]" />
          <Tag city="湖內" position="top-[7.6%] left-[22%]" />
          <Tag city="旗山" position="top-[50%] left-[12%]" />
          <Tag city="長治" position="top-[56.8%] left-[12%]" />
          <Tag city="麟洛" position="top-[64%] left-[12%]" />
          <Tag city="萬丹" position="top-[71%] left-[12%]" />
          <Tag city="新園" position="top-[78%] left-[12%]" />
          <Tag city="東港" position="top-[85.2%] left-[12%]" />
          <Tag city="燕巢" position="top-[42.6%] left-[9%]" />
          <Tag city="美濃" position="top-[15.9%] right-[-7%]" />
          <Tag city="大樹" position="top-[39%] right-[-7%]" />
          <Tag city="內埔" position="top-[43.6%] right-[-7%]" />
          <Tag city="萬巒" position="top-[58.4%] right-[-7%]" />
          <Tag city="竹田" position="top-[64%] right-[-7%]" />
          <Tag city="潮州" position="top-[71.2%] right-[-7%]" />
          <Tag city="崁頂" position="top-[78.2%] right-[-7%]" />
          <Tag city="南州" position="top-[85.2%] right-[-7%]" />
          <Tag city="林邊" position="top-[92.3%] right-[-7%]" />
        </div>
      </div>
      <MapModal isShow={isOpen} setIsShow={setIsOpen} image={targetImg} />
    </>
  );
};

export default AreaMap;
