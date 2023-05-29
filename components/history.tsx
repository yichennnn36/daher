import React from "react";
import { map, get } from "lodash";

const History = ({ text }) => {
  const content = get(text, "data.slices");

  return (
    <div className="relative">
      <div className="absolute w-full h-full top-0 text-center bg-[#26292db1] opacity-80"></div>
      <div className="bg-[url('/images/history.jpg')] bg-cover z-30 h-[800px] flex justify-center items-center lg:justify-end">
        <div className="border-2 border-white h-[700px] w-[80%] z-10 break-words flex items-end lg:w-[45%] lg:mr-[120px]">
          <div className="text-white w-full p-6 space-y-10">
            {map(content, (x) => {
              const target = get(x, "primary.text[0].text");
              return <div>{target}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
