import React from "react";
import { useRouter } from "next/router";
import { PrismicRichText } from "@prismicio/react";

const Main = ({ intro }) => {
  const router = useRouter();

  return (
    <div className="w-full mt-[120px] lg:flex lg:flex-row lg:px-[50px] lg:justify-between lg:min-h-[700px] mb-[120px] 2xl:mt-[150px]">
      <div className="text-white py-[100px] tracking-[3px] lg:py-[150px] lg:pl-[125px]">
        <div className="w-[320px] m-auto md:w-[400px] xl:w-[450px] xl:tracking-[5px]">
          <PrismicRichText
            field={intro.data?.text1}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-[30px] leading-[40px] md:text-[36px]">{children}</h1>
              ),
              heading2: ({ children }) => (
                <h2 className="text-[24px] md:text-[30px] leading-[40px]">{children}</h2>
              ),
              heading3: ({ children }) => (
                <h3 className="text-[20px] md:text-[24px] leading-[32px]">{children}</h3>
              ),
              heading4: ({ children }) => (
                <h4 className="text-[18px] md:text-[20px] leading-[28px]">{children}</h4>
              ),
              heading5: ({ children }) => (
                <h5 className="text-[16px] md:text-[18px] leading-[24px]">{children}</h5>
              ),
              heading6: ({ children }) => (
                <h6 className="text-[14px] md:text-[18px] leading-[20px]">{children}</h6>
              ),
              paragraph: ({ children }) => (
                <p className="text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]">{children}</p>
              ),
              list: ({ children }) => (
                <ul className="my-6 list-disc list-inside text-[12px] md:text-[16px] md:leading-[24px]">
                  {children}
                </ul>
              ),
              oList: ({ children }) => (
                <ol className="my-6 list-decimal text-[12px] md:text-[16px] md:leading-[24px]">
                  {children}
                </ol>
              ),
            }}
          />
        </div>
        <div className="text-start w-[320px] md:w-[400px] m-auto mt-[28px] xl:w-[450px]">
          <PrismicRichText
            field={intro.data?.text2}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-[30px] leading-[40px] md:text-[36px]">{children}</h1>
              ),
              heading2: ({ children }) => (
                <h2 className="text-[24px] md:text-[30px] leading-[40px]">{children}</h2>
              ),
              heading3: ({ children }) => (
                <h3 className="text-[20px] md:text-[24px] leading-[32px]">{children}</h3>
              ),
              heading4: ({ children }) => (
                <h4 className="text-[18px] md:text-[20px] leading-[28px]">{children}</h4>
              ),
              heading5: ({ children }) => (
                <h5 className="text-[16px] md:text-[18px] leading-[24px]">{children}</h5>
              ),
              heading6: ({ children }) => (
                <h6 className="text-[14px] md:text-[18px] leading-[20px]">{children}</h6>
              ),
              paragraph: ({ children }) => (
                <p className="text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]">{children}</p>
              ),
              list: ({ children }) => (
                <ul className="my-6 list-disc list-inside text-[12px] md:text-[16px] md:leading-[24px]">
                  {children}
                </ul>
              ),
              oList: ({ children }) => (
                <ol className="my-6 list-decimal text-[12px] md:text-[16px] md:leading-[24px]">
                  {children}
                </ol>
              ),
            }}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4 px-6 min-h-[360px] max-w-[400px] m-auto lg:ml-[120px] lg:mt-[160px] lg:max-w-[500px] lg:scale-[1.15] xl:scale-[1.5] xl:m-[200px] 2xl:scale-[1.6]">
        <div className="flex w-full space-x-4">
          <div
            onClick={() => router.push("/gallery/all")}
            className="blockanimation min-w-[120px] min-h-[150px] relative bg-[url('/images/main-block1.svg')] bg-cover cursor-pointer"
          >
            <div className="h-[110px] w-[110px] pl-[16px] pt-[10px] tracking-widest text-white absolute top-[15%] left-[30px] border-white border-l text-[16px]">
              作品集
            </div>
          </div>
          <div
            onClick={() =>
              router.push("/contact", undefined, { shallow: true })
            }
            className="blockanimation min-w-[120px] min-h-[150px]  relative main-block2 cursor-pointer"
          >
            <div className="h-[110px] w-[110px] pl-[16px] pt-[10px] tracking-widest text-white absolute top-[15%] left-[30px] border-white border-l text-[16px]">
              聯絡我們
            </div>
          </div>
        </div>
        <div
          onClick={() => router.push("/about")}
          className="min-h-[150px] min-w-[300px] relative main-block3 cursor-pointer"
        >
          <div className="h-[110px] w-[140px] pl-[16px] pt-[10px] tracking-widest text-white absolute top-[15%] right-[10px] border-white border-l text-[16px]">
            派報 x 設計
            <div className="text-[14px] mt-5">整合式廣告介紹</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
