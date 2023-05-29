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
    <div className="px-4 min-h-[1000px] mt-[120px] lg:pt-14 lg:pl-28 lg:pr-40 flex justify-center">
      <div className="w-[200px] max-w-[300px] border border-white hidden mt-[64px] mr-[50px] xl:block text-white">
        <ul className="space-y-4 mt-10 ml-4 cursor-pointer">
          <li>．全部商品，</li>
          <li>．現貨商品，</li>
          <li>．客製商品，</li>
          <li>．限定商品，</li>
        </ul>
      </div>
      <div>
        <div className="flex justify-end space-x-10">
          <button className={`text-white px-2`}>全部商品</button>
        </div>
        <ul className="grid grid-cols-1 gap-10 my-10 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4">
          <li key="id" className="grid items-start gap-2 relative">
            <div
              className="relative w-[200px] h-[200px] cursor-pointer"
              onClick={() => router.push("/product/all/1")}
            >
              <img src="/images/product1.png" />
            </div>
            <div>
              <div className="text-white">客製商品/電商小圓點</div>
              <span className="text-white text-sm">$500~800</span>
            </div>
          </li>
          <li key="id" className="grid items-start gap-2 relative">
            <div
              className="relative w-[200px] h-[200px] cursor-pointer"
              onClick={() => {}}
            >
              <img src="/images/product2.png" />
            </div>
            <div>
              <div className="text-white">客製商品/電商小圓點</div>
              <span className="text-white text-sm">$500~800</span>
            </div>
          </li>
          <li key="id" className="grid items-start gap-2 relative">
            <div
              className="relative w-[200px] h-[200px]cursor-pointer"
              onClick={() => {}}
            >
              <img src="/images/product3.png" />
            </div>
            <div>
              <div className="text-white">客製商品/電商小圓點</div>
              <span className="text-white text-sm">$500~800</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
