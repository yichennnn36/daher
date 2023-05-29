import React, { useState } from "react";
import MessageModal from "./messageModal";
import SubscribeForm from "./subscribeForm";
import emailjs from "@emailjs/browser";

const Input = ({ name, setValue, value }) => {
  return (
    <div className="text-end">
      <input
        type="text"
        name={name}
        value={value}
        required={true}
        onChange={(e) => setValue(e)}
        className="text-white bg-transparent border-b border-white pb-1 w-full focus:outline-0"
      />
    </div>
  );
};

const Board = () => {
  const [isShow, setIsShow] = useState(false);
  const [state, setState] = useState({
    name: "",
    address: "",
    phone: "",
    lineId: "",
    description: "",
  });

  const handleOnChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_foq6w5s",
        "template_b08elrw",
        {
          ...state,
          area: "X",
          amount: "X",
        },
        "OIRayJLa7-LHweyyF"
      )
      .then(
        () => setIsShow(true),
        (error) => {
          console.log("err", error.text);
        }
      );
  };

  return (
    <>
      <form
        onSubmit={handleOnSubmit}
        className="w-full my-[120px] py-12 md:my-[160px] px-10 lg:px-28 flex flex-col md:flex-row justify-center md:space-x-16 md:items-end lg:space-x-[160px]"
      >
        <div className="flex flex-col space-y-10 md:items-start">
          <div className="flex flex-col space-y-4">
            <div className="space-y-4 min-w-[250px] md:w-[350px]">
              <div className="flex flex-col space-y-2">
                <label className="text-white">商家名稱 *</label>
                <Input
                  name="name"
                  setValue={handleOnChange}
                  value={state.name}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-white">商家地址 *</label>
                <Input
                  name="address"
                  setValue={handleOnChange}
                  value={state.address}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-white">聯絡電話 *</label>
                <Input
                  name="phone"
                  setValue={handleOnChange}
                  value={state.phone}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-white">LINE ID *</label>
                <Input
                  name="lineId"
                  setValue={handleOnChange}
                  value={state.lineId}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-white">說明 *</label>
                <textarea
                  name="description"
                  value={state.description}
                  onChange={handleOnChange}
                  placeholder="有任何意見和想法都可以提出！"
                  rows={5}
                  className="bg-white p-4 rounded-sm focus:outline-0"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <input
              type="submit"
              value="確認發送"
              className="bg-white rounded-sm px-16 py-2 tracking-widest hover:scale-105 ease-out duration-300 cursor-pointer"
            />
          </div>
        </div>
        <div className="pt-6 md:pt-10">
          <div className="space-y-10 md:space-y-[160px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.1583490319026!2d120.33827291551204!3d22.610561285163268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04abab0fc3df%3A0x5761b48e2433b792!2z5aSn5ZKM5rS-5aCx56S-!5e0!3m2!1szh-TW!2stw!4v1678810698898!5m2!1szh-TW!2stw"
              width="100%"
              height="350"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <SubscribeForm formClassName="relative" />
          </div>
        </div>
      </form>
      <MessageModal isShow={isShow} setIsShow={setIsShow} />
    </>
  );
};

export default Board;
