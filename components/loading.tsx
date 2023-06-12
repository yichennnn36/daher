const loading = ({ isLoading }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center fixed z-[100] top-0 left-0 right-0 bottom-0 bg-[#242628da] text-[#dfdddd] ${
        isLoading ? "" : "hidden"
      }`}
    >
      <div className="flex flex-col items-center">
        <img
          className="w-[60px] animate-[spin_4s_linear_infinite]"
          src="/images/loadingcircle.png"
          alt=""
        />
        <div className="text-lg loading-text tracking-[5px] mt-3">loading...</div>
      </div>
    </div>
  );
};

export default loading;
