import Modal from "./modal";

const ProductModal = ({ isShow, setIsShow }) => {
  return (
    <Modal isShow={isShow} setIsShow={setIsShow}>
      <div
        className={`bg-white w-[60%] md:w-[40%] lg:w-[30%] xl:w-[20%] p-10 shadow-xl rounded-3xl fixed z-[500] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%] ease-out duration-300 text-center ${
          isShow ? "translate-y-0" : "translate-y-[-100vh]"
        } ${isShow ? "" : "hidden"}`}
      >
        <div
          onClick={() => setIsShow(false)}
          className="fixed right-[10px] top-[10px] w-[20px] h-[20px] cursor-pointer"
        >
          <img src="/images/delete.png" alt="close" />
        </div>
        <div>此網頁僅供瀏覽無法下單</div>
        <div>下單請前往蝦皮商城購買</div>
        <button
          className="bg-gray-600 text-white rounded-2xl px-2 py-1 mt-10"
          onClick={() =>
            window.open("https://shopee.tw/daher_design", "_blank")
          }
        >
          立即前往蝦皮購買
        </button>
      </div>
    </Modal>
  );
};

export default ProductModal;
