import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
    url: "https://cse.manarat.ac.bd/storage/slider/1633492828.png",
    caption: "Slide 3",
  },
  {
    url: "https://pharmacy.manarat.ac.bd/storage/slider/1634200905.gif",
    caption: "Slide 1",
  },
];

const MySlider = () => {
  useEffect(() => {
    AOS.init({ once: false });
    AOS.refresh();
  }, []);

  return (
    <div data-aos="flip-up">
      <div className="slide-container max-w-screen-xl mx-auto">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
                className="h-[60dvh] md:h-[90dvh]"
              >
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default MySlider;
