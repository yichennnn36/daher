const Loading = () => {
  return (
    <div className="bg-black w-full h-screen flex items-center justify-center relative disappear">
      <div className="absolute w-full h-[1px] bg-white"></div>
      <img
        alt="icon"
        src="/images/icon.png"
        className="w-[50px] absolute top-4 right-4 m-4 bg-black"
      />
      <div className="min-w-[200px] min-h-[200px] sm:min-w-[400px] sm:min-h-[400px] relative">
        <img
          id="loading-rotate-clockwise"
          alt="loading-icon"
          src="/images/loading-circle.png"
          className="absolute w-[110%] top-0 z-10"
        />
        <img
          alt="loading-icon"
          src="/images/loading-inner.png"
          className="w-[50%] absolute z-20 top-[45px] left-[45px] sm:top-[85px] sm:left-[90px] bounceout"
        />
      </div>
    </div>
  );
};

export default Loading;
