import React, { useState, useEffect } from "react";
import { PrismicRichText } from "@prismicio/react";
import { map, get } from "lodash";

const History = ({ text }) => {
  const [height, setHeight] = useState(-200);
  const content = get(text, "data.slices");

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
        className={`bgsmooth bg-cover z-30 h-[800px] flex justify-center items-center lg:justify-end lg:h-[960px]`}
        style={{ backgroundPosition: `center ${height}px` }}
      >
        <div className="h-[700px] w-[80%] z-10 break-words flex items-end lg:w-[45%] lg:mr-[120px]">
          <div className="text-white w-full p-6 space-y-5 parallax">
            {map(content, (x, index) => {
              const target = get(x, "primary.text");
              return (
                <PrismicRichText
                  key={index}
                  field={target}
                  components={{
                    heading1: ({ children }) => (
                      <h1 className="text-4xl leading-10">{children}</h1>
                    ),
                    heading2: ({ children }) => (
                      <h1 className="text-3xl leading-10">{children}</h1>
                    ),
                    heading3: ({ children }) => (
                      <h1 className="text-2xl leading-8">{children}</h1>
                    ),
                    heading4: ({ children }) => (
                      <h1 className="text-xl">{children}</h1>
                    ),
                    heading5: ({ children }) => (
                      <h1 className="text-lg">{children}</h1>
                    ),
                    heading6: ({ children }) => (
                      <h1 className="text-lg">{children}</h1>
                    ),
                    paragraph: ({ children }) => (
                      <p className="text-base">{children}</p>
                    ),
                    list: ({ children }) => (
                      <ul className="my-6 list-disc list-inside">{children}</ul>
                    ),
                    oList: ({ children }) => (
                      <ol className="my-6 list-decimal">{children}</ol>
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
