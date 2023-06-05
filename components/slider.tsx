import Slider from "react-slick";

const settings = {
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2500,
  autoplaySpeed: 2500,
  cssEase: "linear",
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const CustomSlider = ({ logo }) => {
  return (
    <Slider {...settings}>
      {logo.map((x, index) => {
        return (
          <div
            key={index}
            className="hover:scale-[1.15] ease-out duration-300 cursor-pointer rounded-xl min-h-[150px] !flex justify-center items-center "
          >
            <img
              alt={x.repeatimage?.description}
              src={x.repeatimage.url}
              className="max-h-[120px] max-w-[120px]"
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default CustomSlider;
