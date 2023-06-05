import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as prismicH from "@prismicio/helpers";
import ProductModal from "../../components/productModal";

const Product = ({ resource }) => {
  const [isShow, setIsShow] = useState(true);
  const router = useRouter();
  const { slug } = router.query;
  const { tags, products } = resource;
  const productList = products?.filter((x) =>
    slug === "all" ? x : x.data.category.uid === slug
  );

  return (
    <div className="px-4 min-h-[1000px] mt-[120px] lg:pt-14 lg:pl-28 lg:pr-40 flex justify-start mb-20 2xl:pl-[300px]">
      <div className="w-[200px] max-w-[300px] border border-white hidden mt-[64px] mr-[50px] xl:block text-white">
        <ul className="space-y-4 mt-10 ml-4 cursor-pointer">
          <li
            id="all"
            className={`${slug === "all" && "font-bold"}`}
            onClick={() => router.push(`/category/all`)}
          >
            ．全部商品．
          </li>
          {tags.results.map((tag) => (
            <li
              id={tag.id}
              className={`${tag.uid === slug && "font-bold"}`}
              onClick={() => router.push(`/category/${tag.uid}`)}
            >{`．${tag.data?.tagname[0].text}．`}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="flex flex-row flex-wrap justify-end mt-10 text-white w-[280px] sm:w-full space-x-2 xl:hidden">
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
        <ul className="grid grid-cols-1 gap-10 my-10 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 xl:mt-16">
          {productList.map((product) => (
            <li key={product.id} className="grid gap-2 relative">
              <div
                className="relative w-[280px] h-[280px] cursor-pointer sm:w-[230px] sm:h-[230px] aspect-square"
                onClick={() => router.push(`/product/${product.uid}`)}
              >
                <img src={product.data?.image.url} />
              </div>
              <div>
                <div className="text-white">{product.data?.title}</div>
                <span className="text-white text-sm">
                  {product.data?.price}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ProductModal isShow={isShow} setIsShow={setIsShow} />
    </div>
  );
};

export default Product;
