import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// const spanStyle = {
//   padding: "20px",
//   background: "#efefef",
//   color: "#000000",
// };

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "100% 100%",
};
const slideImages = [
  {
    url: "https://i.ibb.co/54wPCJx/slider-1.jpg",
    caption: "Slide 3",
  },
  {
    url: "https://i.ibb.co/kSbFK9w/slider-4.jpg",
    caption: "Slide 1",
  },
];

const MySlider = () => {
  return (
    // <Carousel
    //   slideInterval={4000}
    //   className=" h-[calc(100dvh-30dvh)] lg:h-[calc(100dvh-10dvh)]"
    // >
    //   <img alt="slider-image-1" src={slider1} className="w-full h-full" />
    //   <img alt="slider-image-1" src={slider4} className="w-full h-full" />
    //   <img alt="slider-image-1" src={slider5} className="w-full h-full" />
    // </Carousel>
    <div className="slide-container max-w-screen-xl mx-auto">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
              className="h-[60dvh] md:h-[100dvh]"
            >
              {/* <span style={spanStyle}>{slideImage.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default MySlider;
