import Gallery from "../Gallery/Gallery";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Reviews from "../Reviews/Reviews";
import MySlider from "../Slider/MySlider";
import SimpleSlider from "../Slider/MySlider";

const Home = () => {
  return (
    <div className="text-white">
      <MySlider />
      <PopularClasses></PopularClasses>
      <Gallery />
      <PopularInstructors></PopularInstructors>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
