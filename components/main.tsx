import React from "react";
import { useRouter } from "next/router";
import { PrismicRichText } from "@prismicio/react";

const Main = ({ intro }) => {
  const router = useRouter();

  return (
    <div className="w-full mt-[120px] lg:flex lg:flex-row lg:px-[50px] lg:justify-between lg:min-h-[700px] mb-[120px]">
      <div className="text-white py-[100px] tracking-[3px] lg:py-[150px] lg:pl-[50px]">
        <div className="w-[320px] m-auto md:w-[370px] xl:w-[450px] xl:tracking-[5px]">
          <PrismicRichText
            field={intro.data?.text1}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-3xl md:text-4xl leading-10">{children}</h1>
              ),
              heading2: ({ children }) => (
                <h2 className="text-2xl md:text-3xl leading-10">{children}</h2>
              ),
              heading3: ({ children }) => (
                <h3 className="text-xl md:text-2xl leading-8">{children}</h3>
              ),
              heading4: ({ children }) => (
                <h4 className="text-lg md:text-xl">{children}</h4>
              ),
              heading5: ({ children }) => (
                <h5 className="text-base md:text-lg">{children}</h5>
              ),
              heading6: ({ children }) => (
                <h6 className="text-sm md:text-lg">{children}</h6>
              ),
              paragraph: ({ children }) => (
                <p className="text-xs md:text-base">{children}</p>
              ),
              list: ({ children }) => (
                <ul className="my-6 list-disc list-inside text-xs md:text-base">
                  {children}
                </ul>
              ),
              oList: ({ children }) => (
                <ol className="my-6 list-decimal text-xs md:text-base">
                  {children}
                </ol>
              ),
            }}
          />
        </div>
        <div className="text-start w-[320px] md:w-[370px] m-auto mt-[28px] xl:w-[450px]">
          <PrismicRichText
            field={intro.data?.text2}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-3xl md:text-4xl leading-10">{children}</h1>
              ),
              heading2: ({ children }) => (
                <h2 className="text-2xl md:text-3xl leading-10">{children}</h2>
              ),
              heading3: ({ children }) => (
                <h3 className="text-xl md:text-2xl leading-8">{children}</h3>
              ),
              heading4: ({ children }) => (
                <h4 className="text-lg md:text-xl">{children}</h4>
              ),
              heading5: ({ children }) => (
                <h5 className="text-base md:text-lg">{children}</h5>
              ),
              heading6: ({ children }) => (
                <h6 className="text-sm md:text-lg">{children}</h6>
              ),
              paragraph: ({ children }) => (
                <p className="text-xs md:text-base">{children}</p>
              ),
              list: ({ children }) => (
                <ul className="my-6 list-disc list-inside text-xs md:text-base">
                  {children}
                </ul>
              ),
              oList: ({ children }) => (
                <ol className="my-6 list-decimal text-xs md:text-base">
                  {children}
                </ol>
              ),
            }}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4 px-6 min-h-[360px] max-w-[400px] m-auto lg:m-[200px] lg:max-w-[500px] lg:scale-[1.15] xl:scale-[1.5]">
        <div className="flex w-full space-x-4">
          <div
            onClick={() => router.push("/gallery/all")}
            className="blockanimation min-w-[120px] min-h-[150px] relative bg-[url('/images/main-block1.svg')] bg-cover cursor-pointer"
          >
            <div className="h-[110px] w-[110px] pl-[16px] pt-[10px] tracking-widest text-white absolute top-[15%] left-[30px] border-white border-l ">
              作品集
            </div>
          </div>
          <div
            onClick={() =>
              router.push("/contact", undefined, { shallow: true })
            }
            className="blockanimation min-w-[120px] min-h-[150px]  relative main-block2 cursor-pointer"
          >
            <div className="h-[110px] w-[110px] pl-[16px] pt-[10px] tracking-widest text-white absolute top-[15%] left-[30px] border-white border-l">
              聯絡我們
            </div>
          </div>
        </div>
        <div
          onClick={() => router.push("/about")}
          className="min-h-[150px] min-w-[300px] relative main-block3 cursor-pointer"
        >
          <div className="h-[110px] w-[140px] pl-[16px] pt-[10px] tracking-widest text-white absolute top-[15%] right-[10px] border-white border-l">
            派報 x 設計
            <div className="text-sm mt-5">整合式廣告介紹</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
