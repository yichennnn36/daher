import React, { useState } from "react";
import MessageModal from "./messageModal";
import MapModal from "./mapModal";
import AreaMap from "./areaMap";
import emailjs from "@emailjs/browser";

const Input = ({ name, setValue, value, placeholder }) => {
  return (
    <div className="text-end">
      <input
        type="text"
        name={name}
        value={value}
        required={true}
        onChange={(e) => setValue(e)}
        className="border-b border-black pb-1 w-[100%] focus:outline-0 bg-transparent"
        placeholder={placeholder}
      />
    </div>
  );
};

const Contact = ({ area }) => {
  const [isShow, setIsShow] = useState(false);
  const [state, setState] = useState({
    name: "",
    address: "",
    phone: "",
    area: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_TOKEN,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_A,
        {
          ...state,
          lineId: "X",
          description: "X",
        },
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(
        () => setIsShow(true),
        (error) => {
          console.log("err", error.text);
        }
      );
  };
  return (
    <div className="bg-white bg-opacity-80">
      {/* Map */}
      <AreaMap area={area} />
      {/* Contact Us */}
      <div className="border-t border-black w-[90%] mx-auto"></div>
      <form
        onSubmit={handleOnSubmit}
        className="w-full my-[100px] px-10 py-12 md:mb-[160px] lg:px-40 flex flex-col space-y-16 lg:flex-row justify-center lg:justify-between lg:items-center"
      >
        <div>
          <h1 className="text-[40px] font-extrabold lg:text-[48px]">
            Contact /
          </h1>
          <div className="font-semibold">與我們取得聯繫</div>
        </div>
        <div className="flex flex-col space-y-10 md:items-center lg:mr-10 lg:justify-end">
          <div className="flex flex-col space-y-4 md:items-start">
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6 xl:space-x-14">
              <div className="space-y-4 min-w-[250px]">
                <div className="flex flex-col space-y-2">
                  <label className="">商家名稱 *</label>
                  <Input
                    name="name"
                    setValue={handleInputChange}
                    value={state.name}
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="">商家地址 *</label>
                  <Input
                    name="address"
                    setValue={handleInputChange}
                    value={state.address}
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="">聯絡電話 *</label>
                  <Input
                    name="phone"
                    setValue={handleInputChange}
                    value={state.phone}
                    placeholder=""
                  />
                </div>
              </div>
              <div className="space-y-4 min-w-[260px]">
                <div className="flex flex-col space-y-2">
                  <label className="">欲派報的行政區 *</label>
                  <Input
                    name="area"
                    setValue={handleInputChange}
                    value={state.area}
                    placeholder="服務範圍：全高雄及部分屏東地區"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="">欲派發的數量 *</label>
                  <Input
                    name="amount"
                    setValue={handleInputChange}
                    value={state.amount}
                    placeholder="可直接與我們聯繫，以取得派報地圖"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10 relative">
            <input
              type="submit"
              value="發送"
              className="bg-black text-white rounded-3xl pl-3 pr-10 py-3 tracking-widest hover:scale-105 ease-out duration-300 cursor-pointer"
            />
            <img
              src="/images/plane.png"
              className="absolute w-[25px] h-[25px] z-10 top-[12px] left-[52%] md:left-[58%]"
            />
          </div>
        </div>
      </form>
      <MessageModal isShow={isShow} setIsShow={setIsShow} />
    </div>
  );
};

export default Contact;
