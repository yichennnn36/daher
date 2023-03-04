import Slider from "react-slick";

const settings = {
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 7,
  speed: 500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
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
        <div key={`${index}-${x?.image}`}>
          <img alt={x.image} src={x?.src} />
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
