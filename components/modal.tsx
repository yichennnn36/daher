type ModalProps = {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
  children: React.ReactNode;
};

const Modal = ({ isShow, setIsShow, children }: ModalProps) => {
  return (
    <>
      {children}
      <div
        onClick={() => setIsShow(false)}
        className={`backdrop-filter fixed z-[100] top-0 left-0 right-0 bottom-0 bg-[#26292db1] ${
          isShow ? "" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default Modal;
