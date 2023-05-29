import Slider from "react-slick";

const settings = {
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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

const CustomSlider = () => {
  const data = [
    { image: "name", src: "/images/jkolioneers.png" },
    { image: "name", src: "/images/jkolioneers.png" },
    { image: "name", src: "/images/jkolioneers.png" },
    { image: "name", src: "/images/jkolioneers.png" },
    { image: "name", src: "/images/jkolioneers.png" },
    { image: "name", src: "/images/jkolioneers.png" },
    { image: "name", src: "/images/jkolioneers.png" },
    { image: "name", src: "/images/jkolioneers.png" },
    { image: "name", src: "/images/jkolioneers.png" },
    { image: "name", src: "/images/jkolioneers.png" },
    { image: "name", src: "/images/jkolioneers.png" },
    { image: "name", src: "/images/jkolioneers.png" },
    { image: "name", src: "/images/jkolioneers.png" },
    { image: "name", src: "/images/jkolioneers.png" },
    { image: "name", src: "/images/jkolioneers.png" },
    { image: "name", src: "/images/jkolioneers.png" },
    { image: "name", src: "/images/jkolioneers.png" },
    { image: "name", src: "/images/jkolioneers.png" },
  ];
  return (
    <Slider {...settings}>
      {data.map((x, index) => (
        <div
          key={`${index}-${x?.image}`}
          className="hover:scale-[1.15] ease-out duration-300 cursor-pointer"
        >
          <img alt={x.image} src={x?.src} className="p-4" />
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
