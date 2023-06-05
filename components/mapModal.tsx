import Modal from "./modal";

const mapModal = ({ isShow, setIsShow, image }) => {
  return (
    <Modal isShow={isShow} setIsShow={setIsShow}>
      <div
        className={`w-[90%] max-h-[80%] overflow-scroll fixed z-[500] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-65%] md:translate-y-[-50%] ${
          isShow ? "" : "hidden"
        }`}
      >
        <div
          onClick={() => setIsShow(false)}
          className="close cursor-pointer top-0"
        ></div>
        <div className="space-y-10 max-h-[600px] overflow-scroll mt-[40px]">
          {image &&
            image.map((el) => (
              <img
                src={el.image.url}
                alt=""
                className="lg:max-h-[600px] mx-auto"
              />
            ))}
        </div>
      </div>
    </Modal>
  );
};

export default mapModal;
