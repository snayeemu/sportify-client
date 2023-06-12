import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MySlider.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="my-8">
        <Slider {...settings}>
          <div className="slider-1 h-[90vh]  text-center  bg-black bg-opacity-50 bg-blend-multiply">
            <h1 className="text-6xl relative top-1/3 text-yellow-600">
              Embrace the Spirit of Sportsmanship and Teamwork at our Summer
              Camp!
            </h1>
          </div>
          <div className="slider-2 h-[90vh]  text-center  bg-black bg-opacity-50 bg-blend-multiply">
            <h1 className="text-6xl relative top-1/3 text-yellow-600">
              Embrace the Spirit of Sportsmanship and Teamwork at our Summer
              Camp!
            </h1>
          </div>
        </Slider>
      </div>
    );
  }
}
