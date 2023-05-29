import Modal from "./modal";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";

const ProjectModal = ({ isShow, setIsShow, dataSource }) => {
  // console.log("dataSource", dataSource);

  const renderSlice = (data) => {
    console.log("data", data);
    switch (data["slice_type"]) {
      case "gallery":
        return (
          <div className="space-y-10 md:flex">
            <div className="w-[95%] m-auto project mt-6 flex flex-col justify-center items-center md:flex-row md:items-stretch md:min-h-[600px] md:w-[90%] xl:w-[80%]">
              <div className="bg-gray-100 m-6 flex justify-center items-center">
                {prismicH.isFilled.image(data.items[0].sliderimage) && (
                  <PrismicNextImage
                    // alt="123"
                    field={data.items[0].sliderimage}
                    className=""
                  />
                )}
              </div>
              <div className=" flex flex-row-reverse justify-between w-[87%] mt-[50px] md:my-[24px] md:flex-col md:w-full">
                <div className="space-y-4 flex-1 pl-4 md:pl-0">
                  <div className="text-xl font-extrabold">
                    {data.primary.title}
                  </div>
                  <div>{data.primary.description}</div>
                  <div>{data.primary.description}</div>
                </div>
                <div className="bg-gray-100 w-[45%] flex justify-center items-center md:w-[70%]">
                  {prismicH.isFilled.image(data.primary.image) && (
                    <PrismicNextImage
                      // alt="123"
                      field={data.primary.image}
                      className=""
                    />
                  )}
                </div>
              </div>
            </div>
            <div></div>
          </div>
        );
    }
  };
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
          <h1 className="text-xl tracking-widest">{dataSource?.data?.title}</h1>
        </div>
        <div className="mt-2">
          {dataSource?.data?.slices?.map((x) => renderSlice(x))}
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
