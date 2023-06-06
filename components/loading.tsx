const Loading = () => {
  return (
    <div className="bg-black w-full h-screen flex items-center justify-center relative disappear">
      <div className="absolute w-full h-[1px] bg-white"></div>
      <div className="min-w-[200px] min-h-[200px] sm:min-w-[400px] sm:min-h-[400px] relative">
        <img
          id="loading-rotate-clockwise"
          alt="loading-icon"
          src="/images/loading-circle.png"
          className="absolute w-[110%] top-0 z-10"
        />
        <img
          alt="loading-icon"
          src="/images/icon.png"
          className="w-[40%] absolute z-20 top-[50px] left-[60px] sm:top-[100px] sm:left-[120px] bounceout"
        />
      </div>
    </div>
  );
};

export default Loading;
