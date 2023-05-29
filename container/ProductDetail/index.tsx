import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Template from "../../components/template";
import Select from "../../components/select";
import ProjectModal from "../../components/projectModal";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";

const findFirstImage = (slices) => {
  const imageSlice = slices.find((slice) => slice.slice_type === "gallery");
  if (imageSlice && prismicH.isFilled.image(imageSlice.primary.image)) {
    return imageSlice.primary.image;
  }
};

const Product = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="px-4 min-h-[800px] mt-[120px] mb-10 lg:pt-14 lg:pl-28 lg:pr-40 flex justify-center">
      <div className="w-[200px] max-w-[300px] border border-white hidden mt-[84px] mr-[50px] xl:block text-white">
        <ul className="space-y-4 mt-10 ml-4 cursor-pointer">
          <li>．全部商品，</li>
          <li>．現貨商品，</li>
          <li>．客製商品，</li>
          <li>．限定商品，</li>
        </ul>
      </div>
      <div>
        <div className="flex justify-end space-x-10 mt-10 md:mt-6">
          <button className={`text-white px-2`}>全部商品</button>
        </div>
        <div className="flex flex-col space-y-6 mt-4 md:flex-row md:space-x-6 md:items-end">
          <div className="relative w-full h-[300px] cursor-pointer md:w-[380px] md:h-[380px]">
            <img src="/images/product1.png" />
          </div>
          <div className="flex space-x-6 md:flex-col md:space-x-0 md:space-y-6">
            <div className="relative w-[60px] h-[60px] cursor-pointer md:w-[100px] md:h-[100px]">
              <img src="/images/product1-1.png" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-white flex space-x-4 items-center">
              <div className="text-white text-[20px] font-bold">客製商品</div>
              <div className="font-bold">客製電商感謝小卡</div>
            </div>
            <div className="text-white font-bold">$500~800</div>
            <div className="flex space-x-4">
              <div className="bg-white rounded-sm py-1 px-3">珍珠奶茶</div>
              <div className="bg-white rounded-sm py-1 px-3">宇宙藍</div>
              <div className="bg-white rounded-sm py-1 px-3">森林綠</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
