import React from "react";
import Slider from "./slider";
import { get } from "lodash";
import { PrismicRichText } from "@prismicio/react";

function SliderSection({ logo }) {
  const target = get(logo, "data.slices[0].items");
  return (
    <div className="relative">
      <div className="bg-white blur-2xl absolute w-full h-full top-0 z-[-10] bg-opacity-60"></div>
      <div className="w-full bg-black bg-opacity-50 my-[100px] xl:my-[200px] px-6 py-10 z-30">
        {/* slider title */}
        <div className="flex flex-col justify-center items-center text-white">
          <PrismicRichText
            field={logo.data?.text1}
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
          <div className="border-white border-b w-[80%] mt-3 mb-6 md:w-[60%] lg:2-[50%] lg:mt-6 xl:w-[30%]"></div>
          <div className="flex flex-col space-y-4 text-center">
            <PrismicRichText
              field={logo.data?.text2}
              components={{
                heading1: ({ children }) => (
                  <h1 className="text-3xl md:text-4xl leading-10">
                    {children}
                  </h1>
                ),
                heading2: ({ children }) => (
                  <h2 className="text-2xl md:text-3xl leading-10">
                    {children}
                  </h2>
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
        {/* slider content */}
        <div className="mt-10">
          {/* slider */}
          <div className="w-full p-4 lg:px-[120px]">
            <Slider logo={target} />
          </div>
          {/* desc */}
          <div className="text-center px-12 text-white">
            <PrismicRichText
              field={logo.data?.text3}
              components={{
                heading1: ({ children }) => (
                  <h1 className="text-3xl md:text-4xl leading-10">
                    {children}
                  </h1>
                ),
                heading2: ({ children }) => (
                  <h2 className="text-2xl md:text-3xl leading-10">
                    {children}
                  </h2>
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
      </div>
    </div>
  );
}

export default SliderSection;
