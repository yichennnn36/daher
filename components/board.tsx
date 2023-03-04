import React from "react";

const Input = () => {
  return (
    <div className="text-end">
      <input className="bg-transparent border-b border-white pb-1 w-[90%] focus:outline-0" />
    </div>
  );
};

const Board = () => {
  return (
    <div className="w-full bg-black bg-opacity-70 my-[100px] xl:my-[200px] px-6 py-10 lg:p-20">
      <div className="flex flex-col space-y-4 md:items-center lg:flex-row lg:items-start lg:space-x-14 lg:space-y-0 lg:justify-center xl:space-x-24">
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-14 xl:space-x-24">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-white">類型 *</label>
              <div className="text-end">
                <select className="w-[90%] bg-transparent text-white pb-1 border-b border-white focus:outline-0">
                  <option value="area">地區派報</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-white">姓名 *</label>
              <Input />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-white">電話 *</label>
              <Input />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-white">Email *</label>
              <Input />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-white">公司名稱 *</label>
              <Input />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-white">產業 *</label>
              <Input />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-white">說明 *</label>
          <textarea
            placeholder="為您的需求加以說明"
            rows={5}
            className="bg-white p-4 rounded-3xl md:w-[380px] xl:w-[500px] xl:h-[200px] focus:outline-0"
          />
        </div>
      </div>
      <div className="text-center mt-10 lg:mt-14">
        <button className="bg-white text-gray-600 rounded-xl px-16 py-2 lg:text-2xl tracking-widest hover:scale-105">
          立即詢問
        </button>
      </div>
    </div>
  );
};

export default Board;
