import { Carousel } from "flowbite-react";

const MySlider = () => {
  return (
    <Carousel slideInterval={4000} className=" h-[calc(100dvh-10dvh)] ">
      <img
        alt="slider-image-1"
        src="https://www.stmichaelsaldbourne.co.uk/wp-content/uploads/2023/06/IMG_5070-1170x500.jpg"
        className=" w-full h-full"
      />
      <img
        alt="slider-image-1"
        src="https://static.vecteezy.com/system/resources/thumbnails/012/001/389/large/soccer-template-design-football-banner-sport-layout-design-green-theme-vector.jpg"
        className=" w-full h-full"
      />
      <img
        alt="slider-image-1"
        src="https://media.istockphoto.com/id/1188462138/photo/variety-of-sport-accessories-on-wooden-surface.jpg?s=612x612&w=0&k=20&c=y2l7DYNkxbVteZy-Kx_adCzm-soTRbiEypje4j8ENe0="
        className=" w-full h-full"
      />
    </Carousel>
  );
};

export default MySlider;
