import React from "react";
import { useRouter } from "next/router";
import ImageCarousel from "../../components/imageCarousel";

const Product = ({ resource }) => {
  const router = useRouter();
  const { targetProduct, tags } = resource;
  const carousel = targetProduct[0]?.data?.slices
    .find((el) => el.slice_type === "slider_image")
    ?.items?.map((el, index) => ({
      id: index,
      url: el.image.url,
    }));

  return (
    <div className="px-4 min-h-[800px] mt-[120px] lg:pt-14 lg:pl-28 lg:pr-40 flex justify-center mb-20 2xl:pl-[300px] lg:justify-start">
      <div className="w-[200px] max-w-[300px] border border-white hidden mt-[84px] mr-[50px] xl:block text-white">
        <ul className="space-y-4 mt-10 ml-4 cursor-pointer">
          <li id="all" onClick={() => router.push(`/category/all`)}>
            ．全部商品．
          </li>
          {tags.results.map((tag) => (
            <li
              id={tag.id}
              onClick={() => router.push(`/category/${tag.uid}`)}
            >{`．${tag.data?.tagname[0]?.text}．`}</li>
          ))}
        </ul>
      </div>
      <div className="lg:min-w-[800px]">
        <ul className="flex flex-row flex-wrap justify-end mt-12 text-white w-[320px] sm:w-full space-x-2 xl:hidden">
          {" "}
          <li id="all" onClick={() => router.push(`/category/all`)}>
            全部商品
          </li>
          {tags.results.map((tag) => (
            <li
              id={tag.id}
              onClick={() => router.push(`/category/${tag.uid}`)}
            >{` / ${tag.data?.tagname[0].text}`}</li>
          ))}
        </ul>
        <div className="flex flex-col space-y-6 mt-10 md:flex-row md:space-x-6 md:items-end w-full xl:mt-[84px]">
          <ImageCarousel images={carousel} />
          <div className="space-y-2 md:mx-8 max-w-[300px]">
            <div className="text-white flex space-x-4 items-end">
              <div className="text-white text-[20px] font-bold">
                {targetProduct[0]?.data?.title}
              </div>
              <div className="font-base">
                {targetProduct[0]?.data?.description}
              </div>
            </div>
            <div className="text-white font-bold">
              {targetProduct[0]?.data?.price}
            </div>
            <div className="flex flex-wrap justify-start">
              {targetProduct[0]?.data?.slices
                .find((el) => el.slice_type === "product_tag")
                ?.items?.map((x) => (
                  <div className="bg-white rounded-sm py-1 px-3 mt-2 mr-2">
                    {x.text}
                  </div>
                ))}
            </div>
            <div
              className="sm:hidden w-[160px] pt-6"
              onClick={() =>
                window.open("https://shopee.tw/daher_design", "_blank")
              }
            >
              <img src="/images/shopeeBuy.png" alt="shopee-buy-btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
