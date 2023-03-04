const Footer = () => {
  return (
    <footer className="bg-[#141414]">
      <div className="pt-6 md:pt-10">
        <img alt="footer-map" src="/images/footer-map.png" className="w-full" />
      </div>
      <div className="py-6 px-16 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center lg:px-[200px] 2xl:px-[400px]">
        <div className="flex justify-end mt-10">
          <img
            alt="footer-logo"
            src="/images/footer-logo.svg"
            className="h-[75px] lg:h-[100px] lg:mr-10"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-start items-start text-white text-[11px] space-y-8 lg:space-y-0 lg:space-x-16 lg:items-center">
          <div className="space-y-2">
            <div>TEL</div>
            <div>07-766-3777</div>
          </div>
          <div className="space-y-2">
            <div>Add</div>
            <div>高雄市 鳳山區 新強路 135號</div>
          </div>
          <div className="space-y-2">
            <div>email</div>
            <div>DAHER.advertise@gmail.com</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
