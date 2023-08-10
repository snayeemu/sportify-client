import { Carousel } from "flowbite-react";
import slider1 from "../../../assets/slider-images/slider-1.jpeg";
import slider4 from "../../../assets/slider-images/slider-4.jpeg";
import slider5 from "../../../assets/slider-images/slider-5.jpeg";

const MySlider = () => {
  return (
    <Carousel
      slideInterval={4000}
      className=" h-[calc(100dvh-30dvh)] lg:h-[calc(100dvh-10dvh)]"
    >
      <img alt="slider-image-1" src={slider1} className="w-full h-full" />
      <img alt="slider-image-1" src={slider4} className="w-full h-full" />
      <img alt="slider-image-1" src={slider5} className="w-full h-full" />
    </Carousel>
  );
};

export default MySlider;
