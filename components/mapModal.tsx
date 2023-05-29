import Modal from "./modal";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";

const mapModal = ({ isShow, setIsShow }) => {
  return (
    <Modal isShow={isShow} setIsShow={setIsShow}>
      <div
        className={`w-[90%] max-h-[80%] overflow-scroll fixed z-[500] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%] bg-[#f8eaab] p-10 ${
          isShow ? "" : "hidden"
        }`}
      >
        <div
          onClick={() => setIsShow(false)}
          className="close cursor-pointer text-black"
        ></div>
        <img
          src="/images/mapcity.png"
          alt=""
          className="lg:max-h-[600px] mx-auto"
        />
      </div>
    </Modal>
  );
};

export default mapModal;
