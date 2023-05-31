import SubscribeForm from "./subscribeForm";

const Footer = () => {
  return (
    <footer className="bg-[#141414]">
      <div className="py-6 px-12 flex flex-col items-start lg:flex-row lg:py-[40px] lg:items-center lg:px-[100px] xl:pr-[200px]">
        <div className="flex justify-end mb-6">
          <img
            alt="footer-logo"
            src="/images/icon.png"
            className="w-[60px]  lg:mr-10"
          />
        </div>
        <div className="space-y-14 lg:flex lg:space-y-0 lg:flex-1 lg:justify-between">
          <div className="flex flex-col justify-start items-start text-white space-y-2">
            <div className="">
              <div className="font-bold">TEL</div>
              <a className="text-gray-300" href="tel:07-7663777">
                07-766-3777
              </a>
            </div>
            <div className="">
              <div className="font-bold">Add</div>
              <a
                className="text-gray-300"
                href="https://goo.gl/maps/SVAwcAfbyXchNotN8"
                target="_blank"
              >
                高雄市鳳山區新強路135號
              </a>
            </div>
            <div className="">
              <div className="font-bold">email</div>
              <a
                className="text-gray-300"
                href="mailto:daher.advertise@gmail.com"
              >
                daher.advertise@gmail.com
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-col justify-start items-start text-white space-y-2 lg:space-y-10">
            <div className="font-bold">Follow us</div>
            <div className="flex space-x-4 text-gray-300 lg:flex-col lg:space-x-0 lg:space-y-1">
              <a href="https://www.instagram.com/daher.1997/" target="_blank">
                Instagram
              </a>
              <a
                href="https://www.facebook.com/%E5%A4%A7%E5%92%8C%E6%B4%BE%E5%A0%B1-%E5%B9%B3%E9%9D%A2%E8%A6%96%E8%A6%BA%E8%A8%AD%E8%A8%88-109830355137782"
                target="_blank"
              >
                Facebook
              </a>
              <a href="https://lin.ee/eMHCKBM" target="_blank">
                Line
              </a>
            </div>
          </div>
        </div>
      </div>
      <SubscribeForm formClassName="relative w-[70%] py-6 px-12 my-14 md:w-1/2 lg:w-1/4 lg:mx-auto lg:py-1 lg:mt-1" />
      <div className="text-white opacity-10 w-full text-center pb-6">
        @Da-Her Yuan Design
      </div>
    </footer>
  );
};

export default Footer;
