import Modal from "./modal";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import Slider from "react-slick";
import { map } from "lodash";

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
        className={`w-[90%] max-h-[85%] overflow-scroll fixed z-[500] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white ${
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
            <div className="w-full bg-cover m-auto project mt-6 flex flex-col justify-center items-center lg:flex-row">
              <div className="mt-10 mx-auto md:m-10">
                <Slider {...settings}>
                  {slider?.map((item, index) => (
                    <PrismicNextImage
                      alt=""
                      field={item.sliderimage}
                      className="aspect-[7/10] object-cover lg:max-w-[600px]"
                    />
                  ))}
                </Slider>
              </div>
              <div className="p-8 flex flex-col-reverse justify-between mt-[50px] h-auto sm:flex-row-reverse md:h-[370px] md:items-center md:py-0 md:my-0 sm:m-10 lg:h-[450px] lg:flex-col lg:px-0 lg:items-start lg:space-y-20">
                <div className="space-y-2 mt-10 sm:space-y-1 sm:space-x-10 sm:mt-0 lg:space-x-0">
                  <div className="text-lg font-extrabold sm:ml-[40px] lg:ml-0 mb-3">
                    {dataSource.primary?.title}
                  </div>
                  <PrismicRichText
                    field={dataSource.primary?.context}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="my-6">{children}</p>
                      ),
                      list: ({ children }) => (
                        <ul className="my-6 list-disc list-inside">
                          {children}
                        </ul>
                      ),
                      oList: ({ children }) => (
                        <ol className="my-6 list-decimal">{children}</ol>
                      ),
                    }}
                  />
                </div>
                <div className="sm:max-w-[200px] flex justify-center items-center lg:max-w-[300px]">
                  {prismicH.isFilled.image(dataSource.primary?.image2) && (
                    <PrismicNextImage
                      alt=""
                      field={dataSource.primary.image2}
                      className="aspect-square"
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
