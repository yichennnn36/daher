import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Template from "../../components/template";
import Select from "../../components/select";
import ProjectModal from "../../components/projectModal";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import ImageCarousel from "../../components/imageCarousel";

const Product = ({ resource }) => {
  const router = useRouter();
  const { slug } = router.query;
  const { targetProduct, tags } = resource;
  const carousel = targetProduct[0]?.items.map((x, index) => ({
    id: index,
    url: x.sliderimage.url,
  }));
  console.log("tags", tags);
  return (
    <div className="px-4 min-h-[800px] mt-[120px] lg:pt-14 lg:pl-28 lg:pr-40 flex justify-center mb-20">
      <div className="w-[200px] max-w-[300px] border border-white hidden mt-[84px] mr-[50px] xl:block text-white">
        <ul className="space-y-4 mt-10 ml-4 cursor-pointer">
          <li id="all" onClick={() => router.push(`/product/all`)}>
            ．全部商品．
          </li>
          {tags.results.map((tag) => (
            <li
              id={tag.id}
              onClick={() => router.push(`/product/${tag.uid}`)}
            >{`．${tag.data?.tagname[0].text}．`}</li>
          ))}
        </ul>
      </div>
      <div className="lg:min-w-[800px]">
        <ul className="flex flex-row flex-wrap justify-end mt-10 text-white w-[300px] sm:w-full space-x-2 xl:hidden">
          {" "}
          <li id="all" onClick={() => router.push(`/product/all`)}>
            全部商品
          </li>
          {tags.results.map((tag) => (
            <li
              id={tag.id}
              onClick={() => router.push(`/product/${tag.uid}`)}
            >{` / ${tag.data?.tagname[0].text}`}</li>
          ))}
        </ul>
        <div className="flex flex-col space-y-6 mt-4 md:flex-row md:space-x-6 md:items-end w-full">
          <ImageCarousel images={carousel} />
          <div className="space-y-2 mx-8">
            <div className="text-white flex space-x-4 items-center">
              <div className="text-white text-[20px] font-bold">
                {targetProduct[0].primary.title}
              </div>
              <div className="font-bold">
                {targetProduct[0].primary.description}
              </div>
            </div>
            <div className="text-white font-bold">
              {targetProduct[0].primary.price}
            </div>
            <div className="flex flex-wrap justify-start">
              {targetProduct[0].items.map((x) => (
                <div className="bg-white rounded-sm py-1 px-3 mt-2 mr-2">
                  {x.category[0].text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
