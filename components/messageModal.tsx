import Community from "./community";
import Modal from "./modal";

const MessageModal = ({ isShow, setIsShow }) => {
  return (
    <Modal isShow={isShow} setIsShow={setIsShow}>
      <div
        className={`bg-white w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] p-10 shadow-xl rounded-3xl fixed z-[500] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%] ease-out duration-300 text-center ${
          isShow ? "translate-y-0" : "translate-y-[-100vh]"
        } ${isShow ? "" : "hidden"}`}
      >
        <div
          onClick={() => setIsShow(false)}
          className="fixed right-[10px] top-[10px] w-[20px] h-[20px] cursor-pointer"
        >
          <img src="/images/delete.png" alt="close" />
        </div>
        <h1 className="text-2xl mb-2 font-extrabold">！訊息已送出！</h1>
        <div>客服人員會盡速回覆您</div>
        <div>若有其他疑問可以前往</div>
        <div className="flex justify-center space-x-4 pt-8">
          <Community />
        </div>
      </div>
    </Modal>
  );
};

export default MessageModal;
