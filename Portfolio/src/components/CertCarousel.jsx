import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResponsiveWebDesign from "../assets/responsive.png";
import Javascript from "../assets/javascript.png";
import Slider from "react-slick";


const Slick = Slider?.default || Slider;


const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-white/20 backdrop-blur-md p-3 rounded-full shadow cursor-pointer hover:bg-white duration-200"
  >
    ▶
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-white/20 backdrop-blur-md p-3 rounded-full shadow cursor-pointer hover:bg-white duration-200 z-10"
  >
    ◀
  </div>
);



const CertCarousel = () => {
  const certificates = [
    { src: Javascript, url: "https://www.freecodecamp.org/certification/fcc4d6cb3d9-f136-4248-83b2-be2cabc0f9ad/javascript-algorithms-and-data-structures-v8"},
    { src: ResponsiveWebDesign, url: "https://www.freecodecamp.org/certification/fcc4d6cb3d9-f136-4248-83b2-be2cabc0f9ad/responsive-web-design" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-6">
     <Slick {...settings}>
        {certificates.map((c, index) => (
            <div key={index} className="px-6">
            <img
                src={c.src}
                alt={`Certificate ${index + 1}`}
                className="rounded-lg shadow-lg w-full max-h-[450px] object-contain transform duration-75 cursor-pointer hover:border-5 hover:border-[#2563EB]"
                onClick={() => window.open(c.url, "_blank")}
                title={c.url}
            />
            </div>
  ))}
</Slick>

    </div>
  );
};

export default CertCarousel;