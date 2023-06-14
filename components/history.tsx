import React, { useState, useEffect } from "react";
import { PrismicRichText } from "@prismicio/react";
import { map, get } from "lodash";

const History = ({ text }) => {
  const [height, setHeight] = useState(-200);
  const content = get(text, "data.slices");
  const title = get(text, "data.title");
  const image = get(text, "data.image.url");

  useEffect(() => {
    const handleScrollDown = () => {
      const scrollTop = document.documentElement.scrollTop;
      setHeight(-200 + scrollTop / 6);
    };

    window.addEventListener("scroll", handleScrollDown);
    return () => window.removeEventListener("scroll", handleScrollDown);
  }, []);

  return (
    <div className="relative">
      <div className="absolute w-full h-full top-0 text-center bg-[#26292db1] opacity-80"></div>
      <div
        className={`bg-cover z-30 h-[820px] flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:h-[960px]`}
        style={{
          backgroundPosition: `center ${height}px`,
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="text-white z-30 mt-20 lg:mt-0">
          <PrismicRichText
            key="title"
            field={title}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-2xl md:text-4xl leading-10">{children}</h1>
              ),
              heading2: ({ children }) => (
                <h2 className="text-xl md:text-3xl leading-10">{children}</h2>
              ),
              heading3: ({ children }) => (
                <h3 className="text-lg md:text-2xl leading-8">{children}</h3>
              ),
              heading4: ({ children }) => (
                <h4 className="text-base md:text-xl">{children}</h4>
              ),
              heading5: ({ children }) => (
                <h5 className="text-sm md:text-lg">{children}</h5>
              ),
              heading6: ({ children }) => (
                <h6 className="text-sm md:text-lg">{children}</h6>
              ),
              paragraph: ({ children }) => (
                <p className="text-xs md:text-base">{children}</p>
              ),
            }}
          />
        </div>
        <div className="min-h-[500px] w-auto z-10 break-words flex items-center lg:mr-[50px] ">
          <div className="text-white w-full p-6 space-y-2 sm:space-y-5 parallax">
            {map(content, (x, index) => {
              const target = get(x, "primary.text");
              return (
                <PrismicRichText
                  key={index}
                  field={target}
                  components={{
                    heading1: ({ children }) => (
                      <h1 className="text-2xl md:text-4xl leading-10">
                        {children}
                      </h1>
                    ),
                    heading2: ({ children }) => (
                      <h2 className="text-xl md:text-3xl leading-10">
                        {children}
                      </h2>
                    ),
                    heading3: ({ children }) => (
                      <h3 className="text-lg md:text-2xl leading-8">
                        {children}
                      </h3>
                    ),
                    heading4: ({ children }) => (
                      <h4 className="text-base md:text-xl">{children}</h4>
                    ),
                    heading5: ({ children }) => (
                      <h5 className="text-sm md:text-lg">{children}</h5>
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
