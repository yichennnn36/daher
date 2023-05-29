import Modal from "./modal";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import Slider from "react-slick";

const settings = {
  lazyLoad: true,
  infinite: true,
  className:
    "!w-[280px] sm:!w-[400px] lg:!w-[500px] xl:!w-[600px] 2xl:!w-[800px]",
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 2,
};

const ProjectModal = ({ isShow, setIsShow, dataSource }) => {
  const slider = dataSource.items;

  return (
    <Modal isShow={isShow} setIsShow={setIsShow}>
      <div
        className={`w-[90%] max-h-[80%] overflow-scroll fixed z-[500] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%] text-white ${
          isShow ? "" : "hidden"
        }`}
      >
        <div
          onClick={() => setIsShow(false)}
          className="close cursor-pointer"
        ></div>
        <div className="pt-2 pb-4 border-b border-white text-center">
          <h1 className="text-xl tracking-widest">
            {dataSource?.primary?.title}
          </h1>
        </div>
        <div className="mt-2">
          <div className="space-y-10 md:flex">
            <div className="w-full m-auto project mt-6 flex flex-col justify-center items-center md:flex-row">
              <div className="mt-10 mx-auto md:m-10">
                <Slider {...settings}>
                  {slider?.map((item, index) => (
                    <PrismicNextImage
                      alt="slider"
                      field={item.sliderimage}
                      className="bg-gray-100"
                    />
                  ))}
                </Slider>
              </div>
              <div className=" flex flex-row-reverse justify-between mt-[50px] h-auto md:flex-col md:h-[370px] sm:m-10 lg:h-[450px]">
                <div className="space-y-4 flex-1 pl-4 md:pl-0">
                  <div className="text-lg font-extrabold">
                    {dataSource.primary?.title}
                  </div>
                  {dataSource.primary?.context.map((item) => (
                    <div>{item.text}</div>
                  ))}
                </div>
                <div className="bg-gray-100 md:max-w-[180px] flex justify-center items-center lg:max-w-[240px]">
                  {prismicH.isFilled.image(dataSource.primary?.image2) && (
                    <PrismicNextImage
                      alt="image-square"
                      field={dataSource.primary.image2}
                      className=""
                    />
                  )}
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
